import { PrimaryButton } from "@/components/button";
import {
  Box,
  Button,
  Container,
  Image,
  Stack,
  Text
} from "@mantine/core";
import Link from "next/link";

export const BookingFailBody = () => {
  return (
    <Box bg={"#fff"} className="relative h-full text-black">
      <Box
        className="bg-[#fff] absolute top-[-35px] left-0 right-0"
        style={{
          borderRadius: "30px 30px 0px 0px",
        }}
      >
        <Container>
          <Stack justify="center" align="center">
            <Image
              src={"/assets/images/booking/booking-fail.jpg"}
              alt=""
              w={300}
              h={300}
              fit="cover"
            />
          </Stack>

          <Text size="sm" fw={600} c="dark" maw={500} ta={"center"}>
            Something went wrong in your booking! please check your information
            and try again
          </Text>

          <Stack gap={10} mt={25}>
            <Link href={"/reserve/complete-step"}>
              <PrimaryButton fullWidth color="red" className="uppercase">
                Try again
              </PrimaryButton>
            </Link>
            <Link href={"/booking-history"}>
              <Button
                variant="light"
                color="dark"
                fullWidth
                className="uppercase"
              >
                Get Back
              </Button>
            </Link>
            <Link href={"/booking/booking-success"}>
              <Button
                variant="filled"
                color="dark"
                fullWidth
                className="uppercase"
              >
                BOOKING SUCCESS SCREEN (DEV ONLY)
              </Button>
            </Link>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};
