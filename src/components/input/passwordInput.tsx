import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import { Path, UseFormRegister } from "react-hook-form";

import "./baseInput.css";
import { IFormValues, LoginInputProps } from "./baseInput";
import React from "react";

type PasswordInputProps = LoginInputProps & {
  placeholder: string;
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
};

export default function PasswordInput({
  label,
  placeholder,
  register,
  required = true,
}: PasswordInputProps) {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <div className="input-container">
      <label className="label">{label}</label>
      <InputGroup>
        <Input
          {...register(label, { required })}
          variant="outline"
          type={show ? "text" : "password"}
          placeholder={placeholder}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </div>
  );
}
