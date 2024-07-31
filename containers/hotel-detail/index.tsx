import {
  Box,
  Button,
  Container,
  Flex,
  Spoiler,
  Stack,
  Text,
  Title,
} from "@mantine/core";

import { Activity, CarTaxiFront, WavesIcon, WifiHigh } from "lucide-react";
import dynamic from "next/dynamic";
import { HotelDetailCaroucel } from "./components/caroucel-image";
import { ReviewContainer } from "./components/comments";
import { HeaderInformation } from "./components/header-information";
import { ListBookingCard } from "./components/list-booking-card";
import { PreSearchContainerr } from "./components/pre-search";
import { Navigation } from "./components/navigation";
import React from "react";
import { PrimaryButton } from "@/components/button";
import { BoxWrap } from "@/components/box-wrap";

const ListService = dynamic(() =>
  import("./components/list-service").then((mob) => mob.ListService)
);
const PropertiesPratices = dynamic(() =>
  import("./components/properties-pratices").then(
    (mob) => mob.PropertiesPratices
  )
);
const FoodAndDrink = dynamic(() =>
  import("./components/food-drink").then((mob) => mob.FoodAndDrink)
);
const QuestionAndAnswers = dynamic(() =>
  import("./components/questions-answers").then((mob) => mob.QuestionAndAnswers)
);
const AreaInfor = dynamic(() =>
  import("./components/area-infor").then((mob) => mob.AreaInfor)
);
const PoliciesPrivicy = dynamic(() =>
  import("./components/policies-privicy").then((mob) => mob.PoliciesPrivicy)
);
const BestOfBeyond = dynamic(() =>
  import("./components/best-of-beyond").then((mob) => mob.BestOfBeyond)
);

export const HotelDetailContainer = () => {
  return (
    <React.Fragment>
      {/* main information */}
      <BoxWrap>
        <HeaderInformation />
        <HotelDetailCaroucel />

        <Box mt={15}>
          <ListService />
        </Box>
      </BoxWrap>

      {/* Reserve and description */}
      <BoxWrap>
        <Stack justify="center" align="center" gap={5} p={10}>
          <Text size="xs">Jul 31 - Aug 15</Text>
          <PrimaryButton fullWidth>Reserve for tomorrow</PrimaryButton>
        </Stack>
      </BoxWrap>

      <BoxWrap>
        <Title order={5}>Property Description</Title>
        <Spoiler
          maxHeight={100}
          showLabel="Show more"
          hideLabel="Hide"
          className="text-sm mt-4"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          nesciunt quasi dolorum officiis! Possimus, laudantium consectetur
          nostrum cumque aliquam maxime labore, natus eos incidunt quae,
          sapiente explicabo similique doloribus nam. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Enim deleniti fugit dolorem sed,
          itaque harum adipisci animi ducimus ad. Nostrum culpa pariatur
          nesciunt cum rem doloribus fugiat suscipit deleniti odit? Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Dolore et accusantium
          saepe. Cupiditate voluptas sint quidem fugit quasi deleniti vitae quam
          quis, ducimus reprehenderit exercitationem culpa molestiae officia!
          Ab, fugiat?
        </Spoiler>
      </BoxWrap>

      {/* Facilities */}
      <BoxWrap>
        <Title order={3}>Facilities</Title>
        <Flex gap={20} justify={"start"} mt={20} className="flex-wrap">
          <Flex gap={8} align={"center"}>
            <WavesIcon className="w-6 h-6" />
            <Text size="xs">Outdoor swimming pool</Text>
          </Flex>
          <Flex gap={8} align={"center"}>
            <Activity className="w-6 h-6" />
            <Text size="xs">Fitness center</Text>
          </Flex>
          <Flex gap={8} align={"center"}>
            <CarTaxiFront className="w-6 h-6" />
            <Text size="xs">Airpot shuttle</Text>
          </Flex>
          <Flex gap={8} align={"center"}>
            <WifiHigh className="w-6 h-6" />
            <Text size="xs">Free Wifi</Text>
          </Flex>
        </Flex>
      </BoxWrap>

      {/* Review container */}
      <BoxWrap>
        <ReviewContainer />
      </BoxWrap>

      {/* Pre search */}
      <Container>
        <BoxWrap>
          <PreSearchContainerr />
        </BoxWrap>
      </Container>

      {/* Booking Card */}
      <Container>
        <ListBookingCard />
      </Container>

      {/* Perperty pratices */}
      <BoxWrap>
        <PropertiesPratices />
      </BoxWrap>

      {/* Food and Drink */}
      <BoxWrap>
        <FoodAndDrink />
      </BoxWrap>

      {/* Questions and answers */}
      <BoxWrap>
        <QuestionAndAnswers />
      </BoxWrap>

      {/* Area infor */}
      <BoxWrap>
        <AreaInfor />
      </BoxWrap>

      {/* Policies & privicy */}
      <BoxWrap>
        <PoliciesPrivicy />
      </BoxWrap>

      {/* BestOfBeyond */}
      <BoxWrap>
        <BestOfBeyond />
      </BoxWrap>

      {/* Navigation */}
      <BoxWrap>
        <Navigation />
      </BoxWrap>
    </React.Fragment>
  );
};
