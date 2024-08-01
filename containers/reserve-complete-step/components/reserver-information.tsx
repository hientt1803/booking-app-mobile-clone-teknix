import { BoxWrap } from "@/components/box-wrap";
import { Text, Title } from "@mantine/core";
import React from "react";

export const ReserverInformation = () => {
  return (
    <BoxWrap>
      <Title order={6} size={"xs"} mb={10}>
        Your Details
      </Title>
      <Text size="xs">annv@gmail.com</Text>
      <Text size="xs">+84 2898925636</Text>
    </BoxWrap>
  );
};
