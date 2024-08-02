import { PrimaryButton } from "@/components/button";
import {
    Box,
    Container,
    Divider,
    Flex,
    Stack,
    Text,
    TextInput,
    Title
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { ChevronLeftIcon, CreditCardIcon } from "lucide-react";
import Link from "next/link";

export const PaymentContainer = () => {
  return (
    <Box bg="#fff" py={10}>
      <Container>
        <Stack>
          <Link href={"/account"}>
            <Flex>
              <ChevronLeftIcon />
              Comeback
            </Flex>
          </Link>
          <Title order={2}>Payment details</Title>
          <Text size="sm">
            Securely add or remove payment methods to make it easier when you
            book.
          </Text>
          <Divider />
          <Stack>
            <Text size="sm">Payment cards</Text>
          </Stack>
          <Divider />

          <Stack>
            <TextInput
              label="Cardholder's name"
              withAsterisk
              placeholder=""
              className="mb-1"
            />
            <TextInput
              label="Card number"
              withAsterisk
              placeholder=""
              leftSection={<CreditCardIcon />}
            />
            <DateInput
              valueFormat="YYYY MMM DD"
              label="Expiration date"
              placeholder="Expiration date"
            />
          </Stack>
          <PrimaryButton fullWidth>SAVE</PrimaryButton>
        </Stack>
      </Container>
    </Box>
  );
};
