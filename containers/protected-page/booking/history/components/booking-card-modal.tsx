"use client";

import { PrimaryButton } from "@/components/button";
import { Box, Flex, Image, List, Modal, Stack, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { AlertCircleIcon, ChevronRight, DotIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export const BookingCardModal = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <React.Fragment>
      <Modal
        opened={opened}
        onClose={close}
        title="Cancellation and rebooking info"
        centered
        styles={{
          title: {
            fontWeight: 700,
            fontSize: "1.2rem",
          },
        }}
      >
        <Stack>
          <Box className="my-3 border-2 rounded-md shadow-md relative" p={15}>
            <Flex justify={"flex-start"} align={"center"} gap={20}>
              <Image
                src={"/assets/images/can-tho-image.jpg"}
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
                <Text size="xs">Canceled</Text>
              </Stack>
            </Flex>
          </Box>

          <List icon={<DotIcon className="w-5 h-5" />}>
            <List.Item>
              <Text size="sm">
                You canceled this reservation on <strong>Aug 5.</strong>
              </Text>
            </List.Item>
            <List.Item>
              <Text size="sm">
                Customer Service {`can't`} undo cancellations.
              </Text>
            </List.Item>
          </List>

          <Text size="sm">
            If you still want to stay at this property, {`you'll`} need to book
            again or search for an available alternative.
          </Text>

          <Link href={"/hotel"}>
            <PrimaryButton fullWidth>Check availability</PrimaryButton>
          </Link>
        </Stack>
      </Modal>

      <Box onClick={open}>
        <Flex justify={"space-between"} align={"center"} gap={10}>
          <AlertCircleIcon className="w-4 h-4" />
          <Text size="xs" className="flex-1">
            Cancellation and rebooking info
          </Text>
          <ChevronRight className="w-4 h-4" />
        </Flex>
      </Box>
    </React.Fragment>
  );
};
