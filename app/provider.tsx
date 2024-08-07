// import { GlobalLoading } from "@/components/global";
import { GeniusModal } from "@/components/modal";
import { MantineProvider } from "@mantine/core";
import { ToastContainer } from "react-toastify";

const ProviderComponent = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <MantineProvider>
      {children}
      <GeniusModal />
      <ToastContainer />
      {/* <GlobalLoading /> */}
    </MantineProvider>
  );
};

export default ProviderComponent;
