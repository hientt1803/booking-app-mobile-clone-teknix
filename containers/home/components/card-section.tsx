"use client";

import { BoxWrap } from "@/components/box-wrap";
import { ThreeItemFlexRow } from "@/components/common";
import { Card, Flex, Image, Stack, Text, Title } from "@mantine/core";
import { XIcon } from "lucide-react";
import React from "react";

export const CardSection = () => {
  return (
    <React.Fragment>
      {/* {"Recent search"} */}
      <BoxWrap>
        <Title order={5}>Your Recent Search</Title>
        <Card shadow="xl" maw={300} p={10} style={{ position: "relative" }}>
          <Flex justify={"start"} gap={14}>
            <Image
              src="/assets/images/booking-banner-home.jpeg"
              w={100}
              h={100}
              alt="No way!"
              className="rounded-lg"
            />
            <Stack justify="center" gap={2}>
              <Text fw={500} size="md">
                Can Tho
              </Text>
              <Text size="xs">Jul 31 aug 15, 2 people</Text>
            </Stack>
          </Flex>
          <span style={{ position: "absolute", top: "5px", right: "10px" }}>
            <XIcon />
          </span>
        </Card>
      </BoxWrap>

      {/* {"Interested} */}
      <BoxWrap>
        <Title order={5}>Still interested in this property?</Title>
        <Card shadow="xl" radius="md" maw={300}>
          <Card.Section>
            <Image
              src="/assets/images/booking-banner-home.jpeg"
              width={150}
              h={200}
              alt="Norway"
            />
          </Card.Section>

          <Text fw={500} my={"md"} size="sm">
            Adora Central Park Hostel
          </Text>

          <Text size="xs" c="dimmed">
            Can Tho, Vietnam
          </Text>

          <ThreeItemFlexRow
            point="8.1"
            status="Very Good"
            review={"Very good"}
          />
        </Card>
      </BoxWrap>
    </React.Fragment>
  );
};
