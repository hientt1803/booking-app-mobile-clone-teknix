"use client";

import { NAVBAR_MENU } from "@/utils";
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
  BadgePercent,
  Book,
  BookUser,
  CarTaxiFrontIcon,
  ChevronLeft,
  CircleAlert,
  Cookie,
  CreditCardIcon,
  DockIcon,
  EarthIcon,
  GalleryHorizontal,
  Goal,
  Handshake,
  HeartIcon,
  HousePlus,
  LogOutIcon,
  LucideCarTaxiFront,
  MenuIcon,
  NotebookTabs,
  PlaneLandingIcon,
  Scale,
  ScrollText,
  ShieldQuestion,
  UserIcon,
  UserSquare,
  VaultIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MobileNavbar = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const pathname = usePathname();

  return (
    <Flex bg="#1e3a8a" gap="lg" direction={"column"} className="w-full py-5">
      <Container className="w-full overflow-hidden">
        <Flex
          justify="space-between"
          align="center"
          className="w-full text-white"
          my={6}
        >
          {pathname.includes("/hotel/") ? (
            <Link href={"/hotel"}>
              <Title order={3}>
                <ChevronLeft className="w-8 h-8" />
              </Title>
            </Link>
          ) : (
            <Link href={"/"}>
              <Title order={3}>Booking.com</Title>
            </Link>
          )}
          <Flex justify={"flex-end"} align={"center"} gap={10}>
            <Link href={"/auth/sign-in"}>
              <Button variant="light" color="gray">
                Sign-in
              </Button>
            </Link>
            <MobileDropdown />
            <div onClick={open} className="cursor-pointer">
              <MenuIcon className="text-neutral-300" />
            </div>
            <MobileDrawer opened={opened} close={close} />
          </Flex>
        </Flex>
        {(pathname == "/hotel" || pathname == "/") && <SuggestList />}
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
  const menuData = NAVBAR_MENU;

  return (
    <Drawer
      offset={8}
      radius="md"
      opened={opened}
      onClose={close}
      size={"100%"}
      position="right"
    >
      <Stack>
        <Title order={3} mb={15}>
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

        {menuData.map((section, sectionIndex) => (
          <Stack mb={10} key={sectionIndex}>
            <Flex>
              <Title order={6} className="font-bold text-black">
                {section.title}
              </Title>
            </Flex>
            {section.items.map((item, itemIndex) => (
              <Flex
                gap={20}
                justify={"start"}
                align={"center"}
                className="text-black"
                key={itemIndex}
              >
                <div>
                  <IconComponent icon={item.icon} />
                </div>
                <Link href={item.link}>{item.text}</Link>
              </Flex>
            ))}
          </Stack>
        ))}
      </Stack>
    </Drawer>
  );
};

const MobileDropdown = () => {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Indicator color="red">
          <Avatar radius="xl" className="cursor-pointer">MK</Avatar>
        </Indicator>
      </Menu.Target>

      <Menu.Dropdown>
        <Flex
          gap={10}
          justify={"flex-start"}
          align={"center"}
          my={10}
          ml={10}
          className="text-blue-700 flex gap-2"
        >
          <Avatar radius="xl">MK</Avatar>
          <span className="text-sm">Genius level 1</span>
        </Flex>
        <Menu.Label>Account</Menu.Label>
        <Link href={"/account"}>
          <Menu.Item
            leftSection={
              <UserIcon style={{ width: rem(14), height: rem(14) }} />
            }
          >
            Manage account
          </Menu.Item>
        </Link>
        <Menu.Item
          leftSection={
            <VaultIcon style={{ width: rem(14), height: rem(14) }} />
          }
        >
          <Link href={"/booking/history"}>Bookings & Trips</Link>
        </Menu.Item>
        <Menu.Item
          leftSection={<Goal style={{ width: rem(14), height: rem(14) }} />}
        >
          Genius loyatly program
        </Menu.Item>
        <Menu.Item
          leftSection={
            <CreditCardIcon style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Rewards & Wallet
        </Menu.Item>
        <Menu.Item
          leftSection={
            <UserSquare style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Reviews
        </Menu.Item>
        <Menu.Item
          leftSection={
            <HeartIcon style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Saved
        </Menu.Item>
        <Menu.Item
          leftSection={
            <LogOutIcon style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Sign out
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

const SuggestList = () => {
  return (
    <ScrollArea className="w-full" type="never">
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

const IconComponent = ({ icon }: { icon: string }) => {
  const iconsMap: { [key: string]: JSX.Element } = {
    ShieldQuestion: <ShieldQuestion />,
    Handshake: <Handshake />,
    BadgePercent: <BadgePercent />,
    Book: <Book />,
    CircleAlert: <CircleAlert />,
    BookUser: <BookUser />,
    NotebookTabs: <NotebookTabs />,
    Cookie: <Cookie />,
    ScrollText: <ScrollText />,
    DockIcon: <DockIcon />,
    Scale: <Scale />,
  };

  return iconsMap[icon] || null;
};
