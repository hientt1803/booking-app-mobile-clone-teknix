"use client";

import { CITY_MOCKUP } from "@/utils";
import {
  Box,
  CloseButton,
  Divider,
  Drawer,
  Flex,
  Input,
  Stack,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MapPin, MousePointer2, SearchIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PrimaryButton } from "../button";

interface IInputSearch {
  inputSearchValue: string;
  setInputSearchValue: (value: string) => void;
}

interface ICity {
  id: number;
  name: string;
  link: string;
  country: string;
}

export const InputSearchCustom = ({
  inputSearchValue,
  setInputSearchValue,
}: IInputSearch) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [listLocation, setListLocation] = useState<ICity[]>(CITY_MOCKUP);
  const [listLocationFiltered, setListLocationFiltered] = useState<ICity[]>([]);

  useEffect(() => {
    const newList = listLocation.filter((l) =>
      l.name.toLocaleLowerCase().includes(inputSearchValue.toLocaleLowerCase())
    );

    console.log(newList);
    setListLocationFiltered(newList);
  }, [inputSearchValue]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputSearchValue(value);
  };

  console.log(listLocationFiltered);

  return (
    <Box px={6} pt={5}>
      <Input
        placeholder="Search for your location"
        value={inputSearchValue}
        onChange={handleInputChange}
        leftSection={<SearchIcon size={16} />}
        onClick={open}
        rightSectionPointerEvents="all"
        rightSection={
          <CloseButton
            aria-label="Clear input"
            className="cursor-pointer"
            onClick={() => setInputSearchValue("")}
            style={{ display: inputSearchValue ? undefined : "none" }}
          />
        }
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
        size={"100%"}
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
            rightSectionPointerEvents="all"
            rightSection={
              <CloseButton
                aria-label="Clear input"
                className="cursor-pointer"
                onClick={() => setInputSearchValue("")}
                style={{ display: inputSearchValue ? undefined : "none" }}
              />
            }
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

        <Text size="xs" fw={700} mb={20}>
          Popular destinations nearby
        </Text>
        {listLocationFiltered.length === 0 ? (
          <Text
            size="sm"
            fw={700}
            ta={"center"}
            c={"blue"}
            maw={300}
            my={30}
            mx={"auto"}
          >
            Sorry we cannot find any result match your keyword! Try again
            something else
          </Text>
        ) : (
          <>
            {listLocationFiltered.map((city, index) => (
              <Link key={index} href={city.link}>
                <DestinationItem
                  icon={<MapPin className="w-5 h-5" />}
                  country={city.country}
                  city={city.name}
                  onClick={setInputSearchValue}
                />
              </Link>
            ))}
          </>
        )}

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
  onClick,
}: {
  icon: any;
  city: string;
  country: string;
  onClick: (value: string) => void;
}) => {
  return (
    <Stack onClick={() => onClick(city)}>
      <Stack
        gap={5}
        className="transition hover:bg-neutral-200 py-1 cursor-pointer"
      >
        <Flex gap={10} align={"center"}>
          {icon}
          <Flex direction={"column"} gap={2}>
            <Text size="xs" fw={700}>
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
