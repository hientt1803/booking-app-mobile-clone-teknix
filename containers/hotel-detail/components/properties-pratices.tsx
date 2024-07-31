"use client";

import { PrimaryButton } from "@/components/button";
import {
  Box,
  Divider,
  Drawer,
  Flex,
  List,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { GlassWater, RecycleIcon } from "lucide-react";
import React from "react";

export const PropertiesPratices = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <React.Fragment>
      <Title order={4}>Property pratices</Title>

      {/* Drawer */}
      <Drawer
        offset={8}
        radius="md"
        opened={opened}
        onClose={close}
        position="left"
      >
        <Stack gap={3} className="relative">
          <Text size="xs" mb={10}>
            Here are the practices this property told us {`they've`}{" "}
            implemented:
          </Text>

          <Box>
            <Stack>
              <Flex gap={5}>
                <RecycleIcon />
                <Text size="xs" fw={600}>
                  Waste
                </Text>
              </Flex>

              <List>
                <List.Item>Water cooler/dispenser</List.Item>
                <List.Item>
                  Single-use shampoo, conditioner, and body wash bottles not
                  used
                </List.Item>
                <List.Item>Single-use plastic stirrers not used</List.Item>
                <List.Item>Single-use plastic bottles not used</List.Item>
                <List.Item>Single-use plastic cups not used</List.Item>
                <List.Item>
                  Single-use plastic cutlery/plates not used
                </List.Item>
              </List>
            </Stack>
          </Box>

          <Divider my={5} />

          <Box>
            <Stack>
              <Flex gap={5}>
                <GlassWater />
                <Text size="xs" fw={600}>
                  Water
                </Text>
              </Flex>

              <List>
                <List.Item>Water-efficient toilets</List.Item>
                <List.Item>Water-efficient showers</List.Item>
                <List.Item>Option to opt out of daily room cleaning</List.Item>
                <List.Item>Option to reuse towels</List.Item>
              </List>
            </Stack>
          </Box>

          <Divider my={5} />

          <Box>
            <Stack>
              <Flex gap={5}>
                <RecycleIcon />
                <Text size="xs" fw={600}>
                  Waste
                </Text>
              </Flex>

              <List>
                <List.Item>Water cooler/dispenser</List.Item>
                <List.Item>
                  Single-use shampoo, conditioner, and body wash bottles not
                  used
                </List.Item>
                <List.Item>Single-use plastic stirrers not used</List.Item>
                <List.Item>Single-use plastic bottles not used</List.Item>
                <List.Item>Single-use plastic cups not used</List.Item>
                <List.Item>
                  Single-use plastic cutlery/plates not used
                </List.Item>
              </List>
            </Stack>
          </Box>

          <Divider my={5} />

          <Box>
            <Stack>
              <Flex gap={5}>
                <GlassWater />
                <Text size="xs" fw={600}>
                  Water
                </Text>
              </Flex>

              <List>
                <List.Item>Water-efficient toilets</List.Item>
                <List.Item>Water-efficient showers</List.Item>
                <List.Item>Option to opt out of daily room cleaning</List.Item>
                <List.Item>Option to reuse towels</List.Item>
              </List>
            </Stack>
          </Box>

          <Divider my={5} />

          <Flex
            justify={"space-between"}
            align={"center"}
            gap={10}
            className="sticky bottom-0 left-0 right-0 p-3 bg-white"
          >
            <PrimaryButton variant="outline" fullWidth onClick={close}>
              Back
            </PrimaryButton>
            <PrimaryButton fullWidth>Reserve</PrimaryButton>
          </Flex>
        </Stack>
      </Drawer>

      <Stack gap={5}>
        <Text size="xs" lineClamp={4} className="text-neutral-700">
          This property told us {`they've`} implemented certain pratices across
          some or all of these categories; waste, water, energy, and greenhouse
          gases, destination and community, and nature.
        </Text>
        <Text className="cursor-pointer text-blue-800" size="sm" onClick={open}>
          Read more
        </Text>
      </Stack>
    </React.Fragment>
  );
};
