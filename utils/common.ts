import { format } from "date-fns";

export const fortmateDate = (date: any) => {
  const newDate = format(date, "MMMM dd, yyyy");
  return newDate;
};
