"use client";

import { GroupInputQuantity } from "@/components/input";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Drawer,
  Flex,
  NumberInput,
  RangeSlider,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ListFilterIcon } from "lucide-react";
import { useState } from "react";

export const Filter = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [quantity, setQuantity] = useState(0);

  return (
    <Box>
      <Drawer opened={opened} onClose={close} title="Filters" position="left">
        <Box
          style={{
            position: "relative",
          }}
        >
          <Box>
            <Stack>
              <Title order={4}>Your previous filters</Title>
              <Checkbox label="Double bed (198)" />
              <Checkbox label="Family rooms (152)" />
            </Stack>
          </Box>
          <Divider my={15} />
          <Box>
            <Stack>
              <Title order={4}>Your Budget (per night)</Title>
              <Text size="sm">VND 100,000 - VND 2,000,000+</Text>
              <RangeSlider
                minRange={0.2}
                min={0}
                max={1}
                step={0.0005}
                defaultValue={[0.1245, 0.5535]}
              />
            </Stack>
          </Box>
          <Divider my={15} />
          <Box>
            <Stack>
              <Title order={4}>Popular Filters</Title>
              <Checkbox
                label="Very good 8+ (120)"
                description="Base on guest reviews"
              />
              <Checkbox label="Apartments (21)" />
              <Checkbox label="Air conditioning (21)" />
              <Checkbox label="Hotels (21)" />
              <Checkbox label="Swimming Pool (21)" />
              <Checkbox label="Breakfast Included (21)" />
              <Checkbox label="4 stars (21)" />
              <Checkbox label="Resorts (21)" />
            </Stack>
          </Box>
          <Divider my={15} />
          <Box>
            <Stack>
              <Title order={4}>Facilities</Title>
              <Checkbox
                label="Very good 8+ (120)"
                description="Base on guest reviews"
              />
              <Checkbox label="Free Wifi (21)" />
              <Checkbox label="Parking (21)" />
              <Checkbox label="24-hour front desk (21)" />
              <Checkbox label="Non-smoking room (21)" />
              <Checkbox label="Family rooms (21)" />
              <Checkbox label="Room service (21)" />
              <Checkbox label="Airport shuttle (21)" />
              <Checkbox label="Restaurant (21)" />
              <Checkbox label="Pet friendly (21)" />
              <Checkbox label="Swimming pool (21)" />
              <Checkbox label="Wheelchair accessible (21)" />
              <Checkbox label="Fitness center (21)" />
              <Checkbox label="Spa (21)" />
              <Checkbox label="ELectirc vehicle charging station (21)" />
            </Stack>
          </Box>
          <Divider my={15} />
          <Box>
            <Stack>
              <Title order={4}>Property Type</Title>
              <Checkbox label="Hotels (120)" />
              <Checkbox label="Apartments (21)" />
              <Checkbox label="Homestays (21)" />
              <Checkbox label="Hostels (21)" />
              <Checkbox label="Guesthouses (21)" />
              <Checkbox label="Bed and breakfasts (21)" />
              <Checkbox label="Resorts (21)" />
              <Checkbox label="Love Hotels (21)" />
              <Checkbox label="Motels (21)" />
              <Checkbox label="Villas (21)" />
              <Checkbox label="Vacation Homes (21)" />
              <Checkbox label="Lodges (21)" />
              <Checkbox label="Country Houses (21)" />
              <Checkbox label="Capsule Hotels (21)" />
            </Stack>
          </Box>
          <Divider my={15} />
          <Box>
            <Stack>
              <Title order={4}>Review score</Title>
              <Checkbox label="Wonderful: 9+ (47)" />
              <Checkbox label="Very good 8+(121)" />
              <Checkbox label="Good: 7+(21)" />
              <Checkbox label="Pleasant: 6+ (21)" />
            </Stack>
          </Box>
          <Divider my={15} />
          <Box>
            <Stack>
              <Title order={4}>Meals</Title>
              <Checkbox label="Ketchen facilities (42)" />
              <Checkbox label="Breakfast Included (121)" />
              <Checkbox label="Breakfast & dinner included (21)" />
            </Stack>
          </Box>
          <Divider my={15} />
          <Box>
            <Stack>
              <Title order={4}>Property rating</Title>
              <Checkbox label="1 star (42)" />
              <Checkbox label="2 stars (121)" />
              <Checkbox label="3 stars (21)" />
              <Checkbox label="4 stars (21)" />
              <Checkbox label="5 stars (21)" />
            </Stack>
          </Box>
          <Divider my={15} />
          {/* Bla bla */}
          <Box>
            <Stack>
              <Title order={4}>Rooms and beds</Title>
              <Flex justify={"space-between"} align={"center"}>
                <Text size="sm">Bedrooms</Text>
                <GroupInputQuantity
                  quantity={quantity}
                  setQuantity={setQuantity}
                />
              </Flex>
              <Flex justify={"space-between"} align={"center"}>
                <Text size="sm">Beds</Text>
                <GroupInputQuantity
                  quantity={quantity}
                  setQuantity={setQuantity}
                />
              </Flex>
              <Flex justify={"space-between"} align={"center"}>
                <Text size="sm">Bathrooms</Text>
                <GroupInputQuantity
                  quantity={quantity}
                  setQuantity={setQuantity}
                />
              </Flex>
            </Stack>
          </Box>
          <Divider my={15} />
          {/* Bla bla */}

          <Flex
            bg={"#fff"}
            py={10}
            gap={15}
            align={"center"}
            style={{ position: "sticky", bottom: 0, left: 0, right: 0 }}
          >
            <Button variant="filled" color="blue" fullWidth>
              Show 210 result
            </Button>
            <Button variant="outline" color="dark">
              Clear
            </Button>
          </Flex>
        </Box>
      </Drawer>

      <Button onClick={open} variant="subtle" size="xs">
        <ListFilterIcon style={{ width: "20px", height: "20px" }} /> Filter
      </Button>
    </Box>
  );
};
