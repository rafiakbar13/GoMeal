import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type SelectInputProps = {
  label: string;
  name: string;
  register: any;
  errors?: any;
  className?: string;
  options: any[];
  defaultValue?: string;
};

const SelectInput = ({
  label,
  name,
  register,
  errors,
  className = "sm:col-span-2",
  options = [],
  defaultValue = "",
}: SelectInputProps) => {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900 mb-2 dark:text-slate-50"
      >
        {label}
      </label>
      <div className="mt-2">
        <select
          {...register(`${name}`)}
          id={name}
          name={name}
          defaultValue={defaultValue}
          className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary focus:outline-none sm:max-w-xs sm:text-sm sm:leading-6 px-2"
        >
          {options.map((option, i) => (
            <option key={i} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
        {errors[`${name}`] && (
          <span className="text-sm text-red-600 ">{label} is required</span>
        )}
      </div>
    </div>
  );
};

export default SelectInput;
