"use client";
import React from "react";
import FormInput from "@/common/components/Form/FormInput";
import FormHeader from "@/common/components/FormHeader";
import ImageInput from "@/common/components/ImageInput";
import { useForm } from "react-hook-form";
import SubmitButton from "@/common/components/SubmitButton";
import {
  CreateCategoriesSchema,
  CreateCategoriesSchemaType,
} from "@/common/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { postRequest } from "@/common/lib/api";
import { useRouter } from "next/navigation";

const NewCategories = () => {
  const [imageUrl, setImageUrl] = React.useState("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const router = useRouter();
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data: any) => {
    data.image = imageUrl;

    postRequest({
      setLoading: setIsLoading,
      endpoint: "api/categories",
      data,
      reset,
      resourceName: "categories",
      redirect() {
        router.push("/dashboard/categories");
      },
    });
  };

  return (
    <div className="w-full p-10">
      <FormHeader title="New Menu" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          <FormInput
            label="Name Category"
            errors={errors}
            register={register}
            name="name"
            className="w-full"
            type="text"
          />
          <ImageInput
            label="Menu Image"
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="MenuImageUpload"
          />
        </div>
        <SubmitButton
          isLoading={isLoading}
          buttonTitle="Create Categories"
          LoadingButtonTitle="Create Categories please wait..."
        />
      </form>
    </div>
  );
};

export default NewCategories;
