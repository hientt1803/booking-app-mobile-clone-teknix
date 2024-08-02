"use client";

import { PrimaryButton } from "@/components/button";
import { Divider, Text, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import Link from "next/link";
import React from "react";

export const CreatePasswordForm = () => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      password: "",
      termsOfService: false,
    },

    validate: {
      password: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid password",
    },
  });

  return (
    <React.Fragment>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          withAsterisk
          label="Password"
          placeholder="Enter your Password"
          className="mb-3"
          key={form.key("password")}
          {...form.getInputProps("password")}
        />

        <TextInput
          withAsterisk
          label="Confirm password"
          placeholder="Confirm your password"
          className="mb-3"
          key={form.key("confirmPassword")}
          {...form.getInputProps("confirmPassword")}
        />

        <Link href={"/account"}>
          <PrimaryButton fullWidth type="submit">
            Create account
          </PrimaryButton>
        </Link>
      </form>

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
