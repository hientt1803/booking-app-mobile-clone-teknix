"use client";

import { Box, Container, Stepper, Text } from "@mantine/core";
import { useState } from "react";

export const StepperProgress = ({ activeValue }: { activeValue: number }) => {
  const [active, setActive] = useState(activeValue);
  // const nextStep = () =>
  //   setActive((current) => (current < 3 ? current + 1 : current));
  // const prevStep = () =>
  //   setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <Box bg={"#fff"} pt={30} pb={15}>
      <Container>
        <Stepper size="xs" allowNextStepsSelect={false} active={active} onStepClick={setActive}>
          <Stepper.Step />
          <Stepper.Step />
          <Stepper.Step />
        </Stepper>
        {active == 2 && (
          <Text size="sm" fw={600} ta={"center"} mt={10}>
            Guest details
          </Text>
        )}
        {active == 3 && (
          <Text size="sm" fw={600} maw={350} mx={'auto'} ta={"center"} mt={10}>
            Almost done, Nguyen! We just need a few more details to cofirm your
            booking
          </Text>
        )}
      </Container>
    </Box>
  );
};
