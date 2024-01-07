import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { set } from "zod";

interface MakeRequestParams {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  endpoint: string;
  data: Record<string, any>;
  resourceName: string;
  reset?: () => void;
  redirect?: () => void;
}

export const postRequest = async ({
  setLoading,
  endpoint,
  data,
  resourceName,
  reset,
  redirect,
}: MakeRequestParams) => {
  try {
    setLoading(true);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await axios.post(`${baseUrl}/${endpoint}`, data);
    if (response.status === 201) {
      toast.success(`${resourceName} created successfully`);
      reset && reset();
      redirect && redirect();
    } else {
      setLoading(false);
      toast.error(response.data.message);
    }
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
};
