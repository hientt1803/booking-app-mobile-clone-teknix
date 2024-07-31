import { Anchor, Breadcrumbs } from "@mantine/core";
import React from "react";

const items = [
  { title: "Home", href: "#" },
  { title: "shop", href: "#" },
  { title: "examples page", href: "#" },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

export const MainBreadCumb = () => {
  return <Breadcrumbs>{items}</Breadcrumbs>;
};
