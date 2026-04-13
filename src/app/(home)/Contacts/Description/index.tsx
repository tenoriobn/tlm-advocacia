import Reveal from "src/components/Reveal";

export default function Description() {
  return (
    <Reveal animation="fade-up" delayClass="delay-250">
      <div
        aria-label="Descrição sobre os contatos da PSM Advocacia"
        className="space-y-4 text-lg md:text-xl text-secondary-75 max-lg:text-center w-full"
      >
        <p>
          A PSM Advocacia oferece orientação jurídica para quem precisa entender
          seus direitos e resolver problemas com segurança. Atendimento em todo
          o Brasil, com análise do seu caso e direcionamento claro sobre como
          agir.
        </p>
        <p>
          Atuação nas áreas do Consumidor, Trabalhista e Imobiliário. Fale com
          um advogado e receba os próximos passos para o seu caso.
        </p>
      </div>
    </Reveal>
  );
}
