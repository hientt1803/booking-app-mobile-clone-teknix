"use client";

import { PrimaryButton } from "@/components/button";
import { Drawer, Flex, Select, Text, TextInput, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ChevronRight } from "lucide-react";

const ModalChangeGuestDetail = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div>
      <Drawer opened={opened} onClose={close} size={"100%"} position="right">
        <Title order={3} mb={20}>
          Change guest details
        </Title>

        <TextInput
          label="Guest name"
          type="text"
          value={"Nguyen Van An"}
          mb={10}
        />
        <TextInput label="People" type="number" value={"1"} mb={10} />
        <Select
          label="Preference"
          placeholder="No preference"
          data={["Smoking", "No-Smoking"]}
        />

        <PrimaryButton fullWidth className="mt-20" onClick={close}>
          Submit
        </PrimaryButton>
      </Drawer>

      <Flex justify={"space-between"} align={"center"} onClick={open}>
        <Text size="xs" c={"blue"} className="cursor-pointer">
          Edit guest details
        </Text>
        <ChevronRight className="w-4 h-4" />
      </Flex>
    </div>
  );
};

export default ModalChangeGuestDetail;
