import Image from "next/image";

export default function Logo() {
  return (
    <div
      className="flex items-center gap-2 max-w-max"
      role="img"
      aria-label="TLM Advocacia"
    >
      <Image
        src="/icons/logo.png"
        alt=""
        aria-hidden="true"
        width={30}
        height={40}
        className="w-7.5 h-10"
      />

      <p
        className="font-playfair text-secondary text-4xl font-semibold grid gap-1 justify-items-center leading-7"
        aria-hidden="true"
      >
        TLM
        <span className="text-xs tracking-[5.5%] uppercase">Advocacia</span>
      </p>
    </div>
  );
}
