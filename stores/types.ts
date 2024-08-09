import { IHotel } from "@/types";

interface ISearchGlobal {
  location: {
    id: number;
    name: string;
  };
  dateRange: {
    startDate: string;
    endDate: string;
  };
  people: {
    adults: number;
    childrens: number;
    rooms: number;
    pet?: boolean;
  };
  filter: {
    listTagFilter: {
      id: number;
      title: string;
      value: number;
      count: number;
      active: boolean;
    }[];
    sortBy: {
      id: number;
      label: string;
      type: string;
      value: string;
      active: boolean;
    }[];
  };
}

export interface IGlobalSlice {
  searchGlobal: ISearchGlobal;
}

export interface IHotelSlice {
  hotels: IHotel[];
  hotelFiltered: IHotel[];
}
