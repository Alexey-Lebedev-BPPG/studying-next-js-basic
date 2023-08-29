// серверные компоненты используются для разгрузки клиентских компонентов и выполнения основной логики на сервере. если использовать какие-то библиотеки на сервере, то они не попадают в бандл, а остаются на сервере. клиентские компоненты выглядят также, как и в реакте, только у них есть первая строка 'use client'.
// !!!Важно:
// - нельзя импортить серверные компоненты внутрь клиентских
// - можно серверные компоненты пробрасывать внутрь клиентских только через пропсы

// Использование:
// 1. клиентские:
// - когда нужны хуки
// - когда нужны события
// - когда нужно браузерное апи (локал сторадж, обзерверы и т.д)
// - когда используется классовый компонент
// 2. серверные:
// - когда получаем данные через серверное апи
// - когда нужен прямой доступ к ресурсам бэка
// - когда используется уязвимая информация (ключи апи, токены и т.д)
// - когда используются тяжелые зависимости

// по ум. в дев режиме используется вебпак. Однако есть более продвинутая штука у next, которая называется turbopack. Чтобы его включить в дев режиме добавляем флаг --turbo

// на данный момент все компоненты, которые мы написали являются серверными. Они более быстродейственны, но в них нельзя использовать стандартные хуки реакта. для того, чтоб сделать компонент клиентским, нужно первой строчкой добавить 'use client'.

// Для создания API-роутов внутри /app директории, как правило, создается вложенная директория /api со своими папками, внутри которых создается файл с названием route.ts.
// Если файл находит по пути /app/api/posts/, то адрес запроса будет /api/posts.
// Сам route.ts должен экспортировать объект с функциями по именам HTTP методов: GET, POST, DELETE и так далее.
// Например:
// export async function GET(req: Request) {
//   return NextResponse.json(currentPosts);
// }

// Извлечение данных:
// получение квери параметров
// export async function GET(req: Request) {
//   const { searchParams } = new URL(req.url);

//   const query = searchParams.get("q");

//   // some logic

//   return NextResponse.json(currentPosts);
// }

// получение тела запроса
// export async function POST(req: Request) {
//   const body = await req.json();

//   console.log(body);

//   return NextResponse.json({ message: "done" });
// }

// получение параметров URL
// export async function DELETE(
//   req: Request,
//   { params }: { params: { id: string } }
// ) {
//   const id = params?.id;

//   // some logic for delete post by id

//   return NextResponse.json({ id });
// }

// Встроенные функции:
// import { headers, cookies } from "next/headers";

// export async function GET(req: Request) {
//   const headersList = headers();
//   const cookiesList = cookies();

//   const type = headersList.get("Content-Type");
//   const Cookie_1 = cookiesList.get("Cookie_1")?.value;

//   return NextResponse.json({});
// }
// import { redirect } from "next/navigation";

// export async function GET(request: Request) {
//   redirect("https://nextjs.org/");
// }
