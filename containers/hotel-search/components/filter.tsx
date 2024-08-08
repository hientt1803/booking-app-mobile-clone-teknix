"use client";

import { GroupInputQuantity } from "@/components/input";
import { FILTER_DATA, formatCurrency } from "@/utils";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Drawer,
  Flex,
  RangeSlider,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ListFilterIcon } from "lucide-react";
import React, { useState } from "react";

export const Filter = () => {
  const [opened, { open, close }] = useDisclosure(false);
  // Group People input state
  const [bedroom, setBedroom] = useState(0);
  const [bed, setBed] = useState(0);
  const [bathroom, setbathroom] = useState(0);

  const [priceRange, setPriceRange] = useState({
    minRange: 0,
    maxRange: 0,
  });

  return (
    <Box>
      <Drawer
        opened={opened}
        onClose={close}
        title="Filters"
        position="left"
        size={"100%"}
        styles={{
          title: {
            fontWeight: 700,
            fontSize: "1.2rem",
          },
        }}
      >
        <Box className="relative">
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
              <Text size="sm">
                {formatCurrency(priceRange.minRange)} -{" "}
                {formatCurrency(priceRange.maxRange)}
              </Text>
              <RangeSlider
                minRange={0}
                min={0}
                max={100000}
                step={10}
                onChange={(e) =>
                  setPriceRange({
                    minRange: e[0],
                    maxRange: e[1],
                  })
                }
                defaultValue={[0, 100000]}
              />
            </Stack>
          </Box>
          <Divider my={15} />

          {FILTER_DATA.map((filter, index) => (
            <Box key={index}>
              <Box>
                <Stack>
                  <Title order={4}>{filter.title}</Title>
                  {filter.items.map((item) => (
                    <Checkbox
                      key={index}
                      label={item.label}
                      description={item.description}
                    />
                  ))}
                </Stack>
              </Box>
              <Divider my={15} />
            </Box>
          ))}

          {/* Bla bla */}
          <Box>
            <Stack>
              <Title order={4}>Rooms and beds</Title>
              <Flex justify={"space-between"} align={"center"}>
                <Text size="sm">Bedrooms</Text>
                <GroupInputQuantity
                  quantity={bedroom}
                  setQuantity={setBedroom}
                />
              </Flex>
              <Flex justify={"space-between"} align={"center"}>
                <Text size="sm">Beds</Text>
                <GroupInputQuantity quantity={bed} setQuantity={setBed} />
              </Flex>
              <Flex justify={"space-between"} align={"center"}>
                <Text size="sm">Bathrooms</Text>
                <GroupInputQuantity
                  quantity={bathroom}
                  setQuantity={setbathroom}
                />
              </Flex>
            </Stack>
          </Box>
          <Divider my={15} />
          {/* Bla bla */}

          <Flex
            bg={"#fff"}
            align={"center"}
            className="sticky bottom-0 left-0 right-0 py-2 gap-2 w-full border-none outline-none"
          >
            <Button
              variant="filled"
              color="blue"
              className="flex-1"
              onClick={close}
            >
              Show 210 result
            </Button>
            <Button variant="outline" color="dark" onClick={close}>
              Clear
            </Button>
          </Flex>
        </Box>
      </Drawer>

      <Button onClick={open} variant="subtle" size="xs">
        <Flex gap={8} align={"center"}>
          <ListFilterIcon className="w-4 h-4" />
          Filter
        </Flex>
      </Button>
    </Box>
  );
};
