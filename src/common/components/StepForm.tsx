"use client";
import React, { useEffect } from "react";
import PersonalDetailsForm from "./StepForm/PersonalDetailsForm";
import ShippingForm from "./StepForm/ShippingForm";
import PaymentMethodForm from "./StepForm/PaymentMethodForm";
import OrderSummaryForm from "./StepForm/OrderSummary";
import { useSelector } from "react-redux";
import { getData } from "../lib/getData";
import { useSession } from "next-auth/react";
import { DefaultSession } from "next-auth";
interface SessionProps extends DefaultSession {
  user: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
    id: string | null | undefined;
  };
}

const StepForm = () => {
  const currentStep = useSelector((state: any) => state.checkout.currentStep);
  const { data: session, status } = useSession();
  const [userDetails, setUserDetails] = React.useState({} as any);
  const userId = session?.user?.id;

  const user = async () => {
    try {
      const response = await getData(`user/${userId}`);
      setUserDetails(response);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    if (userId) {
      user();
    }
  }, [userId]);

  // const currentStep = 4;
  function renderFormByStep(step: number) {
    if (step === 1) {
      return <PersonalDetailsForm user={userDetails} />;
    } else if (step === 2) {
      return <ShippingForm user={userDetails} />;
    } else if (step === 3) {
      return <PaymentMethodForm user={userDetails} />;
    } else if (step === 4) {
      return <OrderSummaryForm />;
    }
  }
  return <div>{renderFormByStep(currentStep)}</div>;
};

export default StepForm;
