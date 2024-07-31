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
    <Container>
      {/* main information */}
      <HeaderInformation />
      <HotelDetailCaroucel />

      <Box mt={15}>
        <ListService />
      </Box>

      {/* Reserve and description */}
      <Box mt={25}>
        <Stack justify="center" align="center">
          <Text size="xs">Jul 31 - Aug 15</Text>
          <Button variant="filled" fullWidth>
            Reserve for tomorrow
          </Button>
        </Stack>
      </Box>

      <Box mt={25}>
        <Title order={3}>Property Description</Title>
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
      </Box>

      {/* Facilities */}
      <Box mt={50}>
        <Title order={3}>Facilities</Title>
        <Flex gap={30} justify={"start"} mt={20} className="flex-wrap">
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
      </Box>

      {/* Review container */}
      <ReviewContainer />

      {/* Pre search */}
      <PreSearchContainerr />

      {/* Booking Card */}
      <ListBookingCard />

      {/* Perperty pratices */}
      <Box mt={30}>
        <PropertiesPratices />
      </Box>

      {/* Food and Drink */}
      <Box mt={30}>
        <FoodAndDrink />
      </Box>

      {/* Questions and answers */}
      <Box mt={30}>
        <QuestionAndAnswers />
      </Box>

      {/* Area infor */}
      <Box mt={30}>
        <AreaInfor />
      </Box>

      {/* Policies & privicy */}
      <Box mt={30}>
        <PoliciesPrivicy />
      </Box>

      {/* BestOfBeyond */}
      <Box mt={30}>
        <BestOfBeyond />
      </Box>
    </Container>
  );
};
