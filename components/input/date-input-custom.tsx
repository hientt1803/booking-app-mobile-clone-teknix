"use client";

import { Box, Drawer, Grid, GridCol, Stack, Text } from "@mantine/core";
import React, { Dispatch } from "react";

import { fortmateDate } from "@/utils";
import { useDisclosure } from "@mantine/hooks";
import { DateRangePicker } from "react-date-range";
import { PrimaryButton } from "../button";

interface IDateInput {
  dateRange: any;
  setDateRange: Dispatch<any>;
}

export const DateInputCustom = ({ dateRange, setDateRange }: IDateInput) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <React.Fragment>
      <Box p={6}>
        <Grid onClick={open}>
          <GridCol span={6} bg={"#fff"} className="rounded-sm">
            <Stack>
              <Text size="xs">Check-in date</Text>
              <Text size="sm" fw={600}>
                {fortmateDate(dateRange[0].startDate)}
              </Text>
            </Stack>
          </GridCol>
          <GridCol span={6} bg={"#fff"} className="rounded-sm">
            <Stack>
              <Text size="xs">Check-out date</Text>
              <Text size="sm" fw={600}>
                {fortmateDate(dateRange[0].endDate)}
              </Text>
            </Stack>
          </GridCol>
        </Grid>
        <Drawer opened={opened} onClose={close} position="bottom" size={"lg"}>
          <Stack>
            <DateRangePicker
              onChange={(item) => setDateRange([item.selection])}
              showPreview
              moveRangeOnFirstSelection={false}
              months={12}
              ranges={dateRange}
              direction="vertical"
            />
          </Stack>

          <Box bg={"#fff"} p={5} className="sticky bottom-0 left-0 right-0">
            <PrimaryButton fullWidth onClick={close}>
              Done
            </PrimaryButton>
          </Box>
        </Drawer>
      </Box>
    </React.Fragment>
  );
};
