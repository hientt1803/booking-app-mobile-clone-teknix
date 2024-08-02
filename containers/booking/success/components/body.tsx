import { PrimaryButton } from "@/components/button";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export const BookingSuccessBody = () => {
  return (
    <Box bg={"#f1f1f1"} className="relative h-full text-black">
      <Box
        className="bg-[#f1f1f1] absolute top-[-35px] left-0 right-0"
        style={{
          borderRadius: "30px 30px 0px 0px",
        }}
      >
        <Container>
          <Box mt={50}>
            <Flex justify={"space-between"} align={"center"} gap={10}>
              <Stack gap={5}>
                <Title order={3} lineClamp={3}>
                  Beautiful Banquet Hall
                </Title>
                <Text size="xs" c="dimmed">
                  33607 Cleveland Lodge
                </Text>
              </Stack>
              <Image
                src="/assets/images/booking-banner-home.jpeg"
                alt=""
                w={150}
                h={100}
                radius={10}
              />
            </Flex>
          </Box>

          <Box mt={30}>
            <Flex justify={"space-between"} align={"center"} gap={5}>
              <Stack gap={3}>
                <Text size="xs" c="dimmed">
                  Check in from
                </Text>
                <Text size="sm" fw={600}>
                  Feb 7, 2024
                </Text>
                <Text size="xs" fw={600}>
                  Friday 10:00
                </Text>
              </Stack>
              <ChevronRight className="text-blue-700 w-7 h-7" />
              <Stack gap={3}>
                <Text size="xs" c="dimmed">
                  Check out
                </Text>
                <Text size="sm" fw={600}>
                  Feb 9, 2024
                </Text>
                <Text size="xs" fw={600}>
                  Saturday 9:00
                </Text>
              </Stack>
            </Flex>
          </Box>

          <Divider my={20} />

          <Stack>
            <Flex justify={"space-between"} align={"center"} gap={5}>
              <Stack gap={3}>
                <Text size="xs" c="dimmed">
                  Rent
                </Text>
              </Stack>
              <Stack gap={3}>
                <Text size="sm" fw={600}>
                  $440.00
                </Text>
              </Stack>
            </Flex>
            <Flex justify={"space-between"} align={"center"} gap={5}>
              <Stack gap={3}>
                <Text size="xs" c="indigo">
                  Discoint
                </Text>
              </Stack>
              <Stack gap={3}>
                <Text size="sm" fw={600} c="indigo">
                  - $115.00
                </Text>
              </Stack>
            </Flex>
            <Flex justify={"space-between"} align={"center"} gap={5}>
              <Stack gap={3}>
                <Text size="xs" c="dark">
                  Cleaning fee
                </Text>
              </Stack>
              <Stack gap={3}>
                <Text size="sm" fw={600} c="dark">
                  $95.00
                </Text>
              </Stack>
            </Flex>
            <Flex justify={"space-between"} align={"center"} gap={5}>
              <Stack gap={3}>
                <Text size="xs" c="dark">
                  Service fee
                </Text>
              </Stack>
              <Stack gap={3}>
                <Text size="sm" fw={600} c="dark">
                  $44.00
                </Text>
              </Stack>
            </Flex>
            <Divider />
            <Flex justify={"space-between"} align={"center"} gap={5}>
              <Stack gap={3}>
                <Text size="lg" c="dark" fw={600}>
                  Total
                </Text>
              </Stack>
              <Stack gap={3}>
                <Text size="sm" fw={600} c="dark">
                  $464.00
                </Text>
              </Stack>
            </Flex>
          </Stack>

          <Stack gap={10} mt={50}>
            <Link href={"/hotel"}>
              <PrimaryButton fullWidth className="uppercase">
                Confirm order
              </PrimaryButton>
            </Link>
            <Link href={"/booking-history"}>
              <Button
                variant="light"
                color="dark"
                fullWidth
                className="uppercase"
              >
                See your booking here
              </Button>
            </Link>
            <Link href={"/booking/booking-fail"}>
              <Button
                variant="filled"
                color="dark"
                fullWidth
                className="uppercase"
              >
                BOOKING FAIL SCREEN (DEV ONLY)
              </Button>
            </Link>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};
