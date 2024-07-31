import { ThreeItemFlexRow } from "@/components/common/three-item-flex-row";
import { Box, Flex, Slider, Spoiler, Stack, Text, Title } from "@mantine/core";

export const ReviewOverview = () => {
  return (
    <Box mt={25}>
      <Title order={3}>Facilities</Title>
      <Stack>
        <ThreeItemFlexRow point={"9.0"} status="Wonderful" review={874} />

        <Stack>
          <Spoiler maxHeight={100} showLabel="Show more" hideLabel="Hide">
            <Stack gap={0} mb={10}>
              <Flex justify={"space-between"} align={"center"}>
                <Text size="xs">Location</Text>
                <Text size="xs" fw={600}>
                  9.1
                </Text>
              </Flex>
              <Slider value={91} color="indigo" />
            </Stack>
            <Stack gap={0} mb={10}>
              <Flex justify={"space-between"} align={"center"}>
                <Text size="xs">Location</Text>
                <Text size="xs" fw={600}>
                  9.1
                </Text>
              </Flex>
              <Slider value={91} color="teal" />
            </Stack>
            <Stack gap={0} mb={10}>
              <Flex justify={"space-between"} align={"center"}>
                <Text size="xs">Location</Text>
                <Text size="xs" fw={600}>
                  9.1
                </Text>
              </Flex>
              <Slider value={91} color="indigo" />
            </Stack>
            <Stack gap={0} mb={10}>
              <Flex justify={"space-between"} align={"center"}>
                <Text size="xs">Location</Text>
                <Text size="xs" fw={600}>
                  9.1
                </Text>
              </Flex>
              <Slider value={91} color="indigo" />
            </Stack>
            <Stack gap={0} mb={10}>
              <Flex justify={"space-between"} align={"center"}>
                <Text size="xs">Location</Text>
                <Text size="xs" fw={600}>
                  9.1
                </Text>
              </Flex>
              <Slider value={91} color="indigo" />
            </Stack>
          </Spoiler>
        </Stack>

        
      </Stack>
    </Box>
  );
};
