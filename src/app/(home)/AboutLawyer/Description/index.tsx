import Reveal from "src/components/Reveal";

export default function Description() {
  return (
    <Reveal animation="fade-up" delayClass="delay-200">
      <div
        aria-label="Descrição profissional do advogado"
        className="space-y-4 text-lg md:text-xl text-primary-75 max-xl:text-center lg:flex-1 min-w-0 mb-12 lg:mb-18"
      >
        <p>
          Advogado com mais de 30 anos de experiência, atuando na defesa dos
          direitos de seus clientes com visão prática e estratégica.
        </p>
        <p>
          Sua trajetória inclui atuação em empresas, escritórios e cartório, o
          que permite analisar cada caso com mais precisão e identificar
          soluções eficazes.
        </p>
        <p>
          Fundador da PMS Advocacia, atende nas áreas Cível, Consumidor, Saúde,
          Imobiliário e Trabalhista, sempre com foco em orientar com clareza e
          reduzir riscos ao longo do processo.
        </p>
        <p>
          Seu compromisso é garantir que cada cliente tenha orientação jurídica
          segura para tomar decisões bem fundamentadas.
        </p>
      </div>
    </Reveal>
  );
}
