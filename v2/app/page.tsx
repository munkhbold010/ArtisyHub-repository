import Image from "next/image";
import Link from "next/link";
import { Header } from "../components/Header";
import { HomeArtists } from "../components/HomeArtists";

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
          <div className="hero-media app-mockup">
            <Image src="/app-mockup.png" alt="ArtisyHub аппликейшн" fill priority sizes="(max-width: 900px) 100vw, 50vw" />
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

        <HomeArtists />

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
