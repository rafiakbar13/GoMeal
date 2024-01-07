"use client";
import React from "react";
import FormInput from "@/src/common/components/Form/FormInput";
import SelectInput from "@/src/common/components/Form/SelectInput";
import FormHeader from "@/src/common/components/FormHeader";
import ImageInput from "@/src/common/components/ImageInput";
import { useForm } from "react-hook-form";
import SubmitButton from "@/src/common/components/SubmitButton";
import { getData } from "@/src/common/lib/categories-service";
type Props = {};

const NewMenu = (props: Props) => {
  const [imageUrl, setImageUrl] = React.useState("");
  const [categories, setCategories] = React.useState<any[]>([]);
  const {
    register,
    reset,
    formState: { isSubmitted, errors },
    handleSubmit,
  } = useForm();

  const fetchCategories = async () => {
    const categories = await getData("categories");
    setCategories(categories);
  };

  React.useEffect(() => {
    fetchCategories();
  }, []);

  const onSubmit = (data: any) => {
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

  const Categories = [
    {
      id: "1",
      name: "Chicken",
    },
    {
      id: "2",
      name: "Burger",
    },
    {
      id: "3",
      name: "Bakery",
    },
  ];

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
          isLoading={isSubmitted}
          buttonTitle="Create Menu"
          LoadingButtonTitle="Create Menu please wait..."
        />
      </form>
    </div>
  );
};

export default NewMenu;
