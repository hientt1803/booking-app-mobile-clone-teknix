"use client";

import { PrimaryButton } from "@/components/button";
import { DateInputCustom } from "@/components/input";
import { formatDateUTC } from "@/utils";
import {
  Box,
  Divider,
  Flex,
  Image,
  Modal,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { Dispatch, SetStateAction, useState } from "react";

interface IModalChangeDate {
  dateRange: {
    startDate: Date;
    endDate: Date;
    key: string;
  }[];
  setDateRange: Dispatch<
    SetStateAction<
      {
        startDate: Date;
        endDate: Date;
        key: string;
      }[]
    >
  >;
}

const ModalChangeDate = ({ dateRange, setDateRange }: IModalChangeDate) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [isChangeDate, setIsChangeDate] = useState(false);

  return (
    <div>
      <Modal
        opened={opened}
        onClose={close}
        centered
        title="When would you like to stay?"
        styles={{
          title: {
            fontWeight: 700,
          },
        }}
      >
        <Text size="xs" mb={15}>
          Choose your prefered dates and check if {`ther're`} available{" "}
        </Text>
        <Box bg={"yellow"} mb={20}>
          <DateInputCustom
            isChangeDate={isChangeDate}
            setIsChangeDate={setIsChangeDate}
          />
        </Box>

        {isChangeDate && (
          <React.Fragment>
            <Stack gap={5}>
              <Title order={5}>Does everything look good?</Title>
              <Text size="xs">
                Your new dates are available! Review your booking details before
                comfiming the change.
              </Text>
            </Stack>

            <Box className="my-3 border-2 rounded-md" p={15}>
              <Flex justify={"flex-start"} align={"center"} gap={20}>
                <Image
                  src={"/assets/images/offer-image-home.jpeg"}
                  alt="Image booking"
                  w={80}
                  h={60}
                  fit="cover"
                />
                <Stack gap={5}>
                  <Text size="xs" fw={600}>
                    Dorm Can Tho
                  </Text>
                  <Text size="xs">
                    18,2/8 Duong Truong Dinh, An Cu, Ninh Kieu, Can Tho, Vietnam
                  </Text>
                </Stack>
              </Flex>
            </Box>

            <Box mt={30}>
              <Text size="sm" fw={600}>
                New dates
              </Text>
              <Flex justify={"space-between"} align={"center"} gap={5}>
                <Stack gap={3}>
                  <Text size="xs" c="dimmed">
                    Check in from
                  </Text>
                  <Text size="sm" fw={600}>
                    {formatDateUTC(dateRange[0].startDate)}
                  </Text>
                  <Text size="xs" fw={600}>
                    Friday 10:00
                  </Text>
                </Stack>
                <Divider />
                <Stack gap={3}>
                  <Text size="xs" c="dimmed">
                    Check out
                  </Text>
                  <Text size="sm" fw={600}>
                    {formatDateUTC(dateRange[0].endDate)}
                  </Text>
                  <Text size="xs" fw={600}>
                    Saturday 9:00
                  </Text>
                </Stack>
              </Flex>
            </Box>

            <Box mt={30}>
              <Text size="sm" fw={600}>
                Beds and conditions
              </Text>
              <Text size="xs">
                {`There's`} no change to your bed or booking conditions.
              </Text>
            </Box>

            <Box className="my-3 border-2 rounded-md" p={15}>
              <Stack gap={5}>
                <Text size="xs" fw={600}>
                  Bunk Bed in Mixed Dormitory Room
                </Text>
                <Text size="xs">Price for 9 nights, 1 adult: VND 628,000</Text>
                <Text size="xs" fw={600}>
                  Booking conditions
                </Text>
                <Text size="xs" c={"green"}>
                  Free cancellation utils 06:00 PM on Aug 14,2024
                </Text>
              </Stack>
            </Box>

            <Box mt={30}>
              <Text size="sm" fw={600}>
                Price overview
              </Text>
              <Flex justify={"space-between"} align={"center"}>
                <Text size="xs">Original price</Text>
                <Text size="xs">VND 743,000</Text>
              </Flex>
              <Flex justify={"space-between"} align={"center"} gap={50}>
                <Text size="xs">New price includes taxes and fees</Text>
                <Text size="xs">VND 634,000</Text>
              </Flex>
            </Box>

            <Stack mt={30} gap={10}>
              <PrimaryButton fullWidth onClick={close}>
                Yes, change my dates
              </PrimaryButton>
              <PrimaryButton
                fullWidth
                variant="outline"
                color="blue"
                onClick={() => setIsChangeDate(false)}
              >
                Select other dates
              </PrimaryButton>
            </Stack>
          </React.Fragment>
        )}
      </Modal>

      <Text size="xs" c={"blue"} onClick={open} className="cursor-pointer">
        Change dates
      </Text>
    </div>
  );
};

export default ModalChangeDate;
