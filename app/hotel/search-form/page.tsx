import { MobileSearchGroup } from "@/components/search/mobile-search-group";
import { Container, Text } from "@mantine/core";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";

const HotelSearchFormPage = () => {
  return (
    <Fragment>
      <Container>
        <Link href="/hotel">
          <Text size="xl" my={20}>
            <ChevronLeft />
          </Text>
        </Link>
        <MobileSearchGroup />
      </Container>
    </Fragment>
  );
};

export default HotelSearchFormPage;
