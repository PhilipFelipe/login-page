import { Input } from "@chakra-ui/react";
import { Path, UseFormRegister } from "react-hook-form";

import "./baseInput.css";

export interface IFormValues {
  Usuário: string;
  "E-mail": string;
  Senha: string;
  "Confirmar senha": string;
  "Data de nascimento": string;
}

export type LoginInputProps = {
  placeholder: string;
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
};

export default function BaseInput({
  label,
  placeholder,
  register,
  required = false,
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
