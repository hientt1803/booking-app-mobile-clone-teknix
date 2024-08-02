"use client";

import { Box, Divider, Drawer, Flex, Input, Stack, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MapPin, MousePointer2, SearchIcon } from "lucide-react";
import React from "react";
import { PrimaryButton } from "../button";
import { DUMMY_ARRAY } from "@/utils";

interface IInputSearch {
  inputSearchValue: string;
  setInputSearchValue: (value: string) => void;
}

export const InputSearchCustom = ({
  inputSearchValue,
  setInputSearchValue,
}: IInputSearch) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Box p={6}>
      <Input
        placeholder="Search for your location"
        value={inputSearchValue}
        onChange={(e) => setInputSearchValue(e.target.value)}
        leftSection={<SearchIcon size={16} />}
        onClick={open}
        className="font-semibold"
        size="md"
      />

      <Drawer
        opened={opened}
        onClose={close}
        position="left"
        title="Enter destination"
        styles={{
          title: {
            fontWeight: 700,
          },
        }}
        radius={0}
        className="relative"
      >
        <Box>
          <Divider />
          <Input
            placeholder="Arround current location"
            leftSection={<SearchIcon size={16} />}
            value={inputSearchValue}
            onChange={(e) => setInputSearchValue(e.target.value)}
            className="outline-none border-none my-4"
            size="sm"
          />
          <Divider />
        </Box>
        <Box
          my={20}
          className="transition hover:bg-neutral-200 py-2 cursor-pointer"
        >
          <Flex gap={10} align={"center"}>
            <MousePointer2 className="w-6 h-6" />
            Around current location
          </Flex>
        </Box>

        {DUMMY_ARRAY.map((item, index) => (
          <DestinationItem
            key={index}
            icon={<MapPin className="w-6 h-6" />}
            country="Vietnam"
            city="Can Tho"
          />
        ))}

        <Box bg={"#fff"} className="sticky bottom-0 left-0 right-0 p-2">
          <PrimaryButton fullWidth onClick={close}>
            Done
          </PrimaryButton>
        </Box>
      </Drawer>
    </Box>
  );
};

export const DestinationItem = ({
  icon,
  city,
  country,
}: {
  icon: any;
  city: string;
  country: string;
}) => {
  return (
    <Stack>
      <Text size="xs" fw={600}>
        Popular destinations nearby
      </Text>
      <Stack
        gap={5}
        className="transition hover:bg-neutral-200 py-1 cursor-pointer"
      >
        <Flex gap={10} align={"center"}>
          {icon}
          <Flex direction={"column"} gap={2}>
            <Text size="xs" fw={600}>
              {city}
            </Text>
            <Text size="xs">{country}</Text>
          </Flex>
        </Flex>
        <Divider />
      </Stack>
    </Stack>
  );
};
