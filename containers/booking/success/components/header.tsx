import { Box, Container, Flex, Stack, Text, Title } from "@mantine/core";
import { CheckIcon } from "lucide-react";
import React from "react";

export const BookingSuccessHeader = () => {
  return (
    <Box bg={"#212121"} p={100}>
      <Container className="text-[#f1f1f1]">
        <Stack gap={10} justify="center" align="center">
          <Flex justify={"center"} align={"center"} gap={6}>
            <Title order={3} className="text-green-700">
              Booking completed
            </Title>
            <CheckIcon className="text-green-700 w-6 h-6" />
          </Flex>

          <Text size="xs" maw={300} ta={'center'}>
            {`We're`} sent a booking confirmation and an invoice to
            nguyen@gmail.com
          </Text>

          <Text size="xs">
            Order number <strong>#421337</strong>
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};
