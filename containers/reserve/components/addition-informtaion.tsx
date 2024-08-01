import { BoxWrap } from "@/components/box-wrap";
import {
  Checkbox,
  Container,
  Divider,
  Flex,
  List,
  Select,
  Text,
  Textarea,
  Title,
} from "@mantine/core";
import { CheckCircle, ChevronRight } from "lucide-react";
import React from "react";
import { AdditionInformationReviewHouse } from "./addition-information-review-house";
import { PrimaryButton } from "@/components/button";
import Link from "next/link";

export const AdditionInformtaion = () => {
  return (
    <React.Fragment>
      <BoxWrap>
        <Title order={6}>Add to your stay</Title>
        <Checkbox
          mt="md"
          label="I'm interedted in renting a car"
          description="Make the most of your trip - check out car rental options in your booking cofirmation."
          size="xs"
        />
        <Divider my={10} />
        <Checkbox
          mt="md"
          label="Want to book a taxi or shuttle ride in advence"
          description="Avoid suprpises - get from the airport to your accommodations withou any hassle.
         We'll add taxi options to your booking cofirmation."
          size="xs"
        />
      </BoxWrap>
      <BoxWrap>
        <Title order={6}>Special requests</Title>
        <Text size="xs" mt={10}>
          Special request cant be guaranteed, but the property will do its best
          to meet your needs. You can always make a special request after your
          booking is complete.
        </Text>
        <Textarea
          label="Please write your requests in English or Vietnamese (optional)"
          autosize
          minRows={2}
          mt={10}
        />
      </BoxWrap>
      <BoxWrap>
        <Title order={6}>Your arrival time</Title>
        <Flex gap={15} align={"center"}>
          <CheckCircle className="w-5 h-5 text-green-700" />
          <Text size="xs" fw={600}>
            Late check-in until 23:00.
          </Text>
        </Flex>

        <Select
          label="Add your estimated arrival time (Optional)"
          description="Time is for Phu Quoc time zone"
          placeholder="Please select"
          data={["React", "Angular", "Vue", "Svelte"]}
          searchable
        />
      </BoxWrap>
      <BoxWrap>
        <Title order={6}>Review House Rules</Title>
        <Text size="xs" mt={10}>
          Your host would like you to agree to the following house rules:
        </Text>

        <AdditionInformationReviewHouse />

        <Text size="xs" fw={600} mt={10}>
          By continuing to the next step, you agree to these house rules.
        </Text>
      </BoxWrap>

      <Container mt={20}>
        <Link href={"/reserve/complete-step"}>
          <PrimaryButton fullWidth>
            <Flex gap={10} align={"center"}>
              <Text size="sm">Go to final step</Text>
              <ChevronRight className="w-4 h-4" />
            </Flex>
          </PrimaryButton>
        </Link>
        <Text fw={600} size="xs" ta={"center"} mt={10}>
          Review your details and secure your booking.
        </Text>
      </Container>
    </React.Fragment>
  );
};
