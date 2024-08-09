import { IHotelSlice } from "@/stores/types";
import { HOTEL_MOCK_DATA } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IHotelSlice = {
  hotels: HOTEL_MOCK_DATA,
  hotelFiltered: [],
};

export const HotelSlice = createSlice({
  name: "hotelSlice",
  initialState,
  reducers: {
    setHotels: (state, action) => {
      state.hotels = action.payload;
    },
    setHotelFiltered: (state, action) => {
      state.hotelFiltered = action.payload;
    },
  },
});

export const { setHotels, setHotelFiltered } = HotelSlice.actions;

export default HotelSlice.reducer;
