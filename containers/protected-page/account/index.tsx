import {
  Box,
  Container,
  Divider,
  Flex,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  BellIcon,
  BookUser,
  CreditCardIcon,
  Settings2Icon,
  SquareChevronUpIcon,
  UserPlus2,
  Users2,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const ACOUNT_DATA = [
  {
    title: "Personal details",
    desc: "Update your info and find out how it is used.",
    icon: <UserPlus2 />,
    url: "/account/personal",
  },
  {
    title: "Preferences",
    desc: "Change your language, currency, and accessibility requirements.",
    icon: <Settings2Icon />,
    url: "/account/preferences",
  },
  {
    title: "Security",
    desc: "Change your security settings, setup secure authentication, or delete your account",
    icon: <SquareChevronUpIcon />,
    url: "/account/security",
  },
  {
    title: "Payment details",
    desc: "Securely add or remove payment methods to make it easier when you book",
    icon: <CreditCardIcon />,
    url: "/account/payment",
  },
  {
    title: "Privacy",
    desc: "Exercise your privacy rights and control how your data is used.",
    icon: <BookUser />,
    url: "/account/privacy",
  },
  {
    title: "Email notifications",
    desc: "Decide what you want to be notified about and unsubscribe from what you don't.",
    icon: <BellIcon />,
    url: "/account/notifications",
  },
  {
    title: "Other travelers",
    desc: "Add or edit info about the people you're traveling with.",
    icon: <Users2 />,
    url: "/account/travelers",
  },
];

export const AccountContainer = () => {
  return (
    <Box bg={"#fff"}>
      <Container>
        <Box mb={20} pt={20}>
          <Title order={2}>Account settings</Title>
          <Text size="sm" mt={10}>
            Manage your Booking.com experience
          </Text>
        </Box>
      </Container>
      <Stack gap={5} pb={30}>
        {ACOUNT_DATA.map((item, index) => (
          <AccountItem
            key={index}
            title={item.title}
            desc={item.desc}
            icon={item.icon}
            url={item.url}
          />
        ))}
      </Stack>
    </Box>
  );
};

export const AccountItem = (props: {
  icon: any;
  title: string;
  desc: string;
  url: string;
}) => {
  return (
    <Box my={10} className="hover:bg-neutral-100">
      <Divider />
      <Container>
        <Box my={15}>
          <Link href={props.url}>
            <Flex justify={"flex-start"} gap={5} align={"center"}>
              <span className="bg-neutral-100 rounded-2xl p-2">
                {props.icon}
              </span>
              <Stack gap={5}>
                <Text size="md" fw={600}>
                  {props.title}
                </Text>
                <Text size="xs">{props.desc}</Text>
              </Stack>
            </Flex>
          </Link>
        </Box>
      </Container>
      <Divider/>
    </Box>
  );
};
