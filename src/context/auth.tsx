import { useRouter } from "next/router";
import { parseCookies, setCookie } from "nookies";
import { createContext, FC, useContext, useEffect, useState } from "react";
import useSWR from "swr";

import { ACCESS_TOKEN } from "@/constants";
import { ILoginForm, IUser } from "@/types/user";
import API from "@/service/middleware";

interface IAuthContext {
  user: IUser | undefined;
  login: (body: ILoginForm) => Promise<void>;
  logout: () => void;
}

export const Auth = createContext<IAuthContext | null>(null);

interface IProps {
  children: JSX.Element;
}

const AuthProvider: FC<IProps> = (props) => {
  const { children } = props;
  const cookies = parseCookies();
  const router = useRouter();

  const [user, setUser] = useState<IUser | undefined>();

  const { data: userInfo } = useSWR<IUser>(
    cookies?.access_token ? `http://localhost:8080/api/auth/profile` : null
  );

  useEffect(() => {
    setUser(userInfo);
  }, [userInfo]);

  const login = async (body: ILoginForm) => {
    try {
      const login = await API.post(
        "http://localhost:8080/api/auth/login",
        body
      );

      setCookie(null, ACCESS_TOKEN, login?.data.access_token, {
        path: "/",
        maxAge: 3600 * 1000 * 24 * 365,
      });

      router.push("/");

      return login;
    } catch (error: any) {
      return error.response;
    } finally {
      console.log("Finally Login");
    }
  };

  const logout = () => {
    try {
      document.cookie =
        ACCESS_TOKEN + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      router.push("/login");
    } finally {
      console.log("Logout Finally");
    }
  };

  return (
    <Auth.Provider
      value={{
        login,
        logout,
        user,
      }}
    >
      {children}
    </Auth.Provider>
  );
};

export const useAuth = () => useContext(Auth) as IAuthContext;

export default AuthProvider;
