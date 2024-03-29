"use client";
import React, { useState } from "react";
import Profile from "@images/images/Profile.png";
import { BiSolidPencil } from "react-icons/bi";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { SettingSchema, SettingSchemaType } from "@/common/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/common/components/ui/button";
import FormInput from "@/common/components/Form/FormInput";
import { User } from "@prisma/client";
import axios from "axios";
import { toast } from "sonner";

const Settings = ({ user }: { user: User }) => {
  const [avatar, setAvatar] = useState<string | ArrayBuffer | null>(null); string or ArrayBuffer
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]; 
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        setAvatar(event.target?.result as string | ArrayBuffer | null); // Set avatar to the result of FileReader.readAsDataURL, which is a string
      };
      reader.readAsDataURL(selectedFile); // Read file as a data URL
    }
  };

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    if (avatar) {
      // If avatar is not null, append it to the formData
      formData.append("image", avatar.toString()); // Convert avatar from ArrayBuffer to string before appending
    }
    formData.append("fullname", data.fullname);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("address", data.address);

    try {
      const response = await axios.patch(`/api/user/${user.id}`, formData);
      console.log(response);

      if (response.status === 200) {
        toast.success("User Updated Successfully");
      }
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
    console.log(data);
  };

  return (
    <section className="m-10 flex flex-col items-center justify-center h-screen">
      {/* Profile */}
      <form
        className="flex items-center gap-x-10 justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="avatar" className="relative cursor-pointer">
          <Image
            src={avatar ? String(avatar) : user.image ? user.image : Profile} // Convert avatar to string using String() before assigning it to src
            alt=""
            width={80}
            height={80}
            className="shadow-sm rounded-full shadow-primary"
          />
          <input
            {...register("image", {
              required: true,
            })}
            type="file"
            id="customFile"
            onChange={handleAvatar}
            accept=".jpg, .png, .jpeg"
            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div className="absolute p-1 text-sm transform translate-x-16 -translate-y-6 bg-primary border border-gray-400 rounded-full">
            <BiSolidPencil className="text-xs text-white" />
          </div>
        </label>
        <div>
          <h1 className="font-semibold text-lg leading-10">{user.fullname}</h1>
          <span>{user.email}</span>
        </div>

        {/* Form */}
        <div className="grid grid-cols-2 w-full items-center gap-x-6 mx-auto gap-y-10 mt-10">
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

          <Button className="text-white py-[15px] px-[35px] rounded-md mt-4 w-full shadow">
            Save Changes
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Settings;
