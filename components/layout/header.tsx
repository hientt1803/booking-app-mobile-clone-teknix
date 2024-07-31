import dynamic from "next/dynamic";

const MobileNavbar = dynamic(() =>
  import("../navbar/mobile-navbar").then((mob) => mob.MobileNavbar)
);

export const MainHeader = () => {
  return <MobileNavbar />;
};
