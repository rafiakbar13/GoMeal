import { toast } from "sonner";
import axios, { AxiosResponse } from "axios";
export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;

interface MakeRequestParams {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  endpoint: string;
  data: Record<string, any>;
  resourceName?: string;
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

export const putRequest = async ({
  setLoading,
  endpoint,
  data,
  resourceName,
  reset,
  redirect,
}: MakeRequestParams) => {
  try {
    setLoading(true);
    const response = await axios.put(`${baseUrl}/${endpoint}`, data);
    if (response.status === 200) {
      toast.success(`${resourceName} updated successfully`);
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

export const deleteRequest = async ({
  setLoading,
  endpoint,
  resourceName,
  redirect,
}: MakeRequestParams) => {
  try {
    setLoading(true);
    const response = await axios.delete(`${baseUrl}/${endpoint}`);
    if (response.status === 200) {
      toast.success(`${resourceName} deleted successfully`);
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

/**
 * Fetches data from the specified endpoint.
 *
 * @param endpoint - The endpoint to fetch data from.
 * @returns A Promise that resolves to the fetched data.
 * @throws If there is an error during the fetch.
 */
export const getData = async (endpoint: string): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await axios.get(
      `${baseUrl}/api/${endpoint}`
    );
    return response.data;
  } catch (error: any) {
    console.log(error);
  }
};
