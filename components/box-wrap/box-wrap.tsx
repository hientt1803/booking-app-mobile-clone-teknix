import { Box, Container } from "@mantine/core";
import React from "react";

export const BoxWrap = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Box bg={"#fff"} className={className}>
      <Container>
        <Box mt={10} py={10}>
          {children}
        </Box>
      </Container>
    </Box>
  );
};
