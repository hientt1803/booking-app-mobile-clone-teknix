import { BoxWrap } from "@/components/box-wrap";
import { ThreeItemFlexRow } from "@/components/common/three-item-flex-row";
import { Badge, Flex, Stack, Text } from "@mantine/core";
import { DotIcon, ParkingCircleIcon, WifiHigh } from "lucide-react";
import React from "react";

export const DetailInformation = () => {
  return (
    <React.Fragment>
      {/* Detail information */}
      <BoxWrap>
        <Stack gap={5}>
          <Flex gap={10}>
            <Text size="xs">Apartment</Text>
            <Flex gap={2}>
              <DotIcon className="bg-yellow-400 text-white w-5 h-5" />
              <DotIcon className="bg-yellow-400 text-white w-5 h-5" />
              <DotIcon className="bg-yellow-400 text-white w-5 h-5" />
            </Flex>
            <Badge variant="filled" color="yellow" radius={"sm"}>
              New to Booking.com
            </Badge>
          </Flex>

          <Text size="sm" fw={600} my={5}>
            Long Pearl Hotel Phu Quoc
          </Text>
          <Text size="xs">
            AT30 Khu Pho 6, Dai lo New An Thoim An Thoi, Phu quoc, Vietnam
          </Text>
          <Text size="xs" className="text-green-700">
            Exellent Location - 10
          </Text>
          <ThreeItemFlexRow point="9.0" status="Wonderful" review={1} />
          <Flex gap={15}>
            <Flex gap={3} align={'center'}>
              <WifiHigh className="w-5 h-5" />
              <Text size="xs">Free Wifi</Text>
            </Flex>
            <Flex gap={3} align={'center'}>
              <ParkingCircleIcon className="w-5 h-5" />
              <Text size="xs">Parking</Text>
            </Flex>
          </Flex>
        </Stack>
      </BoxWrap>
    </React.Fragment>
  );
};
