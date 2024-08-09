import { IGlobalSlice } from "@/stores/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IGlobalSlice = {
  searchGlobal: {
    location: {
      id: 0,
      name: "",
    },
    dateRange: {
      startDate: new Date().toLocaleDateString(),
      endDate: new Date().toLocaleDateString(),
    },
    people: {
      adults: 1,
      childrens: 0,
      rooms: 1,
      pet: false,
    },
    filter: {
      listTagFilter: [],
      sortBy: [],
    },
  },
};

export const GlobalSlice = createSlice({
  name: "globalSlice",
  initialState,
  reducers: {
    setSearchGlobal: (state, action) => {
      state.searchGlobal = action.payload;
    },
    setSearchGlobalLocation: (state, action) => {
      state.searchGlobal.location = action.payload;
    },
    setSearchGlobalDateRange: (state, action) => {
      const { startDate, endDate } = action.payload;

      state.searchGlobal.dateRange = {
        startDate: startDate,
        endDate: endDate,
      };
    },
    setSearchGlobalPeople: (state, action) => {
      const {
        adults = state.searchGlobal.people.adults,
        childrens = state.searchGlobal.people.childrens,
        rooms = state.searchGlobal.people.rooms,
        pet = false,
      } = action.payload;
      state.searchGlobal.people = {
        adults,
        childrens,
        rooms,
        pet,
      };
    },
    setSearchGlobalFilterLisTag: (state, action) => {
      state.searchGlobal.filter.listTagFilter = action.payload;
    },
    setSearchGlobalFilterSortBy: (state, action) => {
      state.searchGlobal.filter.sortBy = action.payload;
    },
  },
});

export const {
  setSearchGlobal,
  setSearchGlobalLocation,
  setSearchGlobalDateRange,
  setSearchGlobalPeople,
  setSearchGlobalFilterLisTag,
  setSearchGlobalFilterSortBy,
} = GlobalSlice.actions;

export default GlobalSlice.reducer;
