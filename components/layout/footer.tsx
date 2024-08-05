import {
  Box,
  Button,
  Container,
  Divider,
  Group,
  Stack,
  Text
} from "@mantine/core";

export const MainFooter = () => {
  return (
    <Box>
      {/* List property */}
      <Box bg={"#003b95"}>
        <Stack justify="center">
          <Button variant="outline" mx={"auto"} mt={10} w={200} color="#fff">
            List your property
          </Button>
          <Divider c={"#f1f1f1"} />
        </Stack>
        <Container>
          <Group gap={10} justify="center" p={20}>
            <Text fw={700} size="xs" className="text-white">
              Desktop version
            </Text>
            <Text fw={700} size="xs" className="text-white">
              Term and conditions
            </Text>
            <Text fw={700} size="xs" className="text-white">
              How we work
            </Text>
            <Text fw={700} size="xs" className="text-white">
              Privacy & Cookies
            </Text>
            <Text fw={700} size="xs" className="text-white">
              Morden Slavry statement
            </Text>
            <Text fw={700} size="xs" className="text-white">
              Human rights Statement
            </Text>
          </Group>

          <Stack align="center" mt={10}>
            <Text size="xs" className="text-white">
              Copyright © 1996–2024 Booking.com™. All rights reserved.
            </Text>

            <Text size="xs" c="white" ta={"center"}>
              Booking.com is part of Booking Holdings Inc., the world leader in
              online travel and related services.
            </Text>

            {/* <Flex justify={"center"} align={"center"} gap={10}>
              List of logo here
            </Flex> */}
          </Stack>
        </Container>
      </Box>

      {/* Footer link */}
      {/* <FooterNavLink /> */}
    </Box>
  );
};
