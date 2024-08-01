"use client";

import { PrimaryButton } from "@/components/button";
import { Box, Flex, Group } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { ChevronDown } from "lucide-react";

export const ScrollToFormButton = () => {
  const [scroll, scrollTo] = useWindowScroll();

  const scrollToForm = () => {
    scrollTo({ y: 1050 });
  };

  return (
    <Box
      className={`${
        scroll.y < 200 ? "block" : "hidden"
      } fixed bottom-5 left-0 right-0 transition-all`}
    >
      <Group justify="center">
        <PrimaryButton onClick={scrollToForm}>
          <Flex gap={5} align={"center"}>
            <ChevronDown className="w-5 h-5" />
            Enter guest details
          </Flex>
        </PrimaryButton>
      </Group>
    </Box>
  );
};
