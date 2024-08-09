import {
  Box,
  Button,
  Container,
  Divider
} from "@mantine/core";
import { ChevronDown } from "lucide-react";
import React from "react";
import { FloatingSearch } from "./components/floating-search";
import { ListProduct } from "./components/list-product";
import { NavFilter } from "./components/nav-filter";
import { ScrollTagList } from "./components/scroll-tag-list";

export const SearchPageContainer = () => {
  return (
    <React.Fragment>
      <Box className="relative">
        <FloatingSearch />

        {/* Filter */}
        <Box pt={35} pb={15} px={30} className="bg-white">
          <NavFilter />
        </Box>

        {/* Categories search */}
        <Box bg="#fff">
          <Container>
            <Divider />
            <ScrollTagList />
          </Container>
        </Box>

        <Box bg="#fff" pb={30}>
          {/* List product */}
          <ListProduct />
          <Container>
            {/* Load more button */}
            <Button variant="outline" fullWidth py={6}>
              Load more results <ChevronDown />
            </Button>
          </Container>
        </Box>
      </Box>
    </React.Fragment>
  );
};
