import { IAcademicFaculty, IFaculty, IMeta } from "@/types";

import { tagTypes } from "@/redux/tag-types";
import { baseApi } from "./baseApi";

const BASE_FACULTY_API_URL = "/faculties";

export const facultyApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all academic faculties api endpoint
    faculties: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: BASE_FACULTY_API_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IFaculty[], meta: IMeta) => {
        return {
          academicFaculties: response,
          meta,
        };
      },
      providesTags: [tagTypes.faculty],
    }),
    // get single academic faculty by id api endpoint
    faculty: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${BASE_FACULTY_API_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.faculty],
    }),
    // create academic faculty api endpoint
    addFaculty: build.mutation({
      query: (data) => ({
        url: "/users/create-faculty",
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.faculty],
    }),
    // update academic faculty api endpoint
    updateFaculty: build.mutation({
      query: (data) => ({
        url: `${BASE_FACULTY_API_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.faculty],
    }),
    // delete academic faculty api endpoint
    deleteFaculty: build.mutation({
      query: (id) => ({
        url: `${BASE_FACULTY_API_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.faculty],
    }),
  }),
});

export const {
  useAddFacultyMutation,
  useUpdateFacultyMutation,
  useFacultiesQuery,
  useFacultyQuery,
} = facultyApi;
