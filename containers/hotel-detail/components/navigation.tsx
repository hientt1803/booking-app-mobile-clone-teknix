import { Box, Divider, Flex, Stack, Text } from "@mantine/core";
import { ChevronLeftIcon, LocateIcon, MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";

export const Navigation = () => {
  return (
    <Stack gap={15}>
      <Text size="sm" className="text-neutral-800">
        Navigation
      </Text>
      <Box>
        <Divider mb={8}/>
        <Flex gap={5} align={"center"}>
          <MapPin className="w-4 h-4" />
          <Link href={"/"}>
            <Text size="sm">
              Salinas natural park Studio
            </Text>
          </Link>
        </Flex>
      </Box>
      <NavigationItem title="Sant Josep de sa Talaia" link="/" />
      <NavigationItem title="Sant Josep de sa Talaia" link="/" />
      <NavigationItem title="Sant Josep de sa Talaia" link="/" />
      <NavigationItem title="Sant Josep de sa Talaia" link="/" />
    </Stack>
  );
};

const NavigationItem = ({ title, link }: { title: string; link: string }) => {
  return (
    <React.Fragment>
      <Divider />
      <Flex gap={5} align={"center"}>
        <ChevronLeftIcon className="w-5 h-5" />
        <Link href={link}>
          <Text size="sm">
            {title}
          </Text>
        </Link>
      </Flex>
    </React.Fragment>
  );
};
