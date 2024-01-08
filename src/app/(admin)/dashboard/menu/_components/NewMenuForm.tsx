"use client";
import React from "react";
import FormInput from "@/src/common/components/Form/FormInput";
import SelectInput from "@/src/common/components/Form/SelectInput";
import FormHeader from "@/src/common/components/FormHeader";
import ImageInput from "@/src/common/components/ImageInput";
import { useForm } from "react-hook-form";
import SubmitButton from "@/src/common/components/SubmitButton";
import { getData } from "@/src/common/lib/getData";
import { Category } from "@prisma/client";
import { postRequest } from "@/src/common/lib/api";
import { useRouter } from "next/navigation";
type Props = {
  categories: Category[];
};

const NewMenuForm = ({ categories }: Props) => {
  const router = useRouter();
  const [imageUrl, setImageUrl] = React.useState("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data: any) => {
    data.image = imageUrl;
    data.price = parseInt(data.price, 10);
    postRequest({
      setLoading: setIsLoading,
      endpoint: "api/menu",
      data,
      reset,
      resourceName: "Menu",
      redirect() {
        router.push("/dashboard/menu");
      },
    });
    console.log(data);
  };
  /*
    - This page is for the admin to manage menu
    - id
    - name
    - price
    - image
    - rating (only user can rate)
    - category
    - edit
    - delete
*/

  return (
    <div className="w-full p-10">
      <FormHeader title="New Menu" />

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
          />
          <FormInput
            label="Price"
            errors={errors}
            register={register}
            name="price"
            type="number"
            className="w-full"
          />
          <FormInput
            label="Description"
            errors={errors}
            register={register}
            name="description"
            className="w-full"
            type="text"
          />
          <SelectInput
            label="Select Categories"
            name="categories"
            errors={errors}
            options={categories}
            className="w-full"
            register={register}
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
          buttonTitle="Create Menu"
          LoadingButtonTitle="Create Menu please wait..."
        />
      </form>
    </div>
  );
};

export default NewMenuForm;
