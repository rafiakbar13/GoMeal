import CartBanner from "@/common/components/CartBanner";
import StepForm from "@/common/components/StepForm";
import Steps from "@/common/components/Steps";
import React from "react";

type Props = {};

const Checkout = (props: Props) => {
  const steps = [
    "Personal Details",
    "Shipping Details",
    "Payment Method",
    "Order Summary",
  ];
  return (
    <div>
      <div className="max-w-3xl mx-auto my-6 border border-primary p-6">
        {/* STEPS */}
        <Steps steps={steps} />
        <div className="w-full p-4 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
          {/* Banner */}
          <CartBanner />
        </div>
        {/* FORM */}
        <StepForm />
      </div>
    </div>
  );
};

export default Checkout;
