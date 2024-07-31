import { Card, Image, Text } from "@mantine/core";
import React from "react";

interface IVerticalCard {
  title: string;
  image: string;
  children: React.ReactNode;
}

export const VerticalCard = (props: IVerticalCard) => {
  const { title, image, children } = props;

  return (
    <Card shadow="lg" radius="md" maw={300}>
      <Card.Section>
        <Image src={image} width={300} height={250} alt="Norway" />
      </Card.Section>

      <Text fw={500} my={"md"}>
        {title}
      </Text>

      {children}
    </Card>
  );
};
