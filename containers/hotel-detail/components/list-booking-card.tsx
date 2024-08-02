"use client";

import { Grid, Stack, Text } from "@mantine/core";
import React from "react";
import { BookingCard } from "./booking-card";

export const ListBookingCard = () => {
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
