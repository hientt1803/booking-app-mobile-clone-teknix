import { GlobalLoading } from "@/components/global";
import { AuthenFooter, AuthenHeader } from "@/components/layout";
import { IChildrenProps } from "@/types";
import React, { Suspense } from "react";

export const AuthenLayout = ({ children }: IChildrenProps) => {
  return (
    <React.Fragment>
      <AuthenHeader />
      <Suspense fallback={<GlobalLoading />}>
        <div className="overflow-hidden">{children}</div>
      </Suspense>
      <AuthenFooter />
    </React.Fragment>
  );
};
