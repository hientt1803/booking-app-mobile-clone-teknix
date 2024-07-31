import {
  Avatar,
  Box,
  Card,
  Flex,
  ScrollArea,
  Stack,
  Text,
  Title
} from "@mantine/core";
import { FlagIcon } from "lucide-react";
import { CommentDrawer } from "./comment-drawer";

export const ListComment = () => {
  return (
    <Box>
      <Title order={3} mt={30} mb={10}>
        What guest loved the most:
      </Title>
      <ScrollArea className="w-full" type="never">
        <Box display={"flex"} className="w-full gap-4">
          {/* Render list comment here */}
          <Card withBorder h={220} w={250}>
            <Stack>
              <Flex gap={10} align={"center"}>
                <Avatar color="cyan" radius="xl">
                  MK
                </Avatar>
                <Stack gap={2}>
                  <Text size="xs" fw={600}>
                    Trung
                  </Text>
                  <Flex gap={5}>
                    <FlagIcon className="w-3 h-3" />
                    <Text size="xs" c="dimmed">
                      Canada
                    </Text>
                  </Flex>
                </Stack>
              </Flex>

              <Text size="xs" lineClamp={5}>
                {`
                  "Very clean and all staff were very friendly and accommodating."
                `}
              </Text>

              <CommentDrawer />
            </Stack>
          </Card>
        </Box>
      </ScrollArea>
    </Box>
  );
};
