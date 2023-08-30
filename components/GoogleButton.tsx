"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export const GoogleButton = () => {
  // получаем параметры строки
  const searchParams = useSearchParams();
  // находим параметр callbackUrl, который генерируется автоматически некстом и указывает, куда редиректить
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";

  // функция входа через провайдер гугла
  const enterForGoogle = async () =>
    await signIn("google", {
      callbackUrl,
    });

  return <button onClick={enterForGoogle}>Sign In with Google</button>;
};
