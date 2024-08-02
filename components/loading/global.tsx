"use client";

import React from "react";
import { HashLoader } from "react-spinners";

interface ILoading {
  open?: boolean;
}

const LoadingGlobal = (props: ILoading) => {
  const { open = false } = props;

  return (
    <>
      {open && (
        <div className="fixed top-0 left-0 right-0 bottom-0 min-w-[100vw] z min-h-screen flex justify-center items-center bg-neutral-800 opacity-90 z-50">
          <HashLoader size={50} color="#fff" loading />
        </div>
      )}
    </>
  );
};

export default LoadingGlobal;
