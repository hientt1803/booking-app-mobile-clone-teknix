"use client";

import { Container, Grid, Stack } from "@mantine/core";
import Link from "next/link";
import React from "react";

const FOOTER_LINK = [
  { title: "Countries", link: "/" },
  { title: "Regions", link: "/" },
  { title: "Cities", link: "/" },
  { title: "Districts", link: "/" },
  { title: "Airports", link: "/" },
  { title: "Hotels", link: "/" },
  { title: "Places of interest", link: "/" },
  { title: "Homes", link: "/" },
  { title: "Apartments", link: "/" },
  { title: "Resorts", link: "/" },
  { title: "Villas", link: "/" },
  { title: "Hostels", link: "/" },
  { title: "B&Bs", link: "/" },
  { title: "Guest Houses", link: "/" },
  { title: "Unique places to stay", link: "/" },
  { title: "All destinations", link: "/" },
  { title: "All flight destinations", link: "/" },
  { title: "All car rental locations", link: "/" },
  { title: "All vacation destinations", link: "/" },
  { title: "Reviews", link: "/" },
  { title: "Discover monthly stays", link: "/" },
  { title: "Travel articles", link: "/" },
  { title: "Seasonal and holiday deals", link: "/" },
  { title: "Traveller Review Awards", link: "/" },
  { title: "Car rental", link: "/" },
  { title: "Flight finder", link: "/" },
  { title: "Restaurant reservations", link: "/" },
  { title: "Booking.com for Travel Agents", link: "/" },
  { title: "Coronavirus (COVID-19) FAQs", link: "/" },
  { title: "About Booking.com", link: "/" },
  { title: "Customer Service Help", link: "/" },
  { title: "Partner help", link: "/" },
  { title: "Careers", link: "/" },
  { title: "Sustainability", link: "/" },
  { title: "Press Center", link: "/" },
  { title: "Safety Resource Center", link: "/" },
  { title: "Investor relations", link: "/" },
  { title: "Terms & Conditions", link: "/" },
  { title: "Partner dispute", link: "/" },
  { title: "How We Work", link: "/" },
  { title: "Privacy & cookie statement", link: "/" },
  { title: "Modern Slavery Statement", link: "/" },
  { title: "Human Rights Statement", link: "/" },
  { title: "Corporate contact", link: "/" },
  { title: "Content guidelines and reporting", link: "/" },
];

const FooterNavLink = () => {
  return (
    <Container mt={30}>
      <Grid grow gutter={{ base: 5, xs: "md", md: "xl", xl: 50 }}>
        <Grid.Col span={4} mb={50}>
          {FOOTER_LINK.slice(0, 5).map((item, index) => (
            <Stack key={index}>
              <Link href={item.link} className="text-blue-700 text-sm mb-2">
                {item.title}
              </Link>
            </Stack>
          ))}
        </Grid.Col>

        <Grid.Col span={4} mb={50}>
          {FOOTER_LINK.slice(5, 10).map((item, index) => (
            <Stack key={index}>
              <Link href={item.link} className="text-blue-700 text-sm mb-2">
                {item.title}
              </Link>
            </Stack>
          ))}
        </Grid.Col>

        <Grid.Col span={4} mb={50}>
          {FOOTER_LINK.slice(10, 15).map((item, index) => (
            <Stack key={index}>
              <Link href={item.link} className="text-blue-700 text-sm mb-2">
                {item.title}
              </Link>
            </Stack>
          ))}
        </Grid.Col>

        <Grid.Col span={4} mb={50}>
          {FOOTER_LINK.slice(15, 20).map((item, index) => (
            <Stack key={index}>
              <Link href={item.link} className="text-blue-700 text-sm mb-2">
                {item.title}
              </Link>
            </Stack>
          ))}
        </Grid.Col>

        <Grid.Col span={4} mb={50}>
          {FOOTER_LINK.slice(20, 25).map((item, index) => (
            <Stack key={index}>
              <Link href={item.link} className="text-blue-700 text-sm mb-2">
                {item.title}
              </Link>
            </Stack>
          ))}
        </Grid.Col>

        <Grid.Col span={4} mb={50}>
          {FOOTER_LINK.slice(25, 30).map((item, index) => (
            <Stack key={index}>
              <Link href={item.link} className="text-blue-700 text-sm mb-2">
                {item.title}
              </Link>
            </Stack>
          ))}
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default FooterNavLink;
