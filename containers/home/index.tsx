import { MobileSearchGroup } from "@/components/search";
import { Box, Container, Text, Title } from "@mantine/core";
import dynamic from "next/dynamic";
import React from "react";
import { PresentSearchOffer } from "./components/present-search-offer";

const InstroduceTrip = dynamic(() =>
  import("./components/instroduce-trip").then((mob) => mob.InstroduceTrip)
);
const AdvertiseSection = dynamic(() =>
  import("./components/advertise-section").then((mob) => mob.AdvertiseSection)
);

export const HomeContainer = () => {
  return (
    <React.Fragment>
      {/* Search group */}
      <Container>
        <Box mt={10}>
          <Title order={5}>Find your next stay</Title>
          <Text size="xs" c={"dimmed"}>
            Search deals on hotels, homes, and much more,...
          </Text>
          <MobileSearchGroup />
        </Box>
      </Container>

      {/* Present search and offer */}
      <PresentSearchOffer />

      {/* Instro trip */}
      <InstroduceTrip />

      {/* AdvertiseSection */}
      <AdvertiseSection />
    </React.Fragment>
  );
};
