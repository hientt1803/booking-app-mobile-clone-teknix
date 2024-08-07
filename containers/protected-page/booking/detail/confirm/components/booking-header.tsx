"use client";

import { BoxWrap } from "@/components/box-wrap";
import {
  Accordion,
  AccordionItem,
  Badge,
  Box,
  Container,
  Divider,
  Flex,
  List,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  Bed,
  BedSingle,
  Calendar,
  CalendarClock,
  CheckIcon,
  ChevronRight,
  Clock,
  GalleryThumbnails,
  HeadphonesIcon,
  LocateIcon,
  Mail,
  MailOpen,
  MessageCircle,
  PhoneCall,
  PhoneCallIcon,
  ReceiptRussianRubleIcon,
} from "lucide-react";
import Link from "next/link";
import ModalChangeArrivalTime from "./modal-arrival-time";
import ModalChangeDate from "./modal-change-date";
import ModalChangeGuestDetail from "./modal-change-guest-detail";
import { useState } from "react";
import { fortmateDate, getAmOrPm } from "@/utils";

export const BookingHeader = () => {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [arrivalTime, setArrivalTime] = useState<string>("");

  return (
    <Stack gap={5}>
      <Box bg="#fff" py={20}>
        <Container>
          <Text size="xs" c={"green"}>
            Confirmed
          </Text>
          <Title order={4}>Your booking is confirmed</Title>
          <List icon={<CheckIcon className="w-4 h-4" />}>
            <List.Item>
              <Text size="xs">
                Your confirmation is on its way to{" "}
                <strong>tronghientran8@gmail.com</strong>
              </Text>
            </List.Item>
            <List.Item>
              <Text size="xs">
                You can now <Link href={"/"}>modify or cancle</Link> your
                booking until check-in
              </Text>
            </List.Item>
          </List>
          <Box bg={"#e7f8f2"} p={15} className="border-2">
            <Text size="xs">
              Confirmation number: <strong>3905839203</strong>
            </Text>
            <Text size="xs">
              PIN: <strong>1843</strong>
            </Text>
          </Box>
          <Box mt={20}>
            <Text size="lg" fw={600} c={"blue"} mb={20}>
              Dorm Can Tho
            </Text>
            <Flex gap={15}>
              <Calendar />
              <Stack gap={2}>
                <Text size="sm" fw={600}>
                  {fortmateDate(dateRange[0].startDate)} -{" "}
                  {fortmateDate(dateRange[0].endDate)}
                </Text>
                <Text size="sm">Check-in: 14:00 - 23:00</Text>
                <Text size="sm" mb={10}>
                  Check-out: 14:00 - 23:00
                </Text>
                <ModalChangeDate
                  dateRange={dateRange}
                  setDateRange={setDateRange}
                />
              </Stack>
            </Flex>
            <Flex gap={15} mt={20}>
              <Clock />
              <Stack gap={2}>
                <Text size="sm" fw={600}>
                  Your arraival time
                </Text>
                <Text size="sm">
                  Share your arrival time so the property can arrage a smooth
                  check-in for you
                </Text>
                {arrivalTime && (
                  <Badge variant="filled" color="indigo">
                    {arrivalTime} {getAmOrPm(Number(arrivalTime))}
                  </Badge>
                )}
                <ModalChangeArrivalTime
                  arrivalTimeProps={arrivalTime}
                  setArrivalTimeProps={setArrivalTime}
                />
              </Stack>
            </Flex>
            <Flex gap={15} mt={20}>
              <LocateIcon />
              <Stack gap={2}>
                <Text size="sm" fw={600}>
                  Property address
                </Text>
                <Text size="sm">
                  16/2/7 Duong Truong Dinh, An Cu, Ninh Kieu, Can Tho, Viet Nam
                </Text>
              </Stack>
            </Flex>
            <Flex gap={15} mt={20}>
              <Bed />
              <Stack gap={2}>
                <Text size="sm" fw={600}>
                  Property policies
                </Text>
              </Stack>
            </Flex>
          </Box>
          <Divider my={10} />
          <Text size="sm" fw={600}>
            Contact property
          </Text>
          <Text size="sm" fw={600}>
            Got a question or need to arrange something for your stay?
          </Text>
          <Flex gap={15} mt={20}>
            <MessageCircle />
            <Stack gap={2}>
              <Text size="sm" fw={600}>
                Message property
              </Text>
            </Stack>
          </Flex>
          <Flex gap={15} mt={20}>
            <PhoneCall />
            <Stack gap={2}>
              <Text size="sm" fw={600}>
                Other options
              </Text>
              <Link href={"tel:8420259036"} className="text-blue-600 text-xs">
                Call +84290258923
              </Link>
              <Link
                href="mailto: teknix@gmail.com"
                className="text-blue-600 text-xs"
              >
                Send email
              </Link>
            </Stack>
          </Flex>
          <Divider my={10} />
          <Title order={4}>You booked 1 dorm bed</Title>
          <Flex gap={15} mt={20}>
            <BedSingle />
            <Stack gap={2}>
              <Text size="sm" fw={600}>
                Bunk Bed in mixed Dormitory Room
              </Text>
              <Text size="sm">Nguyen Van An - 1 adult</Text>
              <Text size="sm">
                13% discount applied to the price before taxes and fees
              </Text>
            </Stack>
          </Flex>
        </Container>
      </Box>

      <Container className="w-full my-3">
        <Stack gap={5}>
          <Box bg={"#087f5b"} className="w-full rounded-md p-2 text-white">
            <Flex
              className="w-full"
              gap={20}
              justify={"space-between"}
              align={"center"}
            >
              <Flex justify={"flex-start"} align={"center"} gap={15}>
                <Text size="xs">Price</Text>
                <Text size="sm" fw={600}>
                  VND 742,050
                </Text>
              </Flex>
              <Text size="xs">Payment info</Text>
            </Flex>
          </Box>
          <Box bg={"#fff"} className="w-full rounded-md">
            <Accordion variant="container" defaultValue={"make-change"}>
              <AccordionItem value={`make-change`}>
                <Accordion.Control>
                  <Flex
                    className="w-full"
                    gap={20}
                    justify={"space-between"}
                    align={"center"}
                  >
                    <Text size="xs">Make changes to your booking</Text>
                  </Flex>
                </Accordion.Control>
                <Accordion.Panel>
                  <Stack gap={10}>
                    <ModalChangeGuestDetail />
                    <Link href="/booking/cancle">
                      <Flex justify={"space-between"} align={"center"}>
                        <Text size="xs" c={"blue"} className="cursor-pointer">
                          Cancle booking
                        </Text>
                        <ChevronRight className="w-4 h-4" />
                      </Flex>
                    </Link>
                  </Stack>
                </Accordion.Panel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Stack>
      </Container>

      <Container className="w-full">
        <BoxWrap>
          <Title order={5}>Payment details</Title>
          <Accordion variant="contained">
            <AccordionItem value={`acordin-item-1`}>
              <Accordion.Control>Payment</Accordion.Control>
              <Accordion.Panel>
                <Text size="xs" fw={600}>
                  No booking fees. Booking.com services are always free for
                  guests, so you save money.
                </Text>
                <Text size="xs" mt={5}>
                  If you don’t show up for this booking, and you don’t cancel
                  beforehand, the property is liable to charge you the full
                  reservation amount.
                </Text>
                <Text size="xs" mt={5}>
                  This property accepts the following forms of payment:{" "}
                  <strong>Cash only</strong>
                </Text>
              </Accordion.Panel>
            </AccordionItem>
            <AccordionItem value={`acordin-item-2`}>
              <Accordion.Control>About pre-authorization</Accordion.Control>
              <Accordion.Panel>
                <Text size="xs" fw={600}>
                  1. What is a pre-authorization?
                </Text>
                <Text size="xs" mt={5}>
                  When you make a reservation, there may be instances where the
                  hotel will contact your credit (or debit) card company to
                  confirm that the card you are using is valid and hasn’t been
                  reported lost or stolen. At this time, they may also check to
                  see if the card has enough money to cover the transaction.
                  This is communicated in the form of a pre-authorization of the
                  full amount of your reservation. The hotel, however, will not
                  proceed with the charge. The time at which your card will be
                  charged will depend on the terms and conditions of your
                  booking.
                </Text>
                <Text size="xs" mt={5}>
                  This property accepts the following forms of payment:{" "}
                  <strong>Cash only</strong>
                </Text>
              </Accordion.Panel>
            </AccordionItem>
          </Accordion>
        </BoxWrap>
      </Container>

      <Box my={10} bg={"#fff"} py={20}>
        <Container>
          <Text size="sm" fw={600}>
            Important Information
          </Text>
          <Text size="xs" mt={10}>
            This property does not accomodate bachelor(ette) or similar parties.
          </Text>
        </Container>
      </Box>

      <Container className="w-full">
        <BoxWrap className="rounded-md">
          <Box my={20}>
            <Text size="sm" fw={700}>
              Frequently asked questions
            </Text>

            <Accordion variant="contained">
              <AccordionItem value={`acordin-item-1`}>
                <Accordion.Control>
                  If i need to cancle my booking, will I pay a fee?
                </Accordion.Control>
                <Accordion.Panel>
                  <Text size="xs" mt={5}>
                    {`If you have a free cancellation booking, you won't pay a
                cancellation fee. If your booking isn't free to cancel anymore
                or is non-refundable, you may incur a cancellation fee. Any
                cancellation fees are determined by the property, and you'll pay
                any additional costs to the property.`}
                  </Text>
                </Accordion.Panel>
              </AccordionItem>
              <AccordionItem value={`acordin-item-2`}>
                <Accordion.Control>
                  Can i make changes to my booking (i.e. change dates)?
                </Accordion.Control>
                <Accordion.Panel>
                  <Text size="xs" mt={5}>
                    {`Yes! You can make changes to your booking from your confirmation
                email or at Booking.com. Depending on the property's policy, you
                can do the following:`}
                  </Text>
                  <Text size="xs">Change check-in/out times</Text>
                  <Text size="xs">Change dates</Text>
                  <Text size="xs">Cancel booking</Text>
                  <Text size="xs">Edit credit card details</Text>
                  <Text size="xs">Change guest details</Text>
                  <Text size="xs">Select bed type</Text>
                  <Text size="xs">Change room type</Text>
                  <Text size="xs">Add a room</Text>
                  <Text size="xs">Add a meal</Text>
                  <Text size="xs">Make a request</Text>
                  <Text size="xs">Contact the property</Text>
                </Accordion.Panel>
              </AccordionItem>
              <AccordionItem value={`acordin-item-3`}>
                <Accordion.Control>
                  {`Who going to charge my credit card and when?`}
                </Accordion.Control>
                <Accordion.Panel>
                  <Text size="xs" mt={5}>
                    {`Yes! You can make changes to your booking from your confirmation
                email or at Booking.com. Depending on the property's policy, you
                can do the following:`}
                  </Text>
                  <Text size="xs">
                    Generally, the property is responsible for charging your
                    card. If payment is instead handled by Booking.com, this
                    will be stated clearly in your booking confirmation.
                  </Text>
                  <Text size="xs">
                    You usually can expect to pay during check-in or check-out
                    at the property. However, there are some exceptions, like
                    properties that require a prepayment for all or some of the
                    total amount. Again, this will be stated clearly in your
                    confirmation and payment policies.
                  </Text>
                  <Text size="xs">
                    {` If there's no prepayment policy, it’s also possible that the
                property might take a test payment from your card before you
                stay. This is a temporary hold, that’s used to validate your
                card and guarantee your booking. Unlike a real charge, this test
                payment will be returned to your card.`}
                  </Text>
                </Accordion.Panel>
              </AccordionItem>
            </Accordion>
          </Box>
        </BoxWrap>
      </Container>

      <Container className="w-full">
        <BoxWrap className="rounded-md">
          <Box my={20}>
            <Stack>
              <Flex justify="space-between" align={"center"}>
                <Flex align="center" gap={10} c={"blue"}>
                  <HeadphonesIcon className="w-5 h-5" />
                  <Text size="xs">Contact customer service</Text>
                </Flex>
                <ChevronRight className="w-5 h-5" />
              </Flex>
              <Flex justify="space-between" align={"center"}>
                <Flex align="center" gap={10} c={"blue"}>
                  <PhoneCallIcon className="w-5 h-5" />
                  <Text size="xs">Call property: +849305982935</Text>
                </Flex>
                <ChevronRight className="w-5 h-5" />
              </Flex>
              <Flex justify="space-between" align={"center"}>
                <Flex align="center" gap={10} c={"blue"}>
                  <GalleryThumbnails className="w-5 h-5" />
                  <Text size="xs">Email property</Text>
                </Flex>
                <ChevronRight className="w-5 h-5" />
              </Flex>
            </Stack>
          </Box>
        </BoxWrap>
      </Container>

      <Container className="w-full">
        <BoxWrap className="rounded-md">
          <Box my={20}>
            <Title order={5} mb={10}>
              Save your confirmation
            </Title>
            <Stack>
              <Flex justify="space-between" align={"center"}>
                <Flex align="center" gap={10} c={"blue"}>
                  <CalendarClock className="w-5 h-5" />
                  <Text size="xs">Add to Google calendar</Text>
                </Flex>
                <ChevronRight className="w-5 h-5" />
              </Flex>
              <Flex justify="space-between" align={"center"}>
                <Flex align="center" gap={10} c={"blue"}>
                  <Mail className="w-5 h-5" />
                  <Text size="xs">Resend confirmation</Text>
                </Flex>
                <ChevronRight className="w-5 h-5" />
              </Flex>
              <Flex justify="space-between" align={"center"}>
                <Flex align="center" gap={10} c={"blue"}>
                  <MailOpen className="w-5 h-5" />
                  <Text size="xs">Share by email</Text>
                </Flex>
                <ChevronRight className="w-5 h-5" />
              </Flex>
            </Stack>
          </Box>
        </BoxWrap>
      </Container>

      <Container className="w-full mb-10">
        <BoxWrap className="rounded-md">
          <Flex justify="space-between" align={"center"}>
            <Flex align="center" gap={10} c={"blue"}>
              <ReceiptRussianRubleIcon className="w-5 h-5" />
              <Text size="xs">Safety Resource Center</Text>
            </Flex>
            <ChevronRight className="w-5 h-5" />
          </Flex>
        </BoxWrap>
      </Container>
    </Stack>
  );
};
