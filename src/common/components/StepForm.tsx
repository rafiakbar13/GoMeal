import React from "react";
import { render } from "react-dom";
import PersonalDetailsForm from "./StepForm/PersonalDetailsForm";
import ShippingForm from "./StepForm/ShippingForm";
import PaymentMethodForm from "./StepForm/PaymentMethodForm";
import OrderSummaryForm from "./StepForm/OrderSummary";

type Props = {};

const StepForm = (props: Props) => {
  const currentStep = 1;
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
