"use client";
import FormInput from "@/common/components/Form/FormInput";
import { Button } from "@/common/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { CiWallet } from "react-icons/ci";
import { toast } from "sonner";

const FormTopup = () => {
  const { handleSubmit, control, setValue } = useForm();
  const [isDisabled, setIsDisabled] = useState(true);
  const [nominal, setNominal] = useState(0);
  const { data: session, status } = useSession();

  if (status === "unauthenticated") return null;

  const handleSetNominal = (value: number) => {
    setValue("balance", value);
    setIsDisabled(false);
  };

  const TopupBalance = useMutation({
    mutationFn: (formData: { userId: string; balance: number }) => {
      return axios.post("/api/topup", formData);
    },
  });

  const onSubmit = (data: any) => {
    const formData = {
      userId: session?.user?.id,
      balance: parseInt(data.balance),
    };
    TopupBalance.mutate(formData);
    TopupBalance.isSuccess && toast.success("Topup Success");
  };

  return (
    <section className="mt-8">
      <p className="text-sm">Silahkan Masukan</p>
      <h2 className="mb-5 text-2xl font-semibold">Nominal Topup</h2>
      <div className="flex">
        <form className="w-auto" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center gap-3 p-2 mb-4 border-2 rounded-md">
            <CiWallet className="text-black" />
            <Controller
              name="balance"
              control={control}
              render={({ field }) => {
                return (
                  <input
                    {...field}
                    type="number"
                    className="w-full outline-none h-7"
                    placeholder="masukkan nominal Top Up"
                  />
                );
              }}
            />
          </div>
          <Button
            disabled={isDisabled}
            type="submit"
            className={
              isDisabled
                ? "w-full py-3 text-white bg-gray-400 rounded"
                : "w-full py-3 text-white bg-primary rounded"
            }
          >
            Top Up
          </Button>
        </form>
        <div className="grid w-1/4 grid-flow-col grid-rows-2 gap-3 ml-3">
          <div className="grid w-1/4 grid-flow-col grid-rows-2 gap-3 ml-3">
            <button
              onClick={() => handleSetNominal(10000)}
              className="w-full px-4 text-gray-400 border-2 rounded "
            >
              Rp.10.000
            </button>
            <button
              onClick={() => handleSetNominal(20000)}
              className="w-full px-4 text-gray-400 border-2 rounded "
            >
              Rp.20.000
            </button>
            <button
              onClick={() => handleSetNominal(50000)}
              className="px-4 text-gray-400 border-2 rounded "
            >
              Rp.50.000
            </button>
            <button
              onClick={() => handleSetNominal(100000)}
              className="px-4 text-gray-400 border-2 rounded "
            >
              Rp.100.000
            </button>
            <button
              onClick={() => handleSetNominal(250000)}
              className="px-4 text-gray-400 border-2 rounded "
            >
              Rp.250.0000
            </button>
            <button
              onClick={() => handleSetNominal(500000)}
              className="px-4 text-gray-400 border-2 rounded "
            >
              Rp.500.0000
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormTopup;

{
  /* <Controller
  name="balance"
  control={control}
  render={({ field }) => (
    <input
      {...field}
      type="number"
      className="w-full outline-none h-7"
      placeholder="masukkan nominal Top Up"
      value={nominal}
      onChange={(e) => {
        field.onChange(e.target.value);
      }}
    />
  )}
/>; */
}
