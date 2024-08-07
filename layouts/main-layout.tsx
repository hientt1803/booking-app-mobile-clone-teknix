import { GlobalLoading } from "@/components/global";
import { MainFooter, MainHeader } from "@/components/layout";
import { IChildrenProps } from "@/types";
import React, { Suspense } from "react";

export const MainLayout = ({ children }: IChildrenProps) => {
  return (
    <React.Fragment>
      <MainHeader />
      <Suspense fallback={<GlobalLoading />}>
        <div className="overflow-hidden">{children}</div>
      </Suspense>
      <MainFooter />
    </React.Fragment>
  );
};
