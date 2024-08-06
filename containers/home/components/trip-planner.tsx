"use client";

import { BoxWrap } from "@/components/box-wrap";
import { Box, ScrollArea, Tabs, Text, Title } from "@mantine/core";
import {
  BikeIcon,
  HeartIcon,
  HouseIcon,
  ShipIcon,
  UmbrellaIcon,
} from "lucide-react";
import { useState } from "react";
import { SimpleCard } from "./simple-card";

export const TripPlanner = () => {
  const [activeTab, setActiveTab] = useState<string | null>("sandBeach");

  return (
    <BoxWrap>
      <Title order={5}>Quick and easy trip planers</Title>
      <Text size="md" c={"dimmed"}>
        Pick a vibe and explore the top distinations in VietNam
      </Text>
      <Tabs
        color="blue"
        variant="default"
        value={activeTab}
        onChange={setActiveTab}
        defaultValue="sandBeach"
      >
        <ScrollArea className="w-full" type="always" scrollbarSize={2} py={15}>
          <Box display={"flex"} className="w-full gap-4">
            <Tabs.List>
              <Tabs.Tab value="sandBeach" leftSection={<UmbrellaIcon />}>
                Beach
              </Tabs.Tab>
              <Tabs.Tab value="outdoors" leftSection={<BikeIcon />}>
                Outdoors
              </Tabs.Tab>
              <Tabs.Tab value="city" leftSection={<HouseIcon />}>
                City
              </Tabs.Tab>
              <Tabs.Tab value="romance" leftSection={<HeartIcon />}>
                Romance
              </Tabs.Tab>
              <Tabs.Tab value="relax" leftSection={<ShipIcon />}>
                Relax
              </Tabs.Tab>
            </Tabs.List>
          </Box>
        </ScrollArea>

        {/* Render more card here to see horizontal scroll */}
        <Tabs.Panel value="sandBeach">
          <ScrollArea className="w-full" type="never">
            <Box display={"flex"} className="w-full gap-4">
              {Array(10)
                .fill(1)
                .map((_, index) => (
                  <SimpleCard
                    key={index}
                    title="Ha Tien"
                    description="77 km from Can Tho"
                  />
                ))}
            </Box>
          </ScrollArea>
        </Tabs.Panel>
      </Tabs>
    </BoxWrap>
  );
};
