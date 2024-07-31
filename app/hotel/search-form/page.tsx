import { MobileSearchGroup } from "@/components/search/mobile-search-group";
import { Text } from "@mantine/core";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";

const HotelSearchFormPage = () => {
  return (
    <Fragment>
      <Link href="/search-page">
        <Text size="xl" my={20}>
          <ChevronLeft />
        </Text>
      </Link>
      <MobileSearchGroup />
    </Fragment>
  );
};

export default HotelSearchFormPage;
