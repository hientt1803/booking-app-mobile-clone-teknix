"use client"

import { BackgroundImage } from "@mantine/core";
import React from "react";

interface IProps {
  children: React.ReactNode;
  className?: string;
  radius?: string;
  image?: string;
}

export const BackgroundImageProvider = (props: IProps) => {
  const {
    children,
    className = "",
    radius = "md",
    image = "/assets/images/booking-banner-home.jpeg",
  } = props;
  return (
    <BackgroundImage src={image} radius={radius} className={className}>
      {children}
    </BackgroundImage>
  );
};
