import React from "react";
import { BookingSuccessBody } from "./components/body";
import { BookingSuccessHeader } from "./components/header";

export const BookingSuccessContainer = () => {
  return (
    <React.Fragment>
      <BookingSuccessHeader />
      <BookingSuccessBody />
    </React.Fragment>
  );
};
