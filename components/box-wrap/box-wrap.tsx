import { Box, Container } from "@mantine/core";
import React from "react";

export const BoxWrap = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box bg={"#fff"}>
      <Container>
        <Box mt={10} py={10}>
          {children}
        </Box>
      </Container>
    </Box>
  );
};
