import Image from "next/image";
import Link from "next/link";
import { ArtistCard } from "../components/ArtistCard";
import { Header } from "../components/Header";

const artists = [
  { name: "Б. Тэмүүлэн", category: "Хөтлөгч", image: "/host.webp", price: "450,000₮-с", description: "Хурим, байгууллагын арга хэмжээ, шинэ жилийн хөтлөлт.", rating: "★ 4.9" },
  { name: "Номин", category: "Дуучин", image: "/singer.webp", price: "600,000₮-с", description: "3–5 дууны тайзны тоглолтын багц.", rating: "★ 5.0" },
  { name: "Motive", category: "Хамтлаг", image: "/band.webp", price: "1,200,000₮-с", description: "Амьд хөгжмийн тоглолт, байгууллагын эвент.", rating: "★ 4.8" },
  { name: "Rock Set", category: "Хөгжимчин", image: "/rock.webp", price: "800,000₮-с", description: "Амьд хөгжмийн сет, тусгай хөтөлбөр.", rating: "★ 4.7" }
];

const categories = ["Бүгд", "Хөтлөгч", "Дуучин", "Хөгжимчин", "Бүжигчин", "DJ", "Комедиан", "Илбэчин"];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className="shell hero">
          <div className="hero-copy">
            <span className="eyebrow">ARTISYHUB V2</span>
            <h1>Хүссэн уран бүтээлчээ <em>хамгийн хялбараар</em> захиал.</h1>
            <p>Үнэ, багц, завтай цагийг нэг дор харж хүсэлт илгээнэ. Артист зөвшөөрсний дараа төлбөрөө хийж захиалгаа баталгаажуулна.</p>
            <div className="hero-actions">
              <a href="#artists" className="primary-button">Уран бүтээлч сонгох</a>
              <Link href="/artist/register" className="secondary-button">Уран бүтээлчээр нэгдэх</Link>
            </div>
          </div>
          <div className="hero-media">
            <Image src="/hero.webp" alt="ArtisyHub уран бүтээлчид" fill priority sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
        </section>

        <section className="shell search-panel" aria-label="Хайлт">
          <div>
            <label>Уран бүтээлч хайх</label>
            <input placeholder="Нэр, үйлчилгээ, төрөл..." />
          </div>
          <div>
            <label>Арга хэмжээ</label>
            <select defaultValue="">
              <option value="" disabled>Төрөл сонгох</option>
              <option>Хурим</option><option>Шинэ жил</option><option>Төрсөн өдөр</option><option>Байгууллагын арга хэмжээ</option>
            </select>
          </div>
          <button className="primary-button">Хайх</button>
        </section>

        <section className="shell section" id="artists">
          <div className="section-heading">
            <div><span className="eyebrow dark">ARTISTS</span><h2>Уран бүтээлчид</h2></div>
            <p>Үнэ, багц, нэмэлт мэдээлэл шууд харагдана.</p>
          </div>
          <div className="chips">{categories.map((x, i) => <button className={i === 0 ? "active" : ""} key={x}>{x}</button>)}</div>
          <div className="artist-grid">{artists.map((artist) => <ArtistCard key={artist.name} {...artist} />)}</div>
        </section>

        <section className="shell trust-grid">
          <article><span>01</span><h3>Ил тод үнэ</h3><p>Сонгосон бүсийн бүх зардал багцын үнэд шингэнэ.</p></article>
          <article><span>02</span><h3>Баталгаатай төлбөр</h3><p>Артист зөвшөөрсний дараа төлбөр хийгдэж захиалга баталгаажна.</p></article>
          <article><span>03</span><h3>Бодит үнэлгээ</h3><p>Үйлчилгээ авсан хэрэглэгч л үнэлгээ, сэтгэгдэл үлдээнэ.</p></article>
        </section>

        <section className="shell restaurant-banner">
          <div><span className="eyebrow dark">RESTAURANT</span><h2>Арга хэмжээний ресторан хайж байна уу?</h2><p>Танхим, зураг, мэдээлэл, боломжтой цагийг харж хүсэлт илгээнэ.</p></div>
          <Link href="/restaurant-manager" className="secondary-button">Рестораны хэсэг үзэх</Link>
        </section>
      </main>
    </>
  );
}
