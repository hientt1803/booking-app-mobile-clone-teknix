"use client";

import { PrimaryButton } from "@/components/button";
import { ARRIVAL_TIME } from "@/utils";
import {
  Alert,
  Box,
  Drawer,
  Text,
  TextInput,
  Title
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { AlertCircleIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface IArraivalTime {
  active: boolean;
  id: number;
  label: string;
  value: string;
}
[];

const ModalChangeArrivalTime = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [anotherTime, setAnotherTime] = useState(false);
  const [selectedArrivalTime, setSelectedArrivalTime] = useState("0");
  const [arrivalTime, setArrivalTime] = useState<IArraivalTime[]>([]);

  useEffect(() => {
    const newArrival = ARRIVAL_TIME.map((item) => {
      return {
        ...item,
        active: false,
      };
    });

    setArrivalTime(newArrival);
  }, []);

  const handleSetSelectedArrivalTime = (id: number) => {
    const newArrival = ARRIVAL_TIME.map((item) => {
      if (item.id == id) {
        return {
          ...item,
          active: true,
        };
      } else {
        return {
          ...item,
          active: false,
        };
      }
    });

    setArrivalTime(newArrival);
  };

  return (
    <div>
      <Drawer opened={opened} onClose={close} size={"100%"} position="right">
        <Title order={5}>Requests a check-in Time</Title>
        <Text size="xs" mt={20}>
          Standar check-in hours: Web, Aug 14, 2024 2:00 PM - 11:00 PM
        </Text>
        <Text size="xs" my={20}>
          {` If you plan to arrive earlier or later than this, you can send a
          request to the property for a different check-in time. They'll do
          their best to meet your needs, but your request depends on their
          policies and availability.`}
        </Text>
        <Text size="xs" mb={10}>
          When do you expect to arrive?
        </Text>

        <Box className="flex gap-2 flex-wrap">
          {arrivalTime.map((item) => (
            <PrimaryButton
              key={item.id}
              variant={item.active ? "filled" : "outline"}
              color="dark"
              className="rounded-sm"
              onClick={() => {
                setAnotherTime(false);
                setSelectedArrivalTime(item.label);
                handleSetSelectedArrivalTime(item.id);
              }}
            >
              {item.label}
            </PrimaryButton>
          ))}
          <PrimaryButton
            variant="outline"
            color="dark"
            className="rounded-sm"
            onClick={() => setAnotherTime(true)}
          >
            Another time
          </PrimaryButton>
        </Box>

        {anotherTime && (
          <TextInput
            label="Choose the time you arrival"
            placeholder="1:00 PM"
            my={15}
            onChange={(e) => setSelectedArrivalTime(e.target.value)}
          />
        )}

        <Text size="xs" mt={20}>
          Your selected time
        </Text>
        <Title order={3}>Web, Aug 14, 2024, {selectedArrivalTime}</Title>

        <Alert
          variant="light"
          color="yellow"
          title="Good to know"
          icon={<AlertCircleIcon />}
          my={25}
        >
          {`We'll `} share your request with the property. Normally, they
          respond within 24 hours, but {`we'll `} let you know when they reply.
          If your request is urgent, {`it's`} best to call the property on to
          get an
          <strong className="mx-2">+8493098536</strong>
          immediate answer.
        </Alert>

        <PrimaryButton fullWidth className="mt-20" onClick={close}>
          Submit request
        </PrimaryButton>
      </Drawer>

      <Text size="xs" c={"blue"} onClick={open} className="cursor-pointer">
        changes arrival time
      </Text>
    </div>
  );
};

export default ModalChangeArrivalTime;
