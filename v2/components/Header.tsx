import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="brand" aria-label="ArtisyHub нүүр">
          <Image src="/wordmark.webp" alt="ArtisyHub" width={180} height={46} priority />
        </Link>
        <nav className="main-nav" aria-label="Үндсэн цэс">
          <Link href="/">Уран бүтээлч</Link>
          <Link href="/restaurant-manager">Ресторан</Link>
          <Link href="/artist/register" className="nav-cta">Уран бүтээлчээр нэгдэх</Link>
        </nav>
      </div>
    </header>
  );
}
