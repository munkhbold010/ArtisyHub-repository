import { Header } from "../../../components/Header";
import { ArtistProfileClient } from "../../../components/ArtistProfileClient";

const artists = {
  selly: { name: "Сэрчмаа", category: "Дуучин", image: "/selly.jpg", description: "Тоглолт, арга хэмжээний дуучны багц үйлчилгээ.", rating: "4.9", reviewCount: 12, prices: { city: 600000, near: 750000, rural: 1100000, far: 1500000 } },
  aagiimaa: { name: "Агиймаа", category: "Дуучин", image: "/aagiimaa.jpg", description: "Арга хэмжээ, байгууллагын эвентэд зориулсан тоглолтын багц.", rating: "5.0", reviewCount: 9, prices: { city: 700000, near: 850000, rural: 1200000, far: 1650000 } },
  lhgwa: { name: "Лхагва /Мөнхийн реп/", category: "Дуучин", image: "/lhgwa.jpg", description: "Тайзны тоглолт болон арга хэмжээний үйлчилгээ.", rating: "4.9", reviewCount: 18, prices: { city: 650000, near: 800000, rural: 1150000, far: 1550000 } },
  youngsub: { name: "YoungSub", category: "Дуучин", image: "/youngsub.jpg", description: "Тоглолт болон тусгай арга хэмжээний багц.", rating: "4.8", reviewCount: 7, prices: { city: 500000, near: 650000, rural: 950000, far: 1350000 } },
} as const;

export default async function ArtistPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const artist = artists[slug as keyof typeof artists] ?? artists.selly;
  return <><Header /><ArtistProfileClient artist={artist} /></>;
}
