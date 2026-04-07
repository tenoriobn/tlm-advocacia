import Image from "next/image";
import Link from "next/link";
import WhatsappMinimalistIcon from "public/icons/whatsapp-minimalist.svg";

export default function Showcase() {
  return (
    <div className="lg:flex gap-18">
      <div className="hidden lg:block relative w-full min-h-[418px] rounded-sm overflow-hidden lg:flex-[1.25] ">
        <Image
          alt="Aperto de mãos simbolizando acordo e confiança no atendimento jurídico"
          src="/images/aperto-de-maos.jpg"
          fill
          sizes="(min-width: 1024px) 100vw, 0px"
          className="object-cover"
        />
      </div>

      <div className="relative w-full min-h-[418px] rounded-sm overflow-hidden lg:flex-1 min-w-0">
        <Image
          alt="Balança da justiça representando equilíbrio e segurança jurídica"
          src="/images/balanca-justica.jpg"
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 flex items-end justify-center">
          <Link
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-secondary text-xl md:text-2xl font-medium px-6 py-4 flex items-center justify-center gap-3 w-full transition-default hover:bg-neutral-600 active:bg-neutral-500 active:scale-105"
          >
            <WhatsappMinimalistIcon aria-hidden="true" />
            Consultar advogado
          </Link>
        </div>
      </div>
    </div>
  );
}
