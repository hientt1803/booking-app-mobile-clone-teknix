"use client";

import { List } from "@mantine/core";
import { DotIcon } from "lucide-react";
import React from "react";

export const AdditionInformationReviewHouse = () => {
  return (
    <List size="xs" icon={<DotIcon className="w-4 h-4"/>}>
      <List.Item>No parties/events</List.Item>
      <List.Item>Quiet hours are between 11:00 PM and 6:00 AM</List.Item>
      <List.Item>Pets are not allowed</List.Item>
    </List>
  );
};
