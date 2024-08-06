"use client";

import { BoxWrap } from "@/components/box-wrap";
import { Box, Container, Flex, Stack, Text } from "@mantine/core";
import { CheckCircle, ChevronRight, CreditCardIcon } from "lucide-react";
import { useForm } from "@mantine/form";
import { FormReserve } from "./form-reserve";
import { RoomInfor } from "./room-infor";
import { AdditionInformtaion } from "./addition-informtaion";
import { PrimaryButton } from "@/components/button";
import { useEffect } from "react";
import { useWindowScroll } from "@mantine/hooks";
import { useRouter } from "next/navigation";

export const FormControlled = () => {
  const router = useRouter();
  const [scroll, scrollTo] = useWindowScroll();

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
      arrivalTime: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      firstName: (value) =>
        value.length < 1 ? "Please provide first Name" : null,
      lastName: (value) =>
        value.length < 1 ? "Please provide last Name" : null,
      country: (value) =>
        value.length < 1 ? "Please provide country Name" : null,
      phone: (value) =>
        value.length < 1 ? "Please provide phone number" : null,
      arrivalTime: (value) => !value.length && "Please provide arrivalTime",
    },
  });

  useEffect(() => {
    if (!form.isValid()) {
      scrollTo({ y: 1050 });
    } else {
      router.push("/reserve/complete-step");
    }
  }, [form.errors]);

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <FormReserve form={form} />
      <BoxWrap>
        <Box py={5}>
          <Stack gap={8}>
            <Flex gap={20} align={"center"}>
              <CheckCircle className="w-5 h-5 text-green-700" />
              <Text size="xs">
                No payment needed now. {`You'll`} pay at the property.
              </Text>
            </Flex>
            <Flex gap={20} align={"center"}>
              <CreditCardIcon className="w-5 h-5 text-green-700" />
              <Text size="xs">No credit card needed.</Text>
            </Flex>
            <Flex gap={20} align={"center"}>
              <CheckCircle className="w-5 h-5 text-green-700" />
              <Text size="xs">
                Congrats! You got the cheapest option at Long Pearl Hotel Phu
                Quoc. {`Don't`} miss out, book now!
              </Text>
            </Flex>
          </Stack>
        </Box>
      </BoxWrap>
      <RoomInfor />
      <AdditionInformtaion form={form} />

      <Container my={20}>
        <PrimaryButton fullWidth type="submit">
          <Flex gap={10} align={"center"}>
            <Text size="sm">Go to final step</Text>
            <ChevronRight className="w-4 h-4" />
          </Flex>
        </PrimaryButton>
        <Text fw={600} size="xs" ta={"center"} mt={10}>
          Review your details and secure your booking.
        </Text>
      </Container>
    </form>
  );
};
