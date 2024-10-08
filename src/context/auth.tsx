import { useRouter } from "next/router";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import { createContext, FC, useContext, useEffect, useState } from "react";
import useSWR from "swr";

import { ACCESS_TOKEN } from "@/constants";
import { ILoginForm, IUser } from "@/types/user";
import API from "@/service/middleware";

interface IAuthContext {
  user: IUser | undefined;
  Login: (body: ILoginForm) => Promise<void>;
  Logout: () => void;
  Register: (body: ILoginForm) => Promise<void>;
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

  const { data: userInfo, error } = useSWR<IUser>(
    cookies?.access_token ? `/api/auth/profile` : null,
    {
      onError: (error) => {
        if (error.response.status === 403) {
          destroyCookie(null, ACCESS_TOKEN);
          router.push("/login");
        }
      },
    }
  );

  useEffect(() => {
    setUser(userInfo);
  }, [userInfo, error]);

  const Login = async (body: ILoginForm) => {
    try {
      const login = await API.post("/api/auth/login", body);

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

  const Register = async (body: ILoginForm) => {
    try {
      const response = await API.post("/api/auth/register", body);

      router.push(`/login?username=${response.data.username}`);

      return response;
    } catch (error: any) {
      return error.response;
    } finally {
      console.log("Finally Login");
    }
  };

  const Logout = () => {
    try {
      destroyCookie(null, ACCESS_TOKEN);
      router.push("/login");
    } finally {
      console.log("Logout Finally");
    }
  };

  return (
    <Auth.Provider
      value={{
        Login,
        Register,
        Logout,
        user,
      }}
    >
      {children}
    </Auth.Provider>
  );
};

export const useAuth = () => useContext(Auth) as IAuthContext;

export default AuthProvider;
