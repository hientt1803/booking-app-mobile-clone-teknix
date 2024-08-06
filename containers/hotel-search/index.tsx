import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  ScrollArea,
  Stack,
  Text,
} from "@mantine/core";
import { ChevronDown, SearchIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { ListProduct } from "./components/list-product";
import { NavFilter } from "./components/nav-filter";

export const SearchPageContainer = () => {
  return (
    <React.Fragment>
      <Box bg="#fff">
        <Box bg="#1e3a8a" className=" relative z-10" py={20}>
          <Box
            bg={"#fcc419"}
            p={6}
            mx={10}
            style={{ position: "absolute", bottom: "-30px", left: 0, right: 0 }}
          >
            <Link href="/hotel/search-form">
              <Stack bg={"#fff"} p={6}>
                <Flex gap={20} align="center">
                  <SearchIcon className="w-5 h-5" />
                  <Stack gap={3}>
                    <Text size="xs" fw="600">
                      Phu Quoc
                    </Text>
                    <Text size="xs">Aug 1 - Aug 2 (1 night) - 1z</Text>
                  </Stack>
                </Flex>
              </Stack>
            </Link>
          </Box>
        </Box>
      </Box>

      {/* Filter */}
      <NavFilter />

      {/* Categories search */}
      <Box bg="#fff">
        <Container>
          <Divider />
          <ScrollArea className="w-full" type="always" scrollbarSize={2} py={6}>
            <Box display={"flex"} className="w-full gap-1">
              <Button variant="default" radius="xl">
                Hotels (132)
              </Button>
              <Button variant="default" radius="xl">
                Double beb (199)
              </Button>
              <Button variant="default" radius="xl">
                Family rooms (154)
              </Button>
              <Button variant="default" radius="xl">
                Electric kettle (135)
              </Button>
              <Button variant="default" radius="xl">
                Electric kettle (135)
              </Button>
              <Button variant="default" radius="xl">
                Electric kettle (135)
              </Button>
              <Button variant="default" radius="xl">
                Electric kettle (135)
              </Button>
            </Box>
          </ScrollArea>
        </Container>
      </Box>

      <Box bg="#fff" pb={30}>
        <Container>
          {/* List product */}
          <ListProduct />

          {/* Load more button */}
          <Button variant="outline" fullWidth py={6}>
            Load more results <ChevronDown />
          </Button>
        </Container>
      </Box>
    </React.Fragment>
  );
};
