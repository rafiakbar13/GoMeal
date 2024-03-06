"use client";
import React from "react";
import { Form, useForm } from "react-hook-form";
import FormInput from "../Form/FormInput";
import NavButtons from "./NavButtons";

type Props = {};

const PersonalDetailsForm = (props: Props) => {
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="font-semibold text-lg mb-4">Personal Details</h2>
      <div className="grid grid-cols-2">
        <FormInput
          label="First Name"
          name="firstName"
          register={register}
          required
          errors={errors}
        />
        <FormInput
          label="Last Name"
          name="lastName"
          register={register}
          required
          errors={errors}
        />
        <FormInput
          label="Email Address"
          name="email"
          type="email"
          register={register}
          required
          errors={errors}
        />
        <FormInput
          label="Phone Number"
          name="phone"
          register={register}
          required
          errors={errors}
        />
      </div>
      <NavButtons />
    </form>
  );
};

export default PersonalDetailsForm;
