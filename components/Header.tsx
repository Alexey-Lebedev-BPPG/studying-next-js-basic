import Link from "next/link";

export const Header = () => {
  return (
    <header className="container">
      {/* навигация происходит с помощью спец компонента из некст */}
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/about">About</Link>
    </header>
  );
};
