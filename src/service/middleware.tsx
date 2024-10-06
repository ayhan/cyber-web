import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { parseCookies } from "nookies";
import { toast } from "sonner";

const cookies = parseCookies();

const errorHandler = (error: any) => {
  toast.error("Error", {
    description: error.response.data.error,
    closeButton: true,
    position: "top-right",
  });
};

const successHandler = (response: AxiosResponse) => {
  console.log("🔥 ~ response:", response);
};

const API = axios.create({
  baseURL: "?",
  timeout: 8000,
});

API.interceptors.request.use(
  (request: InternalAxiosRequestConfig) => {
    request.headers.Authorization = `Bearer ${cookies?.access_token}`;
    return request;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  (response: AxiosResponse) => {
    successHandler(response);
    return response;
  },
  (error: AxiosError) => {
    errorHandler(error);
    return Promise.reject(error);
  }
);

export default API;
