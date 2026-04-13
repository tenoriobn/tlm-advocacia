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
import ArticleFeatureCard from "src/components/Article/ArticleFeatureCard";
import Reveal from "src/components/Reveal";

export default function ConsumerLaw() {
  return (
    <>
      <Header />

      <main
        id="conteudo-principal"
        className="bg-secondary flex flex-1 flex-col items-center justify-between w-full"
      >
        <article className="w-full">
          <ArticleHero
            eyebrow="Direito do Consumidor"
            title={
              <>
                Plano de saúde negou exame, cirurgia ou tratamento:
                <br />a negativa é ilegal?
              </>
            }
            description="Ter um procedimento negado pelo plano de saúde em um momento de necessidade é uma das situações mais angustiantes que um paciente pode enfrentar. O que muitos não sabem é que grande parte dessas negativas é considerada abusiva pela Justiça — e o plano pode ser obrigado a autorizar o atendimento e a indenizar o paciente pelos danos causados."
            image={{
              src: "/images/consumer-law.jpg",
              alt: "Paciente conversando com atendente de plano de saúde diante de negativa de exame ou tratamento médico",
            }}
          />

          <div className="max-xs:px-4 max-md:px-6 pt-18 pb-25 md:pb-32 md:px-8 lg:px-20 w-full">
            <div className="max-w-211.5 mx-auto grid gap-18">
              <ArticleTOC
                items={[
                  {
                    id: "section-1",
                    label:
                      "Quando a negativa do plano de saúde é considerada abusiva?",
                  },
                  {
                    id: "section-2",
                    label: "Quais procedimentos o plano é obrigado a cobrir?",
                  },
                  {
                    id: "section-3",
                    label:
                      'O plano pode negar tratamento por "doença preexistente"?',
                  },
                  {
                    id: "section-4",
                    label: "O que é carência e quando ela pode ser afastada?",
                  },
                  {
                    id: "section-5",
                    label:
                      "É possível obrigar o plano a autorizar o procedimento com urgência?",
                  },
                  {
                    id: "section-6",
                    label: "O que fazer quando o plano nega o atendimento?",
                  },
                  {
                    id: "section-7",
                    label: "Como resolver essa situação na prática?",
                  },
                ]}
              />

              <ArticleSection
                id="section-1"
                title="1. Quando a negativa do plano de saúde é considerada abusiva?"
              >
                <Reveal animation="fade-up" delayClass="delay-150">
                  <div className="text-lg md:text-xl text-primary-75 grid gap-4 mb-4">
                    <p>
                      Nem toda negativa do plano de saúde é legal. A Lei nº
                      9.656/1998, que regula os planos de saúde no Brasil, e as
                      resoluções da ANS (Agência Nacional de Saúde Suplementar)
                      estabelecem um rol mínimo de coberturas obrigatórias que
                      os planos não podem recusar.
                    </p>
                    <p>
                      Quando o plano nega um procedimento previsto nesse rol —
                      ou utiliza justificativas genéricas como
                      &quot;procedimento não coberto pelo contrato&quot;,
                      &quot;fora da rede credenciada&quot; ou &quot;ausência de
                      autorização prévia&quot; — a negativa pode ser considerada
                      abusiva e contestada na Justiça.
                    </p>
                    <p>
                      Além disso, o Superior Tribunal de Justiça (STJ) já
                      consolidou o entendimento de que cláusulas contratuais que
                      limitam ou excluem coberturas essenciais à saúde do
                      beneficiário são nulas de pleno direito, independentemente
                      do que esteja escrito no contrato.
                    </p>
                  </div>
                </Reveal>

                <ArticleCard variant="red">
                  Uma negativa do plano de saúde nunca deve ser aceita
                  passivamente. Antes de desistir do procedimento ou pagar do
                  próprio bolso, é fundamental entender se a recusa tem amparo
                  legal — na maioria dos casos, não tem.
                </ArticleCard>
              </ArticleSection>

              <ArticleSection
                id="section-2"
                title="2. Quais procedimentos o plano é obrigado a cobrir?"
              >
                <Reveal animation="fade-up" delayClass="delay-150">
                  <div className="text-lg md:text-xl text-primary-75 grid gap-4 mb-4">
                    <p>
                      A ANS mantém o chamado Rol de Procedimentos e Eventos em
                      Saúde, que lista os exames, consultas, cirurgias e
                      tratamentos de cobertura obrigatória. Qualquer plano de
                      saúde contratado no Brasil deve cobrir, no mínimo, tudo o
                      que consta nessa lista.
                    </p>
                    <p>
                      Mas a obrigação do plano não se limita ao rol da ANS. Em
                      2022, o STJ firmou o entendimento de que procedimentos
                      fora do rol também podem ser exigidos quando
                      comprovadamente necessários ao paciente e indicados pelo
                      médico assistente — especialmente em casos oncológicos,
                      doenças raras ou condições que não possuem alternativa
                      terapêutica coberta.
                    </p>
                  </div>
                </Reveal>

                <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(min(100%,336px),1fr))] mb-4">
                  <ArticleFeatureCard
                    eyebrow="Cobertura obrigatória"
                    title="Exames diagnósticos"
                    description="Ressonância magnética, tomografia, ultrassonografia, biópsias e outros exames previstos no rol da ANS não podem ser negados."
                  />

                  <ArticleFeatureCard
                    eyebrow="Cobertura obrigatória"
                    title="Cirurgias e internações"
                    description="Procedimentos cirúrgicos indicados clinicamente e internações hospitalares necessárias ao tratamento estão entre as coberturas mínimas exigidas por lei."
                  />

                  <ArticleFeatureCard
                    eyebrow="Cobertura obrigatória"
                    title="Tratamentos oncológicos"
                    description="Quimioterapia, radioterapia e medicamentos para tratamento do câncer têm cobertura obrigatória, inclusive para medicamentos orais prescritos pelo médico."
                  />

                  <ArticleFeatureCard
                    eyebrow="Cobertura obrigatória"
                    title="Saúde mental"
                    description="Consultas com psiquiatra, psicólogo e internações em casos de crises psiquiátricas são cobertas obrigatoriamente desde a resolução ANS nº 539/2022."
                  />

                  <ArticleFeatureCard
                    eyebrow="Cobertura obrigatória"
                    title="Urgência e emergência"
                    description="Atendimentos de urgência e emergência são cobertos a partir do 30º dia do contrato, mesmo durante o período de carência para outros procedimentos."
                  />

                  <ArticleFeatureCard
                    eyebrow="Cobertura obrigatória"
                    title="Próteses e órteses cirúrgicas"
                    description="Materiais e implantes diretamente relacionados ao ato cirúrgico coberto pelo plano não podem ser excluídos da cobertura de forma isolada."
                  />
                </div>
              </ArticleSection>

              <ArticleSection
                id="section-3"
                title='3. O plano pode negar tratamento por "doença preexistente"?'
              >
                <Reveal animation="fade-up" delayClass="delay-150">
                  <div className="text-lg md:text-xl text-primary-75 grid gap-4 mb-4">
                    <p>
                      Essa é uma das justificativas mais usadas pelos planos de
                      saúde para negar coberturas — e também uma das mais
                      contestadas na Justiça. A alegação de doença preexistente
                      tem regras muito específicas e não pode ser utilizada de
                      forma indiscriminada.
                    </p>
                    <p>
                      Para que uma condição seja considerada preexistente, o
                      beneficiário precisaria ter declarado essa informação no
                      momento da contratação do plano. Caso o plano não tenha
                      realizado a entrevista qualificada ou não tenha oferecido
                      a opção de agravo (pagamento adicional para ter a
                      cobertura), a alegação de preexistência perde validade.
                    </p>
                    <p>
                      Além disso, após dois anos de vigência do contrato, o
                      plano não pode mais recusar cobertura com base em doença
                      preexistente, mesmo que ela tenha sido declarada. Esse
                      prazo está previsto em lei e é amplamente reconhecido pela
                      jurisprudência.
                    </p>
                  </div>
                </Reveal>

                <ArticleCard variant="yellow">
                  Se o plano alegou doença preexistente para negar seu
                  procedimento, verifique: a condição foi declarada na
                  contratação? O contrato tem mais de dois anos? Esses fatores
                  podem tornar a negativa completamente inválida.
                </ArticleCard>
              </ArticleSection>

              <ArticleSection
                id="section-4"
                title="4. O que é carência e quando ela pode ser afastada?"
              >
                <Reveal animation="fade-up" delayClass="delay-150">
                  <div className="text-lg md:text-xl text-primary-75 grid gap-4 mb-4">
                    <p>
                      A carência é o período inicial do contrato durante o qual
                      alguns procedimentos ainda não têm cobertura. Os prazos
                      máximos de carência são definidos pela ANS: 24 horas para
                      urgência e emergência, 180 dias para partos e 300 dias
                      para doenças e lesões preexistentes declaradas.
                    </p>
                    <p>
                      No entanto, a carência não é absoluta. Há situações em que
                      ela pode ser afastada judicialmente, especialmente quando:
                    </p>
                  </div>
                </Reveal>

                <ul className="grid gap-4 mb-4">
                  <ArticleListItem
                    label="A"
                    title="A condição é de urgência ou emergência:"
                  >
                    nesses casos, a cobertura é obrigatória a partir do 30º dia,
                    independentemente do tipo de plano ou do prazo de carência
                    contratado para outros procedimentos.
                  </ArticleListItem>

                  <ArticleListItem
                    label="B"
                    title="O beneficiário migrou de outro plano:"
                  >
                    quando há portabilidade de carências entre planos, os prazos
                    já cumpridos no contrato anterior devem ser aproveitados, e
                    o plano novo não pode exigir que tudo seja cumprido do zero.
                  </ArticleListItem>

                  <ArticleListItem
                    label="C"
                    title="A doença foi diagnosticada após a contratação:"
                  >
                    se a condição surgiu depois do início do contrato e não
                    havia qualquer sinal anterior, não há fundamento para alegar
                    preexistência e aplicar carências estendidas.
                  </ArticleListItem>

                  <ArticleListItem
                    label="D"
                    title="A negativa coloca a vida do paciente em risco:"
                  >
                    quando há urgência médica comprovada, a Justiça costuma
                    afastar a carência para garantir o atendimento imediato,
                    especialmente em casos oncológicos ou cirúrgicos graves.
                  </ArticleListItem>
                </ul>
              </ArticleSection>

              <ArticleSection
                id="section-5"
                title="5. É possível obrigar o plano a autorizar o procedimento com urgência?"
              >
                <Reveal animation="fade-up" delayClass="delay-150">
                  <div className="text-lg md:text-xl text-primary-75 grid gap-4 mb-4">
                    <p>
                      Sim — e essa é uma das situações em que a via judicial se
                      mostra mais eficiente. Quando há urgência médica
                      comprovada e o plano se recusa a autorizar o procedimento,
                      é possível solicitar ao juiz uma tutela de urgência (ou
                      liminar), que é uma decisão judicial antecipada
                      determinando que o plano autorize o atendimento
                      imediatamente, antes mesmo de o processo ser julgado.
                    </p>
                    <p>
                      Esse tipo de medida é concedida com frequência nos
                      tribunais brasileiros, especialmente quando o médico
                      assistente documenta que o atraso no procedimento
                      representa risco à saúde ou à vida do paciente.
                    </p>
                    <p>
                      Na prática, com a documentação correta e a atuação de um
                      advogado especializado, é possível obter a autorização
                      judicial em poucas horas ou dias — tempo crucial em
                      situações que envolvem cirurgias, tratamentos oncológicos
                      ou internações.
                    </p>
                  </div>
                </Reveal>

                <ArticleCard variant="green">
                  Muitos pacientes conseguem autorização judicial para realizar
                  o procedimento negado em questão de dias. A tutela de urgência
                  existe exatamente para situações em que esperar o prazo normal
                  do processo colocaria a saúde em risco.
                </ArticleCard>
              </ArticleSection>

              <ArticleSection
                id="section-6"
                title="6. O que fazer quando o plano nega o atendimento?"
              >
                <Reveal animation="fade-up" delayClass="delay-150">
                  <p className="text-lg md:text-xl text-primary-75 grid gap-4 mb-4">
                    Diante de uma negativa do plano de saúde, é fundamental agir
                    com rapidez e organização. Cada passo conta para construir
                    um caso sólido e reverter a situação o quanto antes.
                  </p>
                </Reveal>

                <ul className="grid gap-4 mb-4">
                  <ArticleListItem
                    label="1"
                    title="Exija a negativa por escrito:"
                  >
                    o plano é obrigado a informar o motivo da recusa de forma
                    clara e fundamentada. Sem isso, já há indício de
                    irregularidade. Guarde o documento ou print da comunicação.
                  </ArticleListItem>

                  <ArticleListItem
                    label="2"
                    title="Obtenha relatório médico detalhado:"
                  >
                    peça ao seu médico assistente um relatório explicando o
                    diagnóstico, a necessidade do procedimento e os riscos de
                    não realizá-lo. Esse documento é a peça central de qualquer
                    ação.
                  </ArticleListItem>

                  <ArticleListItem
                    label="3"
                    title="Registre reclamação na ANS:"
                  >
                    a Agência Nacional de Saúde Suplementar possui canal de
                    reclamações e pode notificar o plano ou mediar o conflito
                    administrativamente. Esse registro também serve como prova
                    do histórico de negativas.
                  </ArticleListItem>

                  <ArticleListItem
                    label="4"
                    title="Não pague o procedimento por conta própria sem orientação:"
                  >
                    se você arcar com os custos sem antes buscar seus direitos,
                    a cobrança de ressarcimento posterior fica mais complexa.
                    Consulte um advogado antes de tomar essa decisão.
                  </ArticleListItem>

                  <ArticleListItem
                    label="5"
                    title="Procure um advogado especializado em planos de saúde:"
                  >
                    com a documentação reunida, um advogado pode avaliar se a
                    negativa é abusiva, acionar o plano extrajudicialmente ou
                    ingressar com ação judicial — incluindo pedido de tutela de
                    urgência para autorização imediata.
                  </ArticleListItem>
                </ul>
              </ArticleSection>

              <ArticleSection
                id="section-7"
                title="7. Como resolver essa situação na prática?"
              >
                <Reveal animation="fade-up" delayClass="delay-150">
                  <div className="text-lg md:text-xl text-primary-75 grid gap-4 mb-4">
                    <p>
                      A resolução de uma negativa abusiva do plano de saúde pode
                      seguir diferentes caminhos, e a escolha da estratégia
                      certa depende da urgência do caso, do tipo de procedimento
                      e do comportamento do plano após a comunicação.
                    </p>
                    <p>
                      <span className="font-medium">
                        Negociação administrativa:
                      </span>{" "}
                      em alguns casos, a simples notificação formal enviada por
                      um advogado já é suficiente para que o plano reconsidere a
                      negativa e autorize o procedimento sem necessidade de
                      processo judicial. Essa abordagem é mais eficiente quando
                      o plano não tem argumento legal sólido para sustentar a
                      recusa.
                    </p>
                    <p>
                      <span className="font-medium">
                        Tutela de urgência (liminar):
                      </span>{" "}
                      quando há risco à saúde e o plano mantém a negativa, o
                      caminho mais rápido é o pedido de tutela de urgência na
                      Justiça. Com a documentação médica adequada, essa decisão
                      pode ser obtida em horas — obrigando o plano a autorizar o
                      procedimento imediatamente, sob pena de multa diária.
                    </p>
                    <p>
                      <span className="font-medium">
                        Ação judicial completa:
                      </span>{" "}
                      além da autorização do procedimento, é possível buscar
                      indenização por danos morais pelos transtornos causados
                      pela negativa — especialmente em casos em que o paciente
                      ficou sem atendimento em situação de urgência, teve seu
                      estado de saúde agravado ou precisou arcar com custos que
                      eram de responsabilidade do plano.
                    </p>
                  </div>
                </Reveal>

                <ArticleCard variant="green">
                  A Justiça brasileira é consistente na proteção dos
                  beneficiários de planos de saúde. Negativas abusivas resultam,
                  na maioria dos casos, em condenação do plano — tanto para
                  autorizar o procedimento quanto para indenizar o paciente.
                </ArticleCard>
              </ArticleSection>

              <ArticleCTA
                title="Seu plano negou um exame, cirurgia ou tratamento?"
                description={
                  <>
                    Não aceite a negativa sem antes entender se ela tem amparo
                    legal.
                    <br />
                    Nossos advogados analisam seu caso sem compromisso e indicam
                    o caminho mais rápido para garantir o atendimento que você
                    precisa.
                  </>
                }
                href="https://wa.me/5511989400334?text=Ol%C3%A1%2C%20vi%20o%20conte%C3%BAdo%20sobre%20negativa%20de%20plano%20de%20sa%C3%BAde%20e%20gostaria%20de%20orienta%C3%A7%C3%A3o%20jur%C3%ADdica%20sobre%20meu%20caso."
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
