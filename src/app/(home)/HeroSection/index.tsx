import Image from "next/image";
import Link from "next/link";
import WhatsappMinimalistIcon from "public/icons/whatsapp-minimalist.svg";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      aria-labelledby="titulo-principal"
      className="bg-header bg-cover w-full max-xs:px-4 max-md:px-6 md:px-8 lg:px-20"
    >
      <div className="max-w-[1920px] w-full min-h-dvh pt-24 grid grid-rows-[1fr_auto] m-auto">
        <header className="flex flex-col justify-center items-center gap-12 lg:gap-18 py-18 md:py-32">
          <div className="grid gap-6 justify-items-center items-center text-center">
            <h1
              id="titulo-principal"
              className="font-playfair text-[clamp(2.25rem,10vw,4.25rem)] text-secondary font-semibold leading-[112%]"
            >
              Advocacia de elite <br className="hidden xs:max-lg:block" /> para{" "}
              <br className="hidden lg:block" /> defender os
              <br className="hidden xs:max-lg:block" /> seus Interesses.
            </h1>

            <p className="text-lg md:text-2xl max-w-82 md:max-w-114 lg:max-w-172.5 italic text-secondary">
              Entenda o que fazer no seu{" "}
              <br className="hidden md:max-lg:block" /> caso com orientação
              jurídica segura.
              <br />
              Evite erros e tome decisões com clareza.
            </p>
          </div>

          <Link
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary text-primary text-xl md:text-2xl font-medium rounded-sm px-6 py-4 flex items-center justify-center gap-3 max-w-max transition-default hover:bg-secondary-75 active:bg-secondary-50 active:scale-90"
            aria-label="Falar com advogado pelo WhatsApp"
          >
            <WhatsappMinimalistIcon aria-hidden="true" />
            Falar com advogado
          </Link>
        </header>

        <aside
          aria-label="Informações do advogado"
          className="flex shrink-0 justify-center items-center gap-3 md:gap-6 border-t border-b border-white/12 py-6"
        >
          <Image
            src="/images/foto-perfil-advogado.png"
            alt="Foto do advogado Thiago Lopes Martinez"
            width={64}
            height={64}
            className="bg-primary-dark rounded-full object-fill w-16 h-16 scale-x-[-1]"
          />

          <div>
            <p className="text-lg md:text-2xl font-medium text-secondary">
              OAB/SP nº 253.048
              <span className="hidden md:inline"> — registro ativo</span>
            </p>
            <p className="text-lg md:text-2xl text-secondary">
              Atendimento sem burocracia
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
