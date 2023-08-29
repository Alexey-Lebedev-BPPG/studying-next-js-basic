"use client";

import useSWR from "swr";
import { getAllPosts } from "@/services/getPosts";
import Link from "next/link";

export const Posts = () => {
  // создаем метку posts, по которой будет выполнена функция получения всех постов. получив данные и флаг лоадинга, отрисовываем компонент
  const { data: posts, isLoading } = useSWR("posts", getAllPosts);

  return isLoading ? (
    <h3>Loading...</h3>
  ) : (
    <ul>
      {posts?.map((item: any) => (
        <li key={item.id}>
          <Link href={`/blog/${item.id}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};
