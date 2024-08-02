import { Badge, Flex, Text } from "@mantine/core";
import { DotIcon } from "lucide-react";
import React from "react";

interface IThreeItemFlexRow {
  point?: string;
  status?: string;
  review?: number | string;
}

export const ThreeItemFlexRow = (props: IThreeItemFlexRow) => {
  return (
    <Flex gap={5} mt={10} align={"center"} wrap={"wrap"}>
      <Badge variant="filled" color="#1e3a8a" size="xs">
        {props.point}
      </Badge>
      <Text size="xs">{props.status}</Text> <DotIcon className="w-3 h-3" />
      <Text size="xs" c={"dimmed"}>
        {props.review?.valueOf == String
          ? props.review
          : `${props.review} reviews`}
      </Text>
    </Flex>
  );
};
