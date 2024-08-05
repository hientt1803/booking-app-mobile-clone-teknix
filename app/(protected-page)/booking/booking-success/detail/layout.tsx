import { MainLayout } from "@/layouts/main-layout";
import React from "react";

const BookingDetailLayout = ({ children }: { children: React.ReactNode }) => {
  return <MainLayout>{children}</MainLayout>;
};

export default BookingDetailLayout;
