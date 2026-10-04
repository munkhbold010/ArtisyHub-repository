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
  const total = pkg === "full" ? Math.round(base * 1.55) : base;

  return (
    <main className="shell artist-profile-page">
      <div className="breadcrumb"><Link href="/">Нүүр</Link><span>›</span><span>{artist.category}</span><span>›</span><strong>{artist.name}</strong></div>

      <div className="profile-layout-v03">
        <section>
          <div className="profile-cover-v03">
            <Image src={artist.image} alt={artist.name} fill priority sizes="(max-width: 900px) 100vw, 65vw" />
            <span className="category-pill profile-tag">{artist.category}</span>
          </div>

          <div className="profile-heading-v03">
            <div>
              <h1>{artist.name}</h1>
              <p className="profile-rating">★ {artist.rating} · {artist.reviewCount} үнэлгээ</p>
            </div>
            <span className="status verified">ArtisyHub артист</span>
          </div>

          <section className="profile-section-v03 packages-first">
            <div className="section-heading compact">
              <div><span className="eyebrow dark">PACKAGES</span><h2>Багцаа сонго</h2></div>
              <p>Үнэ нь сонгосон бүсээс хамаарна.</p>
            </div>

            <div className="profile-zone-select">
              {zones.map((item) => (
                <button key={item.id} onClick={() => setZone(item.id)} className={zone === item.id ? "active" : ""}>{item.label}</button>
              ))}
            </div>

            <button className={"profile-package " + (pkg === "short" ? "selected" : "")} onClick={() => setPkg("short")}>
              <div className="package-topline"><span className="radio-dot"/><strong>Үндсэн багц</strong><span>2–3 дуу / богино тоглолт</span></div>
              <p>Арга хэмжээний тохирсон цагийн цонхонд ирж тоглолтоо үзүүлнэ.</p>
              <b>{money(base)}</b>
            </button>

            <button className={"profile-package " + (pkg === "full" ? "selected" : "")} onClick={() => setPkg("full")}>
              <div className="package-topline"><span className="radio-dot"/><strong>Өргөтгөсөн багц</strong><span>Тоглолт + нэмэлт хөтөлбөр</span></div>
              <p>Арга хэмжээний үндсэн тоглолт дээр нэмэлт хөтөлбөр хосолсон багц.</p>
              <b>{money(Math.round(base * 1.55))}</b>
            </button>
          </section>

          <section className="profile-section-v03">
            <span className="eyebrow dark">ABOUT</span>
            <h2>Уран бүтээлчийн тухай</h2>
            <p>{artist.description} Захиалгын хүсэлт илгээхдээ арга хэмжээний төрөл, байршил, онцгой шаардлагаа нэмж болно.</p>
          </section>

          <section className="profile-section-v03">
            <span className="eyebrow dark">REVIEWS</span>
            <h2>Үнэлгээ, сэтгэгдэл</h2>
            <div className="review-demo"><b>★ 5.0</b><p>Үйлчилгээний дараа захиалагчийн баталгаажсан үнэлгээ энд харагдана.</p></div>
          </section>
        </section>

        <aside className="profile-sticky-v03">
          <div className="sticky-booking-card">
            <span className="eyebrow dark">SELECTED</span>
            <h3>{pkg === "short" ? "Үндсэн багц" : "Өргөтгөсөн багц"}</h3>
            <div className="sticky-line"><span>Үнийн бүс</span><b>{zones.find((x) => x.id === zone)?.label}</b></div>
            <div className="sticky-line total-line"><span>Үнэ</span><strong>{money(total)}</strong></div>
            <Link href="/booking" className="primary-button full-button">Огноо, цаг сонгох</Link>
            <p>Захиалга артист зөвшөөрч, төлбөр баталгаажсаны дараа хүчинтэй болно.</p>
          </div>
        </aside>
      </div>
    </main>
  );
}
