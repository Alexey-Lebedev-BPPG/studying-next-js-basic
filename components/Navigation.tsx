"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

interface NavLink {
  label: string;
  href: string;
}

interface INavigationProps {
  className?: string;
  navLinks: NavLink[];
}

export const Navigation = (props: INavigationProps) => {
  const { className, navLinks } = props;

  // аналог useNavigation
  const pathname = usePathname();

  // получим данные сессии (объект с данными пользователя и сессии)
  const session = useSession();

  return (
    <>
      {navLinks.map((link) => {
        // проверяем, что ссылка активна
        const isActive = pathname === link.href;

        {
          /* навигация происходит с помощью спец компонента из некст */
        }
        return (
          <Link
            href={link.href}
            key={link.href}
            className={isActive ? "active" : ""}
          >
            {link.label}
          </Link>
        );
      })}
      {/* делаем переход в профиль, если пользователь авторизован */}
      {session?.data && <Link href="/profile">Profile</Link>}
      {session?.data ? (
        // после выхода делаем редирект
        <Link href="#" onClick={() => signOut({ callbackUrl: "/" })}>
          Sign Out
        </Link>
      ) : (
        <Link href="/signin">Sign In</Link>
      )}
    </>
  );
};
