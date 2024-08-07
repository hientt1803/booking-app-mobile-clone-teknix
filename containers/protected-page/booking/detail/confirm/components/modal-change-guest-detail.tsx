"use client";

import { PrimaryButton } from "@/components/button";
import { Drawer, Flex, Select, Text, TextInput, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ChevronRight } from "lucide-react";
import React, { useState } from "react";

const ModalChangeGuestDetail = () => {
  const [opened, { open, close }] = useDisclosure(false);

  // state
  const [name, setName] = useState("");
  const [people, setPeople] = useState(0);

  return (
    <React.Fragment>
      <Drawer opened={opened} onClose={close} size={"100%"} position="right">
        <Title order={3} mb={20}>
          Change guest details
        </Title>

        <TextInput
          label="Guest name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          mb={10}
        />
        <TextInput
          label="People"
          type="number"
          value={people}
          onChange={(e) => setPeople(Number(e.target.value))}
          mb={10}
        />
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
    </React.Fragment>
  );
};

export default ModalChangeGuestDetail;
