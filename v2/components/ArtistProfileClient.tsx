'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Artist = {
  name: string;
  category: string;
  image: string;
  description: string;
  rating: string;
  reviewCount: number;
  prices: Record<"city" | "near" | "rural" | "far", number>;
};

const zones = [
  { id: "city", label: "Хот дотор" },
  { id: "near", label: "Хотын ойролцоо / Тэрэлж" },
  { id: "rural", label: "Хөдөө 500 км хүртэл" },
  { id: "far", label: "Хөдөө 500 км-ээс дээш" },
] as const;

type ZoneId = (typeof zones)[number]["id"];

function money(value: number) {
  return new Intl.NumberFormat("mn-MN").format(value) + "₮";
}

export function ArtistProfileClient({ artist }: { artist: Artist }) {
  const [zone, setZone] = useState<ZoneId>("city");
  const [pkg, setPkg] = useState<"short" | "full">("short");
  const base = artist.prices[zone];

  return (
    <main className="shell artist-profile-page-v03">
      <div className="breadcrumb-v03">
        <Link href="/">Уран бүтээлчид</Link><span>›</span><span>{artist.name}</span>
      </div>

      <div className="profile-layout-v03">
        <div>
          <div className="profile-cover-v03">
            <Image src={artist.image} alt={artist.name} fill priority sizes="(max-width:760px) 100vw, 62vw" />
            <span className="profile-pill-v03">Туршилтын профайл</span>
          </div>

          <div className="profile-info-v03">
            <div className="profile-title-row-v03">
              <div>
                <div className="eyebrow dark">{artist.category}</div>
                <h1>{artist.name}</h1>
              </div>
              <button aria-label="Хуваалцах" className="share-button-v03">↗</button>
            </div>
            <div className="profile-rating-v03">★ {artist.rating} · {artist.reviewCount} үнэлгээ</div>
            <p>{artist.description} Захиалгын хүсэлт илгээхдээ арга хэмжээний төрөл, байршил, онцгой шаардлагаа нэмж болно.</p>
          </div>

          <section className="box-v03 how-v03">
            <div className="how-title-v03"><span>i</span><h3>Захиалга хэрхэн ажиллах вэ?</h3></div>
            <div className="summary-line-v03"><span>01</span><strong>Багц, байршил, цагаа сонгоно.</strong></div>
            <div className="summary-line-v03"><span>02</span><strong>Уран бүтээлч хүсэлтэд хариулна.</strong></div>
            <div className="summary-line-v03"><span>03</span><strong>Төлбөрөөр захиалга баталгаажна.</strong></div>
            <div className="notice-v03">Артист зөвшөөрөх нь цагийг хадгалсан гэсэн үг биш. Төлбөр баталгаажсаны дараа захиалга баталгаажна.</div>
          </section>
        </div>

        <aside className="box-v03 sticky-card-v03">
          <div className="sticky-title-v03"><h2>Үйлчилгээний багц</h2><span>♫</span></div>

          <label className="zone-label-v03" htmlFor="profile-zone">Хаана үйлчилгээ авах вэ?</label>
          <select id="profile-zone" className="profile-zone-v03" value={zone} onChange={(e) => setZone(e.target.value as ZoneId)}>
            {zones.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}
          </select>

          <button className={"package-v03 " + (pkg === "short" ? "selected" : "")} onClick={() => setPkg("short")}>
            <div className="package-head-v03"><strong><span className="selector-dot-v03" />Үндсэн багц</strong></div>
            <p>2–3 дуу / богино тоглолт. Тохирсон цагийн цонхонд үйлчилгээ үзүүлнэ.</p>
            <div className="package-price-v03">{money(base)}</div>
            <span className="package-meta-v03">Сонгосон бүс · {zones.find((x) => x.id === zone)?.label}</span>
          </button>

          <button className={"package-v03 " + (pkg === "full" ? "selected" : "")} onClick={() => setPkg("full")}>
            <div className="package-head-v03"><strong><span className="selector-dot-v03" />Өргөтгөсөн багц</strong></div>
            <p>Тоглолт + нэмэлт хөтөлбөрийн багц.</p>
            <div className="package-price-v03">{money(Math.round(base * 1.55))}</div>
            <span className="package-meta-v03">Сонгосон бүс · {zones.find((x) => x.id === zone)?.label}</span>
          </button>

          <Link href="/booking" className="primary-button full-button profile-book-v03">Огноо, цаг сонгох →</Link>
          <p className="sticky-note-v03">Одоо төлбөр төлөхгүй. Эхлээд хүсэлт илгээнэ.</p>
        </aside>
      </div>
    </main>
  );
}
