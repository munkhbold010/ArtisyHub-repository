'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { TestSession } from "../lib/testAccounts";
import { roleHome } from "../lib/testAccounts";

const SESSION_KEY = "artisyhub_v2_session";

export function Header() {
  const [session, setSession] = useState<TestSession | null>(null);

  useEffect(() => {
    const readSession = () => {
      try {
        const raw = localStorage.getItem(SESSION_KEY);
        setSession(raw ? JSON.parse(raw) : null);
      } catch {
        setSession(null);
      }
    };

    readSession();
    window.addEventListener("storage", readSession);
    window.addEventListener("artisyhub-auth-change", readSession as EventListener);
    return () => {
      window.removeEventListener("storage", readSession);
      window.removeEventListener("artisyhub-auth-change", readSession as EventListener);
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
          <Link href="/restaurants">Ресторан</Link>
          <Link href="/artist/register">Уран бүтээлчээр нэгдэх</Link>
          {session ? (
            <Link href={roleHome(session.role)} className="nav-cta account-link">
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
