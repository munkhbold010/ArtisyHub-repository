'use client';

import { useState } from "react";
import { Header } from "../../../components/Header";

export default function ArtistRegistrationPage() {
  const [identityVerified, setIdentityVerified] = useState(false);
  const [bankVerified, setBankVerified] = useState(false);
  const [officialName, setOfficialName] = useState("");
  const [registration, setRegistration] = useState("");
  const [bank, setBank] = useState("");
  const [account, setAccount] = useState("");
  const [accountHolder, setAccountHolder] = useState("");

  const locked = identityVerified && bankVerified;

  return (
    <>
      <Header />
      <main className="shell form-page">
        <div className="page-intro">
          <span className="eyebrow dark">ARTIST ONBOARDING</span>
          <h1>Уран бүтээлчээр бүртгүүлэх</h1>
          <p>Эхний бүртгэлээр хувийн мэдээлэл, профайл, банкны мэдээлэл болон багцуудаа нэг дор оруулна.</p>
        </div>

        <div className="form-layout">
          <section className="form-card">
            <div className="form-section-title"><span>1</span><div><h2>Хувийн мэдээлэл</h2><p>Регистр баталгаажсаны дараа хууль ёсны мэдээлэл түгжигдэнэ.</p></div></div>
            <div className="form-grid">
              <label>Овог<input disabled={locked} placeholder="Овог" /></label>
              <label>Нэр<input disabled={locked} value={officialName} onChange={(e) => setOfficialName(e.target.value)} placeholder="Албан нэр" /></label>
              <label>Регистрийн дугаар<input disabled={identityVerified} value={registration} onChange={(e) => setRegistration(e.target.value.toUpperCase())} placeholder="АА00000000" /></label>
              <label>Утас<input placeholder="99xxxxxx" /></label>
              <label className="full">И-мэйл<input type="email" placeholder="name@example.com" /></label>
            </div>
            <div className="verify-row">
              <button
                className="secondary-button"
                disabled={identityVerified || registration.length < 8 || officialName.trim().length < 2}
                onClick={() => setIdentityVerified(true)}
              >
                {identityVerified ? "Регистр баталгаажсан" : "Регистр шалгах"}
              </button>
              <span className={"status " + (identityVerified ? "verified" : "pending")}>
                {identityVerified ? "✓ Баталгаажсан · засах боломжгүй" : "Баталгаажаагүй"}
              </span>
            </div>
          </section>

          <section className="form-card">
            <div className="form-section-title"><span>2</span><div><h2>Профайл ба зураг</h2><p>Нийтлэгдсэний дараа ч энэ мэдээллээ засаж болно.</p></div></div>
            <div className="form-grid">
              <label>Тайзны нэр<input placeholder="Тайзны нэр / хамтлаг" /></label>
              <label>Категори
                <select defaultValue="">
                  <option value="" disabled>Сонгох</option>
                  <option>Хөтлөгч</option><option>Дуучин</option><option>Хамтлаг</option><option>DJ</option>
                </select>
              </label>
              <label className="full">Танилцуулга<textarea rows={4} placeholder="Хэрэглэгч ойлгохоор товч танилцуулга" /></label>
              <label>Профайл зураг<input type="file" accept="image/*" /></label>
              <label>Cover зураг<input type="file" accept="image/*" /></label>
            </div>
          </section>

          <section className="form-card">
            <div className="form-section-title"><span>3</span><div><h2>Банкны мэдээлэл</h2><p>Регистр болон банкны данс хоёулаа зөв бол санхүүгийн мэдээлэл түгжигдэнэ.</p></div></div>
            <div className="form-grid">
              <label>Банк
                <select disabled={bankVerified} value={bank} onChange={(e) => setBank(e.target.value)}>
                  <option value="">Банк сонгох</option>
                  <option>ХААН Банк</option><option>Голомт банк</option><option>Худалдаа хөгжлийн банк</option><option>Хас банк</option>
                </select>
              </label>
              <label>Данс / IBAN<input disabled={bankVerified} value={account} onChange={(e) => setAccount(e.target.value)} placeholder="Дансны дугаар" /></label>
              <label className="full">Данс эзэмшигч<input disabled={bankVerified} value={accountHolder} onChange={(e) => setAccountHolder(e.target.value)} placeholder="Банкнаас шалгагдах нэр" /></label>
            </div>
            <div className="verify-row">
              <button
                className="secondary-button"
                disabled={bankVerified || !identityVerified || !bank || account.length < 8 || accountHolder.trim().length < 2}
                onClick={() => setBankVerified(true)}
              >
                {bankVerified ? "Банкны данс баталгаажсан" : "Банкны данс шалгах"}
              </button>
              <span className={"status " + (bankVerified ? "verified" : "pending")}>
                {bankVerified ? "✓ Баталгаажсан · засах боломжгүй" : identityVerified ? "Банкны шалгалт хүлээж байна" : "Эхлээд регистр шалгана"}
              </span>
            </div>
            {locked && <div className="lock-note">✓ Регистр, албан нэр, банк, данс/IBAN, данс эзэмшигч баталгаажсан тул артист өөрөө цааш засах боломжгүй. Өөрчлөх шаардлагатай бол админ шалгалтын урсгалаар шийднэ.</div>}
          </section>

          <section className="form-card">
            <div className="form-section-title"><span>4</span><div><h2>Үйлчилгээний багцууд</h2><p>Анхны багцуудаа нэг дор нэмж хянуулна.</p></div></div>
            <div className="package-editor">
              <label>Багцын нэр<input defaultValue="4 цагийн хөтлөлт" /></label>
              <label>Тайлбар<textarea rows={3} defaultValue="Арга хэмжээг 4 цагийн турш хөтөлбөрийн зохион байгуулалттайгаар удирдана." /></label>
              <div className="form-grid prices">
                <label>Хот<input defaultValue="450000" /></label>
                <label>Тэрэлж / ойр<input defaultValue="600000" /></label>
                <label>500 км хүртэл<input defaultValue="900000" /></label>
                <label>500 км-ээс дээш<input defaultValue="1200000" /></label>
              </div>
            </div>
            <button className="secondary-button">+ Дахин багц нэмэх</button>
          </section>

          <div className="submit-bar">
            <div><strong>Бүртгэлээ илгээх</strong><p>Админ профайл болон анхны багцуудыг хамтад нь хянана.</p></div>
            <button className="primary-button">Хянуулахаар илгээх</button>
          </div>
        </div>
      </main>
    </>
  );
}
