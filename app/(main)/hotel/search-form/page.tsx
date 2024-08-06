import { MobileSearchGroup } from "@/components/search";
import { Box, Container } from "@mantine/core";
import { Fragment } from "react";

const HotelSearchFormPage = () => {
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

export default HotelSearchFormPage;
