"use client";

import { PrimaryButton } from "@/components/button";
import {
  Box,
  Container,
  Flex,
  Radio,
  Stack,
  Text,
  Textarea,
  Title,
} from "@mantine/core";
import { ChevronLeft } from "lucide-react";
import { CancleBookingModal } from "./components/cancle-booking-modal";
import { useState } from "react";
import Link from "next/link";

export const CancleBookingContainer = () => {
  const [showTextArea, setShowTextArea] = useState(false);

  return (
    <Box bg={"#fff"} className="min-h-screen">
      <Container pt={30}>
        <Link href={"/booking/history"}>
          <Flex gap={3} align={"center"} mb={25} className="text-blue-700">
            <ChevronLeft className="w-5 h-5" />
            Back to my booking
          </Flex>
        </Link>

        <Text size="xs">Step 1 of 2</Text>
        <Title order={3}>Reason for canceling</Title>
        <Text size="xs">
          We can help you find alternative solutions if you need to make changes
          to your booking.
        </Text>

        <Box mt={15}>
          <Radio.Group name="cancleIdeal" withAsterisk>
            <Stack gap={10}>
              <Radio
                onClick={() => setShowTextArea(false)}
                label="Property asked to cancle"
                value="0"
              />
              <Radio
                onClick={() => setShowTextArea(false)}
                label="Change dates or destination"
                value="1"
              />
              <Radio
                onClick={() => setShowTextArea(false)}
                label="Personal resons/Trip called off"
                value="2"
              />
              <Radio
                onClick={() => setShowTextArea(false)}
                label="Change in the number or need of trvelers"
                value="3"
              />
              <Radio
                onClick={() => setShowTextArea(false)}
                label="Found a different accommodation option"
                value="4"
              />
              <Radio
                onClick={() => setShowTextArea(false)}
                label="Made booking for the same dates - canceled the ones i don't need"
                value="5"
              />
              <Radio
                onClick={() => setShowTextArea(false)}
                label="Unable to travel due to redistrictions related to coronavirus (COVID-19)"
                value="6"
              />
              <Radio
                label="None of the above"
                value="7"
                onClick={() => setShowTextArea(true)}
              />
            </Stack>
          </Radio.Group>

          {showTextArea && (
            <Textarea
              label="In your own words, please explain why you're caceling"
              autosize
              minRows={4}
              resize="vertical"
            />
          )}
        </Box>

        <Stack mt={50}>
          <CancleBookingModal />
          <PrimaryButton fullWidth variant="light" color="blue">
            I want to keep this booking
          </PrimaryButton>
        </Stack>
      </Container>
    </Box>
  );
};
