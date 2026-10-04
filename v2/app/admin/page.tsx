import Image from "next/image";
import { Header } from "../../components/Header";

export default function AdminPage() {
  return (
    <><Header /><main className="shell admin-page">
      <div className="page-intro"><span className="eyebrow dark">ADMIN CONTROL</span><h1>Өнөөдөр юуг шийдэх вэ?</h1><p>Хариу шаардсан ажлуудыг эхэнд харуулна.</p></div>
      <div className="admin-kpis"><div><b>3</b><span>Артистын хүсэлт</span></div><div><b>2</b><span>Төлбөр тулгах</span></div><div><b>1</b><span>Payout hold</span></div><div><b>4</b><span>Рестораны хүсэлт</span></div></div>
      <section className="admin-detail">
        <div className="admin-detail-head"><div><span className="status pending">Шинэ артистын хүсэлт</span><h2>Б. Тэмүүлэн · Хөтлөгч</h2><p>2026.10.04 · 16:05</p></div><Image src="/host.webp" width={130} height={100} alt="Артист" /></div>
        <div className="detail-grid">
          <div><h3>Хувийн мэдээлэл</h3><dl><dt>Албан нэр</dt><dd>Бат-Эрдэнэ Тэмүүлэн</dd><dt>Регистр</dt><dd>УБ•••••••• · <strong>Verified</strong></dd><dt>Утас</dt><dd>99••••22</dd></dl></div>
          <div><h3>Банк</h3><dl><dt>Банк</dt><dd>ХААН Банк</dd><dt>Данс эзэмшигч</dt><dd>БАТ-ЭРДЭНЭ ТЭМҮҮЛЭН</dd><dt>Төлөв</dt><dd><strong>Verified</strong></dd></dl></div>
          <div className="wide"><h3>Танилцуулга</h3><p>Хурим, байгууллагын арга хэмжээ, шинэ жилийн хөтлөлтийн туршлагатай.</p></div>
          <div className="wide"><h3>Анхны багцууд</h3><div className="admin-packages"><article><b>4 цагийн хөтлөлт</b><span>450,000₮ · Хот</span><p>4 цагийн бүтэн хөтөлбөр.</p></article><article><b>Хөтлөлт + 3 дуу</b><span>700,000₮ · Хот</span><p>Хөтлөлт болон 3 дууны хосолсон багц.</p></article></div></div>
        </div>
        <div className="admin-actions"><button className="danger-button">Татгалзах</button><button className="secondary-button">Засварлуулах</button><button className="primary-button">Зөвшөөрөх</button></div>
      </section>
    </main></>
  );
}
