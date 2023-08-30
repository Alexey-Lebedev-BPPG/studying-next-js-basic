import type { AuthOptions, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { users } from "@/mockData/mockUsers";

// конфиг для авторизации
export const authConfig: AuthOptions = {
  providers: [
    // здесь можно подключать разные провайдеры для авторизации, которые находятся также в next-auth/providers/
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),
    CredentialsProvider({
      // то, что мы будем спрашивать у пользователя
      credentials: {
        // это полу будет генерироваться автоматически с указанными параметрами
        email: { label: "email", type: "email", required: true },
        password: { label: "password", type: "password", required: true },
      },
      // функция, которая проверят креденшиал и если ты не авторизован, то возвращает null, иначе
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        // здесь мы можем обращаться к бэку или БД, чтоб проверить авторизацию. Сейчас мы сделаем это через моковых юзеров
        const currentUser = users.find(
          (user) => user.email === credentials.email
        );
        // пароли конечно должны хэшироваться. но тут идем поп простому варианту
        if (currentUser && currentUser.password === credentials.password) {
          const { password, ...userWithoutPassword } = currentUser;

          // эта функция должна возвращать определенную модель юзера. Приводим ее к типу
          return userWithoutPassword as User;
        }

        return null;
      },
    }),
  ],
  // второе поле, которое позволяет переопределять страницы. сейчас мы указываем, что страница входа у нас будет своя
  pages: { signIn: "/signin" },
};
