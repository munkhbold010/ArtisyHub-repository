'use client';

import { useMemo, useState } from "react";
import { ArtistCard } from "./ArtistCard";

const zones = [
  { id: "city", label: "Хот дотор" },
  { id: "near", label: "Хотын ойролцоо / Тэрэлж" },
  { id: "rural", label: "Хөдөө 500 км хүртэл" },
  { id: "far", label: "Хөдөө 500 км-ээс дээш" },
] as const;

type ZoneId = (typeof zones)[number]["id"];

const artists = [
  {
    slug: "selly",
    name: "Сэрчмаа",
    category: "Дуучин",
    image: "/selly.jpg",
    description: "Тоглолт, арга хэмжээний дуучны багц.",
    rating: "★ 4.9",
    prices: { city: 600000, near: 750000, rural: 1100000, far: 1500000 },
  },
  {
    slug: "aagiimaa",
    name: "Агиймаа",
    category: "Дуучин",
    image: "/aagiimaa.jpg",
    description: "Арга хэмжээ, байгууллагын эвентэд зориулсан багц.",
    rating: "★ 5.0",
    prices: { city: 700000, near: 850000, rural: 1200000, far: 1650000 },
  },
  {
    slug: "lhgwa",
    name: "Лхагва /Мөнхийн реп/",
    category: "Дуучин",
    image: "/lhgwa.jpg",
    description: "Тайзны тоглолт, арга хэмжээний багц.",
    rating: "★ 4.9",
    prices: { city: 650000, near: 800000, rural: 1150000, far: 1550000 },
  },
  {
    slug: "youngsub",
    name: "YoungSub",
    category: "Дуучин",
    image: "/youngsub.jpg",
    description: "Тоглолт болон тусгай арга хэмжээний багц.",
    rating: "★ 4.8",
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
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const q = query.trim().toLocaleLowerCase("mn");
    return artists.filter((artist) => {
      const categoryMatch = category === "Бүгд" || artist.category === category;
      const queryMatch = !q || (artist.name + " " + artist.category + " " + artist.description).toLocaleLowerCase("mn").includes(q);
      return categoryMatch && queryMatch;
    });
  }, [category, query]);

  return (
    <>
      <div className="shell search-bar-v03">
        <div className="search-input-v03">
          <span aria-hidden="true">⌕</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Хөтлөгч, дуучин, хамтлаг хайх..."
            aria-label="Уран бүтээлч хайх"
          />
        </div>
        <select value={zone} onChange={(e) => setZone(e.target.value as ZoneId)} aria-label="Үнийн бүс">
          {zones.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}
        </select>
      </div>

      <section className="shell artists-section-v03" id="artists">
        <div className="section-head-v03">
          <div>
            <h2>Таны сонгох уран бүтээлчид</h2>
            <p>Багц, үнэ, хугацаа — нэг дор.</p>
          </div>
          <span>{visible.length} профайл</span>
        </div>

        <div className="chips">
          {categories.map((item) => (
            <button
              className={category === item ? "active" : ""}
              key={item}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="artist-grid">
          {visible.length ? visible.map((artist) => (
            <ArtistCard key={artist.slug} {...artist} price={money(artist.prices[zone])} />
          )) : <div className="empty-category">Илэрц олдсонгүй.</div>}
        </div>
      </section>

      <section className="shell trust-row-v03">
        <article>
          <div className="trust-icon-v03">✓</div>
          <div><h3>Үнэ, нөхцөл нь тодорхой</h3><p>Сонгосон бүсийн бүх зардал багтсан багц.</p></div>
        </article>
        <article>
          <div className="trust-icon-v03">◷</div>
          <div><h3>Хариуг нь нэг дор хяна</h3><p>Хүсэлт, төлбөр, баталгаажилт тусдаа.</p></div>
        </article>
        <article>
          <div className="trust-icon-v03">₮</div>
          <div><h3>Баталгаатай захиалга</h3><p>Артист зөвшөөрсний дараа төлбөрөөр баталгаажна.</p></div>
        </article>
      </section>
    </>
  );
}
