"use client";

import { BoxWrap } from "@/components/box-wrap";
import {
  Box,
  Button,
  Card,
  CheckIcon,
  Divider,
  Flex,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { CarIcon, ChevronRight } from "lucide-react";
import React from "react";

export const AdvertiseSection = () => {
  return (
    <React.Fragment>
      <BoxWrap>
        <Box>
          <Flex gap={10} align={"center"}>
            <CheckIcon className="w-3 h-3" />
            <Text size="xs" fw={600}>
              Book now, PAY AT THE PROPERTY
            </Text>
          </Flex>
          <Text size="xs" mt={5} ml={22}>
            With FREE cancellation on most rooms
          </Text>
        </Box>
        <Divider my={10} />
        <Box>
          <Flex gap={10} align={"center"}>
            <CheckIcon className="w-3 h-3" />
            <Text size="xs" fw={600}>
              2,563,380 properties in 228 countries
            </Text>
          </Flex>
          <Text size="xs" mt={5} ml={22}>
            Hotels, guesthouses, motels, and more,...
          </Text>
        </Box>
      </BoxWrap>

      <BoxWrap>
        <Flex justify={"space-between"} align={"center"}>
          <CarIcon className="w-4 h-4 text-blue-600" />
          <Stack gap={5} className="flex-1">
            <Text size="xs" fw={600}>
              Car rental
            </Text>
            <Text size="xs">Hundreds of cars and 24/7 customer service</Text>
          </Stack>
          <ChevronRight className="w-4 h-4" />
        </Flex>
        <Divider my={5} />
      </BoxWrap>

      {/* Travel more, spend less?*/}
      <BoxWrap>
        <Title order={5}>Travel more, spend less?</Title>
        <Card radius="md" withBorder my={5} style={{ position: "relative" }}>
          <Flex justify={"space-between"} align={"center"}>
            <Stack gap={3}>
              <Text size="sm" fw={700}>
                Sign in, save money
              </Text>
              <Text size="xs">
                Save 10% or more at participating properties – just look for the
                blue Genius label
              </Text>
              <Flex gap={10} mt={10}>
                <Button variant="filled" color="indigo">
                  Sign in
                </Button>
                <Button variant="transparent">Register</Button>
              </Flex>
            </Stack>
            <Image
              src="/assets/images/maketing-home.png"
              alt="Genius"
              w={100}
              height={100}
            />
          </Flex>
        </Card>
      </BoxWrap>
    </React.Fragment>
  );
};
