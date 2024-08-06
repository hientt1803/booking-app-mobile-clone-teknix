"use client";

import {
  Badge,
  Box,
  Divider,
  Drawer,
  Flex,
  Grid,
  GridCol,
  Radio,
  ScrollArea,
  Select,
  Stack,
  Tabs,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import React, { useState } from "react";

import { cn } from "@/lib";
import { daysBetweenUTC, fortmateDate } from "@/utils";
import { toastError } from "@/utils/toast";
import { useDisclosure } from "@mantine/hooks";
import { addDays } from "date-fns";
import { Calendar, PlusIcon } from "lucide-react";
import { DateRangePicker } from "react-date-range";
import { PrimaryButton } from "../button";

interface IDateInput {
  dateRange: any;
  setDateRange: any;
  isChangeDate?: boolean;
  setIsChangeDate?: any;
}

const MOCK_DATA = [
  {
    id: 1,
    title: "exact dates",
    value: 0,
    icon: "",
    active: false,
  },
  {
    id: 2,
    title: "1 days",
    value: 1,
    icon: <PlusIcon className="w-4 h-4" />,
    active: false,
  },
  {
    id: 3,
    title: "2 days",
    value: 2,
    icon: <PlusIcon className="w-4 h-4" />,
    active: false,
  },
  {
    id: 4,
    title: "3 days",
    value: 3,
    icon: <PlusIcon className="w-4 h-4" />,
    active: false,
  },
  {
    id: 5,
    title: "7 days",
    value: 7,
    icon: <PlusIcon className="w-4 h-4" />,
    active: false,
  },
];

const MONTHS_DATA = [
  {
    id: 1,
    icon: <Calendar className="w-4 h-4" />,
    value: 30,
    title: "Aug",
    year: 2024,
    active: false,
  },
  {
    id: 2,
    icon: <Calendar className="w-4 h-4" />,
    value: 60,
    title: "Sep",
    year: 2024,
    active: false,
  },
  {
    id: 3,
    icon: <Calendar className="w-4 h-4" />,
    value: 90,
    title: "Oct",
    year: 2024,
    active: false,
  },
  {
    id: 4,
    icon: <Calendar className="w-4 h-4" />,
    value: 120,
    title: "Nov",
    year: 2024,
    active: false,
  },
  {
    id: 5,
    icon: <Calendar className="w-4 h-4" />,
    value: 150,
    title: "Dec",
    year: 2024,
    active: false,
  },
  {
    id: 6,
    icon: <Calendar className="w-4 h-4" />,
    value: 180,
    title: "Jan",
    year: 2025,
    active: false,
  },
  {
    id: 7,
    icon: <Calendar className="w-4 h-4" />,
    value: 210,
    title: "Feb",
    year: 2025,
    active: false,
  },
  {
    id: 8,
    icon: <Calendar className="w-4 h-4" />,
    value: 240,
    title: "Mar",
    year: 2025,
    active: false,
  },
  {
    id: 9,
    icon: <Calendar className="w-4 h-4" />,
    value: 270,
    title: "Jul",
    year: 2025,
    active: false,
  },
];

export const DateInputCustom = ({
  dateRange,
  setDateRange,
  isChangeDate,
  setIsChangeDate,
}: IDateInput) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [datesCalendarChoosen, setDatesDalendarChoosen] = useState(MOCK_DATA);
  const [dateFlexiable, setDateFlexiable] = useState(MONTHS_DATA);
  const [selectedMonths, setSelectedMonths] = useState<number[]>([]);
  const [isOtherDayStaySelected, setIsOtherDayStaySelected] = useState(false);

  const handleResetData = () => {
    setDateFlexiable(MONTHS_DATA);
    setDatesDalendarChoosen(MOCK_DATA);
    setSelectedMonths([]);
    setIsOtherDayStaySelected(false);
    setDateRange([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ]);
  };

  const handleChoosDateCalendar = (id: number) => {
    const newDateArray = datesCalendarChoosen.map((item) => {
      if (item.id == id) {
        setDateRange([
          {
            startDate: new Date(),
            endDate: addDays(new Date(), Number(item.value)),
            key: "selection",
          },
        ]);

        return {
          ...item,
          active: true,
        };
      }
      return {
        ...item,
        active: false,
      };
    });
    setDatesDalendarChoosen(newDateArray);
  };

  const handleChoosDateFlexibleTab = (id: number) => {
    if (selectedMonths.includes(id)) {
      const newSelectedMonths = selectedMonths.filter(
        (monthId) => monthId !== id
      );
      setSelectedMonths(newSelectedMonths);
      setDateFlexiable(
        dateFlexiable.map((item) => {
          setDateRange([
            {
              startDate: new Date(),
              endDate: addDays(new Date(), Number(item.value)),
              key: "selection",
            },
          ]);
          return item.id === id ? { ...item, active: false } : item;
        })
      );
    } else if (selectedMonths.length < 3) {
      setSelectedMonths([...selectedMonths, id]);
      setDateFlexiable(
        dateFlexiable.map((item) => {
          setDateRange([
            {
              startDate: new Date(),
              endDate: addDays(new Date(), Number(item.value)),
              key: "selection",
            },
          ]);
          return item.id === id ? { ...item, active: true } : item;
        })
      );
    } else {
      toastError("You can only select up to 3 months.");
    }
  };

  const handleOnChangeDateRangeByRadio = (value: number) => {
    setDateRange([
      {
        startDate: new Date(),
        endDate: addDays(new Date(), value),
        key: "selection",
      },
    ]);
  };

  const handleOnUpdateValueAndCloseModal = () => {
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
              <Stack gap={0}>
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
              <Stack gap={0}>
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
          size={"xl"}
          styles={{
            title: {
              fontWeight: 700,
            },
            content: {
              borderRadius: "20px 20px 0 0",
            },
          }}
        >
          <Box className="min-w-full">
            <Tabs
              defaultValue="calendar"
              className="min-w-full"
              styles={{
                tabLabel: {
                  active: {
                    color: "#228be6",
                  },
                },
              }}
            >
              <Tabs.List grow>
                <Tabs.Tab
                  value="calendar"
                  onClick={() => {
                    handleResetData();
                  }}
                >
                  Calendar
                </Tabs.Tab>
                <Tabs.Tab
                  value="flexiable"
                  onClick={() => {
                    handleResetData();
                  }}
                >
                  {`I'm`} flexible
                </Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="calendar">
                <DateRangePicker
                  onChange={(item) => setDateRange([item.selection])}
                  showPreview
                  className="min-w-full"
                  moveRangeOnFirstSelection={false}
                  months={12}
                  ranges={dateRange}
                  direction="vertical"
                  inputRanges={[]}
                  staticRanges={[]}
                  showDateDisplay={false}
                />

                <Box
                  bg={"#fff"}
                  p={5}
                  className="sticky bottom-0 left-0 right-0 w-full p-2"
                >
                  <Divider my={20} />
                  <ScrollArea
                    className="w-full"
                    scrollbarSize={2}
                    mb={10}
                    type="hover"
                  >
                    <Box className="flex gap-2">
                      {datesCalendarChoosen.map((item, index) => (
                        <Badge
                          key={index}
                          leftSection={item.icon}
                          color="blue"
                          onClick={() => handleChoosDateCalendar(item.id)}
                          variant={item.active ? "light" : "outline"}
                          size={"xs"}
                          className={cn(
                            "cursor-pointer rounded-2xl py-5 px-2 w-full text-neutral-600 border-neutral-300"
                          )}
                        >
                          {item.title}
                        </Badge>
                      ))}
                    </Box>
                  </ScrollArea>
                  <Text size="xs" ta={"center"} my={15}>
                    {fortmateDate(dateRange[0].startDate)} -{" "}
                    {fortmateDate(dateRange[0].endDate)}
                    {`(${daysBetweenUTC(
                      dateRange[0].startDate,
                      dateRange[0].endDate
                    )} night stay)`}
                  </Text>
                  <PrimaryButton
                    fullWidth
                    onClick={handleOnUpdateValueAndCloseModal}
                  >
                    Done
                  </PrimaryButton>
                </Box>
              </Tabs.Panel>

              <Tabs.Panel value="flexiable">
                <Stack gap={10} mt={20}>
                  <Title order={4}>How long you want to stay?</Title>

                  <Radio.Group name="stay" withAsterisk>
                    <Stack gap={10}>
                      <Radio
                        value="2"
                        label="A Weekend"
                        onClick={() => {
                          handleOnChangeDateRangeByRadio(2);
                          setIsOtherDayStaySelected(false);
                        }}
                      />
                      <Radio
                        value="7"
                        label="A Week"
                        onClick={() => {
                          handleOnChangeDateRangeByRadio(7);
                          setIsOtherDayStaySelected(false);
                        }}
                      />
                      <Radio
                        value="30"
                        label="A Month"
                        onClick={() => {
                          handleOnChangeDateRangeByRadio(30);
                          setIsOtherDayStaySelected(false);
                        }}
                      />
                      <Radio
                        value="other"
                        label="Other"
                        onClick={() => setIsOtherDayStaySelected(true)}
                      />
                    </Stack>
                  </Radio.Group>

                  {isOtherDayStaySelected && (
                    <Flex
                      justify={"space-between"}
                      align={"center"}
                      gap={15}
                      mt={20}
                    >
                      <TextInput
                        rightSectionPointerEvents="none"
                        rightSection={"Nights"}
                        placeholder="1"
                        styles={{
                          section: {
                            width: "70px",
                          },
                        }}
                        className="flex-1"
                        type="number"
                        onChange={(event) => {
                          setDateRange([
                            {
                              startDate: new Date(),
                              endDate: addDays(
                                new Date(),
                                Number(event.target.value)
                              ),
                              key: "selection",
                            },
                          ]);
                        }}
                      />
                      <Select
                        label=""
                        placeholder="From monday"
                        data={[
                          "Monday",
                          "TueDay",
                          "Wednesday",
                          "ThurdsDay",
                          "Friday",
                          "Saturday",
                          "Sunday",
                        ]}
                      />
                    </Flex>
                  )}

                  <Title order={4} mt={20}>
                    When do you want to go?
                  </Title>
                  <Text size="xs" c={"dimmed"}>
                    Select up to 3 months
                  </Text>

                  <ScrollArea className="w-full" scrollbarSize={2} type="hover">
                    <Box className="flex gap-2">
                      {dateFlexiable.map((month, index) => (
                        <Stack
                          key={index}
                          justify="center"
                          align="center"
                          className={
                            (cn("border-2 border-neutral-200 rounded-md"),
                            month.active
                              ? "border-blue-300 rounded-md border-2 bg-blue-50 text-blue-800"
                              : selectedMonths.length === 3 && !month.active
                              ? "border-neutral-200 rounded-md border-2 bg-neutral-50"
                              : "border-2 border-neutral-200 rounded-md")
                          }
                          p={15}
                          gap={5}
                          onClick={() => handleChoosDateFlexibleTab(month.id)}
                        >
                          <Calendar className="w-5 h-5" />
                          <Text size="xs" fw={700}>
                            {month.title}
                          </Text>
                          <Text size="xs">{month.year}</Text>
                        </Stack>
                      ))}
                    </Box>
                  </ScrollArea>
                </Stack>

                <Box
                  bg={"#fff"}
                  p={5}
                  className="fixed bottom-2 left-0 right-0 w-full p-2"
                >
                  <Divider my={20} />
                  <Text size="xs" ta={"center"} my={15}>
                    {`(${daysBetweenUTC(
                      dateRange[0].startDate,
                      dateRange[0].endDate
                    )} night stay)`}
                  </Text>
                  <PrimaryButton
                    fullWidth
                    onClick={handleOnUpdateValueAndCloseModal}
                    disable={selectedMonths.length === 0}
                    className="fw-bold"
                  >
                    Done
                  </PrimaryButton>
                </Box>
              </Tabs.Panel>
            </Tabs>
          </Box>
        </Drawer>
      </Box>
    </React.Fragment>
  );
};
