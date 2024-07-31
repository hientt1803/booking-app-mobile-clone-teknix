import { Card, Text, Title } from "@mantine/core";
import React from "react";

interface IExtendCard {
  title: string;
  desc?: string;
  children: React.ReactNode;
}

export const ExtendCard = (props: IExtendCard) => {
  const { children, desc, title } = props;

  return (
    <Card shadow="lg" radius="md" maw={300}>
      <Title order={3}>{title}</Title>
      {desc && (
        <Text size="md" c={"dimmed"}>
          {desc}
        </Text>
      )}
      {children}
    </Card>
  );
};
