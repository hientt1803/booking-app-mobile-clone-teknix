"use client";

import { Box, Button, ScrollArea } from "@mantine/core";
import { XIcon } from "lucide-react";
import { useState } from "react";

const TAG_DATA = [
  {
    id: 1,
    title: "Hotels",
    value: 235,
    count: 253,
    active: false,
  },
  {
    id: 2,
    title: "Double bed",
    value: 199,
    count: 132,
    active: false,
  },
  {
    id: 3,
    title: "Family rooms",
    value: 154,
    count: 145,
    active: false,
  },
  {
    id: 4,
    title: "Electric kettle",
    value: 135,
    count: 135,
    active: false,
  },
  {
    id: 5,
    title: "Free Wi-Fi",
    value: 215,
    count: 189,
    active: false,
  },
  {
    id: 6,
    title: "Breakfast included",
    value: 250,
    count: 178,
    active: false,
  },
  {
    id: 7,
    title: "Parking available",
    value: 123,
    count: 200,
    active: false,
  },
  {
    id: 8,
    title: "Pet-friendly",
    value: 105,
    count: 115,
    active: false,
  },
  {
    id: 9,
    title: "Swimming pool",
    value: 187,
    count: 98,
    active: false,
  },
  {
    id: 10,
    title: "Gym access",
    value: 102,
    count: 156,
    active: false,
  },
  {
    id: 11,
    title: "Air conditioning",
    value: 135,
    count: 222,
    active: false,
  },
  {
    id: 12,
    title: "Spa services",
    value: 175,
    count: 88,
    active: false,
  },
  {
    id: 13,
    title: "Room service",
    value: 145,
    count: 140,
    active: false,
  },
  {
    id: 14,
    title: "Conference rooms",
    value: 180,
    count: 75,
    active: false,
  },
  {
    id: 15,
    title: "Balcony",
    value: 155,
    count: 190,
    active: false,
  },
];

export const ScrollTagList = () => {
  const [tags, setTags] = useState(TAG_DATA);

  const handleOnClickChangeActiveTag = (id: number) => {
    const newTag = tags.map((item, index) => {
      if (item.id === id) {
        return {
          ...item,
          active: !item.active,
        };
      } else {
        return item;
      }
    });

    setTags(newTag);
  };

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
