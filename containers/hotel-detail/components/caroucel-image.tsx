import dynamic from "next/dynamic";

const CaroucelImage = dynamic(
  () => import("@/components/caroucel").then((mob) => mob.CaroucelImage),
  { ssr: false }
);

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

export const HotelDetailCaroucel = () => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <CaroucelImage images={images} />
    </div>
  );
};
