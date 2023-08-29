"use client";

import { getPostsBySearch } from "@/services/getPosts";
import { FormEvent, useState } from "react";
import useSWR from "swr";

export const PostSearch = () => {
  // берем метку, которую мы создавали при получении данных в Posts и достаем функцию изменения данных
  const { mutate } = useSWR("posts");

  const [search, setSearch] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // получаем данные по поиску
    const posts = await getPostsBySearch(search);

    // заменяем данные 
    mutate(posts);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};
