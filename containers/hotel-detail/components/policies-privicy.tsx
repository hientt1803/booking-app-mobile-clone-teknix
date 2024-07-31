"use client";

import {
  Accordion,
  Box,
  Paper,
  ScrollArea,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import React from "react";

export const PoliciesPrivicy = () => {
  return (
    <React.Fragment>
      <Accordion variant="default">
        <Accordion.Item value="children">
          <Accordion.Control>
            <Text size="xs" fw={650}>
              Children and extra beds
            </Text>
          </Accordion.Control>
          <Accordion.Panel>
            <Stack>
              <Stack gap={5}>
                <Text fw={600} size="xs">
                  Child policies
                </Text>
                <Text size="xs">
                  To see correct prices and occupancy info, add the number and
                  ages of children in your group to your search.
                </Text>
              </Stack>

              <Stack gap={5}>
                <Text fw={600} size="xs" mt={20}>
                  Crib and extra bed policies
                </Text>
                <Text size="xs">
                  {`There's`} no capacity for cribs at this property.
                </Text>
                <Text size="xs">
                  This property {`doesn't`} offer extra beds
                </Text>
              </Stack>
            </Stack>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="contacting">
          <Accordion.Control>
            <Text size="xs" fw={650}>
              Contacting the Property
            </Text>
          </Accordion.Control>
          <Accordion.Panel>
            <Text size="xs">
              To see correct prices and occupancy info, add the number and ages
              of children in your group to your search.
            </Text>
            <Text size="xs" mt={10}>
              To see correct prices and occupancy info, add the number and ages
              of children in your group to your search.
            </Text>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="partner">
          <Accordion.Control>
          <Text size="xs" fw={650}>
            Prefered Partner Program
            </Text>
            </Accordion.Control>
          <Accordion.Panel>
            <Text size="xs" mt={10}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate vero numquam tempore id sed, temporibus et. Eaque, vero
              consectetur! Distinctio ullam atque eos iure deleniti suscipit,
              nemo tenetur eveniet dolores?
            </Text>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>

      <Box mt={30}>
        <Stack>
          <Title order={5}>FAQs about SOJO HOTEL CAN THO</Title>
          <ScrollArea className="w-full" type="never">
            <Box display={"flex"} className="gap-4 w-full">
              <Paper shadow="lg" withBorder p={20} w={250} radius={"md"}>
                <Stack>
                  <Text size="sm" fw={600}>
                    How far is SOJO HOTEL CAN THO from the center of Can Tho?
                  </Text>
                  <Text size="xs" lineClamp={5}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eos ipsam dolores laboriosam? Quaerat maiores omnis aliquid
                    voluptas, est cupiditate assumenda ab sit pariatur deleniti
                    laudantium dolorem doloremque, quibusdam, commodi porro?
                  </Text>
                </Stack>
              </Paper>
            </Box>
          </ScrollArea>
        </Stack>
      </Box>
    </React.Fragment>
  );
};
