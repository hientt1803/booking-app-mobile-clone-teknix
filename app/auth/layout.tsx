import { AuthenLayout } from "@/layouts/authentication-layout";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <AuthenLayout>{children}</AuthenLayout>;
};

export default AuthLayout;
