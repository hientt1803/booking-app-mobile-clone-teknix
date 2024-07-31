"use client";

import { PrimaryButton } from "@/components/button";
import { Drawer, Flex, Image, Paper, Stack, Text, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { CupSodaIcon, DotIcon, SoupIcon, Utensils } from "lucide-react";
import React from "react";

export const FoodAndDrink = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <React.Fragment>
      <Flex justify={"space-between"} align={"center"} mb={5}>
        <Title order={4}>Food & Drink</Title>
        <SoupIcon />
      </Flex>

      {/* Drawer */}
      <Drawer
        offset={8}
        radius="md"
        opened={opened}
        onClose={close}
        position="left"
        className="relative"
      >
        <Stack gap={3}>
          <Text size="md" fw={700} mb={10}>
            Breakfast
          </Text>

          <Image
            src={"/assets/images/maketing-home.png"}
            alt="breakfast image"
            w={500}
            height={300}
          />

          <Text size="xs" mb={20}>
            Breakfast is available to buy at the property for VN 95,000 per
            persion, per night.
          </Text>

          <Stack gap={2} mb={10}>
            <Text fw={700} size="xs">
              Served daily
            </Text>
            <Flex gap={5}>
              <Text size="xs">06:00 to 10:00</Text>
            </Flex>
          </Stack>

          <Stack gap={2} mb={10}>
            <Text fw={700} size="xs">
              Menu style
            </Text>
            <Flex gap={20}>
              <Text size="xs">Buffet</Text>
              <Text size="xs">A la carte</Text>
              <Text size="xs">Breafkast to go</Text>
            </Flex>
          </Stack>

          <Stack gap={2} mb={10}>
            <Text fw={700} size="xs">
              Cuisine
            </Text>
            <Flex gap={20}>
              <Text size="xs">Asian</Text>
            </Flex>
          </Stack>
        </Stack>

        <Stack gap={3} mt={30}>
          <Text size="md" fw={700} mb={5}>
            Restaurants
          </Text>

          <Text size="xs" mb={10}>
            1 Restaurant On Site
          </Text>

          <Paper withBorder p={10} radius={10}>
            <Stack gap={5}>
              <Text size="md" fw={700} mb={10} className="uppercase">
                J0247Louge
              </Text>
              <Stack gap={2} mb={10}>
                <Text size="md" fw={700}>
                  Cuisine
                </Text>

                <Flex gap={5} align={"center"}>
                  <Text size="xs">Vietnamese</Text>
                  <DotIcon className="w-5 h-5" />
                  <Text size="xs">Local</Text>
                  <DotIcon className="w-5 h-5" />
                  <Text size="xs">Asian</Text>
                  <DotIcon className="w-5 h-5" />
                </Flex>
              </Stack>
              <Stack gap={2} mb={10}>
                <Text size="md" fw={700}>
                  Open for
                </Text>

                <Flex gap={5} align={"center"}>
                  <Text size="xs">Family-friendly</Text>
                  <DotIcon className="w-5 h-5" />
                  <Text size="xs">Traditional</Text>
                  <DotIcon className="w-5 h-5" />
                  <Text size="xs">Morden</Text>
                  <DotIcon className="w-5 h-5" />
                </Flex>
              </Stack>
            </Stack>
          </Paper>
        </Stack>

        <Stack gap={3} mt={30}>
          <Text size="md" fw={700}>
            Food & Drink Facilities
          </Text>

          <Text size="xs" mb={10}>
            In the Hotel
          </Text>

          <Flex gap={5} align={"center"} className="flex-wrap">
            <Text size="xs">Vending machine (snacks)</Text>
            <DotIcon className="w-5 h-5" />
            <Text size="xs">Vending machine (drinks)</Text>
            <DotIcon className="w-5 h-5" />
            <Text size="xs">Packed lunches</Text>
            <DotIcon className="w-5 h-5" />
            <Text size="xs">Packed lunches</Text>
            <DotIcon className="w-5 h-5" />
            <Text size="xs">Packed lunches</Text>
            <DotIcon className="w-5 h-5" />
            <Text size="xs">Packed lunches</Text>
            <DotIcon className="w-5 h-5" />
            <Text size="xs">Packed lunches</Text>
            <DotIcon className="w-5 h-5" />
            <Text size="xs">Packed lunches</Text>
            <DotIcon className="w-5 h-5" />
            <Text size="xs">Packed lunches</Text>
            <DotIcon className="w-5 h-5" />
          </Flex>
        </Stack>

        <Stack gap={3} mt={30}>
          <Text size="md" fw={700}>
            Food & Drink nearby
          </Text>

          <Stack gap={2} mb={10}>
            <Flex gap={3} align={"center"}>
              <Utensils className="w-5 h-5" />
              <Text fw={700} size="xs">
                Restaurants
              </Text>
            </Flex>
            <Flex justify={"space-between"} align={"center"}>
              <Text size="xs">Buffet</Text>
              <Text size="xs">20 m</Text>
            </Flex>
          </Stack>
          <Stack gap={2} mb={10}>
            <Flex gap={3} align={"center"}>
              <CupSodaIcon className="w-5 h-5" />
              <Text fw={700} size="xs">
                Cafes & bars
              </Text>
            </Flex>
            <Flex justify={"space-between"} align={"center"}>
              <Text size="xs">CaSa INN Coffee</Text>
              <Text size="xs">50 m</Text>
            </Flex>
            <Flex justify={"space-between"} align={"center"}>
              <Text size="xs">CaSa INN Coffee</Text>
              <Text size="xs">50 m</Text>
            </Flex>
            <Flex justify={"space-between"} align={"center"}>
              <Text size="xs">CaSa INN Coffee</Text>
              <Text size="xs">50 m</Text>
            </Flex>
          </Stack>
        </Stack>

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
