import { Header } from "../../components/Header";

export default function RestaurantManagerPage() {
  return (
    <><Header /><main className="shell form-page">
      <div className="page-intro"><span className="eyebrow dark">RESTAURANT MANAGER</span><h1>Рестораны удирдлага</h1><p>Админаас таны утасны дугаарыг тухайн ресторантай холбоно. Та OTP-оор нэвтэрч зөвхөн оноосон ресторанаа удирдана.</p></div>
      <div className="manager-layout">
        <section className="form-card"><h2>Grand Hall Restaurant</h2><div className="form-grid"><label>Рестораны нэр<input defaultValue="Grand Hall Restaurant" /></label><label>Утас<input defaultValue="99112233" /></label><label className="full">Хаяг<input defaultValue="Хан-Уул дүүрэг, Улаанбаатар" /></label><label className="full">Тайлбар<textarea rows={4} defaultValue="Хурим, байгууллагын арга хэмжээний 250 хүртэл зочны танхим." /></label><label>Үндсэн зураг<input type="file" accept="image/*" /></label><label>Нэмэлт зураг<input type="file" accept="image/*" multiple /></label></div><button className="primary-button">Мэдээлэл хадгалах</button></section>
        <section className="form-card"><h2>Танхимууд</h2><div className="hall-card"><div><b>Grand Hall</b><p>250 хүн · 2-р давхар</p></div><button className="secondary-button">Хуваарь</button></div><div className="hall-card"><div><b>VIP Hall</b><p>60 хүн · 3-р давхар</p></div><button className="secondary-button">Хуваарь</button></div><button className="secondary-button">+ Танхим нэмэх</button></section>
      </div>
    </main></>
  );
}
