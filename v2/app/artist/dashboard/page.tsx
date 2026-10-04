'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Header } from "../../../components/Header";
import type { TestSession } from "../../../lib/testAccounts";

const SESSION_KEY = "artisyhub_v2_session";

export default function ArtistDashboardPage() {
  const router = useRouter();
  const [session, setSession] = useState<TestSession | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(SESSION_KEY);
      const value: TestSession | null = raw ? JSON.parse(raw) : null;
      setSession(value);
      if (value && value.role !== "artist") router.replace("/account");
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

  if (!loaded) return <><Header /><main className="shell form-page"><div className="form-card">Уншиж байна...</div></main></>;

  if (!session || session.role !== "artist") {
    return <><Header /><main className="shell form-page"><div className="form-card empty-account"><h1>Уран бүтээлчийн нэвтрэлт шаардлагатай</h1><p>Тест уран бүтээлчийн дугаар: 99111111.</p><Link href="/login" className="primary-button">Нэвтрэх</Link></div></main></>;
  }

  return (
    <>
      <Header />
      <main className="shell form-page">
        <div className="page-intro">
          <span className="eyebrow dark">ARTIST WORKSPACE</span>
          <h1>Уран бүтээлчийн хэсэг</h1>
          <p>Тест аккаунт: +976 {session.phone}. Ирсэн хүсэлт, хуваарь, багц, орлогын төлөвийг энд шалгана.</p>
        </div>

        <div className="artist-dashboard-grid">
          <section className="form-card metric-card-v03"><span>Ирсэн хүсэлт</span><strong>2</strong><p>1 шинэ · 1 хүлээгдэж буй</p></section>
          <section className="form-card metric-card-v03"><span>Баталгаажсан</span><strong>1</strong><p>Энэ 7 хоногт</p></section>
          <section className="form-card metric-card-v03"><span>Хуваарь</span><strong>3</strong><p>Идэвхгүй болгосон цаг</p></section>
        </div>

        <div className="artist-dashboard-layout">
          <section className="form-card">
            <div className="form-section-title"><span>1</span><div><h2>Ирсэн хүсэлт</h2><p>Менежергүй үед артист өөрөө хариулна.</p></div></div>
            <div className="artist-request-row">
              <div><strong>Байгууллагын арга хэмжээ</strong><p>Хот дотор · 2026.10.10 · 19:00–20:00</p></div>
              <div className="actions"><button className="secondary-button">Татгалзах</button><button className="primary-button">Зөвшөөрөх</button></div>
            </div>
          </section>

          <section className="form-card">
            <h2>Удирдлага</h2>
            <div className="account-links">
              <Link href="/artist/register">Профайл, банкны мэдээлэл</Link>
              <Link href="/booking">Захиалгын харагдац шалгах</Link>
            </div>
          </section>
        </div>

        <button className="secondary-button logout-button" onClick={logout}>Гарах</button>
      </main>
    </>
  );
}
