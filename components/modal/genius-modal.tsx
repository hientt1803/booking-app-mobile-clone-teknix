"use client";

import { Button, Modal, Stack, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import { PrimaryButton } from "../button";
import { useEffect, useState } from "react";

export const GeniusModal = () => {
  const [opened, { close, toggle }] = useDisclosure(true);

  useEffect(() => {
    if (window) {
      const geniusCount = window.sessionStorage.getItem("geniusModalCount");

      if (geniusCount) {
        toggle();
      }
    }
  }, []);

  const setModalCountToLocalStorage = () => {
    window.sessionStorage.setItem("geniusModalCount", "1");
    close();
  };

  return (
    <div>
      <Modal opened={opened} onClose={setModalCountToLocalStorage} centered>
        <Modal.Body>
          <Stack gap={10} justify="center" align="center">
            <Image
              src={"/assets/icons/genius-icon.svg"}
              alt="Genuis icon"
              width={100}
              height={100}
            />
            <Text size="sm" fw={600}>
              Sign In, save money
            </Text>
            <Text size="xs" ta={"center"}>
              Sign in to <strong>save 10% or more</strong> with a free
              Booking.com membership
            </Text>
            <PrimaryButton
              fullWidth
              className="mt-4"
              onClick={setModalCountToLocalStorage}
            >
              Sign in or register
            </PrimaryButton>
            <Button
              variant="outline"
              color="blue"
              fullWidth
              onClick={setModalCountToLocalStorage}
            >
              Get Back
            </Button>
          </Stack>
        </Modal.Body>
      </Modal>
    </div>
  );
};
