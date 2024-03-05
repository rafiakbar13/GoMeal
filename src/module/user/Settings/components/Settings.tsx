"use client";
import React from "react";
import Profile from "@images/images/Profile.png";
import { BiSolidPencil } from "react-icons/bi";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { SettingSchema, SettingSchemaType } from "@/common/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/common/components/ui/input";
import { Label } from "@/common/components/ui/label";
import { Button } from "@/common/components/ui/button";
const Settings = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SettingSchemaType>({
    resolver: zodResolver(SettingSchema),
  });

  const onSubmit = (data: SettingSchemaType) => {};
  return (
    <section className="m-10 flex flex-col items-center justify-center h-screen">
      {/* Profile */}
      <article className="flex items-center gap-x-10 justify-center">
        <label htmlFor="avatar" className="relative cursor-pointer">
          <Image
            src={Profile}
            alt=""
            width={80}
            className="shadow-sm rounded-full shadow-primary"
          />
          <input
            type="file"
            id="avatar"
            className="outline-none h-7"
            accept="image/jpeg, image/png"
            hidden
          />
          <div className="absolute p-1 text-sm transform translate-x-16 -translate-y-6 bg-primary border border-gray-400 rounded-full">
            <BiSolidPencil className="text-xs text-white" />
          </div>
        </label>
        <div>
          <h1 className="font-semibold text-lg leading-10">Rafi</h1>
          <span>rafi@gmail.com</span>
        </div>
      </article>
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 w-full items-center gap-x-6 mx-auto gap-y-10 mt-10"
      >
        <div className="mb-5">
          <Label htmlFor="fullname" className="text-[14px]">
            Fullname
          </Label>
          <Input
            {...register("fullname")}
            type="text"
            placeholder="Fullname"
            className="w-full px-4 py-3 border border-solid border-gray-300 rounded-md text-[16px] text-primary-500 font-[400] focus:outline-none leading-7 placeholder:text-gray-300 cursor-pointer focus-visible:ring-1 focus-visible:ring-primary"
          />
          {errors.fullname?.message && (
            <p className="text-red-500 text-[14px]">{`${errors.fullname.message}`}</p>
          )}
        </div>
        <div className="mb-5">
          <Label htmlFor="email" className="text-[14px]">
            Email
          </Label>
          <Input
            {...register("email")}
            type="email"
            placeholder="Enter Your Email"
            className="w-full px-4 py-3 border border-solid border-gray-300 rounded-md text-[16px] text-primary-500 font-[400] focus:outline-none leading-7 placeholder:text-gray-300 cursor-pointer focus-visible:ring-1 focus-visible:ring-primary"
          />
          {errors.email?.message && (
            <p className="text-red-500 text-[14px]">{`${errors.email.message}`}</p>
          )}
        </div>
        <div className="mb-5">
          <Label htmlFor="password" className="text-[14px]">
            Password
          </Label>
          <Input
            {...register("password")}
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-solid border-gray-300 rounded-md text-[16px] text-primary-500 font-[400] focus:outline-none leading-7 placeholder:text-gray-300 cursor-pointer focus-visible:ring-1 focus-visible:ring-primary"
          />
          {errors.password?.message && (
            <p className="text-red-500 text-[14px]">{`${errors.password.message}`}</p>
          )}
        </div>

        <div className="mb-5">
          <Label htmlFor="phone" className="text-[14px]">
            Phone
          </Label>
          <Input
            {...register("phone")}
            type="tel"
            placeholder="018200141"
            className="w-full px-4 py-3 border border-solid border-gray-300 rounded-md text-[16px] text-primary-500 font-[400] focus:outline-none leading-7 placeholder:text-gray-300 cursor-pointer focus-visible:ring-1 focus-visible:ring-primary"
          />
          {errors.phone?.message && (
            <p className="text-red-500 text-[14px]">{`${errors.phone.message}`}</p>
          )}
        </div>

        <Button
          type="submit"
          className="text-white py-[15px] px-[35px] rounded-md mt-4 w-full shadow"
        >
          Save Changes
        </Button>
      </form>
    </section>
  );
};

export default Settings;
