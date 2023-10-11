import { IDepartment, IMeta } from "@/types";
import { baseApi } from "../baseApi";
import { tagTypes } from "@/redux/tag-types";

const ACADEMIC_SEMESTER_URL = "/academic-semesters";
export const academicSemesterApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    academicSemesters: build.query({
      query: (arg: Record<string, any>) => ({
        url: ACADEMIC_SEMESTER_URL,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IDepartment, meta: IMeta) => {
        return {
          departments: response,
          meta,
        };
      },
      providesTags: [tagTypes.academicSemester],
    }),
    academicSemester: build.query({
      query: (id) => ({
        url: `${ACADEMIC_SEMESTER_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.academicSemester],
    }),
    updateAcademicSemester: build.mutation({
      query: (data) => ({
        url: `${ACADEMIC_SEMESTER_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.academicSemester],
    }),
    deleteAcademicSemester: build.mutation({
      query: (id) => ({
        url: `${ACADEMIC_SEMESTER_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.academicSemester],
    }),
    addAcademicSemester: build.mutation({
      query: (data) => ({
        url: ACADEMIC_SEMESTER_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.academicSemester],
    }),
  }),
});

export const {
  useAddAcademicSemesterMutation,
  useDeleteAcademicSemesterMutation,
  useAcademicSemestersQuery,
} = academicSemesterApi;
