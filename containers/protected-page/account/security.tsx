import { PrimaryButton } from "@/components/button";
import {
    Box,
    Button,
    Container,
    Divider,
    Flex,
    Stack,
    Text,
    Title
} from "@mantine/core";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";

export const SecurityContainer = () => {
  return (
    <Box bg="#fff" py={10}>
      <Container>
        <Stack>
          <Link href={"/account"}>
            <Flex>
              <ChevronLeftIcon />
              Comeback
            </Flex>
          </Link>
          <Title order={2}>Security</Title>
          <Text size="sm">
            Change your secutiry settings, setup secure authentication, or
            delete your account.
          </Text>
          <Divider />
          <Stack>
            <Text size="sm">Password</Text>
            <Text size="xs">
              Reset your password regularly to keep your account secure
            </Text>
            <Button variant="subtle" className="w-fit ms-auto">
              Reset
            </Button>
          </Stack>
          <Divider />
          <Stack>
            <Text size="sm">Two-factor authentication</Text>
            <Text size="xs">
              Increse your {`account's`} security by setting up two-factor
              authentication
            </Text>
            <Button variant="subtle" className="w-fit ms-auto">
              Set up
            </Button>
          </Stack>
          <Divider />
          <Stack>
            <Text size="sm">Active sessions</Text>
            <Button variant="subtle" className="w-fit ms-auto">
              Active
            </Button>
          </Stack>
          <Divider />
          <Stack>
            <Text size="sm">Delete account</Text>
            <Text size="xs">Permanetly delete your Booking.com account</Text>
            <Button variant="subtle" className="w-fit ms-auto">
              Delete account
            </Button>
          </Stack>
          <PrimaryButton fullWidth>SAVE</PrimaryButton>
        </Stack>
      </Container>
    </Box>
  );
};
