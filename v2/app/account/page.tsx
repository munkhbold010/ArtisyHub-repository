'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Header } from "../../components/Header";
import type { TestSession } from "../../lib/testAccounts";
import { roleHome, roleLabel } from "../../lib/testAccounts";

const SESSION_KEY = "artisyhub_v2_session";

export default function AccountPage() {
  const router = useRouter();
  const [session, setSession] = useState<TestSession | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(SESSION_KEY);
      const value: TestSession | null = raw ? JSON.parse(raw) : null;
      setSession(value);
      if (value && value.role !== "customer") {
        router.replace(roleHome(value.role));
      }
    } finally {
      setLoaded(true);
    }
  }, [router]);

  function logout() {
    localStorage.removeItem(SESSION_KEY);
    window.dispatchEvent(new Event("artisyhub-auth-change"));
    router.push("/");
    router.refresh();
  }

  if (!loaded) {
    return <><Header /><main className="shell account-page"><div className="form-card">Уншиж байна...</div></main></>;
  }

  if (!session) {
    return (
      <>
        <Header />
        <main className="shell account-page">
          <div className="form-card empty-account">
            <h1>Нэвтрээгүй байна</h1>
            <p>Захиалга, профайл, хүсэлтүүдээ харахын тулд утасны дугаараар нэвтэрнэ үү.</p>
            <Link href="/login" className="primary-button">Нэвтрэх</Link>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="shell account-page">
        <div className="page-intro">
          <span className="eyebrow dark">CUSTOMER ACCOUNT</span>
          <h1>Миний хэсэг</h1>
          <p>Захиалагчийн хүсэлт, баталгаажсан захиалга, төлбөрийн төлөв энд харагдана.</p>
        </div>

        <div className="account-grid">
          <section className="form-card account-profile-card">
            <div className="account-avatar">{session.phone.slice(0, 2)}</div>
            <div>
              <span className="muted-label">{roleLabel(session.role)}</span>
              <h2>+976 {session.phone}</h2>
              <span className="status verified">Идэвхтэй session</span>
            </div>
          </section>

          <section className="form-card">
            <h2>Захиалагчийн тест</h2>
            <div className="account-links">
              <Link href="/">Уран бүтээлч сонгох</Link>
              <Link href="/booking">Захиалгын урсгал шалгах</Link>
              <Link href="/restaurants">Ресторан хайх</Link>
            </div>
          </section>
        </div>

        <button className="secondary-button logout-button" onClick={logout}>Гарах</button>
      </main>
    </>
  );
}
