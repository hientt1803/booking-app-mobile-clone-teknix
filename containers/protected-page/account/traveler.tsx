import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { ChevronLeftIcon, PlusIcon } from "lucide-react";
import Link from "next/link";

export const TravelerContainer = () => {
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
          <Title order={2}>Other travelers</Title>
          <Text size="sm">
            Add or edit info about the people {`you're`} traveling with.
          </Text>
          <Divider />
          <Stack>
            <Button variant="subtle" className="w-fit ms-auto">
              <PlusIcon /> Add new traveler
            </Button>
          </Stack>
          <Divider />
        </Stack>
      </Container>
    </Box>
  );
};
