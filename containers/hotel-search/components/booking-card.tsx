"use client";

import {
  Badge,
  Box,
  Card,
  Flex,
  Grid,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { CheckIcon, HeartIcon, MapIcon, ThumbsUp } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";

interface IBookingCard {
  isFeatured?: boolean;
  isGenius?: boolean;
  roomLeft?: string;
  discount?: boolean;
  breakfast?: boolean;
}

export const BookingCard = (props: IBookingCard) => {
  const {
    isFeatured = false,
    isGenius = false,
    roomLeft = "",
    discount = false,
    breakfast = false,
  } = props;

  return (
    <Card>
      <Grid>
        <Grid.Col span={5}>
          <Link href="/hotel/2">
            <Image
              src="/assets/images/booking-banner-home.jpeg"
              alt="booking card image"
              h={300}
            />
          </Link>
        </Grid.Col>
        <Grid.Col span={7}>
          <Stack gap={2}>
            <Title order={6}>Asia Hotel Can Tho</Title>
            {isFeatured && (
              <Flex gap={5}>
                <Badge variant="default" color="blue" radius="sm" size="xs">
                  Featured
                </Badge>
                <Badge color="#fcc419" size="xs" p={7}>
                  <ThumbsUp
                    style={{
                      width: "15px",
                      height: "15px",
                    }}
                  />
                </Badge>
              </Flex>
            )}

            <Flex gap={5} mt={10}>
              <Badge variant="filled" color="#1e3a8a" size="xs">
                8.1
              </Badge>
              <Text size="xs">Very Good</Text> -
              <Text size="xs" c={"dimmed"}>
                193 reviews
              </Text>
            </Flex>

            <Flex gap={3} align={"center"} my={0} py={0}>
              <CheckIcon className="h-2 w-2" />
              <Text size="xs">wonderful location</Text>
            </Flex>

            <Flex gap={5} align={"center"}>
              <MapIcon className="w-6 h-6" />
              <Text size="xs"> - Can Tho - </Text>
              <Text size="xs">350m from center</Text>
            </Flex>

            <Badge color="green" size="sm" radius="sm" mt={10}>
              Mobile-only price
            </Badge>

            <Stack ml={"auto"} my={5} justify="flex-end" gap={0}>
              <Text size="xs" c="dimmed" ta={"end"}>
                Price for <strong>15 nights:</strong>
              </Text>
              <Text c={"red"} fw={600} td={"line-through"} ta={"end"}>
                VND 14,960,000
              </Text>
              <Text fw={600} size="xl" ta={"end"}>
                VND 10,096,000
              </Text>
              <Text size="xs" c="dimmed" ta={"end"}>
                includes taxes and fees
              </Text>
              {roomLeft && (
                <Text ml={"auto"} size="xs" fw={500} color="red" ta={"right"}>
                  {roomLeft}
                </Text>
              )}
              {discount && (
                <Fragment>
                  <Stack c="green" fw={600} gap={3} justify="flex-end">
                    <Flex gap={2} justify={"flex-end"}>
                      <CheckIcon className="h-0 w-0" />
                      <Text size="xs" ta={"end"}>
                        Free cancellation
                      </Text>
                    </Flex>
                    <Flex gap={2} justify={"flex-end"}>
                      <CheckIcon className="h-0 w-0" />
                      <Text size="xs" ta={"end"}>
                        No prepayment needed
                      </Text>
                    </Flex>
                    <Text size="xs" ta={"end"}>
                      - Pay at the property
                    </Text>
                  </Stack>
                </Fragment>
              )}
              {breakfast && (
                <Text c="green" fw={800} size="xs" ta={"end"}>
                  Breakfast included
                </Text>
              )}
            </Stack>
          </Stack>
        </Grid.Col>
      </Grid>
      {isGenius && (
        <Box
          style={{
            border: "1px solid #1e40af",
            borderRadius: "10px",
          }}
          p={5}
          mt={5}
          className="flex justify-between gap-5"
        >
          <Text size="xs">
            Get a member-only discount on this price -{" "}
            <Link href={"/sign-in"} className="text-blue-800 font-bold">
              sign in
            </Link>
          </Text>
          <Image
            src="/assets/images/maketing-home.png"
            alt="booking card image"
            w={50}
            h={50}
          />
        </Box>
      )}
    </Card>
  );
};
