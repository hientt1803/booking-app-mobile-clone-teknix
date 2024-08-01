import { Card, Image, Text } from "@mantine/core";
import React from "react";

interface ISimpeCard {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  image?: string;
  className?: string;
}

export const SimpleCard = (props: ISimpeCard) => {
  return (
    <Card my={3} radius="md" w={150}>
      <Card.Section>
        <Image
          src={props.image ?? "/assets/images/booking-banner-home.jpeg"}
          h={100}
          alt="Norway"
          className={`rounded-md ${props.className}`}
        />

        <Text fw={600} mt={10} size="sm">
          {props.title}
        </Text>
        <Text c="dimmed" size="xs">
          {props.description}
        </Text>
        {props.children}
      </Card.Section>
    </Card>
  );
};
