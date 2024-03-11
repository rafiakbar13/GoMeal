"use client";
import React from "react";
import { Form, useForm } from "react-hook-form";
import FormInput from "../Form/FormInput";
import NavButtons from "./NavButtons";
import { CircleIcon, Truck } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  UpdateCheckoutData,
  setCurrentStep,
} from "@/redux/slices/checkoutSlice";

type Props = {};

const ShippingDetailForm = (props: Props) => {
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
  const initialShippingCost = existingFormData.shippingCost || "";
  const [shippingCost, setShippingCost] = React.useState(initialShippingCost);
  const onSubmit = (data: any) => {
    data.shippingCost = shippingCost;
    dispatch(UpdateCheckoutData(data));
    dispatch(setCurrentStep(currentStep + 1));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="font-semibold text-lg mb-4">Shipping Details</h2>
      <div className="grid grid-cols-2">
        <FormInput
          label="Street Address"
          name="streetAddress"
          register={register}
          required
          errors={errors}
        />
        <FormInput
          label="City"
          name="city"
          register={register}
          required
          errors={errors}
        />
        <FormInput
          label="District"
          name="district"
          register={register}
          required
          errors={errors}
        />
        {/* Shipping cost */}
        <div className="col-span-full">
          <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
            Shipping Cost
          </h3>
          <ul className="grid w-full gap-6 md:grid-cols-2">
            <li>
              <input
                type="radio"
                id="hosting-small"
                name="shippingCost"
                value="10000"
                className="hidden peer"
                required
                onChange={(e) => setShippingCost(e.target.value)}
              />
              <label
                htmlFor="hosting-small"
                className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                {/* Design */}
                <div className="flex gap-2 items-center">
                  <Truck className="w-8 h-8 ms-3 flex-shrink-0" />
                  <div className="">
                    <p>UPS</p>
                    <p>Delivery Cost: 10.000</p>
                  </div>
                </div>
                <CircleIcon className="w-5 h-5 ms-3 flex-shrink-0 " />
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="hosting-big"
                name="shippingCost"
                value="20000"
                className="hidden peer"
                required
                onChange={(e) => setShippingCost(e.target.value)}
              />
              <label
                htmlFor="hosting-big"
                className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="flex gap-2 items-center">
                  <Truck className="w-8 h-8 ms-3 flex-shrink-0" />
                  <div className="">
                    <p>UPS</p>
                    <p>Delivery Cost: 15.000</p>
                  </div>
                </div>
                <CircleIcon className="w-5 h-5 ms-3 flex-shrink-0 " />
              </label>
            </li>
          </ul>
        </div>
      </div>
      <NavButtons />
    </form>
  );
};

export default ShippingDetailForm;
