"use client";

import { Grid, Text } from "@mantine/core";
import React from "react";
import { BookingCard } from "./booking-card";

export const ListBookingCard = () => {
  return (
    <React.Fragment>
      <Text size="sm" my={30}>6 results</Text>
      <Grid>
        <Grid.Col>
          <BookingCard />
        </Grid.Col>
      </Grid>
    </React.Fragment>
  );
};
