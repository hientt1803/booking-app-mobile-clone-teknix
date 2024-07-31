"use client";

import { OutlineBadge } from "@/components/badge";
import { BoxWrap } from "@/components/box-wrap";
import { MobileSearchGroup } from "@/components/search/mobile-search-group";
import { Carousel } from "@mantine/carousel";
import {
  BackgroundImage,
  Badge,
  Box,
  Button,
  Card,
  Center,
  Container,
  Flex,
  Image,
  ScrollArea,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  Car,
  CarIcon,
  HeartIcon,
  SkipBack,
  Trees,
  UmbrellaIcon,
  XIcon,
} from "lucide-react";
import React from "react";

export const HomeContainer = () => {
  return (
    <React.Fragment>
      {/* Search group */}
      <Container>
        <Box mt={10}>
          <Title order={5}>Find your next stay</Title>
          <Text size="xs" c={"dimmed"}>
            Search deals on hotels, homes, and much more,...
          </Text>
          <MobileSearchGroup />
        </Box>
      </Container>

      {/* Image banner */}
      <BoxWrap>
        <BackgroundImage
          src="/assets/images/booking-banner-home.jpeg"
          radius="sm"
        >
          <Center p="xl" py={100}>
            <Stack gap={3} className="text-white">
              <Title order={1}>A piece of paradise just for you</Title>
              <Text>Book entire houses, villas, cabins, and more</Text>
              <Button variant="filled" color="blue" mt={10}>
                Discover vacation rentals
              </Button>
            </Stack>
          </Center>
        </BackgroundImage>
      </BoxWrap>

      {/* {"Recent search"} */}
      <BoxWrap>
        <Title order={3}>Your Recent Search</Title>
        <Card shadow="xl" maw={300} p={10} style={{ position: "relative" }}>
          <Flex justify={"start"} gap={14}>
            <Image
              src="/assets/images/booking-banner-home.jpeg"
              w={100}
              h={100}
              alt="No way!"
              className="rounded-lg"
            />
            <Stack justify="center" gap={2}>
              <Text fw={500} size="lg">
                Can Tho
              </Text>
              <Text size="sm">Jul 31 aug 15, 2 people</Text>
            </Stack>
          </Flex>
          <span style={{ position: "absolute", top: "5px", right: "10px" }}>
            <XIcon />
          </span>
        </Card>
      </BoxWrap>

      {/* {"Interested} */}
      <BoxWrap>
        <Title order={3}>Still interested in this property?</Title>
        <Card shadow="xl" radius="md" maw={300}>
          <Card.Section>
            <Image
              src="/assets/images/booking-banner-home.jpeg"
              width={350}
              h={200}
              alt="Norway"
            />
          </Card.Section>

          <Text fw={500} my={"md"}>
            Adora Central Park Hostel
          </Text>

          <Text size="sm" c="dimmed">
            Can Tho, Vietnam
          </Text>

          <Flex gap={5}>
            <Badge variant="filled" color="#1e3a8a">
              8.1
            </Badge>
            <Text>Very Good</Text>
            <Text size="sm" c={"dimmed"}>
              Very Good
            </Text>
          </Flex>
        </Card>
      </BoxWrap>

      {/* Offer */}
      <BoxWrap>
        <Title order={3}>Offers</Title>
        <Text size="md" c={"dimmed"}>
          Promotions, deals, and special offers for you
        </Text>

        <BackgroundImage
          src="/assets/images/offer-image-home.jpeg"
          radius="sm"
          className="min-h-96 rounded-md"
        >
          <Center p="xl" py={100}>
            <Stack gap={3} className="text-white">
              <Title order={1}>Seize the moment</Title>
              <Text>
                Save 15% or more when you book and stay before October 1, 2024
              </Text>
              <Button variant="filled" color="blue" mt={10}>
                Find Gateway Deals
              </Button>
            </Stack>
          </Center>
        </BackgroundImage>
      </BoxWrap>

      {/* Trending */}
      <BoxWrap>
        <Title order={3}>Still interested in this property?</Title>
        <Text size="md" c={"dimmed"}>
          Travelers searching for Vietnam also booked these
        </Text>

        <Flex justify={"space-between"} gap={6}>
          <BackgroundImage
            src="/assets/images/offer-image-home.jpeg"
            radius="sm"
            h="150"
            className="min-h-96 rounded-md"
          >
            <Box pt={50} pl={20}>
              <Flex gap={5} className="text-white">
                <Title order={5}>Can Tho</Title>
                <Image
                  src="/assets/images/vietnam-flag.png"
                  alt="Flag"
                  width={25}
                  height={25}
                />
              </Flex>
            </Box>
          </BackgroundImage>
          <BackgroundImage
            src="/assets/images/offer-image-home.jpeg"
            radius="sm"
            h="150"
            className="min-h-96 rounded-md"
          >
            <Box pt={50} pl={20}>
              <Flex gap={5} className="text-white">
                <Title order={5}>Ho Chi Minh City</Title>
                <Image
                  src="/assets/images/vietnam-flag.png"
                  alt="Flag"
                  width={25}
                  height={25}
                />
              </Flex>
            </Box>
          </BackgroundImage>
        </Flex>
        <Flex justify={"space-between"} gap={6} mt={6}>
          <BackgroundImage
            src="/assets/images/offer-image-home.jpeg"
            radius="sm"
            h="150"
            className="min-h-96 rounded-md"
          >
            <Box pt={50} pl={20}>
              <Flex gap={5} className="text-white">
                <Title order={5}>HaNoi</Title>
                <Image
                  src="/assets/images/vietnam-flag.png"
                  alt="Flag"
                  width={25}
                  height={25}
                />
              </Flex>
            </Box>
          </BackgroundImage>
          <BackgroundImage
            src="/assets/images/offer-image-home.jpeg"
            radius="sm"
            h="150"
            className="min-h-96 rounded-md"
          >
            <Box pt={50} pl={20}>
              <Flex gap={5} className="text-white">
                <Title order={5}>Hoi An</Title>
                <Image
                  src="/assets/images/vietnam-flag.png"
                  alt="Flag"
                  width={25}
                  height={25}
                />
              </Flex>
            </Box>
          </BackgroundImage>
          <BackgroundImage
            src="/assets/images/offer-image-home.jpeg"
            radius="sm"
            h="150"
            className="min-h-96 rounded-md"
          >
            <Box pt={50} pl={20}>
              <Flex gap={5} className="text-white">
                <Title order={5}>Hue</Title>
                <Image
                  src="/assets/images/vietnam-flag.png"
                  alt="Flag"
                  width={25}
                  height={25}
                />
              </Flex>
            </Box>
          </BackgroundImage>
        </Flex>
      </BoxWrap>

      {/* Explore Vietnam */}
      <BoxWrap>
        <Title order={3}>Explore Vietnam</Title>
        <Text size="md" c={"dimmed"}>
          These popular distination have alot to offer
        </Text>
        <ScrollArea className="w-full" type="never">
          <Box display={"flex"} className="w-full gap-4">
            {/* Render more card here to see horizontal scroll */}
            <Card shadow="xl" my={3} radius="md" maw={300}>
              <Card.Section>
                <Image
                  src="/assets/images/booking-banner-home.jpeg"
                  h={200}
                  alt="Norway"
                />
              </Card.Section>

              <Text fw={600} mt={30}>
                Can Tho
              </Text>

              <Text c="dimmed">330 properties</Text>
            </Card>
          </Box>
        </ScrollArea>
      </BoxWrap>

      {/* Properties Vietnam */}
      <BoxWrap>
        <Title order={3}>Browse by property type in Can Tho</Title>
        <ScrollArea className="w-full" type="never">
          <Box display={"flex"} className="w-full gap-4">
            {/* Render more card here to see horizontal scroll */}
            <Card shadow="xl" my={3} radius="md" maw={300}>
              <Card.Section>
                <Image
                  src="/assets/images/booking-banner-home.jpeg"
                  h={200}
                  alt="Norway"
                />
              </Card.Section>

              <Text fw={600} mt={30}>
                Vacation
              </Text>

              <Text c="dimmed">Jul 31, Aug 15, 2 adults</Text>
              <Text c="dimmed">1 available</Text>
            </Card>
          </Box>
        </ScrollArea>
      </BoxWrap>

      {/* Quick and easey trip planers*/}
      <BoxWrap>
        <Title order={3}>Quick and easey trip planers</Title>
        <Text size="md" c={"dimmed"}>
          Pick a vibe and explore the top distinations in VietNam
        </Text>

        <ScrollArea className="w-full" type="always" scrollbarSize={2} py={15}>
          <Box display={"flex"} className="w-full gap-4">
            <OutlineBadge
              className="rounded-lg w-fit"
              color="blue"
              title="Beach"
              icon={<UmbrellaIcon />}
            />
            <OutlineBadge
              className="rounded-lg w-fit"
              color="blue"
              title="Ski"
              icon={<SkipBack />}
            />
            <OutlineBadge
              className="rounded-lg w-fit"
              color="blue"
              title="City"
              icon={<HeartIcon />}
            />
            <OutlineBadge
              className="rounded-lg w-fit"
              color="blue"
              title="Outdoors"
              icon={<Car />}
            />
            <OutlineBadge
              className="rounded-lg w-fit"
              color="blue"
              title="Relax"
              icon={<Trees />}
            />
            <OutlineBadge
              className="rounded-lg w-fit"
              color="blue"
              title="Beach"
              icon={<UmbrellaIcon />}
            />
            <OutlineBadge
              className="rounded-lg w-fit"
              color="blue"
              title="Ski"
              icon={<SkipBack />}
            />
            <OutlineBadge
              className="rounded-lg w-fit"
              color="blue"
              title="City"
              icon={<HeartIcon />}
            />
            <OutlineBadge
              className="rounded-lg w-fit"
              color="blue"
              title="Outdoors"
              icon={<Car />}
            />
            <OutlineBadge
              className="rounded-lg w-fit"
              color="blue"
              title="Relax"
              icon={<Trees />}
            />
          </Box>
        </ScrollArea>

        <ScrollArea className="w-full" type="never">
          <Box display={"flex"} className="w-full gap-4">
            {/* Render more card here to see horizontal scroll */}
            <Card shadow="xl" my={3} radius="md" maw={300}>
              <Card.Section>
                <Image
                  src="/assets/images/booking-banner-home.jpeg"
                  h={200}
                  alt="Norway"
                />
              </Card.Section>

              <Text fw={600} mt={30}>
                Vacation
              </Text>

              <Text c="dimmed">77 km from Can Tho</Text>
            </Card>
          </Box>
        </ScrollArea>
      </BoxWrap>

      {/* Deals for the weekend*/}
      <BoxWrap>
        <Title order={3}>Deals for the weekend</Title>
        <Text size="md" c={"dimmed"}>
          Save on stays for August 2 - August 4
        </Text>
        <ScrollArea className="w-full" type="never">
          <Box display={"flex"} className="w-full gap-4">
            {/* Render more card here to see horizontal scroll */}
            <Card shadow="xl" my={3} radius="md" maw={300}>
              <Card.Section>
                <Image
                  src="/assets/images/booking-banner-home.jpeg"
                  w={300}
                  h={200}
                  alt="Norway"
                />
              </Card.Section>

              <Badge variant="filled" color="indigo" mt={30}>
                Genius
              </Badge>

              <Text fw={600} mt={5}>
                Haystay Saigon
              </Text>

              <Text c="dimmed">Can Tho city, Vietnam</Text>

              <Flex gap={2}>
                <Badge variant="filled" color="indigo">
                  10.0
                </Badge>
                <Text>
                  <strong>Exceptional</strong> - 6 reviews
                </Text>
              </Flex>
              <Badge variant="filled" color="lime">
                Getaway Deal
              </Badge>
              <Stack ml={"auto"} mt={10}>
                <Text c={"dimmed"}>
                  2 nights{" "}
                  <strong style={{ color: "red" }}>VND 4,410,000</strong>
                </Text>
              </Stack>
              <Text fw={600} size="xl" ml={"auto"}>
                VND 3,306,500
              </Text>
            </Card>
          </Box>
        </ScrollArea>
      </BoxWrap>

      {/* Looing for the perfect stay?*/}
      <BoxWrap>
        <Title order={3}>Looing for the perfect stay?</Title>
        <Text size="md" c={"dimmed"}>
          Travelers with similar searches booked these properties
        </Text>
        <ScrollArea className="w-full" type="never">
          <Box display={"flex"} className="w-full gap-4">
            {/* Render more card here to see horizontal scroll */}
            <Card
              shadow="xl"
              radius="md"
              my={3}
              maw={300}
              style={{ position: "relative" }}
            >
              <Card.Section>
                <Image
                  src="/assets/images/booking-banner-home.jpeg"
                  w={300}
                  h={200}
                  alt="Norway"
                />
              </Card.Section>

              <Text fw={600} mt={30}>
                Mekong Rose Hotel
              </Text>

              <Text c="dimmed">Can Tho city, Vietnam</Text>

              <Flex justify={"flex-end"} align={"center"} gap={2} mt={20}>
                <Text size="sm" c="dimmed">
                  Starting from
                </Text>
                <Text fw={600} size="xl" ml={"auto"}>
                  VND 3,306,500
                </Text>
              </Flex>

              <span
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "5px",
                  background: "#fff",
                  padding: "8px",
                  borderRadius: "50%",
                }}
              >
                <HeartIcon />
              </span>
            </Card>
          </Box>
        </ScrollArea>
      </BoxWrap>

      {/* Get inspiration for your next trip?*/}
      <BoxWrap>
        <Title order={3}>Get inspiration for your next trip?</Title>
        <ScrollArea
          type="hover"
          scrollbarSize={1}
          scrollbars={false}
          className="w-full"
        >
          <Box display="flex" className="w-full gap-4">
            {/* Render more cards here to see horizontal scroll */}
            <BackgroundImage
              src="/assets/images/booking-banner-home.jpeg"
              radius="md"
              className="w-[300px] h-[400px]"
            >
              <Center p="md" mt={180}>
                <Stack gap={3} className="text-white">
                  <Title order={1}>5 of the best hotels in Los Angeles</Title>
                  <Text lineClamp={2}>
                    From Hollywood to Beverly Hills, discover 5 of the best
                    hotels in Los Angeles for your...
                  </Text>
                </Stack>
              </Center>
            </BackgroundImage>

            <Card shadow="xl" radius="md" my={3} className="relative w-[300px]">
              <Card.Section>
                <Image
                  src="/assets/images/booking-banner-home.jpeg"
                  className="w-[300px] h-[280px]"
                  alt="Norway"
                />
              </Card.Section>

              <Text fw={600} mt={30}>
                5 of the best hotels in Los Angeles
              </Text>
              <Text c="dimmed" lineClamp={2}>
                From Hollywood to Beverly Hills, discover 5 of the best hotels
                in Los Angeles for your...
              </Text>
            </Card>
          </Box>
        </ScrollArea>
      </BoxWrap>

      {/* Travel more, spend less?*/}
      <BoxWrap>
        <Title order={3}>Travel more, spend less?</Title>
        <Card radius="md" withBorder my={5} style={{ position: "relative" }}>
          <Flex justify={"space-between"} align={"center"}>
            <Stack gap={3}>
              <Text size="sm" fw={700}>
                Sign in, save money
              </Text>
              <Text size="xs">
                Save 10% or more at participating properties – just look for the
                blue Genius label
              </Text>
              <Flex gap={10} mt={10}>
                <Button variant="filled" color="indigo">
                  Sign in
                </Button>
                <Button variant="transparent">Register</Button>
              </Flex>
            </Stack>
            <Image
              src="/assets/images/maketing-home.png"
              alt="Genius"
              w={100}
              height={100}
            />
          </Flex>
        </Card>
      </BoxWrap>
    </React.Fragment>
  );
};
