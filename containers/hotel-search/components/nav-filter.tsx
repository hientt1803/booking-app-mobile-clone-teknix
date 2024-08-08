"use client";

import { Container, Flex } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import dynamic from "next/dynamic";
import { MapFilter } from "./map-filter";

const SortFilter = dynamic(() =>
  import("./sort-filter").then((mod) => mod.SortFilter)
);
const Filter = dynamic(() => import("./filter").then((mod) => mod.Filter));

export const NavFilter = () => {
  const [scroll] = useWindowScroll();

  return (
    <Container
      className={`${
        scroll.y > 200
          ? "fixed top-0 left-0 right-0 bg-white p-2 z-40 py-3"
          : ""
      }`}
    >
      <Flex justify={"space-between"} align={"center"}>
        <SortFilter />
        <Filter />
        <MapFilter />
      </Flex>
    </Container>
  );
};
