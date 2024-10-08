import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useAuth } from "@/context/auth";
import { useRouter } from "next/router";
import Logo from "@/components/logo";
import Link from "next/link";

const Login = () => {
  const { Login } = useAuth();
  const router = useRouter();
  const { query } = router;

  const FormSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(2, {
      message: "Password must be at least 2 characters.",
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: query.username ? query.username.toString() : "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    Login(data);
  }

  return (
    <main className="h-screen flex items-center justify-items-center relative">
      <Logo
        width={640}
        className="absolute left-1/2 top-1/2 transform -translate-x-[75%] -translate-y-1/2 -z-10 opacity-25"
      ></Logo>
      <Card className="mx-auto max-w-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>
            Enter your email and password to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input
                          id="username"
                          type="username"
                          placeholder="username"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          id="password"
                          type="password"
                          placeholder="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </form>
            </Form>
          </div>
        </CardContent>
        <CardFooter>
          <div className="">
            <span className="text-sm text-muted-foreground">
              If you dont have any account go to
            </span>
            <Link
              className="text-sm underline cursor-pointer"
              href={"/register"}
            >
              <Button variant="link" className="pl-1">
                Register
              </Button>
            </Link>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
};
export default Login;
