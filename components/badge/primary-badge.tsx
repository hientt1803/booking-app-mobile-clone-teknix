import { cn } from "@/lib";
import { Badge } from "@mantine/core";
import React from "react";

interface IPrimaryBadge {
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
    | "teal";
  className?: string;
  title: string;
  icon?: any;
}

export const PrimaryBadge = (props: IPrimaryBadge) => {
  const { color = "#1e3a8a", className, title, icon } = props;
  return (
    <Badge
      leftSection={icon}
      variant="filled"
      color={color}
      size="sm"
      className={cn("py-3 px-1 rounded-md text-neutral-200", className)}
    >
      {title}
    </Badge>
  );
};
