import { MainFooter, MainHeader } from "@/components/layout";
import { IChildrenProps } from "@/types";
import React from "react";

export const MainLayout = ({ children }: IChildrenProps) => {
  return (
    <React.Fragment>
      <MainHeader />
      <div className="overflow-hidden">{children}</div>
      <MainFooter />
    </React.Fragment>
  );
};
