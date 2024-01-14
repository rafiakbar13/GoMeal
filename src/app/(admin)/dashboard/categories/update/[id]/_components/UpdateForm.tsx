"use client";
import React from "react";
import FormInput from "@/src/common/components/Form/FormInput";
import FormHeader from "@/src/common/components/FormHeader";
import ImageInput from "@/src/common/components/ImageInput";
import { useForm } from "react-hook-form";
import SubmitButton from "@/src/common/components/SubmitButton";
import {
  CreateCategoriesSchema,
  CreateCategoriesSchemaType,
} from "@/src/common/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { putRequest } from "@/src/common/lib/api";
import { useParams, useRouter } from "next/navigation";
import { getData } from "@/src/common/lib/getData";

const UpdateCategoriesForm = ({ categories }: any) => {
  const { id } = useParams();
  const category = categories.filter((category: any) => category.id === id);
  const [imageUrl, setImageUrl] = React.useState(category[0].image);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const router = useRouter();

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: category[0],
  });

  const onSubmit = (data: any) => {
    data.image = imageUrl;
    putRequest({
      setLoading: setIsLoading,
      endpoint: `api/categories/${id}`,
      data,
      reset,
      resourceName: "categories",
      redirect() {
        router.push("/dashboard/categories");
      },
    });
  };
  /*
    - This page is for the admin to manage categories
    - name
    - image
    - jumlah food yang ada di category tersebut (relasi dengan food)
    - edit
    - delete
*/

  return (
    <div className="w-full p-10">
      <FormHeader title="Update Categories" />

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
            defaultValue={category[0].name}
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
          buttonTitle="Update Categories"
          LoadingButtonTitle="Update Categories please wait..."
        />
      </form>
    </div>
  );
};

export default UpdateCategoriesForm;
