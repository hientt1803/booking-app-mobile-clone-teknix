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
    TextInput,
    Title
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { AlertCircleIcon, ChevronsUpDown } from "lucide-react";

export const FormReserve = () => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      firstName: "",
      lastName: "",
      country: "",
      phone: "",
      email: "",
      bookingFor: "",
      travalingFor: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <BoxWrap>
      <Title order={6} mb={20}>
        Enter your Details
      </Title>
      <Alert variant="light" color="gray" title="" icon={<AlertCircleIcon />}>
        Almost done, just fill in the required infor
      </Alert>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
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
          <Autocomplete
            data={["+84", "+1", "+2"]}
            rightSectionPointerEvents="none"
            withAsterisk
            rightSection={<ChevronsUpDown />}
            className="flex-1"
            label="Country"
          />
          <TextInput
            withAsterisk
            label="Your phone number here"
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
          <Radio.Group
            size="sm"
            name="bookingFor"
            label="Who are you booking for?"
            description="Optional"
          >
            <Group mt="xs">
              <Radio
                value="guest"
                label="I'm the main guest"
                defaultChecked
                key={form.key("bookingFor")}
                {...form.getInputProps("bookingFor")}
              />
              <Radio
                value="someone"
                label="I'm booking for someone else"
                key={form.key("bookingFor")}
                {...form.getInputProps("bookingFor")}
              />
            </Group>
          </Radio.Group>
          <Radio.Group
            size="sm"
            name="traverlingFor"
            label="Are you travalling for work?"
            description="Optional"
          >
            <Group mt="xs">
              <Radio
                value="0"
                label="Yes"
                key={form.key("traverlingFor")}
                {...form.getInputProps("traverlingFor")}
              />
              <Radio
                value="1"
                label="No"
                defaultChecked
                key={form.key("traverlingFor")}
                {...form.getInputProps("traverlingFor")}
              />
            </Group>
          </Radio.Group>
        </Stack>
      </form>
    </BoxWrap>
  );
};
