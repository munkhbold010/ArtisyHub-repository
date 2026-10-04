import Image from "next/image";
import { Header } from "../components/Header";
import { HomeArtists } from "../components/HomeArtists";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="main-v03">
        <section className="shell hero hero-v03">
          <div className="hero-media-v03">
            <Image src="/selly.jpg" alt="" fill priority sizes="(max-width: 760px) 100vw, 65vw" />
          </div>
          <div className="hero-copy">
            <div className="eyebrow hero-eyebrow-v03"><span className="hero-dot-v03" />ТАНЫ АРГА ХЭМЖЭЭ ЭНДЭЭС ЭХЭЛНЭ</div>
            <h1>Онцгой мөч бүрд,<br /><em>төгс уран бүтээлч.</em></h1>
            <p>Багцаа сонго. Цагаа тохир. Хүсэлтээ илгээ.<br />Арга хэмжээний захиалгыг илүү хялбар.</p>
            <div className="hero-actions-v03">
              <a href="#artists" className="primary-button">Уран бүтээлч сонгох →</a>
            </div>
          </div>
          <span className="hero-note-v03">ArtisyHub V2 · Test preview</span>
        </section>

        <HomeArtists />
      </main>
    </>
  );
}
