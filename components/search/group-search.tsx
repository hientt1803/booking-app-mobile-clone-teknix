"use client";

import {
  Autocomplete,
  Box,
  Button,
  Popover,
  Stack,
  Tabs,
  rem,
} from "@mantine/core";
import { BedIcon, ImageIcon, MessageCircle, Settings } from "lucide-react";
import Link from "next/link";
import React from "react";

export const GroupSearch = ({ marginTop = false }: { marginTop?: boolean }) => {
  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <Box bg={"#fcc419"} p={4} mx={10} mt={marginTop ? "-30" : ""}>
      <Stack>
        <Autocomplete
          data={["Can Tho", "Saigon", "Da Nang"]}
          leftSectionPointerEvents="none"
          leftSection={<BedIcon />}
          // label="Your favorite library"
          placeholder="Where are you going ?"
        />

        {/* Todo: find date time lib */}
        <Popover width={300} trapFocus position="bottom" withArrow shadow="md">
          <Popover.Target>
            <Autocomplete
              data={["Can Tho", "Saigon", "Da Nang"]}
              leftSectionPointerEvents="none"
              leftSection={<BedIcon />}
              // label="Your favorite library"
              placeholder="Where are you going ?"
            />
          </Popover.Target>
          <Popover.Dropdown>
            <Tabs defaultValue="gallery">
              <Tabs.List>
                <Tabs.Tab
                  value="gallery"
                  leftSection={<ImageIcon style={iconStyle} />}
                >
                  Gallery
                </Tabs.Tab>
                <Tabs.Tab
                  value="messages"
                  leftSection={<MessageCircle style={iconStyle} />}
                >
                  Messages
                </Tabs.Tab>
                <Tabs.Tab
                  value="settings"
                  leftSection={<Settings style={iconStyle} />}
                >
                  Settings
                </Tabs.Tab>
              </Tabs.List>
              <Tabs.Panel value="gallery">Gallery tab content</Tabs.Panel>
              <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>
              <Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
            </Tabs>
          </Popover.Dropdown>
        </Popover>

        {/* select custome */}
        {/* Todo: find date time lib */}
        <Popover width={300} trapFocus position="bottom" withArrow shadow="md">
          <Popover.Target>
            <Autocomplete
              data={["Can Tho", "Saigon", "Da Nang"]}
              leftSectionPointerEvents="none"
              leftSection={<BedIcon />}
              // label="Your favorite library"
              placeholder="Where are you going ?"
            />
          </Popover.Target>
          <Popover.Dropdown>
            <Tabs defaultValue="gallery">
              <Tabs.List>
                <Tabs.Tab
                  value="gallery"
                  leftSection={<ImageIcon style={iconStyle} />}
                >
                  Gallery
                </Tabs.Tab>
                <Tabs.Tab
                  value="messages"
                  leftSection={<MessageCircle style={iconStyle} />}
                >
                  Messages
                </Tabs.Tab>
                <Tabs.Tab
                  value="settings"
                  leftSection={<Settings style={iconStyle} />}
                >
                  Settings
                </Tabs.Tab>
              </Tabs.List>
              <Tabs.Panel value="gallery">Gallery tab content</Tabs.Panel>
              <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>
              <Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
            </Tabs>
          </Popover.Dropdown>
        </Popover>

        {/* Button */}
        <Button color="blue" variant="filled">
          <Link href="/search-page">Search</Link>
        </Button>
      </Stack>
    </Box>
  );
};
