import React from "react";
import { StepperProgress } from "./components/stepper-progress";
import { DetailInformation } from "./components/detail-information";
import { CheckInInformation } from "./components/check-in-information";
import { FormReserve } from "./components/form-reserve";
import { BoxWrap } from "@/components/box-wrap";
import { Box, Flex, Stack, Text } from "@mantine/core";
import { CheckCircle, CreditCardIcon } from "lucide-react";
import { RoomInfor } from "./components/room-infor";
import { AdditionInformtaion } from "./components/addition-informtaion";
import { ScrollToFormButton } from "./components/scroll-to-form-button";

export const ReserveContainer = () => {
  return (
    <React.Fragment>
      <StepperProgress activeValue={2}/>
      <DetailInformation />
      <CheckInInformation />
      <FormReserve />
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
      <AdditionInformtaion />

      {/* Button scroll to */}
      <ScrollToFormButton />
    </React.Fragment>
  );
};
