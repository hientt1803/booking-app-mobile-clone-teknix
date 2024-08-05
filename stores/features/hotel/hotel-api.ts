import { HOST_URL } from "@/utils";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const HotelApi = createApi({
  reducerPath: "HotelApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${HOST_URL}/v2/`,
    // prepareHeaders: (headers, { getState }) => {
    //   const token = (getState() as RootState).userSlice.token;
    //   if (token) {
    //     headers.set("Authorization", `Bearer ${token}`);
    //   }
    //   return headers;
    // },
  }),
  tagTypes: ["hotel"],
  endpoints: (build) => ({
    getListHotel: build.query<any, string>({
      query: () => `hotels/search`,
      providesTags: ["hotel"],
    }),
    filterHotel: build.mutation<any, any>({
      query: (payload) => {
        return {
          url: "/auth?expand=shipping_addresses",
          method: "POST",
          body: {
            ...payload,
          },
        };
      },
      invalidatesTags: ["hotel"],
    }),
  }),
});

export const { endpoints, useGetListHotelQuery, useFilterHotelMutation } =
  HotelApi;
