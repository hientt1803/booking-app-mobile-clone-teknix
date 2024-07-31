"use client";

import { CaroucelImage } from "@/components/caroucel";

export const HotelDetailCaroucel = () => {

  const images = [
    {
      original: "/assets/images/booking-banner-home.jpeg",
      thumbnail: "/assets/images/booking-banner-home.jpeg",
    },
    {
      original: "/assets/images/booking-banner-home.jpeg",
      thumbnail: "/assets/images/booking-banner-home.jpeg",
    },
    {
      original: "/assets/images/booking-banner-home.jpeg",
      thumbnail: "/assets/images/booking-banner-home.jpeg",
    },
    {
      original: "/assets/images/booking-banner-home.jpeg",
      thumbnail: "/assets/images/booking-banner-home.jpeg",
    },
    {
      original: "/assets/images/booking-banner-home.jpeg",
      thumbnail: "/assets/images/booking-banner-home.jpeg",
    },
    {
      original: "/assets/images/booking-banner-home.jpeg",
      thumbnail: "/assets/images/booking-banner-home.jpeg",
    },
  ];

  return (
    <div className="flex flex-col gap-3 w-full">
      <CaroucelImage images={images} />
    </div>
  );
};
