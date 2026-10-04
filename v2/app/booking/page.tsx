import Image from "next/image";
import { Header } from "../../components/Header";

export default function BookingPage() {
  return (
    <><Header /><main className="shell booking-page">
      <div className="page-intro"><span className="eyebrow dark">BOOKING</span><h1>Захиалгын хүсэлт</h1><p>Багц, огноо, цаг, байршлаа шалгаад артист руу хүсэлт илгээнэ.</p></div>
      <div className="booking-layout">
        <section className="form-card"><div className="booking-artist"><Image src="/host.webp" width={90} height={78} alt="Хөтлөгч" /><div><span className="category-pill static">Хөтлөгч</span><h2>Б. Тэмүүлэн</h2><p>4 цагийн хөтлөлт</p></div></div><div className="form-grid"><label>Огноо<input type="date" /></label><label>Цаг<select defaultValue="19"><option value="19">19:00–20:00</option><option value="20">20:00–21:00</option></select></label><label>Үнийн бүс<select defaultValue="city"><option value="city">Хот дотор</option><option>Хотын ойролцоо / Тэрэлж</option><option>Хөдөө 500 км хүртэл</option><option>Хөдөө 500 км-ээс дээш</option></select></label><label>Арга хэмжээ<select defaultValue="wedding"><option value="wedding">Хурим</option><option>Шинэ жил</option><option>Төрсөн өдөр</option></select></label><label className="full">Байршил<input placeholder="Арга хэмжээ болох газрын нэр, хаяг" /></label><label className="full">Нэмэлт тайлбар<textarea rows={3} placeholder="Артистад хэрэгтэй нэмэлт мэдээлэл" /></label></div><button className="primary-button">Хүсэлт илгээх</button></section>
        <aside className="summary-card"><h3>Таны захиалга</h3><div><span>Багц</span><b>4 цагийн хөтлөлт</b></div><div><span>Үйлчилгээний хугацаа</span><b>19:00–23:00</b></div><div><span>Бүс</span><b>Хот дотор</b></div><hr/><div className="summary-total"><span>Нийт</span><b>450,000₮</b></div><p>Артист зөвшөөрсний дараа QPay төлбөрийн хэсэг идэвхжинэ.</p></aside>
      </div>
      <section className="time-proposal-demo"><span className="status pending">Артист өөр цаг санал болгосон</span><h2>Шинэ цаг: 20:00–21:00</h2><p>Таны анхны хүсэлт <b>19:00–20:00</b> хэвээр байна. Шинэ цагийг зөвшөөрсний дараа л захиалга өөрчлөгдөнө.</p><div><button className="secondary-button">Татгалзах</button><button className="primary-button">Шинэ цагийг зөвшөөрөх</button></div></section>
    </main></>
  );
}
