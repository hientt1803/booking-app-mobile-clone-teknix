import { Badge, Flex, Rating, Space, Stack, Text, Title } from "@mantine/core";
import { DotIcon, HeartIcon, Share2Icon, ThumbsUpIcon } from "lucide-react";
import React from "react";

export const HeaderInformation = () => {
  return (
    <Stack mt={30} mb={20}>
      <Flex justify={"space-between"}>
        <Flex gap={5}>
          <Rating value={5} />
          <Badge color="#fcc419" size="xs" p={7}>
            <ThumbsUpIcon
              style={{
                width: "15px",
                height: "15px",
              }}
            />
          </Badge>
        </Flex>
        <Flex gap={10}>
          <HeartIcon />
          <Share2Icon />
        </Flex>
      </Flex>
      <Title order={3}>Sheraton Can Tho</Title>
      <Flex mt={0} pt={0}>
        <Text size="xs">
          209, 30/4 Road, Xuan Khanh Ward, Ninh Kieu District, Can Tho
          <span>
            <span className="mx-2">-</span>
            <span className="text-green-900">Excellent Location</span>
          </span>
          <span>
            <span className="mx-2">-</span>{" "}
            <span className="text-blue-700">Show on map</span>
          </span>
        </Text>
      </Flex>
      <Flex gap={5} align={'center'}>
        <Badge variant="filled" color="#1e3a8a" size="xs">
          9.0
        </Badge>
        <Text size="xs">Wonderful</Text>
        <span>
          <DotIcon className="w-3 h-3"/>
        </span>
        <Text size="xs" c={"dimmed"}>
          835 reviews
        </Text>
      </Flex>
    </Stack>
  );
};
