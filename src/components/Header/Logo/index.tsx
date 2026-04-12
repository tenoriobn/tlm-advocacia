import Link from "next/link";
import LogoIcon from "public/icons/logo.svg";

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="Página inicial da PSM Advocacia"
      className="flex items-center gap-2 max-w-max"
    >
      {/* <Image
        src="/icons/logo.png"
        alt="Logotipo da PSM Advocacia"
        width={30}
        height={40}
        className="w-7.5 h-10"
      /> */}
      <LogoIcon />

      <span className="font-playfair text-secondary text-4xl font-semibold grid gap-1 justify-items-center leading-7">
        {/* PSM */}
        PMS
        <span className="text-xs tracking-[5.5%] uppercase">Advocacia</span>
      </span>
    </Link>
  );
}
