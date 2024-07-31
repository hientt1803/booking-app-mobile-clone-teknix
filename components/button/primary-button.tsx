import { Button } from "@mantine/core";
import React from "react";

interface IButton {
  color?:
    | "dark"
    | "gray"
    | "red"
    | "pink"
    | "grape"
    | "violet"
    | "indigo"
    | "blue"
    | "cyan"
    | "green"
    | "lime"
    | "yellow"
    | "orange"
    | "teal"
    | string;
  variant?:
    | "outline"
    | "default"
    | "filled"
    | "gradient"
    | "light"
    | "outline"
    | "subtile"
    | "tranparent"
    | "white";
  fullWidth?: boolean;
  className?: string;
  title?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const PrimaryButton = ({
  color = "#1e3a8a",
  variant = "filled",
  fullWidth = false,
  className = "",
  title,
  children,
  onClick
}: IButton) => {
  return (
    <Button
      fullWidth={fullWidth}
      variant={variant}
      color={color}
      className={className}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
