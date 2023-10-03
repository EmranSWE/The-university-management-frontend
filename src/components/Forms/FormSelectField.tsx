"use client";

import { Input, Select } from "antd";
import { useFormContext, Controller } from "react-hook-form";

type SelectOptions = {
  label: string;
  value: string;
};
type SelectFieldProps = {
  options: SelectOptions[];
  name: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  validation?: object;
  label?: string;
  defaultValue?: SelectOptions;
};
const FormSelectField = ({
  name,
  options,
  size,
  value,
  validation,
  label,
  defaultValue,
}: SelectFieldProps) => {
  const { control } = useFormContext();

  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            onChange={onChange}
            size={size}
            options={options}
            value={value}
          />
        )}
      />
    </>
  );
};

export default FormSelectField;
