import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="Página inicial da TLM Advocacia"
      className="flex items-center gap-2 max-w-max"
    >
      <Image
        src="/icons/logo.png"
        alt="Logotipo da TLM Advocacia"
        width={30}
        height={40}
        className="w-7.5 h-10"
      />

      <span className="font-playfair text-secondary text-4xl font-semibold grid gap-1 justify-items-center leading-7">
        TLM
        <span className="text-xs tracking-[5.5%] uppercase">Advocacia</span>
      </span>
    </Link>
  );
}
