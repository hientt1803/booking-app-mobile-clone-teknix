"use client";

import { HOTEL_MOCK_DATA } from "@/utils";
import { Divider, Grid } from "@mantine/core";
import { BookingCard } from "./booking-card";

export const ListProduct = () => {
  const listHotel = HOTEL_MOCK_DATA;

  return (
    <Grid>
      {listHotel.map((hotel) => (
        <Grid.Col span={12} key={hotel.id}>
          <BookingCard hotel={hotel} breakfast discount roomLeft="Only 1 left"/>
          <Divider />
        </Grid.Col>
      ))}
    </Grid>
  );
};
