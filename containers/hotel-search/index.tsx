"use client";

import {
  Autocomplete,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  ScrollArea,
  Stack,
} from "@mantine/core";
import { BedIcon, ChevronDown } from "lucide-react";
import Link from "next/link";
import { BookingCard } from "./components/booking-card";
import { NavFilter } from "./components/nav-filter";

export const SearchPageContainer = () => {
  return (
    <Box bg='#fff'>
      <Box bg="#1e3a8a" py={30} style={{ position: "relative" }}>
        <Box
          bg={"#fcc419"}
          p={6}
          mx={10}
          style={{ position: "absolute", bottom: "-50px", left: 0, right: 0 }}
        >
          <Stack>
            <Autocomplete
              data={["Can Tho", "Saigon", "Da Nang"]}
              leftSectionPointerEvents="none"
              leftSection={<BedIcon />}
              // label="Your favorite library"
              placeholder="Around curent location?"
            />

            {/* Button */}
            <Button color="blue" variant="filled">
              <Link href="/hotel/searching-form">Search</Link>
            </Button>
          </Stack>
        </Box>
      </Box>

      {/* Filter */}
      <div
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1,
          background: "#fff",
        }}
      >
        <Container>
          <Box mt={60} p={10}>
            <NavFilter />
          </Box>
        </Container>
      </div>

      {/* Categories search */}
      <Container>
        <Divider mt={30} />
        <ScrollArea className="w-full" type="always" scrollbarSize={2} py={15}>
          <Box display={"flex"} className="w-full gap-4">
            <Button variant="default" radius="xl">
              Hotels (132)
            </Button>
            <Button variant="default" radius="xl">
              Double beb (199)
            </Button>
            <Button variant="default" radius="xl">
              Family rooms (154)
            </Button>
            <Button variant="default" radius="xl">
              Electric kettle (135)
            </Button>
            <Button variant="default" radius="xl">
              Electric kettle (135)
            </Button>
            <Button variant="default" radius="xl">
              Electric kettle (135)
            </Button>
            <Button variant="default" radius="xl">
              Electric kettle (135)
            </Button>
          </Box>
        </ScrollArea>
      </Container>

      {/* List product */}
      <Container>
        <Grid>
          {
            
          }
          <Grid.Col span={12} mb={10}>
            <BookingCard isFeatured isGenius />
            <Divider />
          </Grid.Col>
          <Grid.Col span={12} mb={10}>
            <BookingCard
              isFeatured
              isGenius
              roomLeft="Only 1 room left at this price on our site"
            />
            <Divider />
          </Grid.Col>
          <Grid.Col span={12} mb={10}>
            <BookingCard discount />
            <Divider />
          </Grid.Col>
          <Grid.Col span={12} mb={10}>
            <BookingCard
              discount
              breakfast
              roomLeft="Only 4 room left at this price on our site"
            />
          </Grid.Col>
          <Grid.Col span={12} mb={10}>
            <BookingCard />
          </Grid.Col>
          <Grid.Col span={12} mb={10}>
            <BookingCard />
          </Grid.Col>
          <Grid.Col span={12} mb={10}>
            <BookingCard />
          </Grid.Col>
          <Grid.Col span={12} mb={10}>
            <BookingCard />
          </Grid.Col>
          <Grid.Col span={12} mb={10}>
            <BookingCard />
          </Grid.Col>
          <Grid.Col span={12} mb={10}>
            <BookingCard />
          </Grid.Col>
          <Grid.Col span={12} mb={10}>
            <BookingCard />
          </Grid.Col>
          <Grid.Col span={12} mb={10}>
            <BookingCard />
          </Grid.Col>
        </Grid>

        {/* Load more button */}
        <Button variant="outline" fullWidth py={6}>
          Load more results <ChevronDown />
        </Button>
      </Container>
    </Box>
  );
};
