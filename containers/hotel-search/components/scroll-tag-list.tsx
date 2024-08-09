"use client";

import useStorage from "@/hooks/useLocalStorage";
import { useAppSelector } from "@/stores";
import { setSearchGlobalFilterLisTag } from "@/stores/features/global/global-slice";
import { TAG_SCROLL_DATA } from "@/utils";
import { Box, Button, ScrollArea } from "@mantine/core";
import { XIcon } from "lucide-react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const ScrollTagList = () => {
  const tags = useAppSelector(
    (state) => state.globalSlice.searchGlobal.filter.listTagFilter
  );
  const { getItem, setItem } = useStorage();
  const dispatch = useDispatch();

  /**
   * The function `handleOnClickChangeActiveTag` toggles the `active` property of a tag with a specific
   * `id` and sorts the tags based on their `active` status.
   * @param {number} id - The `id` parameter in the `handleOnClickChangeActiveTag` function is a number
   * representing the unique identifier of the tag that needs to be toggled between active and inactive
   * states.
   */
  const handleOnClickChangeActiveTag = (id: number) => {
    const newTag = tags.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          active: !item.active,
        };
      } else {
        return item;
      }
    });

    newTag.sort((a: any, b: any) => {
      return b.active - a.active;
    });

    dispatch(setSearchGlobalFilterLisTag(newTag));
    setItem("listTags", JSON.stringify(newTag));
  };

  useEffect(() => {
    const item = getItem("listTags");
    if (item) {
      dispatch(setSearchGlobalFilterLisTag(JSON.parse(item)));
    } else {
      dispatch(setSearchGlobalFilterLisTag(TAG_SCROLL_DATA));
    }
  }, [dispatch]);

  return (
    <ScrollArea className="w-full" type="always" scrollbarSize={2} py={6}>
      <Box display={"flex"} className="w-full gap-1">
        {tags.map((tag) => (
          <Button
            key={tag.id}
            variant={tag.active ? "light" : "default"}
            color={tag.active ? "blue" : "gray"}
            radius="xl"
            rightSection={tag.active && <XIcon className="w-4 h-4" />}
            onClick={() => handleOnClickChangeActiveTag(tag.id)}
          >
            {tag.title} ({tag.count})
          </Button>
        ))}
      </Box>
    </ScrollArea>
  );
};
