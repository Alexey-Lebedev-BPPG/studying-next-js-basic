import { Metadata } from "next";
import Link from "next/link";
import { ReactNode } from "react";

// также добавление метадаты можно делать хоть для каждой страницы (кроме динамических страниц)
export const metadata: Metadata = {
  title: "About",
  description: "Generated by create next app",
};

interface AboutLayoutProps {
  children: ReactNode;
}

// помимо основного лайаута мы можем делать встроенные лайауты для страниц, при чем создавать их можно сколько угодно хоть для каждой странице
const AboutLayout = (props: AboutLayoutProps) => {
  const { children } = props;

  return (
    <div>
      <h1>About Page</h1>
      <ul>
        <li>
          <Link href="/about/contacts">Contacts</Link>
        </li>
        <li>
          <Link href="/about/team">Team</Link>
        </li>
      </ul>
      {/* чилдрен - дочерняя или братская страница (т.е. все, которые лежат в папке about) */}
      {children}
    </div>
  );
};

export default AboutLayout;