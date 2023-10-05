"use client";

import { Input, Select } from "antd";
import { useFormContext, Controller } from "react-hook-form";

type TextAreaProps = {
  name: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  rows?: number;
  label?: string;
  placeholder?: string;
};
const FormTextArea = ({
  name,
  rows,
  value,

  label,

  placeholder,
}: TextAreaProps) => {
  const { control } = useFormContext();

  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Input.TextArea
            rows={rows}
            placeholder={placeholder}
            {...field}
            defaultValue={value}
          />
        )}
      />
    </>
  );
};

export default FormTextArea;
