import Image from "next/image";
import Link from "next/link";

type Props = {
  name: string;
  category: string;
  image: string;
  price: string;
  description: string;
  rating?: string;
};

export function ArtistCard({ name, category, image, price, description, rating }: Props) {
  return (
    <Link href="/booking" className="artist-card">
      <div className="artist-photo">
        <Image src={image} alt={name} fill sizes="(max-width: 700px) 80vw, 300px" />
        <span className="category-pill">{category}</span>
      </div>
      <div className="artist-card-body">
        <div className="artist-card-title">
          <h3>{name}</h3>
          <span className="rating">{rating ?? "Үнэлгээ хараахан байхгүй"}</span>
        </div>
        <p>{description}</p>
        <strong>{price}</strong>
      </div>
    </Link>
  );
}
