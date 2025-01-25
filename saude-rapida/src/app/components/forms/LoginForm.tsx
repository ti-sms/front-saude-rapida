"use client"
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import { loginSchema } from "@/app/lib/validations/loginSchema";
import { useForm } from "react-hook-form";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false); // Gerenciar visibilidade da senha
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: loginSchema) => {
    console.log("Login Data:", data);
  };

  const getFormErrorMessage = (name: keyof loginSchema) =>
    errors[name] ? (
      <small className="p-error">{errors[name]?.message}</small>
    ) : null;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="field">
        <label htmlFor="login" className="block text-sm font-medium">
          Usuário
        </label>
        <InputText
          id="login"
          {...register("login")}
          className={classNames(
            { "p-invalid": errors.login },
            "w-full rounded-lg"
          )}
        />
        {getFormErrorMessage("login")}
      </div>

      <div className="field">
        <label htmlFor="password" className="block text-sm font-medium">
          Senha
        </label>
        <div className="p-inputgroup">
          <InputText
            id="password"
            type={showPassword ? "text" : "password"} 
            {...register("password")}
            className={classNames(
              { "p-invalid": errors.password },
              "w-full rounded-lg"
            )}
          />
          <Button
            type="button"
            icon={showPassword ? "pi pi-eye-slash" : "pi pi-eye"} 
            onClick={() => setShowPassword(!showPassword)}
            className="p-button-text  text-amber-500"
          />
        </div>
        {getFormErrorMessage("password")}
      </div>

      <Button type="submit" label="Entrar" className="text-white " severity="warning"  />
    </form>
  );
}
