import { IDepartment, IMeta } from "@/types";
import { baseApi } from "../baseApi";
import { tagTypes } from "@/redux/tag-types";

const ACADEMIC_DEPARTMENT_URL = "/academic-departments";
export const academicDepartmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    academicDepartments: build.query({
      query: (arg: Record<string, any>) => ({
        url: ACADEMIC_DEPARTMENT_URL,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IDepartment, meta: IMeta) => {
        return {
          departments: response,
          meta,
        };
      },
      providesTags: [tagTypes.academicDepartment],
    }),
    academicDepartment: build.query({
      query: (id) => ({
        url: `${ACADEMIC_DEPARTMENT_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.academicDepartment],
    }),
    updateAcademicDepartment: build.mutation({
      query: (data) => ({
        url: `${ACADEMIC_DEPARTMENT_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.academicDepartment],
    }),
    deleteAcademicDepartment: build.mutation({
      query: (id) => ({
        url: `${ACADEMIC_DEPARTMENT_URL}/${id}`,
        method: "DELETE",
        data: id,
      }),
      invalidatesTags: [tagTypes.academicDepartment],
    }),
    addAcademicDepartment: build.mutation({
      query: (data) => ({
        url: ACADEMIC_DEPARTMENT_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.academicDepartment],
    }),
  }),
});

export const {
  useAddAcademicDepartmentMutation,
  useAcademicDepartmentQuery,
  useAcademicDepartmentsQuery,
  useDeleteAcademicDepartmentMutation,
} = academicDepartmentApi;
