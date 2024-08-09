"use client";

import { MobileSearchGroup } from "@/components/search";
import { useAppSelector } from "@/stores";
import { convertStringToDate, daysBetweenUTC, formatDateUTC } from "@/utils";
import {
  Box,
  Checkbox,
  CheckboxGroup,
  Divider,
  Flex,
  Grid,
  Group,
  Modal,
  Stack,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";

export const PreSearchContainerr = () => {
  const searchGlobal = useAppSelector(
    (state) => state.globalSlice.searchGlobal
  );
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <React.Fragment>
      <Box className="rounded-xl p-3">
        <Stack>
          <Flex justify={"space-between"} align={"center"}>
            <Text size="xs" fw={500}>
              Your Search:{" "}
              {searchGlobal.people.adults > 0 &&
                `${searchGlobal.people.adults} adults,`}
              {searchGlobal.people.childrens > 0 &&
                `${searchGlobal.people.childrens} childrens,`}
              {searchGlobal.people.rooms > 0 &&
                `${searchGlobal.people.rooms} rooms,`}
              {daysBetweenUTC(
                convertStringToDate(searchGlobal.dateRange.startDate),
                convertStringToDate(searchGlobal.dateRange.endDate)
              )}{" "}
              nights
            </Text>
            <Text
              size="xs"
              c={"indigo"}
              fw={600}
              className="cursor-pointer"
              onClick={open}
            >
              Edit
            </Text>
          </Flex>
          <Grid className="">
            <Grid.Col span={6}>
              <Stack gap={0}>
                <Text size="xs">Check-in</Text>
                <Text size="xs" c={"indigo"} fw={600} mt={5}>
                  {formatDateUTC(
                    convertStringToDate(searchGlobal.dateRange.startDate)
                  )}
                </Text>
                <Text size="xs">2:00 PM - 12:00 AM</Text>
              </Stack>
            </Grid.Col>
            <Divider orientation="vertical" />
            <Grid.Col span={5}>
              <Stack gap={0}>
                <Text size="xs">Check-out</Text>
                <Text size="xs" c={"indigo"} fw={600} mt={5}>
                  {formatDateUTC(
                    convertStringToDate(searchGlobal.dateRange.endDate)
                  )}
                </Text>
                <Text size="xs">12:00 AM - 12:00 PM</Text>
              </Stack>
            </Grid.Col>
          </Grid>
        </Stack>
      </Box>
      <Box mt={10}>
        <Stack>
          <Text size="sm" fw={500}>
            Set your filters
          </Text>
          <Checkbox value={""} label="Breakfast included (4)" />
          <Divider />
          <CheckboxGroup>
            <Group>
              <Checkbox value={""} label="1 bed (3)" />
              <Checkbox value={""} label="2 bed (3)" />
            </Group>
          </CheckboxGroup>
        </Stack>
      </Box>

      <PreSearchModal opened={opened} close={close} />
    </React.Fragment>
  );
};

export const PreSearchModal = ({
  opened,
  close,
}: {
  opened: boolean;
  close: () => void;
}) => {
  return (
    <Modal
      opened={opened}
      onClose={close}
      title="Change your dates"
      styles={{
        title: {
          fontWeight: 700,
          fontSize: "1.3rem",
        },
        header: {
          background: "#f59f00",
        },
        content: {
          background: "#f59f00",
          borderRadius: "10px",
        },
        body: {
          padding: 0,
        },
      }}
      centered
    >
      <MobileSearchGroup
        isShowInput={false}
        buttonText="Check availability"
        buttonClassName="text-lg"
      />
    </Modal>
  );
};
