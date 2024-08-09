"use client";

import { useAppSelector } from "@/stores";
import { Divider, Grid } from "@mantine/core";
import { BookingCard } from "./booking-card";

export const ListProduct = () => {
  const listHotel = useAppSelector((state) => state.HotelSlice.hotels);
  const filteredHotel = useAppSelector(
    (state) => state.HotelSlice.hotelFiltered
  );

  return (
    <Grid>
      {filteredHotel.length > 0 ? (
        <>
          {filteredHotel.map((hotel) => (
            <Grid.Col span={12} key={hotel.id}>
              <BookingCard
                hotel={hotel}
                breakfast
                discount
                roomLeft="Only 1 left"
              />
              <Divider />
            </Grid.Col>
          ))}
        </>
      ) : (
        <>
          {listHotel.map((hotel) => (
            <Grid.Col span={12} key={hotel.id}>
              <BookingCard
                hotel={hotel}
                breakfast
                discount
                roomLeft="Only 1 left"
              />
              <Divider />
            </Grid.Col>
          ))}
        </>
      )}
    </Grid>
  );
};
