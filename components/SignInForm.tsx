"use client";

import { signIn } from "next-auth/react";
// это новый импорт. использовать только его. старый импорт из next/router
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export const SignInForm = () => {
  const router = useRouter();

  // функция входа через провайдер гугла
  const enterForGoogle = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const response = await signIn("credentials", {
      // передаем данные на сервер
      email: formData.get("email"),
      password: formData.get("password"),
      // с случае ошибки нас перебросит на форму, которую генерирует некст. можно создать компонент ошибки, сделать под него стейт и показывать его
      redirect: false,
    });

    response && !response.error
      ? router.push("/profile")
      : console.log("response", response);
  };

  return (
    <form className="login-form" onSubmit={enterForGoogle}>
      <input type="email" name="email" required />
      <input type="password" name="password" required />
      <button type="submit">Sign In</button>
    </form>
  );
};
