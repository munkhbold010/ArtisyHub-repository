'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Header } from "../../components/Header";
import type { TestSession } from "../../lib/testAccounts";

const SESSION_KEY = "artisyhub_v2_session";

export default function RestaurantManagerPage() {
  const router = useRouter();
  const [session, setSession] = useState<TestSession | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(SESSION_KEY);
      const value: TestSession | null = raw ? JSON.parse(raw) : null;
      setSession(value);
      if (value && value.role !== "restaurant_manager") router.replace("/account");
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

  if (!session || session.role !== "restaurant_manager") {
    return <><Header /><main className="shell form-page"><div className="form-card empty-account"><h1>Рестораны менежерийн нэвтрэлт шаардлагатай</h1><p>Тест менежерийн дугаар: 77111111.</p><Link href="/login" className="primary-button">Нэвтрэх</Link></div></main></>;
  }

  return (
    <>
      <Header />
      <main className="shell form-page">
        <div className="page-intro">
          <span className="eyebrow dark">RESTAURANT MANAGER</span>
          <h1>Рестораны удирдлага</h1>
          <p>+976 {session.phone} дугаар Grand Hall Restaurant-д тестээр оноогдсон. Зөвхөн оноосон ресторанаа удирдана.</p>
        </div>
        <div className="manager-layout">
          <section className="form-card">
            <h2>Grand Hall Restaurant</h2>
            <div className="form-grid">
              <label>Рестораны нэр<input defaultValue="Grand Hall Restaurant" /></label>
              <label>Менежерийн утас<input defaultValue="77111111" disabled /></label>
              <label className="full">Хаяг<input defaultValue="Хан-Уул дүүрэг, Улаанбаатар" /></label>
              <label className="full">Тайлбар<textarea rows={4} defaultValue="Хурим, байгууллагын арга хэмжээний 250 хүртэл зочны танхим." /></label>
              <label>Үндсэн зураг<input type="file" accept="image/*" /></label>
              <label>Нэмэлт зураг<input type="file" accept="image/*" multiple /></label>
            </div>
            <button className="primary-button">Мэдээлэл хадгалах</button>
          </section>
          <section className="form-card">
            <h2>Танхимууд</h2>
            <div className="hall-card"><div><b>Grand Hall</b><p>250 хүн · 2-р давхар</p></div><button className="secondary-button">Хуваарь</button></div>
            <div className="hall-card"><div><b>VIP Hall</b><p>60 хүн · 3-р давхар</p></div><button className="secondary-button">Хуваарь</button></div>
            <button className="secondary-button">+ Танхим нэмэх</button>
          </section>
        </div>
        <button className="secondary-button logout-button" onClick={logout}>Гарах</button>
      </main>
    </>
  );
}
