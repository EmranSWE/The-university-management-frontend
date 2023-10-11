import React from "react";
import FormSelectField, { SelectOptions } from "./FormSelectField";
import { useAcademicFacultiesQuery } from "@/redux/api/academic/facultyApi";

type ACFieldsProps = {
  name: string;
  label: string;
};
const ACFacultyField = ({ name, label }: ACFieldsProps) => {
  const { data, isLoading } = useAcademicFacultiesQuery({
    limit: 100,
    page: 1,
  });
  const academicFaculties = data?.academicFaculties;
  const acFacultyOptions = academicFaculties?.map((acFaculty) => {
    return {
      label: acFaculty.title,
      value: acFaculty.id,
    };
  });
  return (
    <FormSelectField
      size="large"
      name={name}
      options={acFacultyOptions as SelectOptions[]}
      label={label}
      placeholder="Select"
    />
  );
};

export default ACFacultyField;
