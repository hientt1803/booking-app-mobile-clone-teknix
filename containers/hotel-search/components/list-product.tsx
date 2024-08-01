"use client"

import { Divider, Grid } from "@mantine/core";
import React from "react";
import { BookingCard } from "./booking-card";

export const ListProduct = () => {
  return (
    <Grid>
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
  );
};


