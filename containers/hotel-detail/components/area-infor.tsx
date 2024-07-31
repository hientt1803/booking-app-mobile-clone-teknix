"use client";

import { PrimaryButton } from "@/components/button";
import { Box, Flex, Stack, Tabs, Text } from "@mantine/core";
import { FerrisWheel, FootprintsIcon, PersonStanding } from "lucide-react";
import React from "react";

export const AreaInfor = () => {
  return (
    <React.Fragment>
      <Tabs defaultValue="attractions">
        <Tabs.List>
          <Tabs.Tab value="attractions">Attractions</Tabs.Tab>
          <Tabs.Tab value="eatAndDrink">Eat and drink</Tabs.Tab>
          <Tabs.Tab value="transportation">Transportation</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="attractions">
          <TabPanelContent />
        </Tabs.Panel>

        <Tabs.Panel value="eatAndDrink">
          <TabPanelContent />
        </Tabs.Panel>

        <Tabs.Panel value="transportation">
          <TabPanelContent />
        </Tabs.Panel>
      </Tabs>
      <Stack mt={20}>
        <Text size="xs" className="text-neutral-700">
          {`"Walking and driving times are based on the fastest route from the property. 
        When no route is available, distances shown are measured in a straight line. 
        Actual travel times and distances may vary."`}
        </Text>
        <PrimaryButton variant="outline" fullWidth>
          Show on map
        </PrimaryButton>
      </Stack>
    </React.Fragment>
  );
};

export const TabPanelContent = () => {
  return (
    <Stack>
      <Box>
        <Stack mt={10}>
          {/* Attractions */}
          <Stack gap={2}>
            <Flex gap={3} align={"center"}>
              <FerrisWheel className="w-4 h-4" />

              <Text size="xs" fw={600}>
                Top attractions
              </Text>
            </Flex>
            <Flex justify={"space-between"} align={"center"}>
              <Text size="xs" className="flex-wrap">
                Can Tho Museum
              </Text>
              <Flex gap={4}>
                <FootprintsIcon className="w-4 h-4" />
                <Text size="xs" className="flex-wrap">
                  22 min (1,8 km)
                </Text>
              </Flex>
            </Flex>
          </Stack>

          {/* Nearby */}
          <Stack gap={2}>
            <Flex gap={3} align={"center"}>
              <PersonStanding className="w-4 h-4" />
              <Text size="xs" fw={600}>
                {`What's`} nearby
              </Text>
            </Flex>
            <Flex justify={"space-between"} align={"center"}>
              <Text size="xs" className="flex-wrap">
                Hung Vuong
              </Text>
              <Flex gap={4}>
                <FootprintsIcon className="w-4 h-4" />
                <Text size="xs" className="flex-wrap">
                  22 min (1,8 km)
                </Text>
              </Flex>
            </Flex>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};
