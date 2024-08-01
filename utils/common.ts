import { format } from "date-fns";

export const fortmateDate = (date: any) => {
  const newDate = format(date, "MMMM dd, yyyy");
  return newDate;
};

export const DUMMY_ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
