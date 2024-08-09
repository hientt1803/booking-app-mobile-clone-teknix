"use client";

import { useAppSelector } from "@/stores";
import { convertStringToDate, daysBetweenUTC, formatDateUTC } from "@/utils";
import { Box, Flex, Stack, Text } from "@mantine/core";
import { DotIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export const FloatingSearch = () => {
  const searchGlobal = useAppSelector(
    (state) => state.globalSlice.searchGlobal
  );

  return (
    <Box bg="#fff">
      <Box bg="#1e3a8a" className=" relative z-10" py={20}>
        <Box
          bg={"#fcc419"}
          p={6}
          mx={10}
          style={{
            position: "absolute",
            bottom: "-30px",
            left: 0,
            right: 0,
          }}
        >
          <Link href="/hotel/search-form">
            <Stack bg={"#fff"} p={6}>
              <Flex gap={20} align="center">
                <SearchIcon className="w-5 h-5" />
                <Stack gap={3}>
                  <Flex gap={4} align={"center"}>
                    <Text size="xs" fw="600" lineClamp={1}>
                      {searchGlobal.location.name ?? "Search for your location"}
                    </Text>
                    {searchGlobal.people.adults > 0 && (
                      <React.Fragment>
                        <DotIcon className="w-5 h-5" />
                        <Text size="xs">
                          {searchGlobal.people.adults} adults
                        </Text>
                      </React.Fragment>
                    )}
                    {searchGlobal.people.childrens > 0 && (
                      <React.Fragment>
                        <DotIcon className="w-5 h-5" />
                        <Text size="xs">
                          {searchGlobal.people.childrens} childrens
                        </Text>
                      </React.Fragment>
                    )}
                    {searchGlobal.people.rooms > 0 && (
                      <React.Fragment>
                        <DotIcon className="w-5 h-5" />
                        <Text size="xs">{searchGlobal.people.rooms} rooms</Text>
                      </React.Fragment>
                    )}
                  </Flex>
                  <Text size="xs">
                    {formatDateUTC(
                      convertStringToDate(searchGlobal.dateRange.startDate)
                    )}{" "}
                    -{" "}
                    {formatDateUTC(
                      convertStringToDate(searchGlobal.dateRange.endDate)
                    )}{" "}
                    (
                    {daysBetweenUTC(
                      convertStringToDate(searchGlobal.dateRange.startDate),
                      convertStringToDate(searchGlobal.dateRange.endDate)
                    )}{" "}
                    night)
                  </Text>
                </Stack>
              </Flex>
            </Stack>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
