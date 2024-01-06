"use client";
import React from "react";
import FormInput from "@/src/common/components/Form/FormInput";
import FormHeader from "@/src/common/components/FormHeader";
import ImageInput from "@/src/common/components/ImageInput";
import { useForm } from "react-hook-form";
import SubmitButton from "@/src/common/components/SubmitButton";
type Props = {};

//  Todo : ImageInput belum masuk ke database, create API

const NewCategories = (props: Props) => {
  const [imageUrl, setImageUrl] = React.useState("");
  const {
    register,
    reset,
    formState: { isSubmitted, errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(isSubmitted);

    console.log(data);
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
            name="categoryName"
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
          isLoading={isSubmitted}
          buttonTitle="Create Categories"
          LoadingButtonTitle="Create Categories please wait..."
        />
      </form>
    </div>
  );
};

export default NewCategories;
