import { NextResponse } from "next/server";
import { posts } from "./mockPosts";

// создаем асинхронную функцию, которая будет обрабатывать наш запрос с определенным методом
export const GET = async (req: Request) => {
  // получаем параметры строки (например, api/post?q=test)
  const { searchParams } = new URL(req.url);
  // берем конкретный параметр
  const query = searchParams.get("q");

  // делаем копию моковых данных (имитируем работу бэкенда)
  let currentPosts = posts;

  // если параметр у нас есть, ты мы фильтруем наши посты по нижнему регистру заголовка и смотрим, чтоб он включал наш параметр
  if (query)
    currentPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );

  // NextResponse предоставляет методы для возврата данных
  return NextResponse.json(currentPosts);
};

export const POST = async (req: Request) => {
  // получаем данные из респонса
  const body = req.json();

  // отправляем данные обратно
  return NextResponse.json({ body });
};
