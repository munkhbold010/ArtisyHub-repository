'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import type { TestSession } from "../lib/testAccounts";
import { roleHome } from "../lib/testAccounts";

const SESSION_KEY = "artisyhub_v2_session";

export function MobileNav() {
  const pathname = usePathname();
  const [session, setSession] = useState<TestSession | null>(null);

  useEffect(() => {
    const read = () => {
      try {
        const raw = localStorage.getItem(SESSION_KEY);
        setSession(raw ? JSON.parse(raw) : null);
      } catch {
        setSession(null);
      }
    };
    read();
    window.addEventListener("artisyhub-auth-change", read as EventListener);
    return () => window.removeEventListener("artisyhub-auth-change", read as EventListener);
  }, []);

  if (pathname.startsWith("/admin") || pathname.startsWith("/restaurant-manager") || pathname.startsWith("/artist/dashboard")) return null;

  const accountHref = session ? roleHome(session.role) : "/login";
  const items = [
    { href: "/", label: "Нүүр", icon: "⌂" },
    { href: "/booking", label: "Захиалга", icon: "▣" },
    { href: "/restaurants", label: "Ресторан", icon: "◇" },
    { href: accountHref, label: "Миний", icon: "○" },
  ];

  return (
    <nav className="mobile-bottom-nav" aria-label="Мобайл цэс">
      {items.map((item) => {
        const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        return <Link key={item.label} href={item.href} className={active ? "active" : ""}><span>{item.icon}</span>{item.label}</Link>;
      })}
    </nav>
  );
}
