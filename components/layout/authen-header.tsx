import dynamic from "next/dynamic";

const AuthenNavbar = dynamic(() =>
  import("../navbar/authen-navbar").then((mob) => mob.AuthenNavbar)
);

export const AuthenHeader = () => {
  return <AuthenNavbar />;
};
