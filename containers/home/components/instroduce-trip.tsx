"use client";

import { BoxWrap } from "@/components/box-wrap";
import { DUMMY_ARRAY } from "@/utils";
import {
  Badge,
  Box,
  Card,
  Flex,
  Image,
  ScrollArea,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import { SimpleCard } from "./simple-card";
import { TripPlanner } from "./trip-planner";
import { ThreeItemFlexRow } from "@/components/common/three-item-flex-row";
import { HeartIcon } from "lucide-react";

export const InstroduceTrip = () => {
  return (
    <React.Fragment>
      {/* Explore Vietnam */}
      <BoxWrap>
        <Title order={5}>Explore Vietnam</Title>
        <Text size="xs" c={"dimmed"}>
          These popular distination have alot to offer
        </Text>
        <ScrollArea className="w-full" type="never">
          <Box display={"flex"} className="w-full gap-4">
            {DUMMY_ARRAY.map((item, index) => (
              <SimpleCard
                key={index}
                title="Can Tho"
                description="330 properties"
              />
            ))}
          </Box>
        </ScrollArea>
      </BoxWrap>

      {/* Properties Vietnam */}
      <BoxWrap>
        <Title order={5}>Browse by property type in Can Tho</Title>
        <ScrollArea className="w-full" type="never">
          <Box display={"flex"} className="w-full gap-4">
            {DUMMY_ARRAY.map((item, index) => (
              <SimpleCard
                key={index}
                title="Vacation"
              >
                <ThreeItemFlexRow point="9.1" status="Wonderful" review={154} />
              </SimpleCard>
            ))}
          </Box>
        </ScrollArea>
      </BoxWrap>

      {/* Quick and easey trip planers*/}
      <TripPlanner />

      {/* Deals for the weekend*/}
      <BoxWrap>
        <Title order={5}>Deals for the weekend</Title>
        <Text size="xs" c={"dimmed"}>
          Save on stays for August 2 - August 4
        </Text>
        <ScrollArea className="w-full" type="never">
          <Box display={"flex"} className="w-full gap-4">
            {DUMMY_ARRAY.map((item, index) => (
              <Card
                className="shadow-lg"
                key={index}
                my={3}
                radius="md"
                w={250}
              >
                <Card.Section>
                  <Image
                    src="/assets/images/booking-banner-home.jpeg"
                    h={200}
                    alt="Norway"
                  />
                </Card.Section>
                <Badge variant="filled" color="indigo" mt={15} size="xs">
                  Genius
                </Badge>
                <Text fw={600} mt={5} size="sm">
                  Haystay Saigon
                </Text>
                <Text c="dimmed" size="xs">
                  Can Tho city, Vietnam
                </Text>
                <ThreeItemFlexRow
                  point="10.0"
                  status="Exceptional"
                  review={6}
                />
                <Badge size="xs" variant="filled" color="lime" mt={10}>
                  Getaway Deal
                </Badge>
                <Stack ml={"auto"} mt={10}>
                  <Text c={"dimmed"} size="xs">
                    2 nights{" "}
                    <strong className="text-red-600 line-through">
                      VND 4,410,000
                    </strong>
                  </Text>
                </Stack>
                <Text fw={600} size="sm" ml={"auto"}>
                  VND 3,306,500
                </Text>
              </Card>
            ))}
          </Box>
        </ScrollArea>
      </BoxWrap>

      {/* Looing for the perfect stay?*/}
      <BoxWrap>
        <Title order={5}>Looing for the perfect stay?</Title>
        <Text size="xs" c={"dimmed"}>
          Travelers with similar searches booked these properties
        </Text>
        <ScrollArea className="w-full" type="never">
          <Box display={"flex"} className="w-full gap-4">
            {DUMMY_ARRAY.map((item, index) => (
              <SimpleCard
                key={index}
                title="Mekong Rose Hotel"
                description="Can Tho city, Vietnam"
                className="shadow-lg"
              >
                <Flex
                  justify={"flex-end"}
                  wrap={"wrap"}
                  align={"center"}
                  mt={5}
                >
                  <Text size="xs" c="dimmed">
                    Starting from
                  </Text>
                  <Text fw={600} size="sm" ml={"auto"}>
                    VND 3,306,500
                  </Text>
                </Flex>

                <span
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "5px",
                    background: "#fff",
                    padding: "8px",
                    borderRadius: "50%",
                  }}
                >
                  <HeartIcon className="w-3 h-3" />
                </span>
              </SimpleCard>
            ))}
          </Box>
        </ScrollArea>
      </BoxWrap>
    </React.Fragment>
  );
};
