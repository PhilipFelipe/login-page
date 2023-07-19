import { Button, Spacer, Text } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { NavLink } from "react-router-dom";

import BaseInput from "../components/input/baseInput";
import PasswordInput from "../components/input/passwordInput";
import BirthDateInput from "../components/input/birthDateInput";
import { IFormValues } from "../components/input/baseInput";
import "./App.css";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>();
  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="name-form-container">
          <BaseInput
            placeholder="Digite seu usuário..."
            label="Usuário"
            register={register}
            required
          />
        </div>
        <Spacer height="4" />
        <div className="email-form-container">
          <BaseInput
            placeholder="Digite seu e-mail..."
            label="E-mail"
            register={register}
            required
          />
        </div>
        <Spacer height="4" />
        <div className="birth-date-form-container">
          <BirthDateInput
            placeholder="Digite sua data de nascimento"
            register={register}
            required={true}
            label="Data de nascimento"
            errors={errors}
          />
        </div>
        <Spacer height="4" />
        <div className="password-form-container">
          <PasswordInput
            placeholder="Digite uma senha"
            label="Senha"
            register={register}
            required
          />
          <Spacer height="4" />
          <PasswordInput
            placeholder="Digite a senha novamente"
            label="Confirmar senha"
            register={register}
            required
          />
        </div>
        <Button
          type="submit"
          className="button-form"
          marginTop="4"
          colorScheme="teal"
        >
          Registrar
        </Button>
        <Text marginTop={"10px"} display={"flex"}>
          Já possui uma conta?
          <NavLink to="/">
            <Text marginLeft={"5px"} color={"green"}>
              Entre agora.
            </Text>
          </NavLink>
        </Text>
      </form>
    </div>
  );
}

export default RegisterPage;
