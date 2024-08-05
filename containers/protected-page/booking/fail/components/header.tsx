import { Box, Container, Flex, Stack, Text, Title } from "@mantine/core";
import { CircleXIcon } from "lucide-react";

export const BookingFailHeader = () => {
  return (
    <Box bg={"#212121"} p={100}>
      <Container className="text-[#f1f1f1]">
        <Stack gap={10} justify="center" align="center">
          <Flex justify={"center"} align={"center"} gap={10}>
            <Title order={3} className={"text-red-600 uppercase"}>
              Booking fail
            </Title>
            <CircleXIcon className="text-red-600 w-6 h-6" />
          </Flex>

          <Text size="xs" maw={300} ta={"center"}>
            Please try again, some information are incorrect. Please have double
            check on.
          </Text>

          <Text size="xs">
            Order number <strong>#421337</strong>
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};
