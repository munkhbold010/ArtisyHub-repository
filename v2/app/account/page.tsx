'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Header } from "../../components/Header";

const SESSION_KEY = "artisyhub_v2_session";

export default function AccountPage() {
  const router = useRouter();
  const [phone, setPhone] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(SESSION_KEY);
      const session = raw ? JSON.parse(raw) : null;
      setPhone(session?.phone ?? null);
    } finally {
      setLoaded(true);
    }
  }, []);

  function logout() {
    localStorage.removeItem(SESSION_KEY);
    window.dispatchEvent(new Event("artisyhub-auth-change"));
    router.push("/");
    router.refresh();
  }

  if (!loaded) {
    return <><Header /><main className="shell account-page"><div className="form-card">Уншиж байна...</div></main></>;
  }

  if (!phone) {
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
          <span className="eyebrow dark">MY ARTISYHUB</span>
          <h1>Миний хэсэг</h1>
          <p>Захиалга, артистын бүртгэл, ресторантай холбоотой эрхүүд нэг аккаунтад байна.</p>
        </div>

        <div className="account-grid">
          <section className="form-card account-profile-card">
            <div className="account-avatar">{phone.slice(0, 2)}</div>
            <div>
              <span className="muted-label">Нэвтэрсэн дугаар</span>
              <h2>+976 {phone}</h2>
              <span className="status verified">Идэвхтэй session</span>
            </div>
          </section>

          <section className="form-card">
            <h2>Хурдан холбоос</h2>
            <div className="account-links">
              <Link href="/booking">Захиалга хийх</Link>
              <Link href="/artist/register">Уран бүтээлчийн мэдээлэл</Link>
              <Link href="/restaurant-manager">Рестораны менежер</Link>
            </div>
          </section>
        </div>

        <button className="secondary-button logout-button" onClick={logout}>Гарах</button>
      </main>
    </>
  );
}
