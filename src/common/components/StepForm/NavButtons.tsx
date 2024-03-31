"use client";
import { setCurrentStep } from "@/redux/slices/checkoutSlice";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

const NavButtons = (props: Props) => {
  const currentStep = useSelector((state: any) => state.checkout.currentStep);
  const dispatch = useDispatch();
  const handlePreviousStep = () => {
    dispatch(setCurrentStep(currentStep - 1));
  };

  const handleNextStep = () => {
    dispatch(setCurrentStep(currentStep + 1));
  };
  return (
    <div className="flex justify-between items-center">
      {currentStep > 1 && (
        <button
          onClick={handlePreviousStep}
          type="button"
          className="inline-flex items-center px-6 py-3 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-slate-900 rounded-lg focus:ring-4 focus:ring-blue-200"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          <span>Previous</span>
        </button>
      )}
      <button
        type="submit"
        className="inline-flex items-center px-5 py-2 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-slate-900 rounded-lg focus:ring-4 focus:ring-blue-200"
      >
        <span>Next</span>
        <ChevronRight className="w-5 h-5 ml-2" />
      </button>
    </div>
  );
};

export default NavButtons;
