import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type FormInputProps = {
  label?: string;
  name: string;
  register: any;
  errors: any;
  isRequired?: boolean;
  type?: string;
  defaultValue?: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const FormInput = ({
  label,
  name,
  register,
  errors,
  isRequired = true,
  type = "text",
  defaultValue = "",
  className = "sm:col-span-2",
  ...rest
}: FormInputProps) => {
  return (
    <div className={className}>
      <Label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900 mb-2 dark:text-slate-50 "
      >
        {label}
      </Label>
      <div className="mt-2">
        <Input
          {...register(`${name}`, { required: isRequired })}
          type={type}
          name={name}
          id={name}
          defaultValue={defaultValue}
          autoComplete={name}
          placeholder={`Type the ${label?.toLowerCase()}`}
          className={className}
        />
        {errors[`${name}`] && (
          <span className="text-sm text-red-600 ">{label} is required</span>
        )}
      </div>
    </div>
  );
};

export default FormInput;
