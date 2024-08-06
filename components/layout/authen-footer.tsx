import { Box, Container, Stack, Text } from "@mantine/core";
import Link from "next/link";

export const AuthenFooter = () => {
  return (
    <Box py={20}>
      {/* List property */}
      <Box bg={"#f1f1f1"}>
        <Container>
          <Box className="text-xs">
            <Link href={"/account"} className="hover:underline">
              About Booking.com -{" "}
            </Link>
            <Link href={"/account"} className="hover:underline">
              Terms & conditions -{" "}
            </Link>
            <Link href={"/account"} className="hover:underline">
              How we work -{" "}
            </Link>
            <Link href={"/account"} className="hover:underline">
              Privacy & Cookie Statement -{" "}
            </Link>
            <Link href={"/account"} className="hover:underline">
              Help center
            </Link>
          </Box>

          <Stack align="start" mt={10}>
            <Text size="xs">
              Copyright © 1996–2024 Booking.com™. All rights reserved.
            </Text>

            <Text size="xs" ta={"start"}>
              Booking.com is part of Booking Holdings Inc., the world leader in
              online travel and related services.
            </Text>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};
