import { Input } from "@chakra-ui/react";
import { UseFormRegister, useForm } from "react-hook-form";

import { LoginInputProps, IFormValues } from "./baseInput";
import "./baseInput.css";

type BirthDateInputProps = LoginInputProps & {
  placeholder: string;
  register: UseFormRegister<IFormValues>;
  errors: any;
};

export default function BirthDateInput({
  placeholder,
  register,
  label,
  required = true,
  errors,
}: BirthDateInputProps) {
  return (
    <div className="input-container">
      <label className="label">{label}</label>
      <Input
        {...register(label, {
          required: required,
          pattern: {
            value: /^\d{2}\/\d{2}\/\d{4}$/,
            message: "Por favor insira sua data de nascimento (dd/mm/aaaa)",
          },
        })}
        variant="outline"
        placeholder={placeholder}
      />
      {errors[label] && <p>{errors[label].message}</p>}
    </div>
  );
}
