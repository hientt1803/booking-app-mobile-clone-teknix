"use client";

import { Grid, Stack, Text } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { BookingCard } from "./booking-card";

export const ListBookingCard = () => {
  const [scroll, scrollTo] = useWindowScroll();

  const searchParams = useSearchParams();

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (params.toString().includes("change-selection=true")) {
      scrollTo({ y: 1800 });
    }
  }, [searchParams]);

  return (
    <React.Fragment>
      <Stack gap={3} my={20}>
        <Text size="sm">6 results</Text>
        <Text size="xs" c="dimmed">
          Prices converted to VND
        </Text>
      </Stack>

      <Grid>
        <Grid.Col>
          <BookingCard />
        </Grid.Col>
        <Grid.Col>
          <BookingCard />
        </Grid.Col>
        <Grid.Col>
          <BookingCard />
        </Grid.Col>
      </Grid>
    </React.Fragment>
  );
};
