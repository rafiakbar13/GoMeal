"use client";
import React from "react";
import SignInpImg from "@/public/images/Login.jpg";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { LoginSchema, LoginSchemaType } from "@/src/common/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { Button } from "@/src/common/components/ui/button";
import Link from "next/link";
// import { API } from '@/src/services'
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import axios from "axios";
import FormInput from "@/src/common/components/Form/FormInput";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = async (data: LoginSchemaType) => {
    console.log(data);
    try {
      const loginData = await signIn("credentials", {
        ...data,
        redirect: false,
      });
      console.log(loginData);
      if (loginData?.error) {
        toast.error("Invalid Credentials");
      } else {
        toast.success("Logged In Successfully");
      }
      reset();
      router.push("/onboard");
    } catch (error) {
      console.error(error);

      toast.error("its seems there is an error");
    }
  };

  return (
    <section className="w-5/6 mx-auto">
      <div className="w-12/12 flex justify-between items-center gap-x-4">
        <div className="w-6/12">
          <Image src={SignInpImg} alt="Sign Up" />
        </div>
        <div className="w-6/12 space-y-4 ">
          <h1 className="text-secondary text-5xl font-semibold">
            Hi, Welcome to{" "}
            <Link href="/" className="text-black">
              GoMeal
            </Link>
            <span className="text-primary">.</span>
          </h1>
          <p className="text-gray-400">
            Sign in to your Go-Meal account to continue your culinary journey
          </p>
          <form className="flex flex-col gap-y-5">
            <label htmlFor="email" className="text-base tracking-wide">
              Email
            </label>
            <div className="flex items-center border-b-[1px]">
              <AiOutlineMail size={20} className="mr-2" />
              <FormInput
                label="Email"
                errors={errors}
                register={register}
                name="email"
                className="w-full focus:outline-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-transparent focus-visible:ring-transparent border-none"
              />
            </div>

            <div className="flex items-center border-b-[1px]">
              <RiLockPasswordLine size={20} className="mr-2" />
              <FormInput
                label="Password"
                errors={errors}
                register={register}
                name="password"
                className="w-full focus:outline-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-transparent focus-visible:ring-transparent border-none"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <Button className="w-full shadow-primary shadow-sm">Sign In</Button>
            <div>
              <p className="text-center mt-5 text-gray-400">
                Not registered yet?{" "}
                <Link href="/sign-up" className="font-semibold text-secondary">
                  Create an account
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
