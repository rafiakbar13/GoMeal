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
import { convertCurrency } from "@/common/lib/convertCurrency";

type Props = {
  user: {
    balance: number;
  };
};

const PaymentMethodForm = ({ user }: Props) => {
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();
  const currentStep = useSelector((state: any) => state.checkout.currentStep);
  const cart = useSelector((state: any) => state.cart);
  const subtotal = cart.reduce((acc: number, item: any) => {
    return acc + item.price * item.qty;
  }, 0);
  const balance = user.balance;

  const existingFormData = useSelector(
    (state: any) => state.checkout.checkoutData
  );

  const {
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
    if (paymentMethod === "GoMealPay") {
      if (balance >= subtotal) {
        data.paymentMethod = paymentMethod;
        dispatch(UpdateCheckoutData(data));
        dispatch(setCurrentStep(currentStep + 1));
      } else {
        toast.error("Insufficient balance");
      }
    } else {
      data.paymentMethod = paymentMethod;
      dispatch(UpdateCheckoutData(data));
      dispatch(setCurrentStep(currentStep + 1));
    }
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
                id="COD"
                name="paymentMethod"
                value="Cash On Delivery"
                className="hidden peer"
                onChange={(e) => setPaymentMethod(e.target.value)}
                checked={paymentMethod === "Cash On Delivery"}
              />
              <label
                htmlFor="COD"
                className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="flex gap-2 items-center">
                  <Banknote className="w-8 h-8 ms-3 flex-shrink-0" />
                  <p>Cash On Delivery</p>{" "}
                </div>
                <CircleIcon className="w-5 h-5 ms-3 flex-shrink-0 " />
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="balance"
                name="paymentMethod"
                value="GoMealPay"
                className="hidden peer"
                onChange={(e) => setPaymentMethod(e.target.value)}
                checked={paymentMethod === "GoMealPay"}
              />
              <label
                htmlFor="balance"
                className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="flex flex-col items-center gap-y-3">
                  <div className="flex gap-2 items-center">
                    <CircleDollarSign className="w-8 h-8 ms-3 flex-shrink-0" />
                    <p>GoMealPay</p>
                  </div>
                  <span>Your Balance: {convertCurrency(balance)}</span>
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

export default PaymentMethodForm;
