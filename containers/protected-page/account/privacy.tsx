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

export const PrivacyContainer = () => {
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
          <Title order={2}>Privacy settings</Title>
          <Text size="sm">
            Exercise your privacy rights and control how your data is used.
          </Text>
          <Divider />
          <Stack>
            <Text size="sm">Privacy settings</Text>
            <Text size="sm">tronghientran8@gmail.com</Text>
            <Text size="xs" c={"dimmed"}>
              Select {`"Manage"`} to change your privacy settings and exercies
              your rights using our request form
            </Text>
            <Button variant="subtle" className="w-fit ms-auto">
              Reset
            </Button>
          </Stack>
          <Divider />
        </Stack>
      </Container>
    </Box>
  );
};
