import { MainLayout } from "@/layouts/main-layout";
import React from "react";

const CancleBookingLayout = ({ children }: { children: React.ReactNode }) => {
  return <MainLayout>{children}</MainLayout>;
};

export default CancleBookingLayout;
