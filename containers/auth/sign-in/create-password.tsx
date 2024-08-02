import { Box, Container, Text, Title } from "@mantine/core";
import React from "react";
import { CreatePasswordForm } from "./components/create-password-form";

export const CreatePasswordContainer = () => {
  return (
    <Box bg={"#fff"} className="min-h-screen flex justify-center items-center">
      <Container>
        <Title order={3}>Create password</Title>
        <Text size="sm" mb={30}>
          Use a minimom of 10 characters, including uppercase letters,
          lowercase, letter, and numbers.
        </Text>
        <CreatePasswordForm />
      </Container>
    </Box>
  );
};
