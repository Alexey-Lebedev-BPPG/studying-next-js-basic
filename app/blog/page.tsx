import { Metadata } from "next";
import Link from "next/link";

// для того, чтоб получить данные с сервера делаем подобную функцию
const getData = async () => {
  // этот fetch не тот, который в браузере. это нодовский fetch, поэтому он работает чуть по другому
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    // специальный объект некста
    next: {
      // ввиду того, что запрос кешируется, это поле указывает на сколько секунд кеш будет работать, после чего запрос пройдет заново
      revalidate: 60,
    },
  });

  // обрабатываем ошибку при загрузке
  if (!response.ok) throw new Error("Unable to fetch posts!");

  return response.json();
};

// также добавление метадаты можно делать хоть для каждой страницы (кроме динамических страниц)
export const metadata: Metadata = {
  title: "Blog",
  description: "Generated by create next app",
};

// серверные компоненты могут быть асинхронными
const Blog = async () => {
  // получаем данные
  const posts = await getData();

  return (
    <>
      <h1>Blog page</h1>
      <ul>
        {posts?.map((item: any) => (
          <li key={item.id}>
            <Link href={`/blog/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Blog;