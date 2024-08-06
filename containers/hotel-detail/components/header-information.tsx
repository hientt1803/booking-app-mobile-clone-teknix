import {
  Badge,
  Box,
  Container,
  Flex,
  Rating,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  ChevronLeft,
  DotIcon,
  HeartIcon,
  Share2Icon,
  ThumbsUpIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { HotelDetailCaroucel } from "./caroucel-image";
import dynamic from "next/dynamic";

const ListService = dynamic(() =>
  import("./list-service").then((mob) => mob.ListService)
);

export const HeaderInformation = () => {
  return (
    <React.Fragment>
      <Box bg={"#fff"} pb={10} pt={30}>
        <Container>
          {/* <Link href="/hotel">
            <Flex gap={8} align={"center"}>
              <Text size="xl" my={20}>
                <ChevronLeft />
              </Text>
              <Text size="md" fw={600} my={20}>
                comeback
              </Text>
            </Flex>
          </Link> */}
          <Stack mb={20}>
            <Flex justify={"space-between"}>
              <Flex gap={5}>
                <Rating value={5} />
                <Badge color="#fcc419" size="xs" p={7}>
                  <ThumbsUpIcon
                    style={{
                      width: "15px",
                      height: "15px",
                    }}
                  />
                </Badge>
              </Flex>
              <Flex gap={10}>
                <HeartIcon />
                <Share2Icon />
              </Flex>
            </Flex>
            <Title order={3}>Sheraton Can Tho</Title>
            <Flex mt={0} pt={0}>
              <Text size="xs">
                209, 30/4 Road, Xuan Khanh Ward, Ninh Kieu District, Can Tho
                <span>
                  <span className="mx-2">-</span>
                  <span className="text-green-900">Excellent Location</span>
                </span>
                <span>
                  <span className="mx-2">-</span>{" "}
                  <span className="text-blue-700">Show on map</span>
                </span>
              </Text>
            </Flex>
            <Flex gap={5} align={"center"}>
              <Badge variant="filled" color="#1e3a8a" size="xs">
                9.0
              </Badge>
              <Text size="xs">Wonderful</Text>
              <span>
                <DotIcon className="w-3 h-3" />
              </span>
              <Text size="xs" c={"dimmed"}>
                835 reviews
              </Text>
            </Flex>
          </Stack>

          <HotelDetailCaroucel />

          <Box mt={15}>
            <ListService />
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
};
