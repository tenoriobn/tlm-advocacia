"use client";
import Footer from "src/components/Footer";
import Header from "src/components/Header";
import ArticleHero from "src/components/Article/ArticleHero";
import ArticleTOC from "src/components/Article/ArticleTOC";
import ArticleCTA from "src/components/Article/ArticleCTA";
import ArticleSection from "src/components/Article/ArticleSection";
import ArticleCard from "src/components/Article/ArticleCard";
import ArticleListItem from "src/components/Article/ArticleListItem";
import Contacts from "src/app/(home)/Contacts";
import Reveal from "src/components/Reveal";

export default function HighINSS() {
  return (
    <>
      <Header />
      <main
        id="conteudo-principal"
        className="bg-secondary flex flex-1 flex-col items-center justify-between w-full"
      >
        <article className="w-full">
          <ArticleHero
            eyebrow="Direito Previdenciário"
            title={
              <>
                Tive alta do INSS, mas a{" "}
                <br className="hidden md:max-lg:block" />
                empresa não quer <br className="hidden max-sm:block" /> me{" "}
                <br className="hidden sm:max-md:block" /> deixar
                <br className="hidden md:max-lg:block" /> voltar:{" "}
                <span className="text-nowrap">o que fazer?</span>
              </>
            }
            description="Receber alta do INSS deveria significar o retorno ao trabalho,
                  mas em muitos casos a empresa impede essa volta — deixando o
                  trabalhador sem salário e sem benefício, sem saber como agir.
                  Entenda seus direitos e os caminhos disponíveis."
            image={{
              src: "/images/alta-inss.jpg",
              alt: "Trabalhador preocupado após alta do INSS sem conseguir retornar ao trabalho",
            }}
          />

          <div className="max-xs:px-4 max-md:px-6 pt-18 pb-25 md:pb-32 md:px-8 lg:px-20 w-full">
            <div className="max-w-211.5 mx-auto grid gap-18">
              <ArticleTOC
                items={[
                  {
                    id: "section-1",
                    label: "O que acontece após a alta do INSS?",
                  },
                  {
                    id: "section-2",
                    label: "Por que a empresa pode impedir o retorno?",
                  },
                  {
                    id: "section-3",
                    label: "O que é o limbo previdenciário?",
                  },
                  {
                    id: "section-4",
                    label: "Quem deve pagar nesse período?",
                  },
                  {
                    id: "section-5",
                    label: "O que fazer se a empresa não deixa voltar?",
                  },
                  {
                    id: "section-6",
                    label: "Como resolver essa situação na prática?",
                  },
                ]}
              />

              <ArticleSection
                id="section-1"
                title="1. O que acontece após a alta do INSS?"
              >
                <Reveal animation="fade-up" delayClass="delay-150">
                  <div className="text-lg md:text-xl text-primary-75 grid gap-4 mb-4">
                    <p>
                      Quando o INSS concede a alta médica, o órgão está
                      declarando formalmente que o trabalhador recuperou sua
                      capacidade laborativa e está apto a retornar às
                      atividades. A partir desse momento, o pagamento do
                      benefício é encerrado.
                    </p>
                    <p>
                      Na teoria, o trabalhador deveria simplesmente retomar o
                      emprego. Na prática, porém, muitos se deparam com uma
                      barreira inesperada: a empresa não autoriza o retorno.
                      Seja por exigir novos exames, por alegar que não há função
                      disponível ou por outras razões internas, o empregador
                      impede a volta.
                    </p>
                    <p>
                      O resultado é uma situação extremamente desfavorável ao
                      trabalhador: sem o benefício do INSS — já encerrado — e
                      sem o salário da empresa. Esse cenário tem nome específico
                      no direito previdenciário e trabalhista, e existem
                      mecanismos legais para resolvê-lo.
                    </p>
                  </div>
                </Reveal>

                <ArticleCard variant="yellow">
                  A alta do INSS não extingue o vínculo empregatício. O contrato
                  de trabalho continua suspenso até que o retorno seja
                  formalizado ou a situação seja resolvida.
                </ArticleCard>
              </ArticleSection>

              <ArticleSection
                id="section-2"
                title="2. Por que a empresa pode impedir o retorno ao trabalho?"
              >
                <Reveal animation="fade-up" delayClass="delay-150">
                  <div className="text-lg md:text-xl text-primary-75 grid gap-4 mb-4">
                    <p>
                      Ao receber a alta, o trabalhador deve se apresentar à
                      empresa para o chamado exame médico de retorno ao
                      trabalho, realizado pelo médico do trabalho do próprio
                      empregador. É nesse ponto que surge o conflito mais comum.
                    </p>
                    <p>
                      O médico da empresa pode divergir da conclusão do perito
                      do INSS e entender que o funcionário ainda não está em
                      condições de exercer suas atividades com segurança. Quando
                      isso acontece, o retorno é bloqueado do lado do
                      empregador, enquanto o INSS já encerrou o benefício por
                      considerar o trabalhador apto.
                    </p>
                    <p>Outras situações que podem impedir o retorno incluem:</p>
                  </div>
                </Reveal>

                <ul className="grid gap-4 mb-4">
                  <ArticleListItem
                    label="A"
                    title="Ausência de função compatível:"
                  >
                    a empresa alega não ter cargo adequado para reintegrar o
                    trabalhador, especialmente em casos que exigem readaptação.
                  </ArticleListItem>

                  <ArticleListItem label="B" title="Substituição do empregado:">
                    durante o afastamento, a vaga pode ter sido preenchida por
                    outro profissional, e a empresa reluta em reorganizar o
                    quadro.
                  </ArticleListItem>

                  <ArticleListItem
                    label="C"
                    title="Receio de novo afastamento:"
                  >
                    em casos de doenças recorrentes ou ocupacionais, o
                    empregador pode tentar evitar a reintegração por questões de
                    custo ou responsabilidad
                  </ArticleListItem>
                </ul>

                <ArticleCard variant="yellow">
                  Em nenhuma dessas hipóteses o trabalhador pode ser
                  simplesmente ignorado. A omissão do empregador gera
                  consequências jurídicas e obrigações financeiras.
                </ArticleCard>
              </ArticleSection>

              <ArticleSection
                id="section-3"
                title="3. O que é o limbo previdenciário?"
              >
                <Reveal animation="fade-up" delayClass="delay-150">
                  <div className="text-lg md:text-xl text-primary-75 grid gap-4 mb-4">
                    <p>
                      O limbo previdenciário é a situação em que o trabalhador
                      fica sem cobertura de nenhuma das partes: o INSS encerra o
                      benefício alegando que ele está apto, e a empresa impede o
                      retorno alegando que ele não está. O trabalhador,
                      literalmente, fica no &quot;limbo&quot; — sem renda de
                      lugar nenhum.
                    </p>
                    <p>
                      Esse conflito entre a avaliação do perito do INSS e a do
                      médico do trabalho da empresa é relativamente comum,
                      especialmente em casos de doenças crônicas, ortopédicas ou
                      de saúde mental.
                    </p>
                    <p>
                      A jurisprudência trabalhista brasileira já consolidou
                      entendimento sobre o tema: o trabalhador não pode ser
                      penalizado por uma divergência médica da qual ele não tem
                      controle. Quem deve arcar com os custos desse impasse são
                      as partes — empresa ou INSS —, nunca o empregado.
                    </p>
                  </div>
                </Reveal>

                <ArticleCard variant="red">
                  O limbo previdenciário não é uma situação sem saída. Ele tem
                  solução jurídica, e ignorá-lo pode gerar prescrição de
                  direitos importantes.
                </ArticleCard>
              </ArticleSection>

              <ArticleSection
                id="section-4"
                title="4. Quem deve pagar nesse período?"
              >
                <Reveal animation="fade-up" delayClass="delay-150">
                  <div className="text-lg md:text-xl text-primary-75 grid gap-4 mb-4">
                    <p>
                      Essa é uma das questões centrais do limbo previdenciário e
                      a que mais afeta diretamente o trabalhador. A resposta
                      depende de como a situação se configura, mas há uma regra
                      geral consolidada pela Justiça do Trabalho:
                    </p>
                    <p>
                      Se a empresa impede o retorno ao trabalho, ela é
                      responsável pelo pagamento dos salários durante todo o
                      período em que o trabalhador ficou sem renda. Isso porque
                      o empregado estava à disposição para trabalhar — foi o
                      empregador quem se recusou a recebê-lo.
                    </p>
                    <p>
                      O entendimento do Tribunal Superior do Trabalho (TST) é
                      claro: a mora do empregador em aceitar o retorno gera a
                      obrigação de pagar os salários do período, além de
                      possíveis indenizações. Esse entendimento está consolidado
                      em diversas súmulas e decisões reiteradas.
                    </p>
                    <p>
                      Já em relação ao INSS, caso a alta tenha sido indevida ou
                      o trabalhador ainda apresente incapacidade comprovada, é
                      possível solicitar a revisão da perícia e a reativação do
                      benefício enquanto o processo se resolve.
                    </p>
                  </div>
                </Reveal>

                <ArticleCard variant="green">
                  Na maioria dos casos de limbo previdenciário, a empresa é
                  condenada a pagar os salários do período de bloqueio. O
                  trabalhador tem esse direito reconhecido pelos tribunais.
                </ArticleCard>
              </ArticleSection>

              <ArticleSection
                id="section-5"
                title="5. O que fazer se a empresa não deixa voltar?"
              >
                <Reveal animation="fade-up" delayClass="delay-150">
                  <p className="text-lg md:text-xl text-primary-75 grid gap-4 mb-4">
                    Diante da negativa da empresa, é fundamental agir com
                    rapidez e organização. Confira os passos essenciais:
                  </p>
                </Reveal>

                <ul className="grid gap-4 mb-4">
                  <ArticleListItem
                    label="1"
                    title="Formalize a tentativa de retorno:"
                  >
                    compareça pessoalmente ao RH ou envie comunicação escrita
                    (e-mail, carta com AR) informando que está disponível para
                    retornar ao trabalho. Esse registro é essencial para
                    comprovar que a recusa partiu da empresa.
                  </ArticleListItem>

                  <ArticleListItem
                    label="2"
                    title="Guarde todos os documentos médicos:"
                  >
                    laudos, relatórios, resultados de exames e a própria decisão
                    de alta do INSS devem ser reunidos e preservados. Eles
                    comprovam sua condição e embasam qualquer ação.
                  </ArticleListItem>

                  <ArticleListItem
                    label="3"
                    title="Não assine documentos sem orientação:"
                  >
                    a empresa pode oferecer rescisão ou outros acordos nesse
                    período. Nunca assine nada sem antes consultar um advogado —
                    você pode perder direitos importantes.
                  </ArticleListItem>

                  <ArticleListItem
                    label="4"
                    title="Avalie a necessidade de nova perícia no INSS:"
                  >
                    se a alta foi precipitada e você ainda apresenta limitações,
                    é possível solicitar recurso administrativo ou nova perícia
                    para reativar o benefício enquanto a situação trabalhista se
                    resolve.
                  </ArticleListItem>

                  <ArticleListItem
                    label="5"
                    title="Busque orientação jurídica especializada"
                  >
                    um advogado previdenciário e trabalhista pode avaliar seu
                    caso e definir a estratégia mais eficiente — administrativa,
                    judicial ou ambas.
                  </ArticleListItem>
                </ul>
              </ArticleSection>

              <ArticleSection
                id="section-6"
                title="6. Como resolver essa situação na prática?"
              >
                <Reveal animation="fade-up" delayClass="delay-150">
                  <div className="text-lg md:text-xl text-primary-75 grid gap-4 mb-4">
                    <p>
                      Na prática, a resolução do limbo previdenciário pode
                      ocorrer por diferentes caminhos, dependendo das
                      particularidades de cada caso:
                    </p>
                    <p>
                      <span className="font-medium">
                        Negociação direta com a empresa:
                      </span>{" "}
                      em alguns casos, a atuação de um advogado na tratativa
                      extrajudicial já é suficiente para que a empresa
                      reconsidere a posição e reintegre o trabalhador ou
                      formalize uma rescisão com todos os direitos pagos.
                    </p>
                    <p>
                      <span className="font-medium">Ação trabalhista:</span>{" "}
                      quando a negociação não resolve, o caminho é ingressar na
                      Justiça do Trabalho para cobrar os salários do período de
                      limbo, além de eventuais danos morais e outros direitos
                      decorrentes da situação.
                    </p>
                    <p>
                      <span className="font-medium">Recurso ao INSS:</span>{" "}
                      paralelamente, se houver indícios de que a alta foi
                      prematura, é possível recorrer administrativamente ao INSS
                      para questionar a decisão da perícia e buscar a reativação
                      do benefício.
                    </p>
                    <p>
                      O mais importante é não deixar a situação se prolongar sem
                      nenhuma medida. Quanto mais tempo passa sem uma posição
                      formal, mais difícil fica comprovar os fatos e garantir o
                      pagamento do período em que você ficou sem renda.
                    </p>
                  </div>
                </Reveal>

                <ArticleCard variant="green">
                  Trabalhadores que agiram rapidamente e com orientação adequada
                  conseguiram recuperar todos os salários do período de limbo e,
                  em muitos casos, também indenizações por danos morais.
                </ArticleCard>
              </ArticleSection>

              <ArticleCTA
                title="Está enfrentando essa situação e não sabe por onde começar?"
                description="Uma análise do seu caso pode ajudar a identificar o melhor caminho para garantir seus direitos sem perder tempo."
              />
            </div>
          </div>
        </article>

        <Contacts />
      </main>
      <Footer />
    </>
  );
}
