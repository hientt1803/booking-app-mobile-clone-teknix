import { Flex } from "@mantine/core";
import dynamic from "next/dynamic";

const SortFilter = dynamic(() =>
  import("./sort-filter").then((mod) => mod.SortFilter)
);
const Filter = dynamic(() => import("./filter").then((mod) => mod.Filter));
const MapFilter = dynamic(() =>
  import("./map-filter").then((mod) => mod.MapFilter)
);

export const NavFilter = () => {
  return (
    <Flex justify={"space-between"} align={"center"}>
      <SortFilter />
      <Filter />
      <MapFilter />
    </Flex>
  );
};
