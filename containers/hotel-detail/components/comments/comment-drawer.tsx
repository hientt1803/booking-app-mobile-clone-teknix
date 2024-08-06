"use client"

import { PrimaryBadge } from "@/components/badge";
import { Avatar, Drawer, Flex, Stack, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FlagIcon, SmileIcon } from "lucide-react";
import React from "react";

export const CommentDrawer = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <React.Fragment>
      <Drawer
        offset={8}
        radius="md"
        opened={opened}
        onClose={close}
        position="bottom"
      >
        <Stack>
          <Flex justify={"space-between"} align={"center"}>
            <Flex gap={10} align={"center"}>
              <Avatar color="cyan" radius="xl">
                MK
              </Avatar>
              <Stack gap={2}>
                <Text size="xs" fw={600}>
                  Trung
                </Text>
                <Flex gap={5}>
                  <FlagIcon className="w-3 h-3" />
                  <Text size="xs" c="dimmed">
                    Canada
                  </Text>
                </Flex>
              </Stack>
            </Flex>
            <PrimaryBadge title="8.0" />
          </Flex>

          <Stack gap={0}>
            <Text size="xs">Reviewed: 2024-05-04</Text>
            <Text size="lg" fw={600}>
              Very Good
            </Text>
            <Flex gap={5} mt={15}>
              <SmileIcon className="text-green-800" />
              <Text size="sm">
                Staff very friendly and helpful, comfortable bed & modern
                faclities.
              </Text>
            </Flex>
          </Stack>
        </Stack>
      </Drawer>

      <Text size="sm" c="indigo" className="underline cursor-pointer" onClick={open}>
        Read more
      </Text>
    </React.Fragment>
  );
};
