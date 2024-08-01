import React from "react";
import { StepperProgress } from "../reserve/components/stepper-progress";
import { DetailInformation } from "../reserve/components/detail-information";
import { CheckInInformation } from "../reserve/components/check-in-information";
import { BoxWrap } from "@/components/box-wrap";
import { Box, Flex, Stack, Text } from "@mantine/core";
import { CheckCircle, CreditCardIcon } from "lucide-react";
import { ReserverInformation } from "./components/reserver-information";
import { Promotion } from "./components/promotion";
import { PriviciesPolicies } from "./components/privicies-policies";
import { CompleteBookingBtn } from "./components/complete-booking-btn";

export const ReserveCompleteStep = () => {
  return (
    <React.Fragment>
      <StepperProgress activeValue={3} />
      <DetailInformation />
      <CheckInInformation />
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

      <ReserverInformation />
      <Promotion />
      <PriviciesPolicies />

      <BoxWrap>
        <Text size="xs">
          Your booking is directly with Long Pearl Hotel Phu Quoc and by
          completing this booking you agree to the{" "}
          <span className="text-blue-700 underline">
            booking conditions general term,
          </span>{" "}
          and <span className="text-blue-700 underline">privacy policy</span>
        </Text>
      </BoxWrap>

      <CompleteBookingBtn />
    </React.Fragment>
  );
};
