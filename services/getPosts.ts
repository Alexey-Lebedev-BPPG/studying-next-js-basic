// хелпер отправки запроса на сервер и получение всех постов
export const getAllPosts = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    // управление кешем (в данном случае указываем, чтоб кеш хранился всегда)
    // cache: "force-cache",
  });

  if (!response.ok) throw new Error("Unable to fetch posts.");

  return response.json();
};

// хелпер отправки запроса на сервер и получение одного поста
export const getPostsBySearch = async (search: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?q=${search}`
  );

  if (!response.ok) throw new Error("Unable to fetch posts.");

  return response.json();
};
