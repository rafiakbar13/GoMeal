"use client";
import React from "react";
import { Form, useForm } from "react-hook-form";
import FormInput from "../Form/FormInput";
import NavButtons from "./NavButtons";
import {
  Banknote,
  CircleDollarSign,
  CircleIcon,
  CreditCard,
  Truck,
} from "lucide-react";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import {
  UpdateCheckoutData,
  setCurrentStep,
} from "@/redux/slices/checkoutSlice";
import { postRequest } from "@/common/lib/api";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type Props = {};

const PaymentMethodForm = (props: Props) => {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const currentStep = useSelector((state: any) => state.checkout.currentStep);
  const existingFormData = useSelector(
    (state: any) => state.checkout.checkoutData
  );
  const checkoutData = useSelector((state: any) => state.checkout.checkoutData);
  const cartItems = useSelector((state: any) => state.cart.cartItems);
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
  const initialPaymentMethod = existingFormData.paymentMethod || "";
  const [paymentMethod, setPaymentMethod] =
    React.useState(initialPaymentMethod);
  const onSubmit = async (data: any) => {
    data.paymentMethod = paymentMethod;
    // orderItems = cartItems;
    dispatch(UpdateCheckoutData(cartItems));
    const combinedData = {
      orderItems: cartItems,
      checkoutData,
    };
    console.log(combinedData);
    try {
      setLoading(true);
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const response = await axios.post(`${baseUrl}/api/orders`, data);
      if (response.status === 201) {
        toast.success(`Orders created successfully`);
        router.push("/order-confirmation");
      } else {
        setLoading(false);
        toast.error(response.data.message);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }

    dispatch(UpdateCheckoutData(data));
    dispatch(setCurrentStep(currentStep + 1));
    console.log(checkoutData);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="font-semibold text-lg mb-4">Payment Method</h2>
      <div className="grid grid-cols-2">
        {/* Shipping cost */}
        <div className="col-span-full">
          <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
            Choose Payment Method
          </h3>
          <ul className="grid w-full gap-6 md:grid-cols-2">
            <li>
              <input
                type="radio"
                id="cheap"
                name="shipping-cost"
                value="Cash On Delivery"
                className="hidden peer"
                required
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label
                htmlFor="hosting-small"
                className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                {/* Design */}
                <div className="flex gap-2 items-center">
                  <Banknote className="w-8 h-8 ms-3 flex-shrink-0" />
                  <p>Cash On Delivery</p>
                </div>
                <CircleIcon className="w-5 h-5 ms-3 flex-shrink-0 " />
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="expensive"
                name="GoMealPay"
                value="15"
                className="hidden peer"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label
                htmlFor="hosting-big"
                className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="flex gap-2 items-center">
                  <CircleDollarSign className="w-8 h-8 ms-3 flex-shrink-0" />
                  <p>GoMealPay</p>
                </div>
                <CircleIcon className="w-5 h-5 ms-3 flex-shrink-0 " />
              </label>
            </li>
          </ul>
        </div>
      </div>
      {loading ? (
        <Button disabled>Processing Please Wait...</Button>
      ) : (
        <Button type="submit" className="mt-5">
          Proceed to payment
        </Button>
      )}
      <NavButtons />
    </form>
  );
};

export default PaymentMethodForm;
