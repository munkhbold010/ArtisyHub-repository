'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export function MobileNav() {
  const pathname = usePathname();
  const items = [
    { href: "/", label: "Нүүр", icon: "⌂" },
    { href: "/booking", label: "Захиалга", icon: "▣" },
    { href: "/restaurants", label: "Ресторан", icon: "◇" },
    { href: "/account", label: "Миний", icon: "○" },
  ];

  if (pathname.startsWith("/admin") || pathname.startsWith("/restaurant-manager")) return null;

  return (
    <nav className="mobile-bottom-nav" aria-label="Мобайл цэс">
      {items.map((item) => {
        const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        return <Link key={item.href} href={item.href} className={active ? "active" : ""}><span>{item.icon}</span>{item.label}</Link>;
      })}
    </nav>
  );
}
