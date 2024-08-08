"use client";

import { BoxWrap } from "@/components/box-wrap";
import {
  Alert,
  Autocomplete,
  Checkbox,
  Divider,
  Flex,
  Group,
  Radio,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import { AlertCircleIcon, ChevronsUpDown } from "lucide-react";

export const FormReserve = ({ form }: { form: UseFormReturnType<any> }) => {
  return (
    <BoxWrap>
      <Title order={6} mb={20}>
        Enter your Details
      </Title>
      <Alert variant="light" color="gray" title="" icon={<AlertCircleIcon />}>
        Almost done, just fill in the required infor
      </Alert>
      <TextInput
        withAsterisk
        label="First Name"
        key={form.key("firstName")}
        {...form.getInputProps("firstName")}
      />
      <TextInput
        withAsterisk
        label="Last Name"
        key={form.key("lastName")}
        {...form.getInputProps("lastName")}
      />
      <TextInput
        withAsterisk
        label="Email Address"
        key={form.key("email")}
        {...form.getInputProps("email")}
      />

      <Autocomplete
        data={["Vietname", "Japan", "Singarpo"]}
        rightSectionPointerEvents="none"
        withAsterisk
        rightSection={<ChevronsUpDown />}
        label="Country/Region"
        key={form.key("country")}
        {...form.getInputProps("country")}
      />

      <Flex justify={"space-between"} gap={5} align={"center"}>
        {/* <Autocomplete
          data={["+84", "+1", "+2"]}
          rightSectionPointerEvents="none"
          withAsterisk
          rightSection={<ChevronsUpDown />}
          className="flex-1"
          label="Country"
        /> */}
        <TextInput
          type="number"
          withAsterisk
          label="Enter phone number"
          className="flex-[3]"
          key={form.key("phone")}
          {...form.getInputProps("phone")}
        />
      </Flex>

      <Checkbox
        mt="md"
        label="Yes, i'd like free paperless confirmation"
        description="We'll text you a link to download our app"
        size="xs"
        key={form.key("termsOfService")}
        {...form.getInputProps("termsOfService", { type: "checkbox" })}
      />
      <Divider my={10} />

      <Stack gap={5}>
        <Group>
          <Text size="sm">
            <strong>Who are you booking for?</strong>(Optional)
          </Text>
          <Group mt="xs">
            <Radio
              value="guest"
              label="I'm the main guest"
              key={form.key("bookingFor1")}
              {...form.getInputProps("bookingFor")}
            />
            <Radio
              value="someone"
              label="I'm booking for someone else"
              key={form.key("bookingFor2")}
              {...form.getInputProps("bookingFor")}
            />
          </Group>
        </Group>
        <Group mt={10}>
          <Text size="sm">
            <strong>Are you travalling for work?</strong>(Optional)
          </Text>
          <Group mt="xs">
            <Radio
              value="0"
              label="Yes"
              key={form.key("traverlingFor1")}
              {...form.getInputProps("traverlingFor")}
            />
            <Radio
              value="1"
              label="No"
              key={form.key("traverlingFor2")}
              {...form.getInputProps("traverlingFor")}
            />
          </Group>
        </Group>
      </Stack>
    </BoxWrap>
  );
};
