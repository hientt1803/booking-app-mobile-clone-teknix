export const HOST_URL = process.env.NEXT_PUBLIC_HOST_URL;
export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const CITY_MOCKUP = [
  {
    id: 1,
    name: "Can Tho",
    link: "/hotel?city=cantho",
    country: "vietnam",
  },
  {
    id: 2,
    name: "Hanoi",
    link: "/hotel?city=hanoi",
    country: "vietnam",
  },
  {
    id: 3,
    name: "Ho Chi Minh City",
    link: "/hotel?city=hcmc",
    country: "vietnam",
  },
  {
    id: 4,
    name: "Da Nang",
    link: "/hotel?city=danang",
    country: "vietnam",
  },
  {
    id: 5,
    name: "Hai Phong",
    link: "/hotel?city=haiphong",
    country: "vietnam",
  },
  {
    id: 6,
    name: "Nha Trang",
    link: "/hotel?city=nhatrang",
    country: "vietnam",
  },
  {
    id: 7,
    name: "Hue",
    link: "/hotel?city=hue",
    country: "vietnam",
  },
  {
    id: 8,
    name: "Vung Tau",
    link: "/hotel?city=vungtau",
    country: "vietnam",
  },
  {
    id: 9,
    name: "Da Lat",
    link: "/hotel?city=dalat",
    country: "vietnam",
  },
  {
    id: 10,
    name: "Quy Nhon",
    link: "/hotel?city=quynhon",
    country: "vietnam",
  },
];

export const FILTER_DATA = [
  {
    title: "Polular Filters",
    items: [
      { label: "Very good 8+ (120)", description: "Based on guest reviews" },
      { label: "Apartments (21)" },
      { label: "Air conditioning (21)" },
      { label: "Hotels (21)" },
      { label: "Swimming Pool (21)" },
      { label: "Breakfast Included (21)" },
      { label: "4 stars (21)" },
      { label: "Resorts (21)" },
    ],
  },
  {
    title: "Facilities",
    items: [
      { label: "Very good 8+ (120)", description: "Based on guest reviews" },
      { label: "Free Wifi (21)" },
      { label: "Parking (21)" },
      { label: "24-hour front desk (21)" },
      { label: "Non-smoking room (21)" },
      { label: "Family rooms (21)" },
      { label: "Room service (21)" },
      { label: "Airport shuttle (21)" },
      { label: "Restaurant (21)" },
      { label: "Pet friendly (21)" },
      { label: "Swimming pool (21)" },
      { label: "Wheelchair accessible (21)" },
      { label: "Fitness center (21)" },
      { label: "Spa (21)" },
      { label: "Electric vehicle charging station (21)" },
    ],
  },
  {
    title: "Property Type",
    items: [
      { label: "Hotels (120)" },
      { label: "Apartments (21)" },
      { label: "Homestays (21)" },
      { label: "Hostels (21)" },
      { label: "Guesthouses (21)" },
      { label: "Bed and breakfasts (21)" },
      { label: "Resorts (21)" },
      { label: "Love Hotels (21)" },
      { label: "Motels (21)" },
      { label: "Villas (21)" },
      { label: "Vacation Homes (21)" },
      { label: "Lodges (21)" },
      { label: "Country Houses (21)" },
      { label: "Capsule Hotels (21)" },
    ],
  },
  {
    title: "Review Score",
    items: [
      { label: "Wonderful: 9+ (47)" },
      { label: "Very good 8+ (121)" },
      { label: "Good: 7+ (21)" },
      { label: "Pleasant: 6+ (21)" },
    ],
  },
  {
    title: "Meals",
    items: [
      { label: "Kitchen facilities (42)" },
      { label: "Breakfast Included (121)" },
      { label: "Breakfast & dinner included (21)" },
    ],
  },
  {
    title: "Property Rating",
    items: [
      { label: "1 star (42)" },
      { label: "2 stars (121)" },
      { label: "3 stars (21)" },
      { label: "4 stars (21)" },
      { label: "5 stars (21)" },
    ],
  },
];

export const ARRIVAL_TIME = [
  {
    id: 1,
    label: "07:00",
    value: "19",
  },
  {
    id: 2,
    label: "08:00",
    value: "20",
  },
  {
    id: 3,
    label: "09:00",
    value: "21",
  },
  {
    id: 4,
    label: "10:00",
    value: "22",
  },
  {
    id: 5,
    label: "11:00",
    value: "23",
  },
  {
    id: 6,
    label: "12:00",
    value: "0",
  },
  {
    id: 7,
    label: "01:00",
    value: "1",
  },
  {
    id: 8,
    label: "02:00",
    value: "2",
  },
  {
    id: 9,
    label: "03:00",
    value: "3",
  },
  {
    id: 10,
    label: "04:00",
    value: "4",
  },
  {
    id: 11,
    label: "05:00",
    value: "5",
  },
  {
    id: 12,
    label: "06:00",
    value: "6",
  },
  {
    id: 13,
    label: "07:00",
    value: "7",
  },
  {
    id: 14,
    label: "08:00",
    value: "8",
  },
  {
    id: 15,
    label: "09:00",
    value: "9",
  },
  {
    id: 16,
    label: "10:00",
    value: "10",
  },
  {
    id: 17,
    label: "11:00",
    value: "11",
  },
  {
    id: 18,
    label: "12:00",
    value: "12",
  },
  {
    id: 19,
    label: "01:00",
    value: "13",
  },
  {
    id: 20,
    label: "02:00",
    value: "14",
  },
  {
    id: 21,
    label: "03:00",
    value: "15",
  },
  {
    id: 22,
    label: "04:00",
    value: "16",
  },
  {
    id: 23,
    label: "05:00",
    value: "17",
  },
  {
    id: 24,
    label: "06:00",
    value: "18",
  },
];

export const SORTBY_OPTION = [
  {
    title: "Sort by",
    items: [
      { label: "Top picks for long stays", value: "topPick" },
      { label: "Price (Lowest first)", value: "lowPrice" },
      { label: "Property rating and price", value: "ratingAndPrice" },
      { label: "Best review & lowest price", value: "reviewAndLowPrice" },
      { label: "Distance from downtown", value: "Distance" },
      { label: "Top reviewed", value: "review" },
      { label: "Homes & apartments first", value: "home" },
    ],
  },
];

export const SORT_HOTEL = [
  {
    id: 1,
    label: "Top picks for long stays",
    type: "best",
    value: "best",
    active: false,
  },
  {
    id: 2,
    label: "Price (lowest first)",
    type: "priceBreakdown.grossPrice.value",
    value: "lowestPrice",
    active: false,
  },
  {
    id: 3,
    label: "Property rating and price",
    type: "accuratePropertyClass",
    value: "priceAndRating",
    active: false,
  },
  {
    id: 4,
    label: "Best review & lowest price",
    type: "reviewScore",
    value: "reviewAndPrice",
    active: false,
  },
  {
    id: 5,
    label: "Distance from downtown",
    type: "distance",
    value: "distance",
    active: false,
  },
  {
    id: 6,
    label: "Top reviewed",
    type: "reviewCount",
    value: "review",
    active: false,
  },
  {
    id: 7,
    label: "Homes & apartments first",
    type: "position",
    value: "home",
    active: false,
  },
];

export const TAG_SCROLL_DATA = [
  {
    id: 1,
    title: "Hotels",
    value: 235,
    count: 253,
    active: false,
  },
  {
    id: 2,
    title: "Double bed",
    value: 199,
    count: 132,
    active: false,
  },
  {
    id: 3,
    title: "Family rooms",
    value: 154,
    count: 145,
    active: false,
  },
  {
    id: 4,
    title: "Electric kettle",
    value: 135,
    count: 135,
    active: false,
  },
  {
    id: 5,
    title: "Free Wi-Fi",
    value: 215,
    count: 189,
    active: false,
  },
  {
    id: 6,
    title: "Breakfast included",
    value: 250,
    count: 178,
    active: false,
  },
  {
    id: 7,
    title: "Parking available",
    value: 123,
    count: 200,
    active: false,
  },
  {
    id: 8,
    title: "Pet-friendly",
    value: 105,
    count: 115,
    active: false,
  },
  {
    id: 9,
    title: "Swimming pool",
    value: 187,
    count: 98,
    active: false,
  },
  {
    id: 10,
    title: "Gym access",
    value: 102,
    count: 156,
    active: false,
  },
  {
    id: 11,
    title: "Air conditioning",
    value: 135,
    count: 222,
    active: false,
  },
  {
    id: 12,
    title: "Spa services",
    value: 175,
    count: 88,
    active: false,
  },
  {
    id: 13,
    title: "Room service",
    value: 145,
    count: 140,
    active: false,
  },
  {
    id: 14,
    title: "Conference rooms",
    value: 180,
    count: 75,
    active: false,
  },
  {
    id: 15,
    title: "Balcony",
    value: 155,
    count: 190,
    active: false,
  },
];
