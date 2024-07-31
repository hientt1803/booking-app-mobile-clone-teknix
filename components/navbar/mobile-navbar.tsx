"use client";

import {
  Avatar,
  Box,
  Button,
  Container,
  Drawer,
  Flex,
  Indicator,
  Menu,
  ScrollArea,
  Stack,
  Title,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  ArrowLeftRight,
  CarTaxiFrontIcon,
  EarthIcon,
  GalleryHorizontal,
  Goal,
  Handshake,
  HousePlus,
  LucideCarTaxiFront,
  MenuIcon,
  PlaneLandingIcon,
  ShieldQuestion,
  TrashIcon,
} from "lucide-react";
import Link from "next/link";

export const MobileNavbar = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Flex bg="#1e3a8a" gap="lg" direction={"column"} className="w-full py-5">
      <Container className="w-full overflow-hidden">
        <Flex
          // gap="lg"
          justify="space-between"
          align="center"
          // wrap="nowrap"
          className="w-full text-white"
          mb={4}
        >
          <Link href={"/"}>
            <Title order={3}>Booking.com</Title>
          </Link>
          <Flex justify={"flex-end"} align={"center"} gap={5} mr={15}>
            <MobileDropdown />
            <div onClick={open} className="cursor-pointer">
              <MenuIcon className="text-neutral-300" />
            </div>
            <MobileDrawer opened={opened} close={close} />
          </Flex>
        </Flex>
        <SuggestList />
      </Container>
    </Flex>
  );
};

const MobileDrawer = ({
  opened,
  close,
}: {
  opened: boolean;
  close: () => void;
}) => {
  return (
    <Drawer
      offset={8}
      radius="md"
      opened={opened}
      onClose={close}
      position="right"
      title="BOOKING"
    >
      <Stack>
        <Title order={2} mb={15}>
          More
        </Title>
        <p className="text-neutral-800">VND Vietnamese Dong</p>

        <Stack mb={5}>
          <Flex
            gap={20}
            justify={"start"}
            align={"center"}
            className="text-black"
          >
            <Avatar color="cyan" radius="xl">
              MK
            </Avatar>
            English (US)
          </Flex>
          <Flex
            gap={20}
            justify={"start"}
            align={"center"}
            className="text-black"
          >
            <div>
              <Goal />
            </div>
            <div>Genius Loyalty Program</div>
          </Flex>
          <Flex
            gap={20}
            justify={"start"}
            align={"center"}
            className="text-black"
          >
            <div>
              <HousePlus />
            </div>
            <div>List your property</div>
          </Flex>
        </Stack>

        <Stack mb={5}>
          <Flex>
            <Title order={6} className="font-bold text-black">
              Help and support
            </Title>
          </Flex>
          <Flex
            gap={20}
            justify={"start"}
            align={"center"}
            className="text-black"
          >
            <div>
              <ShieldQuestion />
            </div>
            <div>Contact Customer service</div>
          </Flex>
          <Flex
            gap={20}
            justify={"start"}
            align={"center"}
            className="text-black"
          >
            <div>
              <Handshake />
            </div>
            <div>Partner dispute</div>
          </Flex>
        </Stack>

        <Stack mb={5}>
          <Flex>
            <Title order={6} className="font-bold text-black">
              Inspration
            </Title>
          </Flex>
          <Flex
            gap={20}
            justify={"start"}
            align={"center"}
            className="text-black"
          >
            <div>
              <ShieldQuestion />
            </div>
            <div>Seasonal and holoday deals</div>
          </Flex>
          <Flex
            gap={20}
            justify={"start"}
            align={"center"}
            className="text-black"
          >
            <div>
              <Handshake />
            </div>
            <div>Travel articles</div>
          </Flex>
        </Stack>

        <Stack mb={5}>
          <Flex>
            <Title order={6} className="font-bold text-black">
              Settings and legal
            </Title>
          </Flex>
          <Flex
            gap={20}
            justify={"start"}
            align={"center"}
            className="text-black"
          >
            <div>
              <ShieldQuestion />
            </div>
            <div>About Booking.com</div>
          </Flex>
          <Flex
            gap={20}
            justify={"start"}
            align={"center"}
            className="text-black"
          >
            <div>
              <Handshake />
            </div>
            <div>Careers</div>
          </Flex>
          <Flex
            gap={20}
            justify={"start"}
            align={"center"}
            className="text-black"
          >
            <div>
              <Handshake />
            </div>
            <div>Become an affiliate</div>
          </Flex>
          <Flex
            gap={20}
            justify={"start"}
            align={"center"}
            className="text-black"
          >
            <div>
              <Handshake />
            </div>
            <div>Press center</div>
          </Flex>
        </Stack>
      </Stack>
    </Drawer>
  );
};

const MobileDropdown = () => {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Indicator color="red">
          <Avatar radius="xl">MK</Avatar>
        </Indicator>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Settings</Menu.Label>
        <Menu.Item
          leftSection={
            <ArrowLeftRight style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Transfer my data
        </Menu.Item>
        <Menu.Item
          color="red"
          leftSection={
            <TrashIcon style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Delete my account
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

const SuggestList = () => {
  return (
    <ScrollArea maw={450} type="never">
      <Box display={"flex"} className="w-full gap-4">
        <Button
          leftSection={<GalleryHorizontal />}
          variant="outline"
          color="#fff"
          radius="lg"
        >
          Stays
        </Button>
        <Button
          leftSection={<PlaneLandingIcon />}
          variant="transparent"
          color="#fff"
          radius="lg"
        >
          Flights
        </Button>
        <Button
          leftSection={<EarthIcon />}
          variant="transparent"
          color="#fff"
          radius="lg"
        >
          Fight + Home
        </Button>
        <Button
          leftSection={<CarTaxiFrontIcon />}
          variant="transparent"
          color="#fff"
          radius="lg"
        >
          Car rentals
        </Button>
        <Button
          leftSection={<GalleryHorizontal />}
          variant="transparent"
          color="#fff"
          radius="lg"
        >
          Attractions
        </Button>
        <Button
          leftSection={<LucideCarTaxiFront />}
          variant="transparent"
          color="#fff"
          radius="lg"
        >
          Taxi
        </Button>
      </Box>
    </ScrollArea>
  );
};
