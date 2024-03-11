"use client";
import React from "react";
import PersonalDetailsForm from "./StepForm/PersonalDetailsForm";
import ShippingForm from "./StepForm/ShippingForm";
import PaymentMethodForm from "./StepForm/PaymentMethodForm";
import OrderSummaryForm from "./StepForm/OrderSummary";
import { useSelector } from "react-redux";

type Props = {};

const StepForm = (props: Props) => {
  const currentStep = useSelector((state: any) => state.checkout.currentStep);
  // const currentStep = 4;
  function renderFormByStep(step: number) {
    if (step === 1) {
      return <PersonalDetailsForm />;
    } else if (step === 2) {
      return <ShippingForm />;
    } else if (step === 3) {
      return <PaymentMethodForm />;
    } else if (step === 4) {
      return <OrderSummaryForm />;
    }
  }
  return <div>{renderFormByStep(currentStep)}</div>;
};

export default StepForm;
