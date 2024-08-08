"use client";

import { toastError } from "@/utils/config/toast";
import { Box, Button, Drawer, Select } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Map, MapPinnedIcon } from "lucide-react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const LeafletComponent = dynamic(
  () => import("@/components/map").then((mob) => mob.LeafletComponent),
  { ssr: false }
);
export const MapFilter = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [getCurrentUserLocation, setGetCurrentUserLocation] = useState({
    latitude: 10.03,
    longitude: 105.72,
  });

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  function success(pos: { coords: any }) {
    const crd = pos.coords;

    // console.log("Your current position is:");
    // console.log(`Latitude : ${crd.latitude}`);
    // console.log(`Longitude: ${crd.longitude}`);
    // console.log(`More or less ${crd.accuracy} meters.`);
    setGetCurrentUserLocation({
      latitude: crd.latitude,
      longitude: crd.longitude,
    });
  }

  function errors(err: { code: any; message: any }) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    toastError("Please provide your location for the best experience");
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            // console.log(result.state);
            navigator.geolocation.getCurrentPosition(success);
          } else if (result.state === "prompt") {
            // console.log(result.state);
            navigator.geolocation.getCurrentPosition(success, errors, options);
            // toastSuccess("Location provided");
          } else if (result.state === "denied") {
            navigator.geolocation.getCurrentPosition(success, errors, options);
          }
          result.onchange = function () {
            console.log(result.state);
          };
        });
    } else {
      alert("Sorry Not available!");
    }
  }, []);

  return (
    <Box>
      <Drawer
        opened={opened}
        onClose={close}
        size={"100%"}
        title="Select hotel"
        position="bottom"
      >
        <Select
          data={[
            "Can Tho",
            "Sai Gon",
            "Vinh Long",
            "Tra Vinh",
            "Soc Trang",
            "Hau Giang",
            "Tien Giang",
            "Kien Giang",
          ]}
          leftSectionPointerEvents="none"
          leftSection={<MapPinnedIcon />}
          // error="Error"
          placeholder="Please enter your hotel you want"
          mb={10}
        />

        <LeafletComponent
          latitude={getCurrentUserLocation.latitude}
          longitude={getCurrentUserLocation.longitude}
        />
      </Drawer>

      <Button onClick={open} variant="subtle" size="xs">
        <Map style={{ width: "20px", height: "20px" }} /> Map
      </Button>
    </Box>
  );
};
