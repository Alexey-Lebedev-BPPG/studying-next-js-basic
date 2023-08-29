"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

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
    </>
  );
};
