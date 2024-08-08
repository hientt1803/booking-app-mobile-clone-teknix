"use client";

import { OutlineBadge } from "@/components/badge";
import { PrimaryButton } from "@/components/button";
import { GroupInputQuantity } from "@/components/input";
import {
  Badge,
  Box,
  Button,
  Card,
  Collapse,
  Divider,
  Flex,
  Group,
  Radio,
  Stack,
  Text,
  Tooltip,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  AlertCircleIcon,
  BathIcon,
  BedIcon,
  CheckIcon,
  ChevronRightIcon,
  CreditCardIcon,
  DotIcon,
  House,
  ImageIcon,
  MountainSnow,
  SnowflakeIcon,
  Tv2,
  UserIcon,
  XCircleIcon,
} from "lucide-react";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { RoomDetail } from "./room-detail";

const data = [
  {
    name: "No smoking",
  },
  {
    name: "Smoking allowed",
  },
];

export const BookingCard = () => {
  const [opened, { toggle }] = useDisclosure(false);

  // state
  const [bedCount, setBedCount] = useState(0);
  const [value, setValue] = useState<string | null>(null);

  const totalPrice = useMemo(() => (bedCount * 900).toFixed(2), [bedCount]);

  // Logic
  const cards = data.map((item) => (
    <Radio.Card
      className="p-2 w-fit"
      radius="md"
      value={item.name}
      key={item.name}
    >
      <Group wrap="nowrap" align="flex-start">
        <Radio.Indicator />
        <div>
          <Text>{item.name}</Text>
        </div>
      </Group>
    </Radio.Card>
  ));

  return (
    <Card withBorder className={opened ? "border-green-600 border-2" : ""}>
      <Stack gap={2}>
        <RoomDetail roomName="Deluxe Double Room" />
        <Flex gap={1} align={"center"}>
          <Text size="xs">Price for up to: </Text>
          <UserIcon className="w-4 h-4 font-bold" />
          <UserIcon className="w-4 h-4 font-bold" />
        </Flex>
        <Flex gap={1} align={"center"}>
          <Text size="xs" fw={600}>
            Bed:{" "}
          </Text>
          <Text size="xs">1 King bed: </Text>
          <BedIcon className="w-4 h-4 font-bold" />
        </Flex>
        <Flex gap={3} justify={"flex-start"} align={"center"} wrap={"wrap"}>
          <OutlineBadge
            title="15 m2"
            icon={<House className="w-3 h-3" />}
            className="px-1 py-2 w-fit"
          />
          <OutlineBadge
            title="View"
            icon={<MountainSnow className="w-3 h-3" />}
            className="px-1 py-2 w-fit"
          />
          <OutlineBadge
            title="Bathtub"
            icon={<BathIcon className="w-3 h-3" />}
            className="px-1 py-2 w-fit"
          />
          <OutlineBadge
            title="Air condition"
            icon={<SnowflakeIcon className="w-3 h-3" />}
            className="px-1 py-2 w-fit"
          />
          <OutlineBadge
            title="Flat-screen TV"
            icon={<Tv2 className="w-3 h-3" />}
            className="px-1 py-2 w-fit"
          />
        </Flex>
        <Flex align={"center"} gap={3}>
          <DotIcon className="w-3 h-3" />
          <Text fw={600} size="xs">
            Total cost to cancel
          </Text>
        </Flex>
        <Flex align={"center"} gap={3}>
          <CheckIcon className="w-3 h-3" />
          <Text size="xs">
            <strong>No repayment needed</strong>- pay at the property
          </Text>
        </Flex>

        <Badge color="#087f5b" variant="filled" radius={"sm"} size="xs">
          Limited-time Deal
        </Badge>
        <Text size="xs">
          price for <span>15 nights</span>
        </Text>
        <Text size="xs" c={"red"} className="line-through">
          VND 22,350,000
        </Text>
        <Flex gap={4} align={"center"}>
          <Text size="md" c={"dark"} fw={700}>
            VND 13,410,000
          </Text>
          <Tooltip label="Tooltip" position="right" offset={10}>
            <AlertCircleIcon className="w-4 h-4" />
          </Tooltip>
        </Flex>
        <Text size="xs" c={"dimmed"}>
          includes taxes and fees
        </Text>
        <Button onClick={toggle} variant="outline" color="blue" fullWidth>
          {!opened ? (
            "Reserve"
          ) : (
            <React.Fragment>
              <XCircleIcon className="w-4 h-4" /> Remove
            </React.Fragment>
          )}
        </Button>
        <Box>
          <Collapse in={opened} mt={20}>
            <Text size="xs" fw={700} c="red">
              You selected the last one!
            </Text>
            <Flex justify={"flex-start"} align={"center"}>
              <Text size="xs" fw={600}>
                Bed quanity:
              </Text>
              <GroupInputQuantity
                quantity={bedCount}
                setQuantity={setBedCount}
              />
            </Flex>

            <Stack>
              <Radio.Group value={value} onChange={setValue}>
                <Stack pt="md" gap="xs">
                  <Text size="sm" fw={600}>
                    Smoking preference (if available)
                  </Text>
                  <Flex gap={10}>{cards}</Flex>
                </Stack>
              </Radio.Group>
            </Stack>

            <Divider my={10} />

            <Box>
              <Text size="sm">
                <strong>
                  {bedCount} bed selected: VND {totalPrice}
                </strong>{" "}
                includes taxes and fees
              </Text>
              <Text size="xs">
                (10 nights, Web, Aug 14, 2024 - Sat, Aug 24,2024)
              </Text>
            </Box>

            <Stack mt={20} gap={5}>
              <Flex gap={5} align={"center"}>
                <CreditCardIcon className="text-green-700" />
                <Text size="xs" className="text-green-700">
                  No credit card needed
                </Text>
              </Flex>
              <Text size="xs">Confirmation is immediate</Text>
              <Link href="/reserve">
                <PrimaryButton fullWidth>
                  Next step <ChevronRightIcon className="w-5 h-5" />
                </PrimaryButton>
              </Link>
            </Stack>
          </Collapse>
        </Box>
      </Stack>
    </Card>
  );
};
