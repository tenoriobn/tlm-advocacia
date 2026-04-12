import Image from "next/image";
import Link from "next/link";
import WhatsappMinimalistIcon from "public/icons/whatsapp-minimalist.svg";

export default function Showcase() {
  return (
    <section
      aria-label="Demonstração visual dos serviços jurídicos"
      className="lg:flex gap-18"
    >
      <figure className="hidden lg:block relative w-full min-h-104.5 rounded-sm overflow-hidden lg:flex-[1.25]">
        <Image
          alt="Aperto de mãos simbolizando acordo e confiança no atendimento jurídico"
          src="/images/aperto-de-maos.jpg"
          fill
          sizes="(min-width: 1024px) 55vw, 0px"
          className="object-cover"
          priority
        />
      </figure>

      <figure className="relative w-full min-h-104.5 rounded-sm overflow-hidden lg:flex-1 min-w-0">
        <Image
          alt="Balança da justiça representando equilíbrio e segurança jurídica"
          src="/images/balanca-justica.jpg"
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 flex items-end justify-center">
          <Link
            href="https://wa.me/5511989400334?text=Ol%C3%A1%2C%20estou%20com%20um%20problema%20jur%C3%ADdico%20e%20gostaria%20de%20orienta%C3%A7%C3%A3o.%20A%20TLM%20pode%20me%20ajudar%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary w-full transition-default hover:bg-neutral-600 active:bg-neutral-500 "
            aria-label="Consultar advogado pelo WhatsApp (abre em nova aba com mensagem pré-preenchida)"
          >
            <span className="text-secondary text-xl md:text-2xl font-medium flex items-center justify-center gap-3 px-6 py-4 w-full transition-default active:scale-95">
              <WhatsappMinimalistIcon aria-hidden="true" focusable="false" />
              <span>Consultar advogado</span>
            </span>
          </Link>
        </div>
      </figure>
    </section>
  );
}
