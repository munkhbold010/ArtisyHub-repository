import Link from "next/link";
import { Header } from "../../components/Header";

const venues = [
  { name: "Grand Hall Restaurant", area: "Хот дотор", halls: "2 танхим", capacity: "60–250 хүн", note: "Танхим, меню, зураг болон сул цагийн хүсэлт илгээх боломжтой." },
  { name: "Terelj Event Hall", area: "Хотын ойролцоо / Тэрэлж", halls: "1 үндсэн танхим", capacity: "100 хүн", note: "Хотын ойролцоох арга хэмжээний газрын preview профайл." },
];

export default function RestaurantsPage() {
  return (
    <>
      <Header />
      <main className="shell restaurants-page">
        <div className="page-intro">
          <span className="eyebrow dark">RESTAURANTS</span>
          <h1>Арга хэмжээний ресторан</h1>
          <p>ArtisyHub рестораны төлбөр зуучлахгүй. Та хүсэлт илгээхэд тухайн рестораны менежер тантай холбогдоно.</p>
        </div>
        <div className="restaurant-grid-v03">
          {venues.map((venue) => (
            <article key={venue.name} className="restaurant-card-v03">
              <div className="restaurant-visual"><span>{venue.area}</span></div>
              <div className="restaurant-card-body">
                <h2>{venue.name}</h2>
                <div className="restaurant-meta"><span>{venue.halls}</span><span>{venue.capacity}</span></div>
                <p>{venue.note}</p>
                <button className="primary-button">Хүсэлт илгээх боломжтой</button>
              </div>
            </article>
          ))}
        </div>
        <div className="restaurant-manager-link">Рестораны менежер үү? <Link href="/restaurant-manager">Мэдээллээ удирдах</Link></div>
      </main>
    </>
  );
}
