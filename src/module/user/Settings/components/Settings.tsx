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
import FormInput from "@/common/components/Form/FormInput";
import { User } from "@prisma/client";

const Settings = ({ user }: { user: User }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SettingSchemaType>({
    resolver: zodResolver(SettingSchema),
  });

  const onSubmit = (data: SettingSchemaType) => {
    console.log(data);
  };
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
          <span>{user.email}</span>
        </div>
      </article>
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 w-full items-center gap-x-6 mx-auto gap-y-10 mt-10"
      >
        <div className="mb-5">
          <FormInput
            label="Fullname"
            defaultValue={user.fullname}
            errors={errors}
            register={register}
            name="fullname"
            className="w-full focus:outline-none  border-none"
          />
        </div>
        <div className="mb-5">
          <FormInput
            label="Email"
            defaultValue={user.email}
            errors={errors}
            register={register}
            name="email"
            className="w-full focus:outline-none  border-none"
          />
        </div>
        <div className="mb-5">
          <FormInput
            label="Password"
            errors={errors}
            register={register}
            name="password"
            className="w-full focus:outline-none  border-none"
            type="password"
            placeholder="Enter your password"
          />
        </div>

        <div className="mb-5">
          <FormInput
            label="Address"
            errors={errors}
            register={register}
            name="address"
            className="w-full focus:outline-none border-none  "
          />
        </div>

        <Button
          type="button"
          className="text-white py-[15px] px-[35px] rounded-md mt-4 w-full shadow"
        >
          Save Changes
        </Button>
      </form>
    </section>
  );
};

export default Settings;
