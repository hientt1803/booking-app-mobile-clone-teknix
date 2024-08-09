"use client";

import { useAppSelector } from "@/stores";
import { setHotelFiltered } from "@/stores/features/hotel";
import { quickSort, SORT_HOTEL } from "@/utils";
import { Box, Button, Drawer, Flex, Group, Radio } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ArrowUpDown } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchGlobalFilterSortBy } from "@/stores/features/global/global-slice";
import { useEffect } from "react";

export const SortFilter = () => {
  // redux
  const listHotel = useAppSelector((state) => state.HotelSlice.hotels);
  const sortByList = useAppSelector(
    (state) => state.globalSlice.searchGlobal.filter.sortBy
  );
  const dispatch = useDispatch();

  // state
  const [opened, { open, close }] = useDisclosure(false);

  const handleSortHotel = (type: string, id: number) => {
    const newArray = quickSort(listHotel, type);
    handleSetActiveSortBy(id);
    dispatch(setHotelFiltered(newArray));
  };

  const handleSetActiveSortBy = (id: number) => {
    const newArr = sortByList.map((item) => {
      if (item.id == id) {
        return {
          ...item,
          active: true,
        };
      } else {
        return {
          ...item,
          active: false,
        };
      }
    });
    dispatch(setSearchGlobalFilterSortBy(newArr));
  };

  useEffect(() => {
    dispatch(setSearchGlobalFilterSortBy(SORT_HOTEL));
  }, [dispatch]);

  return (
    <Box>
      <Drawer
        opened={opened}
        onClose={close}
        position="bottom"
        radius={"25px 25px 0 0"}
        title="Sort by"
        styles={{
          title: {
            fontWeight: 700,
            fontSize: "1.8rem",
          },
        }}
      >
        <Radio.Group name="sortby">
          <Group mt="xs" className="flex flex-col items-start gap-3">
            {sortByList.map((option) => (
              <Radio
                key={option.id}
                value={option.value}
                label={option.label}
                checked={option.active}
                onClick={() => handleSortHotel(option.value, option.id)}
              />
            ))}
          </Group>
        </Radio.Group>
      </Drawer>

      <Button onClick={open} variant="subtle" size="xs">
        <Flex gap={8} align={"center"}>
          <ArrowUpDown className="w-4 h-4" />
          Sort
        </Flex>
      </Button>
    </Box>
  );
};
