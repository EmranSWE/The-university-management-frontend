import React from "react";
import FormSelectField, { SelectOptions } from "./FormSelectField";

import { useAcademicDepartmentsQuery } from "@/redux/api/academic/departmentApi";

type ACFieldsProps = {
  name: string;
  label: string;
};
const ACDepartmentField = ({ name, label }: ACFieldsProps) => {
  const { data, isLoading } = useAcademicDepartmentsQuery({
    limit: 100,
    page: 1,
  });
  //@ts-ignore
  const academicDepartments = data?.departments;
  const acDepartmentOptions = academicDepartments?.map((acDepartment: any) => {
    return {
      label: acDepartment.title,
      value: acDepartment.id,
    };
  });
  return (
    <FormSelectField
      size="large"
      name={name}
      options={acDepartmentOptions as SelectOptions[]}
      label={label}
      placeholder="Select"
    />
  );
};

export default ACDepartmentField;
