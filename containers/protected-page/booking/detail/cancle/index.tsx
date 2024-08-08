import React from "react";
import { BookingDetailCancleHeader } from "./components/cancle-header";
import { Container } from "@mantine/core";
import { PrimaryButton } from "@/components/button";
import Link from "next/link";

export const BookingCancleDetailContainer = () => {
  return (
    <React.Fragment>
      <BookingDetailCancleHeader />
      <Container mb={30}>
        <Link href={"/booking/history"}>
          <PrimaryButton fullWidth>See your booking</PrimaryButton>
        </Link>
        <Link href={"/hotel"}>
          <PrimaryButton fullWidth className="mt-2" variant="outline" color="dark">
            See more hotel
          </PrimaryButton>
        </Link>
      </Container>
    </React.Fragment>
  );
};
