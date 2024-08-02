import { PrimaryButton } from "@/components/button";
import {
  Box,
  Checkbox,
  Container,
  Divider,
  Flex,
  Select,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";

export const PersonalContainer = () => {
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
          <Title order={2}>Personal details</Title>
          <Text size="sm">
            Update your info and find out how {`it's`} used.
          </Text>
          <Divider />
          <TextInput
            label="Email address"
            placeholder="Enter name"
            className="mb-1"
          />
          <TextInput
            label="Display name"
            placeholder="Enter display bane"
            className="mb-1"
          />
          <TextInput
            label="Emil address"
            placeholder="Enter email address"
            className="mb-1"
          />
          <TextInput
            label="Phone number"
            placeholder="Phone number"
            className="mb-1"
          />
          <DateInput
            valueFormat="YYYY MMM DD"
            label="Date of birth"
            placeholder="Date of birth"
          />
          <Select
            label="Nationality"
            placeholder="Select your country"
            data={["React", "Angular", "Vue", "Svelte"]}
            searchable
          />
          <Select
            label="Gender"
            placeholder="Select your gender"
            data={["Male", "Female"]}
            searchable
          />
          <Stack gap={5} mt={10}>
            <Text size="md" fw={600}>
              Enter your passport
            </Text>
            <TextInput
              label="First name(s)"
              withAsterisk
              placeholder=""
              className="mb-1"
            />
            <TextInput
              label="Last name(s)"
              withAsterisk
              placeholder=""
              className="mb-1"
            />
            <Select
              label="Issuing country"
              withAsterisk
              placeholder="Select issuing country"
              data={["React", "Angular", "Vue", "Svelte"]}
              searchable
            />
            <TextInput
              label="Passport number"
              withAsterisk
              placeholder="Enter document number"
              type="number"
              className="mb-1"
            />
            <DateInput
              valueFormat="YYYY MMM DD"
              label="Expiration date"
              withAsterisk
              placeholder="Expiration"
            />
            <Checkbox
              label=" Iconsent to Booking.com storing my passport information in
              accordance with the privacy statement"
            />
          </Stack>

          <PrimaryButton fullWidth>SAVE</PrimaryButton>
        </Stack>
      </Container>
    </Box>
  );
};
