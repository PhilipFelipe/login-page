import { Input } from "@chakra-ui/react";
import { Path, UseFormRegister } from "react-hook-form";

import "./loginInput.css";

export interface IFormValues {
  Usuário: string;
  "E-mail": string;
  Senha: string;
}

type LoginInputProps = {
  placeholder: string;
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
};

export default function LoginInput({
  label,
  placeholder,
  register,
  required,
}: LoginInputProps) {
  return (
    <div className="input-container">
      <label className="label">{label}</label>
      <Input
        {...register(label, { required })}
        variant="outline"
        placeholder={placeholder}
      />
    </div>
  );
}
