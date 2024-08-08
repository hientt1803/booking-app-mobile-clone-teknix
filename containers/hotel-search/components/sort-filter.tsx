"use client";

import {
  Box,
  Button,
  Drawer,
  Flex,
  Group,
  Radio,
  Title
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ArrowUpDown } from "lucide-react";

export const SortFilter = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Box>
      <Drawer
        opened={opened}
        onClose={close}
        position="bottom"
        radius={"25px 25px 0 0"}
        styles={{
          title: {
            fontWeight: 700,
          },
        }}
      >
        <Title order={2}>Sort by</Title>

        <Radio.Group name="sortby">
          <Group mt="xs" className="flex flex-col items-start gap-3">
            <Radio value="best" label="Top picks for long stays" />
            <Radio value="lowest-price" label="Price (lowest first)" />
            <Radio value="rating" label="Property rating and price" />
            <Radio value="review-price" label="Best review & lowest price" />
            <Radio value="distance" label="Distance from downtown" />
            <Radio value="review" label="Top reviewed" />
            <Radio value="home" label="Homes & apartments first" />
          </Group>
        </Radio.Group>
      </Drawer>

      <Button onClick={open} variant="subtle" size="xs">
        <Flex gap={8} align={"center"}>
          <ArrowUpDown className="w-4 h-4" />
          Sort
        </Flex>
      </Button>
    </Box>
  );
};
