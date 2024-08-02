"use client";

import { PrimaryButton } from "@/components/button";
import { Button, Divider, Flex, Group, Text, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { AppleIcon, FacebookIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export const SignInForm = () => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <React.Fragment>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          withAsterisk
          label="Email address"
          placeholder="Enter your email address"
          className="mb-3"
          key={form.key("email")}
          {...form.getInputProps("email")}
        />

        <Link href={"/auth/sign-in/create-password"}>
          <PrimaryButton fullWidth type="submit">
            Continue with email
          </PrimaryButton>
        </Link>
      </form>

      <Divider
        my={20}
        label="or use one of these options"
        labelPosition="center"
      />

      <Group justify="center" align="center" my={30}>
        <Button variant="outline" color="gray" size="lg">
          <FacebookIcon />
        </Button>
        <Button variant="outline" color="gray" size="lg">
          GG
        </Button>
        <Button variant="outline" color="gray" size="lg">
          <AppleIcon />
        </Button>
      </Group>

      <Divider my={20} />
      <Text size="xs" ta={"center"}>
        By signing in or creating an account, you agree with our{" "}
        <span className="text-blue-600">Terms & Conditions</span> and{" "}
        <span className="text-blue-600">Privacy Statement</span>
      </Text>
      <Text size="xs" ta={"center"} mt={20}>
        All rights reserved.
      </Text>
      <Text size="xs" ta={"center"}>
        Copyright (2024) - ....com
      </Text>
    </React.Fragment>
  );
};
