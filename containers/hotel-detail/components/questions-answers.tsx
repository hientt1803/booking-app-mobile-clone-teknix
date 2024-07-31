"use client";

import { PrimaryButton } from "@/components/button";
import {
  Drawer,
  Flex,
  Stack,
  Text,
  TextInput,
  Textarea,
  Title,
  Tooltip,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MessageCircleQuestion } from "lucide-react";
import React, { useState } from "react";

export const QuestionAndAnswers = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

  const submitForm = () => {};
  return (
    <React.Fragment>
      <Flex justify={"space-between"} align={"center"} mb={5}>
        <Title order={5}>Property question and ansers</Title>
        <MessageCircleQuestion className="text-blue-800" />
      </Flex>

      {/* Drawer */}
      <Drawer
        offset={8}
        radius="md"
        opened={opened}
        onClose={close}
        position="left"
        className="relative"
      >
        <Stack gap={3}>
          <Text size="md" fw={700} mb={10}>
            {`Didn't`} find your answer? Ask a question about the property
          </Text>

          <form onSubmit={submitForm}>
            <TextInput
              label="Email address"
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              inputContainer={(children) => (
                <Tooltip
                  label="Fill your email here to receiver help!"
                  position="top-start"
                  opened={focused}
                >
                  {children}
                </Tooltip>
              )}
            />
            <Textarea
              label="Type your question here:"
              placeholder="e.g. do you offer room service"
              value={value}
              onChange={(event) => setValue(event.currentTarget.value)}
              mt={10}
            />
            
            <Text size="xs" c={"dimmed"}>
              300 characters left
            </Text>

            <PrimaryButton fullWidth className="my-6">Submit your question</PrimaryButton>

            <Text size="xs">
              Your question will be pushed on Booking.com after {`it's`}{" "}
              approved and answered.{" "}
              <span className="text-blue-800">
                Click here to read post guidelines.
              </span>
            </Text>
          </form>
        </Stack>
      </Drawer>

      <Stack gap={5}>
        <Text size="xs" lineClamp={4} className="text-neutral-700">
          Send a question to the property to find out more.
        </Text>
        <Text className="cursor-pointer text-blue-800" size="sm" onClick={open}>
          Ask a question
        </Text>
      </Stack>
    </React.Fragment>
  );
};
