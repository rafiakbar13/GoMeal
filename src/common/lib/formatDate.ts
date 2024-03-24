import { format } from "date-fns";

export const formatDate = (date: Date) => {
  return format(new Date(date), "dd MMM yyyy hh:mm aaaa");
};
