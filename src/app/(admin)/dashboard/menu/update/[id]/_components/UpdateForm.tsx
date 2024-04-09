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
import { putRequest } from "@/common/lib/api";
import { useParams, useRouter } from "next/navigation";
import SelectInput from "@/common/components/Form/SelectInput";

const UpdateMenuForm = ({ food, categories }: any) => {
  const { id } = useParams();
  const menu = food.filter((menu: any) => menu.id === id);
  const [imageUrl, setImageUrl] = React.useState(menu[0].image);
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
    data.price = parseInt(data.price, 10);
    putRequest({
      setLoading: setIsLoading,
      endpoint: `api/menu/${id}`,
      data,
      reset,
      resourceName: "categories",
      redirect() {
        router.push("/dashboard/menu");
      },
    });
  };

  return (
    <div className="w-full p-10">
      <FormHeader title="Update Menu" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          <FormInput
            label="Food Name"
            errors={errors}
            register={register}
            name="name"
            className="w-full"
            type="text"
            defaultValue={menu[0].name}
          />
          <FormInput
            label="Price"
            errors={errors}
            register={register}
            name="price"
            type="number"
            className="w-full"
            defaultValue={menu[0].price}
          />
          <FormInput
            label="Description"
            errors={errors}
            register={register}
            name="description"
            className="w-full"
            type="text"
            defaultValue={menu[0].description}
          />
          <SelectInput
            label="Select Categories"
            name="categories"
            errors={errors}
            options={categories}
            className="w-full"
            register={register}
            defaultValue={menu[0].categories}
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
          buttonTitle="Update Menu"
          LoadingButtonTitle="Update Menu please wait..."
        />
      </form>
    </div>
  );
};

export default UpdateMenuForm;
