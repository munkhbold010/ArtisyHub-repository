import Link from "next/link";
import { Header } from "../../components/Header";

export default function PaymentPage() {
  return (
    <>
      <Header />
      <main className="shell payment-page">
        <div className="page-intro">
          <span className="eyebrow dark">PAYMENT</span>
          <h1>Төлбөр төлөх</h1>
          <p>Артист таны хүсэлтийг зөвшөөрсөн. Төлбөр баталгаажмагц захиалга автоматаар баталгаажна.</p>
        </div>

        <div className="payment-layout">
          <section className="form-card">
            <span className="status verified">Артист зөвшөөрсөн</span>
            <h2>QPay-р төлөх</h2>
            <div className="qpay-amount"><span>Нийт төлөх дүн</span><strong>450,000₮</strong></div>
            <div className="qr-placeholder" aria-label="QPay QR demo">
              <div className="qr-grid">{Array.from({length: 49}).map((_, i) => <i key={i} className={(i % 3 === 0 || i % 7 === 0) ? "on" : ""} />)}</div>
              <b>QPay QR</b>
              <small>Тестийн дэлгэц</small>
            </div>
            <p className="payment-help">QR кодыг банкны апп-аар уншуулах эсвэл доорх банкны апп сонголтоор төлнө.</p>
            <div className="bank-buttons">
              <button>ХААН Банк</button>
              <button>Голомт</button>
              <button>ХХБ</button>
              <button>ХасБанк</button>
            </div>
            <div className="payment-note">Төлбөр амжилттай болсны дараа систем QPay-с төлөлтийг дахин шалгаж байж захиалгыг баталгаажуулна.</div>
          </section>

          <aside className="summary-card">
            <h3>Захиалгын мэдээлэл</h3>
            <div><span>Артист</span><b>Б. Тэмүүлэн</b></div>
            <div><span>Багц</span><b>4 цагийн хөтлөлт</b></div>
            <div><span>Огноо</span><b>2026.10.10</b></div>
            <div><span>Цаг</span><b>19:00–23:00</b></div>
            <div><span>Бүс</span><b>Хот дотор</b></div>
            <hr/>
            <div className="summary-total"><span>Нийт</span><b>450,000₮</b></div>
            <Link href="/booking" className="secondary-button">Захиалга руу буцах</Link>
          </aside>
        </div>
      </main>
    </>
  );
}
