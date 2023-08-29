import { NextResponse } from "next/server";
// import { cookies, headers } from "next/headers";
// import { redirect } from "next/navigation";

// запросы для динамических параметров (вторым параметром принимаем response)
export const DELETE = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const { id } = params;

  // делаем какую-то логику удаления с в базе данных

  // если мы не хотим ничего возвращать, то мы можем после выполнения запроса сделать редирект на определенную страницу
  // redirect('/blog')

  // также мы можем получить заголовки, но они будут только для чтения.
  // const headerList = headers();
  // и, например, можем проверить наличие определенного заголовка
  // const type = headerList.get("Content-Type"); // получим 'application/json'

  // аналогичным способом работает с куки
  // const cookieLists = cookies();
  // получим конкретный куки
  // const coo2 = cookieLists.get("Cookie_2")?.value; // получим наши куки

  return NextResponse.json({ id });
};

// также рассмотрим пример использования приватных данных из .env
export const GET = async (req: Request) => {
  const API_KEY = process.env.OMDB_SECRET;

  const posts = await fetch(
    `http://localhost:3000/posts?apikey=${API_KEY}`
  ).then((res) => res.json());

  return NextResponse.json(posts);
};
