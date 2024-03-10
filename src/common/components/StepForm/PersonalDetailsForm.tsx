"use client";
import React from "react";
import { Form, useForm } from "react-hook-form";
import FormInput from "../Form/FormInput";
import NavButtons from "./NavButtons";
import { useDispatch, useSelector } from "react-redux";
import {
  UpdateCheckoutData,
  setCurrentStep,
} from "@/redux/slices/checkoutSlice";
import { stat } from "fs";
import { useSession } from "next-auth/react";

type Props = {};

const PersonalDetailsForm = (props: Props) => {
  const { data: session, status } = useSession();
  const userId = session?.user?.id;
  const dispatch = useDispatch();
  const currentStep = useSelector((state: any) => state.checkout.currentStep);
  const existingFormData = useSelector(
    (state: any) => state.checkout.checkoutData
  );
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...existingFormData,
    },
  });

  const onSubmit = (data: any) => {
    data.userId = userId;
    // Update the chcekout state with the personal details
    dispatch(UpdateCheckoutData(data));
    dispatch(setCurrentStep(currentStep + 1));
  };
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
