import { BoxWrap } from "@/components/box-wrap";
import { BackgroundImageProvider } from "@/components/common";
import { Button, Center, Stack, Text, Title } from "@mantine/core";
import dynamic from "next/dynamic";
import React from "react";

const CardSection = dynamic(() =>
  import("./card-section").then((mob) => mob.CardSection)
);

export const PresentSearchOffer = () => {
  return (
    <React.Fragment>
      {/* Image banner */}
      <BoxWrap>
        <BackgroundImageProvider>
          <Center p="xl" py={100}>
            <Stack gap={3} className="text-white">
              <Title order={3}>A piece of paradise just for you</Title>
              <Text size="sm" ta={"center"}>
                Book entire houses, villas, cabins, and more
              </Text>
              <Button variant="filled" color="blue" mt={10}>
                Discover vacation rentals
              </Button>
            </Stack>
          </Center>
        </BackgroundImageProvider>
      </BoxWrap>

      <CardSection />

      {/* Offer */}
      <BoxWrap>
        <Title order={5}>Offers</Title>
        <Text size="xs" c={"dimmed"}>
          Promotions, deals, and special offers for you
        </Text>

        <BackgroundImageProvider className="min-h-96 rounded-md">
          <Center p="xl" py={100}>
            <Stack gap={3} className="text-white">
              <Title order={1}>Seize the moment</Title>
              <Text>
                Save 15% or more when you book and stay before October 1, 2024
              </Text>
              <Button variant="filled" color="blue" mt={10}>
                Find Gateway Deals
              </Button>
            </Stack>
          </Center>
        </BackgroundImageProvider>
      </BoxWrap>
    </React.Fragment>
  );
};
