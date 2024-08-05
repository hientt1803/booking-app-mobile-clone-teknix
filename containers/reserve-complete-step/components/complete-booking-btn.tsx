import { PrimaryButton } from "@/components/button";
import { Container, Flex, Text } from "@mantine/core";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export const CompleteBookingBtn = () => {
  return (
    <Container my={20}>
      <Link href={"/booking/booking-success"}>
        <PrimaryButton fullWidth>
          <Flex gap={10} align={"center"}>
            <Text size="sm">Complete Booking</Text>
            <ChevronRight className="w-4 h-4" />
          </Flex>
        </PrimaryButton>
      </Link>
    </Container>
  );
};
