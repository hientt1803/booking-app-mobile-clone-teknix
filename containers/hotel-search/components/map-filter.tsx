"use client";

import { Box, Button, Drawer, Group, Radio, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Map } from "lucide-react";

export const MapFilter = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Box>
      <Drawer opened={opened} onClose={close} title="Sort by" position="bottom">
        <Title order={2}>Sort by</Title>

        <Group mt="xs" className="flex flex-col gap-3">
          <Radio value="react" label="Top picks for long stays" />
          <Radio value="svelte" label="Price (lowest first)" />
          <Radio value="ng" label="Property rating and price" />
          <Radio value="vue" label="Best reviewd & lowest price" />
          <Radio value="vue" label="Distance from downtown" />
          <Radio value="vue" label="Top reviewed" />
          <Radio value="vue" label="Homes & apartments first" />
        </Group>
      </Drawer>

      <Button onClick={open} variant="subtle">
        <Map style={{ width: "20px", height: "20px" }} /> Map
      </Button>
    </Box>
  );
};
