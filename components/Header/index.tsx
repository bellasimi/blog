"use client";
import { usePathname } from "next/navigation";
import styles from "./nav.module.css";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();

  const getStyleByUrl = (url: string) => {
    const isSelectedUrl = url === pathname;
    if (isSelectedUrl) {
      return styles.nav_menu_selected;
    }
    return styles.nav_menu;
  };

  return (
    <header className="fixed left-0 right-0 top-0 h-[60px] border-b border-main-line bg-white font-bold">
      <div className="mx-auto flex h-full w-[96%] items-center justify-between 2xl:w-[1440px]">
        <h1>개발 추적일지</h1>
        <nav className="flex h-full items-center">
          <Link href="/" className={getStyleByUrl("/")}>
            home
          </Link>
          <Link href="/about" className={getStyleByUrl("/about")}>
            about
          </Link>
          <Link href="/posts" className={getStyleByUrl("/posts")}>
            posts
          </Link>
          <Link href="/contact" className={getStyleByUrl("/contact")}>
            contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
