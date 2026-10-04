'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const SESSION_KEY = "artisyhub_v2_session";

type Session = { phone: string } | null;

export function Header() {
  const [session, setSession] = useState<Session>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(SESSION_KEY);
      setSession(raw ? JSON.parse(raw) : null);
    } catch {
      setSession(null);
    }

    const onStorage = () => {
      try {
        const raw = localStorage.getItem(SESSION_KEY);
        setSession(raw ? JSON.parse(raw) : null);
      } catch {
        setSession(null);
      }
    };

    window.addEventListener("storage", onStorage);
    window.addEventListener("artisyhub-auth-change", onStorage as EventListener);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("artisyhub-auth-change", onStorage as EventListener);
    };
  }, []);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="brand" aria-label="ArtisyHub нүүр">
          <Image src="/wordmark.webp" alt="ArtisyHub" width={180} height={46} priority />
        </Link>

        <nav className="main-nav" aria-label="Үндсэн цэс">
          <Link href="/">Уран бүтээлч</Link>
          <Link href="/restaurant-manager">Ресторан</Link>
          <Link href="/artist/register">Уран бүтээлчээр нэгдэх</Link>
          {session ? (
            <Link href="/account" className="nav-cta account-link">
              <span className="account-dot" />
              {session.phone.slice(0, 2)}••••{session.phone.slice(-2)}
            </Link>
          ) : (
            <Link href="/login" className="nav-cta">Нэвтрэх</Link>
          )}
        </nav>
      </div>
    </header>
  );
}
