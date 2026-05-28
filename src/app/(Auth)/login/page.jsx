"use client";

import { authClient } from "@/lib/auth-client";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { Button, toast } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,

    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userData = {
      email: data.email,
      password: data.password,
      rememberMe: data.rememberMe,
    };

    const { data: authData, error } = await authClient.signIn.email({
      email: userData.email,
      password: userData.password,
      rememberMe: userData.rememberMe,
    });

    if (authData) {
      toast.success("login successful!");
      router.push("/");
    }

    if (error) {
      toast.danger(`${error.message}`);
    }

    reset();
  };

  return (
    <div className="max-w-330 px-3 mx-auto my-34">
      <div className="text-center">
        <h2 className="font-semibold text-2xl md:text-3xl">
          Welcome Back, Hire loop!
        </h2>
        <p className="mt-2">Sign in to reconnect with hire loop.</p>
      </div>

      <div className="mt-8 border p-4 rounded-md max-w-130 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* email */}
          <div>
            <label className="font-medium text-lg block">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="px-1.5 py-1 border rounded-md w-full"
              {...register("email", { required: "Email is required." })}
            />

            {errors.email && (
              <p className="text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/* password */}
          <div>
            <label className="font-medium text-lg block">Password</label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className=" px-1.5 py-1 border rounded-md w-full"
                {...register("password", {
                  required: "Password is required.",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters.",
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z]).+$/,
                    message:
                      "Password must contain one uppercase and one lowercase letter.",
                  },
                })}
              />

              {/* eye of or on */}
              <button
                className="absolute top-[50%] translate-y-[-50%] right-2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <Eye></Eye> : <EyeSlash></EyeSlash>}
              </button>
            </div>

            {errors.password && (
              <p className="text-sm text-red-600">{errors.password.message}</p>
            )}
          </div>

          {/* remember check box */}
          <div>
            <input
              type="checkbox"
              id="rememberMe"
              {...register("rememberMe")}
            />
            <label htmlFor="rememberMe" className="ml-1">
              Remember Me
            </label>
          </div>

          {/* submit */}
          <div>
            <Button
              type="submit"
              className="w-full bg-[#5C53FE] text-white rounded-md"
            >
              Login
            </Button>
          </div>
        </form>

        <p className="text-center my-3">Or</p>

        <Button variant="outline" className={"w-full rounded-md"}>
          <FcGoogle /> Login With Google
        </Button>

        <div className="text-center mt-4">
          <p>
            If you do not have Account |{" "}
            <Link href={"/signup"} className="text-[#5C53FE] font-semibold">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
