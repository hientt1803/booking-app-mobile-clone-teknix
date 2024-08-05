import { AuthenLayout } from "@/layouts/authentication-layout";
import React from "react";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return <AuthenLayout>{children}</AuthenLayout>;
};

export default ProtectedLayout;
