import {
    Box,
    Container,
    Divider,
    Flex,
    Stack,
    Text,
    Title
} from "@mantine/core";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";

export const NotificationContainer = () => {
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
          <Title order={2}>Email notifications</Title>
          <Text size="sm">
            Decide what you want to be notified about, and unsubscribe from what
            you dont.
          </Text>
          <Divider />
          <Stack>
            <Text size="sm">Email preferences</Text>
            <Text size="sm">tronghientran8@gmail.com</Text>
            <Text size="xs" c={"dimmed"}>
              This email address {`isn't`} verified yet, so you cant use all
              your {`account's`} features.
            </Text>
          </Stack>
          <Divider />
        </Stack>
      </Container>
    </Box>
  );
};
