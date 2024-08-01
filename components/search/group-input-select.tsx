"use client";

import { Box, Divider, Drawer, Flex, Grid, Stack, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { PrimaryButton } from "../button";
import { GroupInputQuantity } from "../input";

interface IGroupPeopleInput {
  adults: number;
  setAdults: (value: number) => void;
  childrenCount: number;
  setChildren: (value: number) => void;
  rooms: number;
  setRooms: (value: number) => void;
}

export const GroupPeopleInput = (props: IGroupPeopleInput) => {
  const { adults, setAdults, childrenCount, setChildren, rooms, setRooms } =
    props;
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Box p={6}>
      <Grid onClick={open} bg={"#fff"} className="rounded-sm px-2">
        <Grid.Col span={4}>
          <Stack>
            <Text size="xs" fw={550}>
              Adults
            </Text>
            <Text size="xs" fw={550}>
              {adults}
            </Text>
          </Stack>
        </Grid.Col>
        <Divider orientation="vertical" />
        <Grid.Col span={4}>
          <Stack>
            <Text size="xs" fw={550}>
              Children
            </Text>
            <Text size="xs" fw={550}>
              {childrenCount}
            </Text>
          </Stack>
        </Grid.Col>
        <Divider orientation="vertical" />
        <Grid.Col span={3}>
          <Stack>
            <Text size="xs" fw={550}>
              Rooms
            </Text>
            <Text size="xs" fw={550}>
              {rooms}
            </Text>
          </Stack>
        </Grid.Col>
      </Grid>

      <Drawer opened={opened} onClose={close} position="bottom" size={"lg"}>
        <Stack className="min-h-screen">
          <Flex justify={"space-between"} align="center" mb={10}>
            <Text size="xs" fw={600}>
              Adults
            </Text>
            <GroupInputQuantity quantity={adults} setQuantity={setAdults} />
          </Flex>
          <Flex justify={"space-between"} align="center" mb={10}>
            <Text size="xs" fw={600}>
              Children
            </Text>
            <GroupInputQuantity
              quantity={childrenCount}
              setQuantity={setChildren}
            />
          </Flex>
          <Flex justify={"space-between"} align="center" mb={10}>
            <Text size="xs" fw={600}>
              Rooms
            </Text>
            <GroupInputQuantity quantity={rooms} setQuantity={setRooms} />
          </Flex>
        </Stack>

        <PrimaryButton
          fullWidth
          className="sticky bottom-4 left-0 right-0"
          onClick={close}
        >
          Done
        </PrimaryButton>
      </Drawer>
    </Box>
  );
};
