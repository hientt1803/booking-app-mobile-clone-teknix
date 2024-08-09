"use client";

import { useAppSelector } from "@/stores";
import {
  setSearchGlobalPeople
} from "@/stores/features/global/global-slice";
import { Box, Stack } from "@mantine/core";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { PrimaryButton } from "../button";
import { DateInputCustom, InputSearchCustom } from "../input";
import { GroupPeopleInput } from "./group-input-select";

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
  // redux
  const searchGlobal = useAppSelector(
    (state) => state.globalSlice.searchGlobal
  );
  const dispath = useDispatch();

  // Search input state
  const [inputSearchValue, setinputSearchValue] = useState(
    searchGlobal.location.name
  );

  // Group People input state
  const [adults, setAdults] = useState(searchGlobal.people.adults);
  const [children, setChildren] = useState(searchGlobal.people.childrens);
  const [rooms, setRooms] = useState(searchGlobal.people.rooms);

  useEffect(() => {
    dispath(
      setSearchGlobalPeople({
        adults,
        children,
        rooms,
      })
    );
  }, [adults, children, dispath, rooms]);

  return (
    <Box bg={"#f59f00"} p={6} mt={10}>
      <Stack gap={5}>
        {isShowInput && (
          <InputSearchCustom
            inputSearchValue={inputSearchValue}
            setInputSearchValue={setinputSearchValue}
          />
        )}

        <DateInputCustom />

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
