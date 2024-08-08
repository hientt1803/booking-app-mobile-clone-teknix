"use client";

import { ThreeItemFlexRow } from "@/components/common";
import { formatCurrency } from "@/utils";
import {
  Badge,
  Box,
  Card,
  Flex,
  Grid,
  Image,
  Rating,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { CheckIcon, MapIcon, ThumbsUp } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";

interface IBookingCard {
  hotel?: any;
  isFeatured?: boolean;
  isGenius?: boolean;
  roomLeft?: string;
  discount?: boolean;
  breakfast?: boolean;
}

export const BookingCard = (props: IBookingCard) => {
  const {
    hotel,
    isFeatured = false,
    isGenius = false,
    roomLeft = "",
    discount = false,
    breakfast = false,
  } = props;
  const matches = useMediaQuery("(max-width: 330px)");

  return (
    <Card>
      <Grid>
        {!matches && (
          <Grid.Col span={6}>
            <Link href={`/hotel/${hotel.id}`}>
              <Image
                // src="/assets/images/booking-banner-home.jpeg"
                src={
                  hotel?.photoMainUrl ??
                  "/assets/images/booking-banner-home.jpeg"
                }
                alt={hotel?.name ?? ""}
                h={"100%"}
                className="rounded-md"
              />
            </Link>
          </Grid.Col>
        )}
        <Grid.Col span={!matches ? 6 : 12}>
          <Stack gap={2}>
            <Rating value={hotel?.accuratePropertyClass} readOnly size={"xs"}/>

            <Link href={`/hotel/${hotel.id}`}>
              <Title order={!matches ? 5 : 4} lineClamp={2}>
                {hotel?.name ?? ""}
              </Title>
            </Link>
            {isFeatured && (
              <Flex gap={5}>
                <Badge variant="default" color="blue" radius="sm" size="xs">
                  Featured
                </Badge>
                <Badge color="#fcc419" size="xs" p={7}>
                  <ThumbsUp className="w-3 h-3" />
                </Badge>
              </Flex>
            )}

            <ThreeItemFlexRow
              point={hotel?.reviewScore}
              status={hotel?.reviewScoreWord}
              review={hotel.reviewCount}
            />

            <Box my={10}>
              <Flex gap={3} align={"center"} py={0}>
                <CheckIcon className="h-2 w-2" />
                <Text size="xs">wonderful location</Text>
              </Flex>

              <Flex gap={5} align={"center"} wrap={"wrap"}>
                <MapIcon className="w-4 h-4" />
                <Text size="xs"> - Can Tho - </Text>
                <Text size="xs">350m from center</Text>
              </Flex>
            </Box>

            <Flex gap={5} wrap={"wrap"}>
              <Text size="xs" fw={600}>
                {hotel?.proposedAccommodation[0]}
              </Text>
              <Text size="xs">{hotel?.proposedAccommodation[1]}</Text>
            </Flex>

            <Box className="flex">
              {hotel?.benefitBadges?.map((bd: any, i: number) => (
                <Badge key={i} color="green" size="sm" radius="sm" mt={10}>
                  {bd?.text}
                </Badge>
              ))}
            </Box>

            <Stack ml={"auto"} my={5} justify="flex-end" gap={0}>
              <Text size="xs" ta={"end"}>
                Price for <strong>{hotel?.priceDetails?.info}</strong>
              </Text>
              <Text c={"red"} fw={600} td={"line-through"} ta={"end"}>
                {formatCurrency(
                  hotel?.priceBreakdown?.strikethroughPrice?.value
                )}
              </Text>
              <Link href={`/hotel/${hotel.id}`}>
                <Text fw={600} size="xl" ta={"end"}>
                  {formatCurrency(hotel?.priceBreakdown?.grossPrice?.value)}
                </Text>
              </Link>
              <Text size="xs" c="dimmed" ta={"end"}>
                {hotel?.priceDetails?.taxInfo}
              </Text>
              {roomLeft && (
                <Text
                  ml={"auto"}
                  size="xs"
                  fw={500}
                  color="red"
                  ta={"right"}
                  className="underline"
                >
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
