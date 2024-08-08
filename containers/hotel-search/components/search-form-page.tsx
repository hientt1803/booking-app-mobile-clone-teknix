"use client";

import { MobileSearchGroup } from "@/components/search";
import { Box, Container } from "@mantine/core";
import { Fragment } from "react";

export const SearchFormContainer = () => {
  return (
    <Fragment>
      <Box bg={"#fff"} py={10}>
        <Container>
          <MobileSearchGroup />
        </Container>
      </Box>
    </Fragment>
  );
};
