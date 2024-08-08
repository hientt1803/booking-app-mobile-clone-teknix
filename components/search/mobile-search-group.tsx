"use client";

import { Box, Stack } from "@mantine/core";
import Link from "next/link";
import React, { useState } from "react";
import { PrimaryButton } from "../button";
import { DateInputCustom, InputSearchCustom } from "../input";
import { GroupPeopleInput } from "./group-input-select";
import { addDays } from "date-fns";

export const MobileSearchGroup = ({
  isShowInput = true,
  buttonText = "Search",
  buttonClassName = "",
  childrenProps,
}: {
  isShowInput?: boolean;
  buttonText?: string;
  buttonClassName?: string;
  childrenProps?: React.ReactNode;
}) => {
  // Search input state
  const [inputSearchValue, setinputSearchValue] = useState(
    "Around current location"
  );

  // Date input state
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  // Group People input state
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  return (
    <Box bg={"#f59f00"} p={6} mt={10}>
      <Stack gap={5}>
        {isShowInput && (
          <InputSearchCustom
            inputSearchValue={inputSearchValue}
            setInputSearchValue={setinputSearchValue}
          />
        )}

        <DateInputCustom dateRange={dateRange} setDateRange={setDateRange} />

        <GroupPeopleInput
          adults={adults}
          setAdults={setAdults}
          childrenCount={children}
          setChildren={setChildren}
          rooms={rooms}
          setRooms={setRooms}
        />

        {childrenProps}

        {/* Button */}
        <Box p={6}>
          <Link href="/hotel">
            <PrimaryButton fullWidth className={buttonClassName}>
              {buttonText}
            </PrimaryButton>
          </Link>
        </Box>
      </Stack>
    </Box>
  );
};
