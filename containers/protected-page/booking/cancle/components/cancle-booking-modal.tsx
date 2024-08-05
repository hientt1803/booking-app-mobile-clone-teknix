"use client";

import { PrimaryButton } from "@/components/button";
import {
  Box,
  Divider,
  Flex,
  Image,
  Modal,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { BedIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export const CancleBookingModal = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const router = useRouter();

  return (
    <React.Fragment>
      <Modal opened={opened} onClose={close}>
        <Stack gap={5}>
          <Text size="xs">Step 2 of 2</Text>
          <Title order={3}>Confirm cancellation</Title>
          <Text size="xs">
            {`Your're abpit tp camce; upir emtrire booking - review the details below before canceling.`}
          </Text>

          <Box className="my-3 border-2 rounded-md shadow-md relative" p={15}>
            <Flex justify={"flex-start"} align={"center"} gap={20}>
              <Link href="/booking/booking-success/detail">
                <Image
                  src={"/assets/images/offer-image-home.jpeg"}
                  alt="Image booking"
                  w={80}
                  h={60}
                  fit="cover"
                  className="rounded-sm"
                />
              </Link>
              <Link href="/booking/booking-success/detail">
                <Stack gap={1}>
                  <Text size="sm" fw={700}>
                    Dorm Can Tho
                  </Text>
                  <Text size="xs">Aug 14 - Aug 24</Text>
                  <Text size="xs" c={"green"}>
                    Confirmed
                  </Text>
                </Stack>
              </Link>
            </Flex>
          </Box>

          <Flex justify={"flex-start"} align={"center"} gap={20}>
            <BedIcon className="w-5 h-5" />
            <Stack gap={1}>
              <Text size="sm" fw={700}>
                Bunk Bed In Mixed Dormitory Room
              </Text>
              <Text size="xs">VND 742,500 - 1 adult</Text>
              <Text size="xs" c={"green"}>
                Free cancellation
              </Text>
            </Stack>
          </Flex>

          <Divider my={10} />

          <Title order={4} mb={10}>
            Price breakdown
          </Title>
          <Flex justify={"space-between"} align={"center"} mb={5}>
            <Text size="xs">Your booking</Text>
            <Text size="xs">VND 742,050</Text>
          </Flex>
          <Flex justify={"space-between"} align={"center"} mb={15}>
            <Text size="xs">Cancellation fee</Text>
            <Text size="xs">VND 0</Text>
          </Flex>
          <Flex justify={"space-between"} align={"center"}>
            <Text size="xs" fw={600}>{`You'll be charged`}</Text>
            <Text size="xs" fw={600}>
              VND 0
            </Text>
          </Flex>

          <Divider my={10} />

          <Text size="xs" mb={20}>
            The property handles all payments. For any questions,{" "}
            <strong className="text-blue-700 underline">
              Contact them directly.
            </strong>
          </Text>

          <PrimaryButton
            onClick={() => {
              close();
              router.push("/booking/booking-success/detail");
            }}
            color="red"
          >
            Cancel booking
          </PrimaryButton>
          <PrimaryButton onClick={close} variant="light" color="blue">
            I want to keep this booking
          </PrimaryButton>
        </Stack>
      </Modal>

      <PrimaryButton fullWidth onClick={open}>
        Continue
      </PrimaryButton>
    </React.Fragment>
  );
};
