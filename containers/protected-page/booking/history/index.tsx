import {
  BackgroundImage,
  Badge,
  Box,
  Container,
  Divider,
  Flex,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  CarTaxiFront,
  CarTaxiFrontIcon,
  ChevronRightIcon,
  ShipWheelIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { BookingDetailCardDrawer } from "./components/booking-card-drawer";

export const BookingHistoryContainer = () => {
  return (
    <React.Fragment>
      <Box bg="#fff" py={20}>
        <Container>
          <Title order={2}>Bookings & Trips</Title>
          <Link href="/booking/history" className="text-blue-700 text-xs my-3">
            {`Can't`} find a booking?
          </Link>
          <Box className="w-full">
            <BackgroundImage
              src="/assets/images/can-tho-image.jpg"
              radius="sm"
              h={180}
              className="relative "
            >
              <div className="mt-auto absolute left-3 bottom-2">
                <Text size="sm" c="white" fw={600}>
                  Can Tho
                </Text>
                <Text size="sm" c="white" fw={600}>
                  Aug 14 - Aug 24
                </Text>
              </div>
            </BackgroundImage>
          </Box>

          <Box className="my-3 border-2 rounded-md shadow-md relative" p={15}>
            <Flex justify={"flex-start"} align={"center"} gap={20}>
              <Link href="/booking/booking-success/detail">
                <Image
                  src={"/assets/images/offer-image-home.jpeg"}
                  alt="Image booking"
                  w={80}
                  h={60}
                  fit="cover"
                  className="rounded-sm"
                />
              </Link>
              <Link href="/booking/booking-success/detail">
                <Stack gap={1}>
                  <Text size="sm" fw={700}>
                    Dorm Can Tho
                  </Text>
                  <Text size="xs">Aug 14 - Aug 24</Text>
                  <Text size="xs" c={"green"}>
                    Confirmed
                  </Text>
                </Stack>
              </Link>
            </Flex>

            <BookingDetailCardDrawer />
          </Box>

          <Box className="my-3 border-2 rounded-md shadow-md relative" p={15}>
            <Flex justify={"flex-start"} align={"center"} gap={20}>
              <Link href="/booking/booking-success/detail">
                <Image
                  src={"/assets/images/can-tho-image.jpg"}
                  alt="Image booking"
                  w={80}
                  h={60}
                  fit="cover"
                  className="rounded-sm"
                />
              </Link>
              <Link href="/booking/booking-success/detail">
                <Stack gap={1}>
                  <Text size="sm" fw={700}>
                    Dorm Can Tho
                  </Text>
                  <Text size="xs">Aug 14 - Aug 24</Text>
                  <Text size="xs">Canceled</Text>
                </Stack>
              </Link>
            </Flex>

            <BookingDetailCardDrawer />
          </Box>

          <Text size="xs">{`What's`} next to plan?</Text>
          <Stack gap={10} className="border-2" p={15}>
            <Flex justify={"flex-start"} gap={15} align={"center"}>
              <ShipWheelIcon className="text-blue-800 w-5 h-5" />
              <Stack gap={1} className="flex-1">
                <Text size="xs" fw={600}>
                  Things to do
                </Text>
                <Text size="xs">
                  Instant confirmation, digital sticket, and verfied customer
                  reviews
                </Text>
              </Stack>
              <ChevronRightIcon className="w-5 h-5" />
            </Flex>
            <Divider my={5} />
            <Flex justify={"flex-start"} gap={15} align={"center"}>
              <CarTaxiFront className="text-blue-800 w-5 h-5" />
              <Stack gap={1} className="flex-1">
                <Flex gap={2} align={"center"}>
                  <Text size="xs" fw={600}>
                    Rent a car - save 10%
                  </Text>
                  <Badge variant="light" color="lime">
                    Trip savings
                  </Badge>
                </Flex>
                <Text size="xs">
                  Because you booked your stay with Booking.com
                </Text>
              </Stack>
              <ChevronRightIcon className="w-5 h-5" />
            </Flex>
            <Divider my={5} />
            <Flex justify={"flex-start"} gap={15} align={"center"}>
              <CarTaxiFrontIcon className="text-blue-800 w-5 h-5" />
              <Stack gap={1} className="flex-1">
                <Text size="xs" fw={600}>
                  Private airport taxi
                </Text>
                <Text size="xs">
                  A driver will be waiting to take you to your stay
                </Text>
              </Stack>
              <ChevronRightIcon className="w-5 h-5" />
            </Flex>
          </Stack>
        </Container>
      </Box>
    </React.Fragment>
  );
};
