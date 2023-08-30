"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

// создаем глобальный провайдер, который подключаем в главный лайаут
export const Providers = (props: { children: ReactNode }) => {
  const { children } = props;

  /* добавляем провайдер сессии */
  return <SessionProvider>{children}</SessionProvider>;
};
