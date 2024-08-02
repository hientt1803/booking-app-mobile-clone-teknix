"use client";

import { Avatar, Container, Drawer, Flex, Stack, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

export const AuthenNavbar = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Flex bg="#1e3a8a" gap="lg" direction={"column"} className="w-full py-5">
      <Container className="w-full overflow-hidden">
        <Flex
          justify="space-between"
          align="center"
          className="w-full text-white"
          my={6}
        >
          <Link href={"/"}>
            <Title order={3}>Booking.com</Title>
          </Link>
          <div onClick={open} className="cursor-pointer">
            <MenuIcon className="text-neutral-300" />
          </div>
        </Flex>
        <MobileDrawer opened={opened} close={close} />
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
        </Stack>
      </Stack>
    </Drawer>
  );
};
