import { Header } from "../../../components/Header";

export default function ArtistRegistrationPage() {
  return (
    <>
      <Header />
      <main className="shell form-page">
        <div className="page-intro">
          <span className="eyebrow dark">ARTIST ONBOARDING</span>
          <h1>Уран бүтээлчийн бүртгэл</h1>
          <p>Эхний бүртгэлээ нэг удаа бөглөөд профайл болон багцуудаа хамтад нь хянуулна.</p>
        </div>

        <div className="form-layout">
          <section className="form-card">
            <div className="form-section-title"><span>1</span><div><h2>Хувийн мэдээлэл</h2><p>Баталгаажтал засаж болно.</p></div></div>
            <div className="form-grid">
              <label>Овог<input placeholder="Овог" /></label>
              <label>Нэр<input placeholder="Нэр" /></label>
              <label>Регистрийн дугаар<input placeholder="AA00000000" /></label>
              <label>Утас<input placeholder="99xxxxxx" /></label>
              <label className="full">И-мэйл<input type="email" placeholder="name@example.com" /></label>
            </div>
            <div className="verify-row"><button className="secondary-button">Регистр шалгах</button><span className="status pending">Баталгаажаагүй</span></div>
          </section>

          <section className="form-card">
            <div className="form-section-title"><span>2</span><div><h2>Профайл ба зураг</h2><p>Нийтлэгдсэний дараа ч засаж болно.</p></div></div>
            <div className="form-grid">
              <label>Тайзны нэр<input placeholder="Тайзны нэр / хамтлаг" /></label>
              <label>Категори<select defaultValue=""><option value="" disabled>Сонгох</option><option>Хөтлөгч</option><option>Дуучин</option><option>Хамтлаг</option><option>DJ</option></select></label>
              <label className="full">Танилцуулга<textarea rows={4} placeholder="Хэрэглэгчид ойлгомжтой, товч танилцуулга" /></label>
              <label>Профайл зураг<input type="file" accept="image/*" /></label>
              <label>Cover зураг<input type="file" accept="image/*" /></label>
            </div>
          </section>

          <section className="form-card">
            <div className="form-section-title"><span>3</span><div><h2>Банкны мэдээлэл</h2><p>Регистр + банкны данс баталгаажсаны дараа эдгээр талбар түгжигдэнэ.</p></div></div>
            <div className="form-grid">
              <label>Банк<select defaultValue=""><option value="" disabled>Банк сонгох</option><option>ХААН Банк</option><option>Голомт банк</option><option>Худалдаа хөгжлийн банк</option><option>Хас банк</option></select></label>
              <label>Данс / IBAN<input placeholder="Дансны дугаар" /></label>
              <label className="full">Данс эзэмшигч<input placeholder="Банкнаас шалгагдсан нэр" readOnly /></label>
            </div>
            <div className="verify-row"><button className="secondary-button">Банкны данс шалгах</button><span className="status pending">Баталгаажаагүй</span></div>
            <div className="lock-note">✓ Баталгаажсны дараа регистр, банк, дансны дугаар, данс эзэмшигчийн мэдээллийг артист өөрөө засах боломжгүй.</div>
          </section>

          <section className="form-card">
            <div className="form-section-title"><span>4</span><div><h2>Үйлчилгээний багцууд</h2><p>Анхны багцуудаа нэг дор нэмж хянуулна.</p></div></div>
            <div className="package-editor">
              <label>Багцын нэр<input defaultValue="4 цагийн хөтлөлт" /></label>
              <label>Тайлбар<textarea rows={3} defaultValue="Арга хэмжээний 4 цагийн бүтэн хөтөлбөр, зочдын оролцоог удирдана." /></label>
              <div className="form-grid prices"><label>Хот<input defaultValue="450000" /></label><label>Тэрэлж / ойр<input defaultValue="600000" /></label><label>500 км хүртэл<input defaultValue="900000" /></label><label>500 км-ээс дээш<input defaultValue="1200000" /></label></div>
            </div>
            <button className="secondary-button">+ Дахин багц нэмэх</button>
          </section>

          <div className="submit-bar"><div><strong>Бүртгэлээ шалгаад илгээнэ</strong><p>Админ профайл болон анхны багцуудыг хамтад нь хянана.</p></div><button className="primary-button">Хянуулахаар илгээх</button></div>
        </div>
      </main>
    </>
  );
}
