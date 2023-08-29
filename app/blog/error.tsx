// также при возникновении ошибки можно использовать именованный файл, где обязательно нужно указать 'use client'
"use client";

const ErrorWrapper = (props: { error: Error }) => {
  const { error } = props;

  return <h1>Oops! {error.message}</h1>;
};

// этот компонент пользователь увидит при ошибке. если используем в дев режиме, то еще покажется модалка со стеком вызовов
