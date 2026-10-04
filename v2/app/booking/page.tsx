'use client';

import { useState } from "react";
import Image from "next/image";
import { Header } from "../../components/Header";

export default function BookingPage() {
  const [confirmedWindow, setConfirmedWindow] = useState("19:00–20:00");
  const [proposalState, setProposalState] = useState<"pending" | "accepted" | "declined">("pending");
  const proposedWindow = "20:00–21:00";

  function acceptProposal() {
    setConfirmedWindow(proposedWindow);
    setProposalState("accepted");
  }

  function declineProposal() {
    setProposalState("declined");
  }

  return (
    <>
      <Header />
      <main className="shell booking-page">
        <div className="page-intro">
          <span className="eyebrow dark">BOOKING</span>
          <h1>Захиалгын хүсэлт</h1>
          <p>Багц, огноо, цаг, байршлаа шалгаад артист руу хүсэлт илгээнэ.</p>
        </div>

        <div className="booking-layout">
          <section className="form-card">
            <div className="booking-artist">
              <Image src="/host.webp" width={90} height={78} alt="Хөтлөгч" />
              <div>
                <span className="category-pill static">Хөтлөгч</span>
                <h2>Б. Тэмүүлэн</h2>
                <p>4 цагийн хөтлөлт</p>
              </div>
            </div>

            <div className="form-grid">
              <label>Огноо<input type="date" /></label>
              <label>Цаг
                <select value={confirmedWindow.startsWith("20") ? "20" : "19"} onChange={(e) => setConfirmedWindow(e.target.value === "20" ? "20:00–21:00" : "19:00–20:00")}>
                  <option value="19">19:00–20:00</option>
                  <option value="20">20:00–21:00</option>
                </select>
              </label>
              <label>Үнийн бүс
                <select defaultValue="city">
                  <option value="city">Хот дотор</option>
                  <option>Хотын ойролцоо / Тэрэлж</option>
                  <option>Хөдөө 500 км хүртэл</option>
                  <option>Хөдөө 500 км-ээс дээш</option>
                </select>
              </label>
              <label>Арга хэмжээ
                <select defaultValue="wedding">
                  <option value="wedding">Хурим</option>
                  <option>Шинэ жил</option>
                  <option>Төрсөн өдөр</option>
                </select>
              </label>
              <label className="full">Байршил<input placeholder="Арга хэмжээ болох газрын нэр, хаяг" /></label>
              <label className="full">Нэмэлт тайлбар<textarea rows={3} placeholder="Артистад хэрэгтэй нэмэлт мэдээлэл" /></label>
            </div>
            <button className="primary-button">Хүсэлт илгээх</button>
          </section>

          <aside className="summary-card">
            <h3>Таны захиалга</h3>
            <div><span>Багц</span><b>4 цагийн хөтлөлт</b></div>
            <div><span>Сонгосон цаг</span><b>{confirmedWindow}</b></div>
            <div><span>Үйлчилгээний хугацаа</span><b>{confirmedWindow.startsWith("20") ? "20:00–00:00" : "19:00–23:00"}</b></div>
            <div><span>Бүс</span><b>Хот дотор</b></div>
            <hr/>
            <div className="summary-total"><span>Нийт</span><b>450,000₮</b></div>
            <p>Артист зөвшөөрсний дараа QPay төлбөрийн хэсэг идэвхжинэ.</p>
          </aside>
        </div>

        <section className="time-proposal-demo">
          {proposalState === "pending" && (
            <>
              <span className="status pending">Артист өөр цаг санал болголоо</span>
              <h2>Шинэ санал: {proposedWindow}</h2>
              <p>
                Таны одоогийн цаг <b>{confirmedWindow}</b> хэвээр байна. Шинэ цагийг зөвшөөрсний дараа л захиалгын цаг өөрчлөгдөнө.
                4 цагийн багц тул санал болгосон шинэ цагийг зөвшөөрвөл үйлчилгээний нийт хугацаа <b>20:00–00:00</b> болно.
              </p>
              <div>
                <button className="secondary-button" onClick={declineProposal}>Татгалзах</button>
                <button className="primary-button" onClick={acceptProposal}>Шинэ цагийг зөвшөөрөх</button>
              </div>
            </>
          )}
          {proposalState === "accepted" && (
            <div className="success-panel">
              <span className="status verified">Шинэ цаг зөвшөөрөгдсөн</span>
              <h2>Захиалгын цаг: {proposedWindow}</h2>
              <p>Backend дахин боломжит цагийг шалгасны дараа шинэ цаг хүчинтэй болно.</p>
            </div>
          )}
          {proposalState === "declined" && (
            <div>
              <span className="status rejected">Шинэ цагийг татгалзсан</span>
              <h2>Анхны цаг хэвээр: {confirmedWindow}</h2>
              <p>Артистын санал болгосон шинэ цаг захиалгад үйлчлэхгүй.</p>
            </div>
          )}
        </section>
      </main>
    </>
  );
}
