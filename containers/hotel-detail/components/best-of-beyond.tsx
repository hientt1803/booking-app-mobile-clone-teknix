"use client";

import { Box, Card, Image, ScrollArea, Tabs, Text, Title } from "@mantine/core";
import React from "react";

export const BestOfBeyond = () => {
  return (
    <React.Fragment>
      <Title order={5} mb={10}>The best of Sant Josep de sa Talaia and beyond</Title>
      <Tabs defaultValue="attractions">
        <Tabs.List>
          <Tabs.Tab value="attractions">Attractions</Tabs.Tab>
          <Tabs.Tab value="eatAndDrink">Eat and drink</Tabs.Tab>
          <Tabs.Tab value="transportation">Transportation</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="attractions">
          <ScrollArea className="w-full" type="never">
            <Box display={"flex"} className="gap-4 w-full py-3">
              <Card withBorder shadow="lg" radius={"md"} w={150} h="auto">
                <Card.Section>
                  <Image
                    src="/assets/images/maketing-home.png"
                    alt="beyond image"
                    w={150}
                    h={180}
                    fit="cover"
                  />
                  <Text p={5} size="sm" fw={600}>
                    Vincom Plaza Hung Vuong
                  </Text>
                </Card.Section>
              </Card>
            </Box>
          </ScrollArea>
        </Tabs.Panel>

        <Tabs.Panel value="eatAndDrink">
          <ScrollArea className="w-full" type="never">
            <Box display={"flex"} className="gap-4 w-full py-3">
              <Card withBorder shadow="lg" radius={"md"} w={150}>
                <Card.Section>
                  <Image
                    src="/assets/images/booking-banner-home.jpeg"
                    alt="beyond image"
                    w={150}
                    h={180}
                    fit="cover"
                  />

                  <Text p={5} size="sm" fw={600}>
                    Can Tho
                  </Text>
                </Card.Section>
              </Card>
            </Box>
          </ScrollArea>
        </Tabs.Panel>

        <Tabs.Panel value="transportation">
          <ScrollArea className="w-full" type="never">
            <Box display={"flex"} className="gap-4 w-full py-3">
              <Card withBorder shadow="lg" radius={"md"} w={150}>
                <Card.Section>
                  <Image
                    src="/assets/images/offer-image-home.jpeg"
                    alt="beyond image"
                    w={150}
                    h={180}
                    fit="cover"
                  />
                  <Text p={5} size="sm" fw={600}>
                    Can Tho international Airport
                  </Text>
                </Card.Section>
              </Card>
            </Box>
          </ScrollArea>
        </Tabs.Panel>
      </Tabs>
    </React.Fragment>
  );
};
