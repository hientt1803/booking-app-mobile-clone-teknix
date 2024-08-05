import { BoxWrap } from "@/components/box-wrap";
import { MobileSearchGroup } from "@/components/search/mobile-search-group";
import { Box, Container, Flex, Text } from "@mantine/core";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";

const HotelSearchFormPage = () => {
  return (
    <Fragment>
      <Box bg={"#fff"} py={10}>
        <Container>
          <Link href="/hotel">
            <Flex align={"center"}>
              <ChevronLeft />
              <Text size="md" my={20}>
                Get back
              </Text>
            </Flex>
          </Link>
          <MobileSearchGroup />
        </Container>
      </Box>
    </Fragment>
  );
};

export default HotelSearchFormPage;
