import { Button, Spacer } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";

import BaseInput from "../components/input/baseInput";
import PasswordInput from "../components/input/passwordInput";
import { IFormValues } from "../components/input/baseInput";
import "./App.css";

function LoginPage() {
  const { register, handleSubmit } = useForm<IFormValues>();
  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="name-form-container">
          <BaseInput
            placeholder="Nome"
            label="Usuário"
            register={register}
            required
          />
        </div>
        <Spacer height="4" />
        <div className="email-form-container">
          <BaseInput
            placeholder="E-mail"
            label="E-mail"
            register={register}
            required
          />
        </div>
        <Spacer height="4" />
        <div className="password-form-container">
          <PasswordInput
            placeholder="Senha"
            label="Senha"
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
          Logar
        </Button>
      </form>
    </div>
  );
}

export default LoginPage;
