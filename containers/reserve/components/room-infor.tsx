import { OutlineBadge } from "@/components/badge";
import { BoxWrap } from "@/components/box-wrap";
import { Flex, Stack, Text } from "@mantine/core";
import {
    BathIcon,
  CheckCircle,
  CheckIcon,
  CigaretteIcon,
  DotIcon,
  HelpCircleIcon,
  House,
  MountainSnow,
  SnowflakeIcon,
  Tv2,
  UsersIcon,
} from "lucide-react";
import React from "react";

export const RoomInfor = () => {
  return (
    <BoxWrap>
      <Stack gap={8}>
        <Flex gap={15} align={"center"}>
          <CheckCircle className="w-5 h-5 text-green-700" />
          <Text size="xs" className="text-green-700">
            Includes parking + late check-in + high-speed internet
          </Text>
          <HelpCircleIcon className="w-4 h-4" />
        </Flex>
        <Flex gap={15} align={"center"}>
          <DotIcon className="w-5 h-5" />
          <Text size="xs" fw={600}>
            Total cost to cancle
          </Text>
          <HelpCircleIcon className="w-4 h-4" />
        </Flex>
        <Flex gap={15} align={"center"}>
          <CheckIcon className="w-5 h-5" />
          <Text size="xs">
            <strong>No prepayment needed</strong> - pay at the property
          </Text>
          <HelpCircleIcon className="w-4 h-4" />
        </Flex>
        <Flex gap={15} align={"center"}>
          <UsersIcon className="w-5 h-5" />
          <Text size="xs">
            <strong>Guest</strong> 1 adult
          </Text>
          <HelpCircleIcon className="w-4 h-4" />
        </Flex>
        <Flex gap={15} align={"center"}>
          <CigaretteIcon className="w-5 h-5" />
          <Text size="xs">No smoking</Text>
        </Flex>

        <Flex gap={3} justify={"flex-start"} align={"center"} wrap={"wrap"}>
          <OutlineBadge
            title="15 m2"
            icon={<House className="w-3 h-3"/>}
            className="px-1 py-2 w-fit"
          />
          <OutlineBadge
            title="View"
            icon={<MountainSnow className="w-3 h-3"/>}
            className="px-1 py-2 w-fit"
          />
          <OutlineBadge
            title="Bathtub"
            icon={<BathIcon className="w-3 h-3"/>}
            className="px-1 py-2 w-fit"
          />
          <OutlineBadge
            title="Air condition"
            icon={<SnowflakeIcon className="w-3 h-3"/>}
            className="px-1 py-2 w-fit"
          />
          <OutlineBadge
            title="Flat-screen TV"
            icon={<Tv2 className="w-3 h-3"/>}
            className="px-1 py-2 w-fit"
          />
        </Flex>
      </Stack>
    </BoxWrap>
  );
};
