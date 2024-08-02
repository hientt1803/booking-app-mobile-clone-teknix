import { Box, Container, Title } from "@mantine/core";
import dynamic from "next/dynamic";
const SignInForm = dynamic(() =>
  import("./components/sign-in-form").then((mob) => mob.SignInForm)
);
export const SignInContainer = () => {
  return (
    <Box bg={"#fff"} className="min-h-screen flex justify-center items-center">
      <Container>
        <Title order={3} mb={30}>Sign in or create an account</Title>
        <SignInForm />
      </Container>
    </Box>
  );
};
