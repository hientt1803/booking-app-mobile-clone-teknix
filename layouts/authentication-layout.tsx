import { AuthenHeader } from "@/components/layout";
import { AuthenFooter } from "@/components/layout/authe.footer";
import { IChildrenProps } from "@/types";
import React from "react";

export const AuthenLayout = ({ children }: IChildrenProps) => {
  return (
    <React.Fragment>
      <AuthenHeader />
      <div className="overflow-hidden">{children}</div>
      <AuthenFooter />
    </React.Fragment>
  );
};
