import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Group,
  Stack,
  Text,
} from "@mantine/core";
import FooterNavLink from "./footer-nav-link";
import Link from "next/link";

export const MainFooter = () => {
  return (
    <Box mt={50}>
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
            <Text size="xs" className="text-white underline">
              Desktop version
            </Text>
            <Text size="xs" className="text-white underline">
              Term and conditions
            </Text>
            <Text size="xs" className="text-white underline">
              How we work
            </Text>
            <Text size="xs" className="text-white underline">
              Privacy & Cookies
            </Text>
            <Text size="xs" className="text-white underline">
              Morden Slavry statement
            </Text>
            <Text size="xs" className="text-white underline">
              Human rights Statement
            </Text>
          </Group>
        </Container>
      </Box>

      {/* Footer link */}
      <FooterNavLink />

      {/* List logo, privacy, license,... */}
      <Box mt={30}>
        <Container>
          <Center>
            <Stack align="center">
              <Link href="/" className="text-blue-700">
                Extranet Log-in
              </Link>
              <Text size="sm">
                Copyright © 1996–2024 Booking.com™. All rights reserved.
              </Text>

              <Text size="sm" c="dimmed" mt={10} ta={"center"}>
                Booking.com is part of Booking Holdings Inc., the world leader
                in online travel and related services.
              </Text>

              {/*  */}
              <Flex justify={"center"} align={"center"} gap={10}>
                {/* List of logo here */}
              </Flex>
            </Stack>
          </Center>
        </Container>
      </Box>
    </Box>
  );
};
