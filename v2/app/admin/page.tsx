'use client';

import { useState } from "react";
import Image from "next/image";
import { Header } from "../../components/Header";

export default function AdminPage() {
  const [restaurantManagerPhone, setRestaurantManagerPhone] = useState("");
  const [assignedPhone, setAssignedPhone] = useState("99112233");

  return (
    <>
      <Header />
      <main className="shell admin-page">
        <div className="page-intro">
          <span className="eyebrow dark">ADMIN CONTROL</span>
          <h1>Өнөөдөр юу шийдэх вэ?</h1>
          <p>Хариу шаардах ажлуудыг нэг дэлгэцээс удирдана.</p>
        </div>

        <div className="admin-kpis">
          <div><b>3</b><span>Артистын хүсэлт</span></div>
          <div><b>2</b><span>Төлбөр тулгалт</span></div>
          <div><b>1</b><span>Payout hold</span></div>
          <div><b>4</b><span>Рестораны хүсэлт</span></div>
        </div>

        <section className="admin-detail">
          <div className="admin-detail-head">
            <div>
              <span className="status pending">Шинэ артистын хүсэлт</span>
              <h2>Демо артист · Хөтлөгч</h2>
              <p>2026.10.04 · 16:05</p>
            </div>
            <Image src="/app-logo.png" width={130} height={100} alt="Демо артист" />
          </div>

          <div className="detail-grid">
            <div>
              <h3>Хувийн мэдээлэл</h3>
              <dl>
                <dt>Албан нэр</dt><dd>Демо артистын албан нэр</dd>
                <dt>Регистр</dt><dd>УБ•••••••• · <strong>Verified</strong></dd>
                <dt>Утас</dt><dd>99••••22</dd>
                <dt>И-мэйл</dt><dd>artist@example.com</dd>
              </dl>
            </div>
            <div>
              <h3>Банк</h3>
              <dl>
                <dt>Банк</dt><dd>ХААН Банк</dd>
                <dt>Данс эзэмшигч</dt><dd>ДЕМО ДАНС ЭЗЭМШИГЧ</dd>
                <dt>Данс</dt><dd>•••• •••• 4587</dd>
                <dt>Төлөв</dt><dd><strong>Verified</strong></dd>
              </dl>
            </div>
            <div className="wide">
              <h3>Профайл ба зураг</h3>
              <p>Хурим, байгууллагын арга хэмжээ, шинэ жилийн хөтлөлтийн туршлагатай.</p>
            </div>
            <div className="wide">
              <h3>Анхны багцууд</h3>
              <div className="admin-packages">
                <article><b>4 цагийн хөтлөлт</b><span>450,000₮ · Хот</span><p>4 цагийн хөтлөлт, зохион байгуулалтын удирдлага.</p></article>
                <article><b>Хөтлөлт + 3 дуу</b><span>700,000₮ · Хот</span><p>Хөтлөлт болон 3 дууны хосолсон багц.</p></article>
              </div>
            </div>
          </div>

          <div className="admin-actions">
            <button className="danger-button">Татгалзах</button>
            <button className="secondary-button">Засварлуулах</button>
            <button className="primary-button">Зөвшөөрөх</button>
          </div>
        </section>

        <section className="admin-detail restaurant-manager-admin">
          <div>
            <span className="eyebrow dark">RESTAURANT MANAGER</span>
            <h2>Рестораны менежер оноох</h2>
            <p>Админ утасны дугаараар менежерийг тухайн ресторантай холбоно. Менежер OTP-оор нэвтрээд зөвхөн оноосон ресторанаа удирдана.</p>
          </div>
          <div className="manager-assignment-row">
            <label>Ресторан
              <select defaultValue="grand"><option value="grand">Grand Hall Restaurant</option></select>
            </label>
            <label>Менежерийн утас
              <input value={restaurantManagerPhone} onChange={(e) => setRestaurantManagerPhone(e.target.value)} placeholder="99xxxxxx" />
            </label>
            <button className="primary-button" onClick={() => restaurantManagerPhone && setAssignedPhone(restaurantManagerPhone)}>Менежер оноох</button>
          </div>
          <div className="assigned-manager"><span>Одоогийн менежер</span><b>{assignedPhone}</b><span className="status verified">Идэвхтэй</span></div>
        </section>
      </main>
    </>
  );
}
