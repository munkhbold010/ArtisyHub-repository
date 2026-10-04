'use client';

import { useState } from "react";
import { ArtistCard } from "./ArtistCard";

const zones = [
  { id: "city", label: "Хот дотор", short: "Хот" },
  { id: "near", label: "Хотын ойролцоо / Тэрэлж", short: "Тэрэлж, ойролцоо" },
  { id: "rural", label: "Хөдөө 500 км хүртэл", short: "500 км хүртэл" },
  { id: "far", label: "Хөдөө 500 км-ээс дээш", short: "500 км-ээс дээш" },
] as const;

type ZoneId = (typeof zones)[number]["id"];

const artists = [
  {
    slug: "selly",
    name: "Сэрчмаа",
    category: "Дуучин",
    image: "/selly.jpg",
    description: "Тоглолт, арга хэмжээний дуучны багц.",
    rating: "Үнэлгээтэй",
    prices: { city: 600000, near: 750000, rural: 1100000, far: 1500000 },
  },
  {
    slug: "aagiimaa",
    name: "Агиймаа",
    category: "Дуучин",
    image: "/aagiimaa.jpg",
    description: "Арга хэмжээ, байгууллагын эвентэд зориулсан багц.",
    rating: "Үнэлгээтэй",
    prices: { city: 700000, near: 850000, rural: 1200000, far: 1650000 },
  },
  {
    slug: "lhgwa",
    name: "Лхагва /Мөнхийн реп/",
    category: "Дуучин",
    image: "/lhgwa.jpg",
    description: "Тайзны тоглолт, арга хэмжээний багц.",
    rating: "Үнэлгээтэй",
    prices: { city: 650000, near: 800000, rural: 1150000, far: 1550000 },
  },
  {
    slug: "youngsub",
    name: "YoungSub",
    category: "Дуучин",
    image: "/youngsub.jpg",
    description: "Тоглолт болон тусгай арга хэмжээний багц.",
    rating: "Үнэлгээтэй",
    prices: { city: 500000, near: 650000, rural: 950000, far: 1350000 },
  },
];

const categories = ["Бүгд", "Хөтлөгч", "Дуучин", "Хөгжимчин", "Бүжигчин", "DJ", "Комедиан", "Илбэчин"];

function money(value: number) {
  return new Intl.NumberFormat("mn-MN").format(value) + "₮-с";
}

export function HomeArtists() {
  const [zone, setZone] = useState<ZoneId>("city");
  const [category, setCategory] = useState("Бүгд");
  const selected = zones.find((x) => x.id === zone)!;
  const visible = category === "Бүгд" ? artists : artists.filter((x) => x.category === category);

  return (
    <>
      <section className="shell zone-section" aria-label="Үнийн бүс">
        <div className="section-heading">
          <div>
            <span className="eyebrow dark">PRICE ZONE</span>
            <h2>Үнийн бүсээ сонго</h2>
          </div>
          <p>Сонгосон бүсийн бүх зардал багцын үнэд шингэсэн байна.</p>
        </div>
        <div className="zone-grid">
          {zones.map((item) => (
            <button
              key={item.id}
              className={"zone-card " + (zone === item.id ? "active" : "")}
              onClick={() => setZone(item.id)}
            >
              <span>{item.label}</span>
              {zone === item.id && <b>Сонгосон</b>}
            </button>
          ))}
        </div>
        <div className="zone-current">Одоо харагдаж буй үнэ: <strong>{selected.label}</strong></div>
      </section>

      <section className="shell section" id="artists">
        <div className="section-heading">
          <div><span className="eyebrow dark">ARTISTS</span><h2>Уран бүтээлчид</h2></div>
          <p>Үнэ нь дээр сонгосон бүсээр шинэчлэгдэнэ.</p>
        </div>
        <div className="chips">
          {categories.map((x) => (
            <button className={category === x ? "active" : ""} key={x} onClick={() => setCategory(x)}>{x}</button>
          ))}
        </div>
        <div className="artist-grid">
          {visible.length ? visible.map((artist) => (
            <ArtistCard key={artist.name} {...artist} price={money(artist.prices[zone])} />
          )) : (
            <div className="empty-category">Энэ ангиллын бодит дата backend холбогдоход энд харагдана.</div>
          )}
        </div>
        <p className="preview-note">Preview дээрх үнэ нь UI тестийн жишиг үнэ. Backend холбогдоход артистын бодит багцын үнэ шууд орно.</p>
      </section>
    </>
  );
}
