"use client";

import { BoxWrap } from "@/components/box-wrap";
import {
  Accordion,
  Box,
  Container,
  Divider,
  Flex,
  Grid,
  List,
  Modal,
  Stack,
  Text,
  ThemeIcon,
  Title,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  CheckIcon,
  DollarSignIcon,
  DotIcon,
  DotSquareIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export const CheckInInformation = () => {
  return (
    <React.Fragment>
      <BoxWrap>
        <Box className="rounded-md p-3">
          <Stack gap={5}>
            <Grid className="">
              <Grid.Col span={6}>
                <Stack gap={0}>
                  <Text size="xs">Check-in</Text>
                  <Text size="xs" c={"indigo"} fw={600} mt={5}>
                    Web, Jul 31
                  </Text>
                  <Text size="xs">2:00 PM - 12:00 AM</Text>
                </Stack>
              </Grid.Col>
              <Divider orientation="vertical" />
              <Grid.Col span={5}>
                <Stack gap={0}>
                  <Text size="xs">Check-out</Text>
                  <Text size="xs" c={"indigo"} fw={600} mt={5}>
                    Thu, Aug 15
                  </Text>
                  <Text size="xs">12:00 AM - 12:00 PM</Text>
                </Stack>
              </Grid.Col>
            </Grid>
            <Box mt={5}>
              <Text size="xs">Total length of stay:</Text>
              <Text size="xs" fw={600}>
                1 Night
              </Text>
              <Link href={"/reserve"} className="text-xs text-blue-700">
                Change dates
              </Link>
            </Box>

            <Divider mt={5} />

            <Accordion variant="default">
              <Accordion.Item value="children">
                <Accordion.Control>
                  <Text size="xs" fw={650}>
                    You selected
                  </Text>
                </Accordion.Control>
                <Accordion.Panel>
                  <Stack>
                    <Text fw={600} size="xs">
                      1 room for adult
                    </Text>
                    <Text size="xs">1x Double Room</Text>
                  </Stack>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>

            {/* <Divider my={5} /> */}

            <Stack gap={5} mt={10}>
              <Text fw={700} size="xs">
                Your price summary
              </Text>
              <Flex justify={"space-between"} align={"center"}>
                <Text size="xs">Original price</Text>
                <Text size="xs">VND 1,173,000</Text>
              </Flex>
              <Flex justify={"space-between"} align={"center"}>
                <Text size="xs">Limited-time Deal</Text>
                <Text size="xs">- VND 563,000</Text>
              </Flex>
              <Text size="xs">
                {`Your're`} getting a discount because-for a limited time only -
                this property is offering reduced rates on rooms that match your
                search.
              </Text>
            </Stack>
          </Stack>
        </Box>
        <Container mt={10}>
          <Stack gap={5} className="text-neutral-700">
            <Text fw={700} size="xs" className="text-black">
              Price Information
            </Text>
            <Flex justify={"flex-start"} align={"center"} gap={6}>
              <DollarSignIcon className="w-4 h-4" />
              <Text size="xs">Includes VND 45,182 in taxes and fees</Text>
            </Flex>
            <Flex justify={"space-between"} align={"center"}>
              <Text size="xs">8% VAT</Text>
              <Text size="xs">VND 45,182</Text>
            </Flex>
            <Link href={"/reserve"} className="text-xs text-blue-700">
              Hide details
            </Link>
          </Stack>
        </Container>
      </BoxWrap>

      <Box className="bg-blue-50" p={10}>
        <Container>
          <Flex justify={"space-between"} align={"center"}>
            <Text size="sm" fw={600}>
              Total
            </Text>
            <Stack gap={2} className="text-end">
              <Text size="xs" c={"red"} fw={600} className="line-through">
                VND 1,173,000
              </Text>
              <Text size="sm" fw={600}>
                VND 609,000
              </Text>
              <Text size="xs" c={"dimmed"}>
                Includes taxes and fees
              </Text>
            </Stack>
          </Flex>
        </Container>
      </Box>

      <BoxWrap>
        <Stack gap={5}>
          <Text fw={600} size="xs" className="text-black">
            Booking conditions
          </Text>
          <Flex justify={"flex-start"} align={"center"} gap={6} mt={6}>
            <DotIcon className="w-4 h-4" />
            <Text size="xs" fw={600}>
              Total cost to cancel
            </Text>
          </Flex>
          <Flex justify={"flex-start"} align={"center"} gap={6}>
            <CheckIcon className="w-4 h-4" />
            <Text size="xs">
              <strong>No prepayment need</strong> - pay at the property
            </Text>
          </Flex>
          <BookingConditionModal />
        </Stack>
      </BoxWrap>
    </React.Fragment>
  );
};

export const BookingConditionModal = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Booking Conditions"
        centered
        radius={"lg"}
        styles={{
          title: {
            fontWeight: 700,
            fontSize: "1rem",
          },
        }}
      >
        <Stack gap={5}>
          <Title order={4} fw={400} mb={20}>1 X {`'Double Room'`}</Title>

          <Box>
            <Text fw={700} size="xs" mb={5} className="text-black">
              Cancellation
            </Text>
            <Flex align={"center"} gap={7}>
              <DotIcon className="w-4 h-4" />
              <Text size="xs" className="text-black">
                <strong>Total cost to cancel</strong>
              </Text>
            </Flex>
            <Flex align={"center"}>
              <Text size="xs" ml={22} className="text-wrap">
                Note that if canceled, modified, or in case of no-show, the
                total price of the reservation will be charged.
              </Text>
            </Flex>
          </Box>
          <Box mt={15}>
            <Text fw={700} size="xs" mb={5} className="text-black">
              How to cancle
            </Text>
            <Text size="xs" className="text-black">
              You can use the link in the confirmation email to canclel your
              booking.
            </Text>
          </Box>

          <Box mt={15}>
            <Text fw={700} size="xs" mb={5} className="text-black">
              Prepayment
            </Text>
            <Flex align={"center"} gap={7}>
              <CheckIcon className="w-4 h-4" />
              <Text size="xs" className="text-black">
                <strong>No prepayment is needed</strong> - pay at the property
              </Text>
            </Flex>
            <Flex align={"center"} gap={7} mt={5}>
              <Text size="xs" className="text-black">
                No prepayment is needed
              </Text>
            </Flex>
          </Box>

          <Box mt={15}>
            <Text fw={700} size="xs" mb={5} className="text-black">
              Taxes and service charges
            </Text>
            <Flex align={"center"} gap={7}>
              <DotIcon className="w-4 h-4" />
              <Text size="xs" className="text-black">
                8% VAT is included. A city tax is not applicable. A Property
                service charge is not applicable.
              </Text>
            </Flex>
          </Box>

          <Stack gap={5} mt={15}>
            <Text fw={700} size="xs" mb={5} className="text-black">
              Child policies
            </Text>
            <Text size="xs" className="text-black">
              Children of all ages are welcome.
            </Text>
            <Text size="xs" className="text-black">
              Children 9 and above will be charged as adults at this property.
            </Text>
            <Text size="xs" className="text-black">
              The price shown í for the number ò adults in your search. If{" "}
              {`you're`} traveling with children, add them to see the correct
              price and occupancy info.
            </Text>
          </Stack>

          <Box mt={15}>
            <Text fw={700} size="xs" mb={5} className="text-black">
              Crib and extra bed policies
            </Text>
            <Flex align={"center"} gap={7}>
              <Text size="xs" className="text-black">
                No cribs or extra beds are available.
              </Text>
            </Flex>
          </Box>
        </Stack>
      </Modal>

      <Text mt={6} className="text-xs text-blue-700 cursor-pointer" onClick={open}>
        More Details
      </Text>
    </>
  );
};
