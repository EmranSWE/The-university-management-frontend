"use client";

import { DatePicker, DatePickerProps, Input, Select } from "antd";
import { useFormContext, Controller } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";

type UMDatePickerProps = {
  name: string;
  value?: Dayjs;
  label?: string;
  onChange?: (valOne: Dayjs | null, valTwo: string) => void;
  size: "large" | "small";
};
const FormDatePicker = ({ name, onChange, label, size }: UMDatePickerProps) => {
  const { control, setValue } = useFormContext();
  const handleOnChange: DatePickerProps["onChange"] = (date, dateString) => {
    onChange ? onChange(date, dateString) : null;
    setValue(name, dateString);
  };
  return (
    <>
      {label ? label : null}
      <br></br>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <DatePicker
            defaultValue={dayjs(field.value) || ""}
            onChange={handleOnChange}
            style={{ width: "100%" }}
            size={size}
          />
        )}
      />
    </>
  );
};

export default FormDatePicker;
