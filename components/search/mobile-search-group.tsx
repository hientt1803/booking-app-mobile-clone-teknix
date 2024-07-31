"use client";

import {
  Autocomplete,
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Group,
  Pill,
  Radio,
  Stack,
  Text
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { BedIcon, CalendarDays, ChevronDownSquareIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const MobileSearchGroup = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <Box bg={"#f59f00"} p={6} mt={20}>
      <Stack>
        <Autocomplete
          data={["Can Tho", "Saigon", "Da Nang"]}
          leftSectionPointerEvents="none"
          leftSection={<BedIcon />}
          // label="Your favorite library"
          placeholder="Around curent location?"
        />

        {/* Todo: find date time lib */}
        <Grid justify={"space-between"} p={6} grow gutter="sm">
          <Grid.Col span={6} bg={"#fff"} p={5}>
            <DatePickerInput
              leftSection={<CalendarDays />}
              // leftSectionPointerEvents="none"
              // w={210}
              label="Check-in date"
              placeholder="Start Date"
              value={startDate}
              onChange={setStartDate}
            />
          </Grid.Col>
          <Grid.Col span={6} bg={"#fff"} p={5}>
            <DatePickerInput
              leftSection={<CalendarDays />}
              // leftSectionPointerEvents="none"
              // w={210}
              label="Check-out date"
              placeholder="End Date"
              value={endDate}
              onChange={setEndDate}
            />
          </Grid.Col>
        </Grid>

        <Box bg={"#fff"} p={6}>
          <Grid>
            <Grid.Col span={4}>
              <Autocomplete
                label="Adults"
                placeholder="0"
                data={["0", "1", "2", "3", "4", "5", "6", "7", "8"]}
                rightSection={<ChevronDownSquareIcon />}
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <Autocomplete
                label="Children"
                placeholder="0"
                data={["0", "1", "2", "3", "4", "5", "6", "7", "8"]}
                rightSection={<ChevronDownSquareIcon />}
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <Autocomplete
                label="Rooms"
                placeholder="0"
                data={["0", "1", "2", "3", "4", "5", "6", "7", "8"]}
                rightSection={<ChevronDownSquareIcon />}
              />
            </Grid.Col>
          </Grid>
        </Box>

        <Card p={0}>
          <Box
            bg={"#f1f1f1"}
            p={5}
            className="flex justify-between items-center"
          >
            <Text>Are you traveling for work?</Text>
            <Pill bg={"#fff"}>?</Pill>
          </Box>
          <Card.Section m={20}>
            <Radio.Group name="traverling-radio">
              <Group mt="xs" justify={"start"} align={"center"}>
                <Radio value="0" label="Yes" />
                <Divider orientation="vertical" />
                <Radio value="1" label="No" />
              </Group>
            </Radio.Group>
          </Card.Section>
        </Card>

        {/* Button */}
        <Button color="blue" variant="filled">
          <Link href="/hotel">Search</Link>
        </Button>
      </Stack>
    </Box>
  );
};
