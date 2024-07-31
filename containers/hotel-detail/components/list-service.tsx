"use client"

import { OutlineBadge } from "@/components/badge";
import { Grid } from "@mantine/core";
import { Bath, CoffeeIcon, Utensils, Waves } from "lucide-react";
import React from "react";

export const ListService = () => {
  return (
    <Grid>
      <Grid.Col span={6}>
        <OutlineBadge title="Excellent Breakfast" icon={<CoffeeIcon />} />
      </Grid.Col>
      <Grid.Col span={6}>
        <OutlineBadge title="Outdoor swimming pool" icon={<Waves />} />
      </Grid.Col>
      <Grid.Col span={6}>
        <OutlineBadge title="4 restaurants" icon={<Utensils />} />
      </Grid.Col>
      <Grid.Col span={6}>
        <OutlineBadge title="Private Bathroom" icon={<Bath />} />
      </Grid.Col>
    </Grid>
  );
};
