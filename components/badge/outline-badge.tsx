import { cn } from "@/lib";
import { Badge } from "@mantine/core";
import React from "react";

interface IOutlineBadge {
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
  size?: "lg" | "md" | "sm" | "xl" | "xs";
}

export const OutlineBadge = (props: IOutlineBadge) => {
  const { color = "dark", className, title, icon, size = "xs" } = props;
  return (
    <Badge
      leftSection={icon}
      variant="outline"
      color={color}
      size={size}
      className={cn(
        "py-5 px-2 rounded-md w-full text-neutral-600 border-neutral-300",
        className
      )}
    >
      {title}
    </Badge>
  );
};
