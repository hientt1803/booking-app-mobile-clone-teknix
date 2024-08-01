import { OutlineBadge } from "@/components/badge";
import {
  Badge,
  Button,
  Card,
  Flex,
  Pill,
  Stack,
  Text,
  Tooltip,
} from "@mantine/core";
import {
  AlertCircleIcon,
  BathIcon,
  BedIcon,
  CheckIcon,
  DotIcon,
  House,
  ImageIcon,
  MountainSnow,
  SnowflakeIcon,
  Tv2,
  UserIcon,
} from "lucide-react";
import React from "react";

export const BookingCard = () => {
  return (
    <Card withBorder>
      <Stack gap={2}>
        <Flex justify={"space-between"} align={"center"} mb={10}>
          <Text c="indigo" fw={600} className="underline">
            Deluxe Double Room
          </Text>
          <ImageIcon className="text-blue-600" />
        </Flex>
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
        <Button variant="outline" color="indigo" fullWidth>
          Reserve
        </Button>
      </Stack>
    </Card>
  );
};
