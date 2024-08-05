"use client";

import {
  Box,
  Divider,
  Drawer,
  Grid,
  GridCol,
  ScrollArea,
  Stack,
  Text,
} from "@mantine/core";
import React, { Dispatch } from "react";

import { fortmateDate } from "@/utils";
import { useDisclosure } from "@mantine/hooks";
import { DateRangePicker } from "react-date-range";
import { PrimaryButton } from "../button";

interface IDateInput {
  dateRange: any;
  setDateRange: Dispatch<any>;
  isChangeDate?: boolean;
  setIsChangeDate?: any;
}

export const DateInputCustom = ({
  dateRange,
  setDateRange,
  isChangeDate,
  setIsChangeDate,
}: IDateInput) => {
  const [opened, { open, close }] = useDisclosure(false);

  const handleOnClick = () => {
    close();
    if (isChangeDate !== undefined || isChangeDate !== undefined) {
      setIsChangeDate(true);
    }
  };

  return (
    <React.Fragment>
      <Box p={6}>
        <Grid gutter={"xs"} onClick={open}>
          <GridCol span={6} className="rounded-sm">
            <Box bg={"#fff"} p={3} className="rounded-sm">
              <Stack gap={3}>
                <Text size="xs">Check-in date</Text>
                <Text size="sm" fw={600}>
                  {fortmateDate(dateRange[0].startDate)}
                </Text>
              </Stack>
            </Box>
          </GridCol>
          <GridCol span={6} pl={5} className="rounded-sm">
            <Box bg={"#fff"} p={3} className="rounded-sm">
              <Divider orientation="vertical" />
              <Stack gap={3}>
                <Text size="xs">Check-out date</Text>
                <Text size="sm" fw={600}>
                  {fortmateDate(dateRange[0].endDate)}
                </Text>
              </Stack>
            </Box>
          </GridCol>
        </Grid>
        <Drawer
          opened={opened}
          onClose={close}
          position="bottom"
          size={"lg"}
          title="Choose your start date & end Date"
          styles={{
            title: {
              fontWeight: 700,
            },
          }}
        >
          <ScrollArea className="w-full">
            <Box className="w-full pr-2">
              <DateRangePicker
                onChange={(item) => setDateRange([item.selection])}
                showPreview
                moveRangeOnFirstSelection={false}
                months={12}
                ranges={dateRange}
                direction="vertical"
              />
            </Box>
          </ScrollArea>

          <Box
            bg={"#fff"}
            p={5}
            className="sticky bottom-0 left-0 right-0 w-full p-2"
          >
            <PrimaryButton fullWidth onClick={handleOnClick}>
              Done
            </PrimaryButton>
          </Box>
        </Drawer>
      </Box>
    </React.Fragment>
  );
};
