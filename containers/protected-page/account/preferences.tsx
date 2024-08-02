import { PrimaryButton } from "@/components/button";
import {
    Box,
    Container,
    Divider,
    Flex,
    Select,
    Stack,
    Text,
    Title
} from "@mantine/core";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";

export const PreferenceContainer = () => {
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
          <Title order={2}>Preferences</Title>
          <Text size="sm">
            Change your language, currency, and accessibility requirements.
          </Text>
          <Divider />
          <Select
            label="Currency"
            placeholder="Select your currency"
            data={["React", "Angular", "Vue", "Svelte"]}
            searchable
          />
          <Select
            label="Language"
            placeholder="Select your language"
            data={["Male", "Female"]}
            searchable
          />
          <PrimaryButton fullWidth>SAVE</PrimaryButton>
        </Stack>
      </Container>
    </Box>
  );
};
