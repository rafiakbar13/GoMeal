"use client";
import React from "react";
import SignupImg from "@images/images/Signup.webp";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { SignupSchema, SignupSchemaType } from "@/common/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { Button } from "@/common/components/ui/button";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { postRequest } from "@/common/lib/api";
import FormInput from "@/common/components/Form/FormInput";
import SubmitButton from "@/common/components/SubmitButton";
const RegisterPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupSchemaType>({
    resolver: zodResolver(SignupSchema),
  });

  const onSubmit = async (data: SignupSchemaType) => {
    console.log(data);
    try {
      await postRequest({
        setLoading: () => {},
        endpoint: "api/register",
        data,
        resourceName: "User",
        reset: () => {},
        redirect: () => router.push("/verify-email"),
      });
    } catch (error) {
      console.log(error);
      toast.error("Sign Up Failed");
    }
  };

  return (
    <section className="w-5/6 mx-auto">
      <div className="w-12/12 flex justify-between items-center gap-x-4">
        <div className="w-6/12">
          <Image src={SignupImg} alt="Sign Up" className="" />
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
            savor the delicious world of diverse cuisines
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-y-5"
          >
            <div className="flex items-center border-b-[1px]">
              <AiOutlineUser size={20} className="mr-2 " />
              <FormInput
                label="Fullname"
                errors={errors}
                register={register}
                name="fullname"
                className="w-full focus:outline-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-transparent focus-visible:ring-transparent border-none"
              />
            </div>
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

            <SubmitButton
              isLoading={isSubmitting}
              buttonTitle="Sign Up"
              LoadingButtonTitle="Sign Up please wait..."
            />
            <div>
              <p className="text-center mt-5 ">
                Already have an account?{" "}
                <Link href="/sign-in" className="font-semibold text-secondary">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
