"use client";

import { OutlineBadge } from "@/components/badge";
import { BoxWrap } from "@/components/box-wrap";
import { PrimaryButton } from "@/components/button";
import { GroupInputQuantity } from "@/components/input";
import { useAppSelector } from "@/stores";
import { convertStringToDate, daysBetweenUTC, formatDateUTC } from "@/utils";
import {
  Accordion,
  Box,
  Container,
  Divider,
  Drawer,
  Flex,
  Grid,
  Stack,
  Table,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  BathIcon,
  BedDouble,
  CakeIcon,
  CheckIcon,
  CircleIcon,
  CreditCardIcon,
  DotIcon,
  House,
  ImageIcon,
  SnowflakeIcon,
  TimerReset,
  Tv2,
  WifiHigh,
} from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useState } from "react";

const CaroucelImage = dynamic(
  () => import("@/components/caroucel").then((mob) => mob.CaroucelImage),
  { ssr: false }
);

const images = [
  {
    original: "/assets/images/booking-banner-home.jpeg",
    thumbnail: "/assets/images/booking-banner-home.jpeg",
  },
  {
    original: "/assets/images/booking-banner-home.jpeg",
    thumbnail: "/assets/images/booking-banner-home.jpeg",
  },
  {
    original: "/assets/images/booking-banner-home.jpeg",
    thumbnail: "/assets/images/booking-banner-home.jpeg",
  },
  {
    original: "/assets/images/booking-banner-home.jpeg",
    thumbnail: "/assets/images/booking-banner-home.jpeg",
  },
  {
    original: "/assets/images/booking-banner-home.jpeg",
    thumbnail: "/assets/images/booking-banner-home.jpeg",
  },
  {
    original: "/assets/images/booking-banner-home.jpeg",
    thumbnail: "/assets/images/booking-banner-home.jpeg",
  },
];

interface IRoomDetail {
  roomName: string;
}

export const RoomDetail = ({ roomName }: IRoomDetail) => {
  const searchGlobal = useAppSelector(
    (state) => state.globalSlice.searchGlobal
  );
  const [opened, { open, close }] = useDisclosure(false);
  const [quantity, setQuantity] = useState(1);

  return (
    <React.Fragment>
      <Drawer
        opened={opened}
        onClose={close}
        position="bottom"
        size="90%"
        styles={{
          body: {
            background: "#f1f1f1",
            padding: 0,
          },
          content: {
            borderRadius: "15px 0 15px 0",
          },
        }}
      >
        <Stack gap={3}>
          <Box bg={"#fff"}>
            <Container>
              <Box>
                <Title order={2}>Mixed Dormitory Room</Title>
                <Text size="xs">OWA Mekong Delta Hostel</Text>
                <Text size="xs" mt={5}>
                  The unit has 1 bed.
                </Text>
              </Box>
            </Container>
            <div className="flex flex-col gap-3 w-full">
              <CaroucelImage images={images} />
            </div>
            <Container mt={10}>
              <Box>
                <Text size="xs">
                  Price for: <strong>1 adult</strong>
                </Text>
                <Flex gap={5} align={"center"}>
                  <Text size="xs" mt={5}>
                    Bed:
                  </Text>
                  <strong className="text-xs">1 bunk bed</strong>
                  <BedDouble className="w-4 h-4" />
                </Flex>
              </Box>
              <Flex
                gap={3}
                justify={"flex-start"}
                align={"center"}
                wrap={"wrap"}
                my={10}
              >
                <OutlineBadge
                  title="15 m2"
                  icon={<House className="w-3 h-3" />}
                  className="px-1 py-2 w-fit"
                />
                <OutlineBadge
                  title="Free Wifi"
                  icon={<WifiHigh className="w-3 h-3" />}
                  className="px-1 py-2 w-fit"
                />
                <OutlineBadge
                  title="Bathtub"
                  icon={<BathIcon className="w-3 h-3" />}
                  className="px-1 py-2 w-fit"
                />
                <OutlineBadge
                  title="Air condition"
                  icon={<SnowflakeIcon className="w-3 h-3" />}
                  className="px-1 py-2 w-fit"
                />
                <OutlineBadge
                  title="Flat-screen TV"
                  icon={<Tv2 className="w-3 h-3" />}
                  className="px-1 py-2 w-fit"
                />
              </Flex>
            </Container>
          </Box>

          <Container className="w-full mt-2">
            <Box className="bg-white rounded-sm p-2">
              <Stack>
                <Flex justify={"space-between"} align={"center"}>
                  <Text size="xs" fw={500}>
                    Your Search:
                    {searchGlobal.people.adults > 0 &&
                      `${searchGlobal.people.adults} adults, `}
                    {searchGlobal.people.childrens > 0 &&
                      `${searchGlobal.people.childrens} childrens, `}
                    {searchGlobal.people.rooms > 0 &&
                      `${searchGlobal.people.rooms} rooms,`}
                    ,
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
          </Container>

          <Container mt={10}>
            <Table striped highlightOnHover>
              <Table.Thead bg={"indigo"} c={"#fff"}>
                <Table.Tr>
                  <Table.Th>Conditions</Table.Th>
                  <Table.Th>Price for 16 night</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                <Table.Tr>
                  <Table.Td>
                    <Flex gap={5} align={"center"}>
                      <CakeIcon />
                      <Text size="xs" fw={600}>
                        Breakfast included in the price
                      </Text>
                    </Flex>
                  </Table.Td>
                  <Table.Td>
                    <Text size="xs" c={"red"} fw={600}>
                      VND 2,770,000
                    </Text>
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>
                    <Flex gap={5} align={"center"}>
                      <CheckIcon />
                      <Text size="xs" fw={600}>
                        Free cancellation before August 14, 2024
                      </Text>
                    </Flex>
                  </Table.Td>
                  <Table.Td>
                    <Text size="sm" fw={700}>
                      VND 2,592,000
                    </Text>
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>
                    <Flex gap={5} align={"center"}>
                      <CheckIcon />
                      <Text size="xs" fw={600}>
                        No prepayment needed - pay at the property
                      </Text>
                    </Flex>
                  </Table.Td>
                  <Table.Td>
                    <Text size="xs" c={"dimmed"}>
                      includes taxes and fees
                    </Text>
                  </Table.Td>
                </Table.Tr>
              </Table.Tbody>
            </Table>
          </Container>

          <Box bg={"#fff"} className="w-full" mt={10} pt={10}>
            <Container>
              <Stack gap={5} justify="center" align="center">
                <GroupInputQuantity
                  quantity={quantity}
                  setQuantity={setQuantity}
                />
                <Flex gap={5} align="center">
                  <TimerReset className="w-4 h-4" />
                  <Text size="xs" c={"red"} fw={600}>
                    Only 3 left!
                  </Text>
                </Flex>
              </Stack>
              <Stack gap={5} mt={15} justify="center" align="center">
                <Text size="sm" fw={800}>
                  {quantity} room selected
                </Text>
                <Flex gap={5} align="center">
                  <Text size="xs" c={"red"} fw={600} td={"line-through"}>
                    VND 2,770,000
                  </Text>
                  <Text size="md" fw={700}>
                    VND 2,582,000
                  </Text>
                </Flex>
                <Text size="xs" c={"dimmed"}>
                  includes taxes and fees
                </Text>
                <Text size="sm">
                  (16 nights, Thu, Aug 15,2924 - Sat, Aug 31, 2024)
                </Text>
                <Flex gap={5} mt={10}>
                  <CreditCardIcon className="w-4 h-4" />
                  <Text size="xs" fw={600}>
                    No credit card needed
                  </Text>
                </Flex>
                <Flex gap={5}>
                  <DotIcon className="w-4 h-4" />
                  <Text size="xs">Confirmation is immediate</Text>
                </Flex>
              </Stack>

              <Link href="/reserve">
                <PrimaryButton fullWidth className="mt-2">
                  Next step
                </PrimaryButton>
              </Link>

              <BoxWrap className="w-full">
                <Accordion variant="contained" className="w-full">
                  <Accordion.Item value="children">
                    <Accordion.Control>
                      <Text size="xs" fw={650}>
                        General info
                      </Text>
                    </Accordion.Control>
                    <Accordion.Panel>
                      <Stack gap={5}>
                        <Text fw={600} size="xs">
                          Bed: 1 bunk bed
                        </Text>
                      </Stack>
                    </Accordion.Panel>
                  </Accordion.Item>

                  <Accordion.Item value="contacting">
                    <Accordion.Control>
                      <Text size="xs" fw={650}>
                        Meal plan
                      </Text>
                    </Accordion.Control>
                    <Accordion.Panel>
                      <Flex gap={5} mt={10}>
                        <CheckIcon className="w-4 h-4 text-green-800" />
                        <Text size="xs" fw={600}>
                          Breakfast included in final price
                        </Text>
                      </Flex>
                    </Accordion.Panel>
                  </Accordion.Item>

                  <Accordion.Item value="partner">
                    <Accordion.Control>
                      <Stack gap={5}>
                        <Text size="xs" fw={650}>
                          Smoking
                        </Text>
                        <Text size="xs" c="dimmed">
                          No smoking
                        </Text>
                      </Stack>
                    </Accordion.Control>
                    <Accordion.Panel>
                      <Text size="xs" mt={10}>
                        <strong>Smoking policy:</strong> No smoking
                      </Text>
                      <Flex gap={5} mt={10}>
                        <CircleIcon className="w-4 h-4" />
                        <Text size="xs" fw={600}>
                          Designated smoking area available inside the property
                        </Text>
                      </Flex>
                    </Accordion.Panel>
                  </Accordion.Item>
                </Accordion>
              </BoxWrap>
            </Container>
          </Box>

          <Text
            className="mx-auto text-center text-blue-700 my-8 underline cursor-pointer"
            onClick={close}
          >
            Back to options
          </Text>
        </Stack>
      </Drawer>

      <Flex
        justify={"space-between"}
        align={"center"}
        mb={10}
        onClick={open}
        className="cursor-pointer"
      >
        <Text c="blue" fw={600} className="underline">
          {roomName}
        </Text>
        <ImageIcon className="text-blue-600" />
      </Flex>
    </React.Fragment>
  );
};
