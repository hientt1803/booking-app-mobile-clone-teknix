import { format } from "date-fns";

export const fortmateDate = (date: any) => {
  const newDate = format(date, "MMMM dd, yyyy");
  return newDate;
};

export const daysBetweenUTC = (startDate: Date, endDate: Date) => {
  const oneDay = 1000 * 60 * 60 * 24;
  const startUTC = Date.UTC(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate()
  );
  const endUTC = Date.UTC(
    endDate.getFullYear(),
    endDate.getMonth(),
    endDate.getDate()
  );
  return Math.floor((endUTC - startUTC) / oneDay);
};

export const formatCurrency = (value: number = 0) => {
  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return USDollar.format(value);
};

export const DUMMY_ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
