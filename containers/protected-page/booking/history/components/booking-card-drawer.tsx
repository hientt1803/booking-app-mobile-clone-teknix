"use client";

import {
  Box,
  Divider,
  Drawer,
  Flex,
  Image,
  Stack,
  Text
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  Calendar,
  EllipsisVertical,
  HelpCircleIcon,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export const BookingDetailCardDrawer = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <React.Fragment>
      <Drawer
        opened={opened}
        onClose={close}
        size={"sm"}
        position="bottom"
        className="rounded-lg"
        title="Your accommodations booking"
        styles={{
          title: {
            fontWeight: 700,
            fontSize: "1.4rem",
          },
          content: {
            borderRadius: "20px 20px 0 0",
          },
        }}
      >
        <Box
          className="my-3 border-2 rounded-md shadow-md relative"
          mb={30}
          p={15}
        >
          <Flex justify={"flex-start"} align={"center"} gap={20}>
            <Image
              src={"/assets/images/offer-image-home.jpeg"}
              alt="Image booking"
              w={80}
              h={60}
              fit="cover"
              className="rounded-sm"
            />
            <Stack gap={1}>
              <Text size="sm" fw={700}>
                Dorm Can Tho
              </Text>
              <Text size="xs">Aug 14 - Aug 24</Text>
              <Text size="xs" c={"green"}>
                Confirmed
              </Text>
            </Stack>
          </Flex>
        </Box>

        <Stack gap={5}>
          <Flex gap={5} align={"center"}>
            <Calendar className="w-6 h-6" />
            <Link href={"/booking/booking-success/detail"}>
              <Text size="sm" className="underline">
                Change dates
              </Text>
            </Link>
          </Flex>
          <Divider my={5} />
          <Flex gap={5} align={"center"}>
            <MessageCircle className="w-6 h-6" />
            <Link href={"/booking/booking-success/detail"}>
              <Text size="sm" className="underline">
                Message the property
              </Text>
            </Link>
          </Flex>
          <Divider my={5} />
          <Flex gap={5} align={"center"}>
            <HelpCircleIcon className="w-6 h-6" />
            <Link href={"/booking/booking-success/detail"}>
              <Text size="sm" className="underline">
                Contact customer service
              </Text>
            </Link>
          </Flex>
          <Divider my={5} />
        </Stack>
      </Drawer>

      <EllipsisVertical
        onClick={open}
        className="cursor-pointer w-5 h-5 absolute top-2 right-2"
      />
    </React.Fragment>
  );
};
