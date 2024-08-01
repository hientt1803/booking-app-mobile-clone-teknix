import { BoxWrap } from "@/components/box-wrap";
import { Checkbox, Text } from "@mantine/core";
import React from "react";

export const PriviciesPolicies = () => {
  return (
    <React.Fragment>
      <BoxWrap>
        <Checkbox
          mt="md"
          label="I consent to receiving marketing emails from Booking.com, including promotions, personalized recommendations, rewards, travel experiences, and updates about Booking.com’s products and services."
          size="xs"
        />
        <Checkbox
          mt="md"
          label="I consent to receiving marketing emails from Booking.com, including promotions, personalized recommendations, rewards, travel experiences, and updates about Booking.com Transport Limited’s products and services."
          size="xs"
        />
        <Text size="xs" mt={10}>
          By signing up, you let us tailor offers and content to your interests
          by monitoring how you use Booking.com through tracking technologies.
          Unsubscribe anytime. Read our{" "}
          <span className="text-blue-700 underline">privacy policy</span>.
        </Text>
      </BoxWrap>
    </React.Fragment>
  );
};
