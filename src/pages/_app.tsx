import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import type { SWRConfiguration } from "swr";
import { SWRConfig } from "swr";
import fetcher from "@/service/fetcher";
import AuthProvider from "@/context/auth";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const swrOptions: SWRConfiguration = {
  fetcher,
  errorRetryCount: 0,
  revalidateOnFocus: false,
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <SWRConfig
        value={{
          ...swrOptions,
        }}
      >
        <AuthProvider>
          <div
            className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)]`}
          >
            <Component {...pageProps} />
          </div>
        </AuthProvider>
      </SWRConfig>
    </ThemeProvider>
  );
}
