"use client";

import { BoxWrap } from "@/components/box-wrap";
import { Accordion, Button, Text, TextInput } from "@mantine/core";

export const Promotion = () => {
  return (
    <BoxWrap>
      <Accordion variant="default">
        <Accordion.Item value="children">
          <Accordion.Control>
            <Text size="xs" fw={650}>
              Add a promo code
            </Text>
          </Accordion.Control>
          <Accordion.Panel>
            <TextInput label="Enter your promo code" />
            <Button variant="outline" color="blue" mt={8}>
              Apply
            </Button>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </BoxWrap>
  );
};
