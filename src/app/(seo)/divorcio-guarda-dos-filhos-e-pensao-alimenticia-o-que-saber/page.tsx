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

export default function FamilyLaw() {
  return (
    <>
      <Header />

      <main
        id="conteudo-principal"
        className="bg-secondary flex flex-1 flex-col items-center justify-between w-full"
      >
        <article className="w-full">
          <ArticleHero
            eyebrow="Direito de Família"
            title={
              <>
                Divórcio, guarda dos filhos{" "}
                <br className="max-sm:hidden lg:hidden" /> e{" "}
                <br className="hidden lg:block" /> pensão alimentícia:{" "}
                <br className="hidden sm:block lg:hidden" /> o que{" "}
                <br className="sm:hidden" /> você precisa saber{" "}
                <br className="block lg:hidden" /> antes de agir
              </>
            }
            description="A separação é um dos momentos mais delicados da vida — e também um dos que mais exige atenção jurídica. Decisões tomadas sem orientação adequada sobre guarda, pensão e divisão de bens podem gerar consequências que duram anos. Entender seus direitos antes de qualquer acordo é o que permite atravessar esse processo com segurança."
            image={{
              src: "/images/family-law.jpg",
              alt: "Casal em processo de separação, com mulher de costas e homem ao fundo, representando conflito familiar e divórcio",
            }}
          />

          <div className="max-xs:px-4 max-md:px-6 pt-18 pb-25 md:pb-32 md:px-8 lg:px-20 w-full">
            <div className="max-w-211.5 mx-auto grid gap-18">
              <ArticleTOC
                items={[
                  {
                    id: "section-1",
                    label:
                      "Quais as formas de divórcio e o que muda em cada caso?",
                  },
                  {
                    id: "section-2",
                    label: "Como funciona a divisão de bens no divórcio?",
                  },
                  {
                    id: "section-3",
                    label:
                      "Guarda dos filhos: tipos, direitos e o que o juiz considera?",
                  },
                  {
                    id: "section-4",
                    label:
                      "Pensão alimentícia: quem tem direito, quanto e por quanto tempo?",
                  },
                  {
                    id: "section-5",
                    label: "O que é alienação parental e como se defender?",
                  },
                  {
                    id: "section-6",
                    label:
                      "Quando é possível revisar guarda ou pensão já definidas?",
                  },
                  {
                    id: "section-7",
                    label:
                      "Como conduzir esse processo com segurança na prática?",
                  },
                ]}
              />

              <ArticleSection
                id="section-1"
                title="1. Quais os tipos de demissão e o que muda em cada caso?"
              >
                <Reveal animation="fade-up" delayClass="delay-150">
                  <p className="text-lg md:text-xl text-primary-75 mb-4">
                    Desde a Emenda Constitucional nº 66/2010, o divórcio no
                    Brasil pode ser requerido a qualquer momento, sem
                    necessidade de prazo mínimo de separação e sem precisar
                    apresentar motivos. Essa mudança simplificou o processo, mas
                    as modalidades ainda impactam diretamente o tempo, o custo e
                    a forma de resolver as questões envolvidas.
                  </p>
                </Reveal>

                <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(min(100%,336px),1fr))] mb-4">
                  <ArticleFeatureCard
                    eyebrow="Mais rápido"
                    title="Divórcio consensual extrajudicial"
                    description="Feito em cartório quando há acordo total e nenhum filho menor. Pode ser concluído em dias, sem necessidade de processo judicial."
                  />

                  <ArticleFeatureCard
                    eyebrow="Com filhos"
                    title="Divórcio consensual judicial"
                    description="Necessário quando há filhos menores ou incapazes. Ambas as partes concordam, mas o juiz precisa homologar as decisões sobre guarda e alimentos."
                  />

                  <ArticleFeatureCard
                    eyebrow="Sem acordo"
                    title="Divórcio litigioso"
                    description="Quando as partes não chegam a um consenso sobre bens, guarda ou alimentos. O juiz decide após ouvir ambos os lados — processo mais longo e custoso."
                  />
                </div>

                <Reveal animation="fade-up" delayClass="delay-150">
                  <p className="text-lg md:text-xl text-primary-75 mb-4">
                    Quando há filhos menores ou incapazes, o divórcio
                    obrigatoriamente passa pelo Judiciário, pois o juiz precisa
                    homologar as decisões sobre guarda e alimentos para garantir
                    a proteção das crianças. Mesmo no divórcio consensual com
                    filhos, a presença de advogado é obrigatória para ambas as
                    partes.
                  </p>
                </Reveal>

                <ArticleCard variant="yellow">
                  Acordos feitos &quot;de boca&quot; ou sem formalização
                  jurídica não têm valor legal. Sem um documento homologado
                  judicialmente ou lavrado em cartório, qualquer combinação pode
                  ser desrespeitada sem consequências para quem descumpriu.
                </ArticleCard>
              </ArticleSection>

              <ArticleSection
                id="section-2"
                title="2. Como funciona a divisão de bens no divórcio?"
              >
                <Reveal animation="fade-up" delayClass="delay-150">
                  <p className="text-lg md:text-xl text-primary-75 mb-4">
                    A divisão do patrimônio no divórcio segue o regime de bens
                    escolhido no momento do casamento — e esse detalhe muda
                    completamente o que cada cônjuge tem direito a receber.
                    Conhecer o regime do seu casamento é o primeiro passo para
                    entender o que lhe pertence.
                  </p>
                </Reveal>

                <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(min(100%,336px),1fr))] mb-4">
                  <ArticleFeatureCard
                    eyebrow="Regime mais comum"
                    title="Comunhão parcial de bens"
                    description="Bens adquiridos durante o casamento são divididos igualmente. Bens anteriores ao casamento e heranças recebidas permanecem com quem os adquiriu."
                  />

                  <ArticleFeatureCard
                    eyebrow="Por escolha expressa"
                    title="Comunhão universal de bens"
                    description="Todo o patrimônio — inclusive o anterior ao casamento — é compartilhado entre os cônjuges e dividido ao meio no divórcio."
                  />

                  <ArticleFeatureCard
                    eyebrow="Por escolha expressa"
                    title="Separação total de bens"
                    description="Cada cônjuge mantém o que é seu individualmente. Não há partilha de bens no divórcio — exceto em bens adquiridos conjuntamente com esforço comum comprovado."
                  />

                  <ArticleFeatureCard
                    eyebrow="Regra imposta por lei"
                    title="Separação obrigatória"
                    description="Aplicada a casamentos de pessoas com mais de 70 anos ou que necessitaram de autorização judicial para casar. O STJ reconhece direito à partilha de bens adquiridos na constância do casamento."
                  />

                  <ArticleFeatureCard
                    eyebrow="União estável"
                    title="Comunhão parcial (regra geral)"
                    description="A união estável segue, em regra, o regime de comunhão parcial — salvo contrato de convivência com disposição diferente firmado entre as partes."
                  />

                  <ArticleFeatureCard
                    eyebrow="Atenção especial"
                    title="Bens ocultados pelo cônjuge"
                    description="A ocultação de patrimônio durante o divórcio é uma prática ilegal e pode ser investigada judicialmente. Transferências suspeitas feitas antes ou durante o processo podem ser anuladas."
                  />
                </div>

                <ArticleCard variant="red">
                  Aceitar uma divisão de bens desequilibrada para &quot;resolver
                  logo&quot; pode significar abrir mão de valores expressivos.
                  Uma análise patrimonial antes do acordo pode revelar bens que
                  você tem direito e que não foram considerados.
                </ArticleCard>
              </ArticleSection>

              <ArticleSection
                id="section-3"
                title="3. Guarda dos filhos: tipos, direitos e o que o juiz considera?"
              >
                <Reveal animation="fade-up" delayClass="delay-150">
                  <p className="text-lg md:text-xl text-primary-75 mb-4">
                    A guarda dos filhos é, na maioria das vezes, o tema mais
                    sensível do divórcio — e o que mais impacta a vida das
                    crianças a longo prazo. A legislação brasileira prioriza
                    sempre o melhor interesse do menor, e o sistema de guarda
                    evoluiu muito nos últimos anos para refletir essa
                    prioridade.
                  </p>
                </Reveal>

                <ul className="grid gap-4 mb-4">
                  <ArticleListItem label="1" title="Guarda compartilhada:">
                    é a modalidade preferencial prevista em lei desde 2014.
                    Ambos os pais exercem a guarda de forma igualitária — as
                    decisões sobre educação, saúde e criação são tomadas em
                    conjunto. A residência principal pode ser definida por
                    acordo.
                  </ArticleListItem>

                  <ArticleListItem label="2" title="Guarda unilateral:">
                    quando a guarda compartilhada é inviável — por conflito
                    grave, distância geográfica ou outros fatores —, a guarda é
                    atribuída a um dos pais. O outro mantém o direito de visita
                    e o dever de pagar alimentos.
                  </ArticleListItem>

                  <ArticleListItem label="3" title="O que o juiz avalia:">
                    a capacidade de cada genitor de oferecer afeto, estabilidade
                    e cuidado; a disponibilidade de tempo; a manutenção do
                    vínculo da criança com o outro genitor; e, acima de tudo, a
                    opinião da própria criança quando ela tem idade e maturidade
                    para expressá-la.
                  </ArticleListItem>
                </ul>

                <Reveal animation="fade-up" delayClass="delay-150">
                  <p className="text-lg md:text-xl text-primary-75 mb-4">
                    O direito de visita do genitor que não detém a guarda
                    principal é garantido por lei e deve ser respeitado. Impedir
                    o contato da criança com o outro pai ou mãe sem
                    justificativa legítima configura alienação parental —
                    assunto tratado na seção seguinte.
                  </p>
                </Reveal>

                <ArticleCard variant="yellow">
                  Guarda compartilhada não significa necessariamente que a
                  criança mora metade do tempo com cada genitor. Significa que
                  ambos participam igualmente das decisões sobre a vida do filho
                  — o que já é, por si só, um direito fundamental da criança.
                </ArticleCard>
              </ArticleSection>

              <ArticleSection
                id="section-4"
                title="4. Pensão alimentícia: quem tem direito, quanto e por quanto tempo?"
              >
                <Reveal animation="fade-up" delayClass="delay-150">
                  <div className="text-lg md:text-xl text-primary-75 grid gap-4 mb-4">
                    <p>
                      A pensão alimentícia é uma obrigação legal destinada a
                      garantir o sustento de quem não tem condições de prover o
                      próprio sustento — seja um filho menor, seja o cônjuge que
                      ficou em situação de vulnerabilidade após a separação.
                    </p>
                    <p>
                      O valor da pensão é definido com base no
                      binômio necessidade de quem recebe e possibilidade de quem
                      paga. Não existe um percentual fixo estabelecido em lei,
                      mas a jurisprudência costuma adotar como parâmetro inicial
                      entre 20% e 30% dos rendimentos líquidos do alimentante
                      para um filho, podendo variar conforme o número de
                      dependentes e as circunstâncias do caso.
                    </p>
                  </div>
                </Reveal>

                <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(min(100%,336px),1fr))] mb-4">
                  <ArticleFeatureCard
                    eyebrow="Quem tem direito"
                    title="Filhos menores de 18 anos"
                    description="O dever de pagar alimentos aos filhos existe independentemente do tipo de guarda e da relação entre os ex-cônjuges. É uma obrigação dos pais, não uma concessão."
                  />

                  <ArticleFeatureCard
                    eyebrow="Quem tem direito"
                    title="Filhos maiores estudantes"
                    description="A obrigação alimentar pode se estender após os 18 anos enquanto o filho estiver cursando ensino superior ou técnico, salvo quando já possui renda própria suficiente."
                  />

                  <ArticleFeatureCard
                    eyebrow="Quem pode ter direito"
                    title="Cônjuge ou companheiro"
                    description="O ex-cônjuge que ficou sem condições de sustento após o divórcio pode pedir alimentos — especialmente quando abriu mão da carreira durante o casamento ou tem limitações de saúde."
                  />

                  <ArticleFeatureCard
                    eyebrow="Atenção"
                    title="Descumprimento da pensão"
                    description="Deixar de pagar a pensão alimentícia é crime — passível de prisão civil de 1 a 3 meses. O descumprimento reiterado também pode resultar em execução do débito com penhora de bens e salário."
                  />
                </div>

                <ArticleCard variant="red">
                  Se a pensão não está sendo paga, não espere o débito acumular
                  por meses. A execução de alimentos tem rito especial na
                  Justiça — mais rápido do que ações comuns — e o devedor pode
                  ser preso em até 30 dias após a notificação.
                </ArticleCard>
              </ArticleSection>

              <ArticleSection
                id="section-5"
                title="5. O que é alienação parental e como se defender?"
              >
                <Reveal animation="fade-up" delayClass="delay-150">
                  <div className="text-lg md:text-xl text-primary-75 grid gap-4 mb-4">
                    <p>
                      A alienação parental ocorre quando um dos genitores — ou
                      qualquer pessoa que tenha o menor sob sua guarda — age
                      para prejudicar, dificultar ou destruir o vínculo afetivo
                      da criança com o outro genitor. É uma forma de abuso
                      emocional reconhecida por lei no Brasil desde 2010, com
                      consequências jurídicas graves.
                    </p>

                    <p>
                      Os comportamentos mais comuns que configuram alienação
                      parental incluem:
                    </p>
                  </div>
                </Reveal>

                <ul className="grid gap-4 mb-4">
                  <ArticleListItem
                    label="1"
                    title="Obstaculizar visitas e convivência: "
                  >
                    criar impedimentos sistemáticos para que o outro genitor
                    tenha contato com o filho — seja com desculpas, seja com
                    mudança de residência sem comunicação.
                  </ArticleListItem>

                  <ArticleListItem
                    label="2"
                    title="Campanha de desqualificação:"
                  >
                    fazer comentários negativos sobre o outro genitor na
                    presença da criança, usar os filhos como mensageiros de
                    conflitos ou tentar destruir a imagem do ex-cônjuge.
                  </ArticleListItem>

                  <ArticleListItem label="3" title="Falsas denúncias:">
                    inventar ou exagerar situações de abuso, maus-tratos ou
                    negligência para justificar o afastamento da criança do
                    outro genitor — prática que além de alienação parental pode
                    configurar crime.
                  </ArticleListItem>

                  <ArticleListItem label="4" title="Controle de informações:">
                    omitir dados sobre a saúde, escola ou vida da criança do
                    outro genitor, ou impedir que ele participe de decisões que
                    lhe cabem pela guarda compartilhada.
                  </ArticleListItem>
                </ul>

                <Reveal animation="fade-up" delayClass="delay-150">
                  <p className="text-lg md:text-xl text-primary-75 mb-4">
                    Quando identificada, a alienação parental pode resultar em
                    advertência ao alienador, multa, alteração da guarda para o
                    genitor prejudicado e, em casos graves, suspensão da
                    autoridade parental. A documentação de cada episódio é
                    fundamental para comprovar o padrão de comportamento.
                  </p>
                </Reveal>

                <ArticleCard variant="green">
                  Se você está sendo impedido de ter contato com seu filho ou
                  percebe sinais de que a criança está sendo manipulada contra
                  você, é possível solicitar ao juiz medidas urgentes —
                  inclusive a regulamentação judicial das visitas com
                  acompanhamento.
                </ArticleCard>
              </ArticleSection>

              <ArticleSection
                id="section-6"
                title="6. Quando é possível revisar guarda ou pensão já definidas?"
              >
                <Reveal animation="fade-up" delayClass="delay-150">
                  <p className="text-lg md:text-xl text-primary-75 mb-4">
                    Uma decisão sobre guarda ou alimentos não é definitiva para
                    sempre. A lei prevê expressamente a possibilidade de revisão
                    sempre que houver mudança relevante nas circunstâncias que
                    fundamentaram a decisão original — o chamado{" "}
                    <span className="font-semibold whitespace-nowrap">
                      fato superveniente.
                    </span>
                  </p>
                </Reveal>

                <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(min(100%,336px),1fr))] mb-4">
                  <ArticleFeatureCard
                    eyebrow="Revisão de pensão — cabível quando"
                    title="Mudança na renda do alimentante"
                    description="Perda de emprego, redução salarial significativa ou mudança de atividade podem justificar a redução do valor. Da mesma forma, aumento de renda pode embasar pedido de majoração."
                  />

                  <ArticleFeatureCard
                    eyebrow="Revisão de pensão — cabível quando"
                    title="Mudança nas necessidades do alimentado"
                    description="Entrada na faculdade, início de tratamento médico, ou ao contrário, obtenção de emprego pelo filho maior, são situações que podem alterar o valor devido."
                  />

                  <ArticleFeatureCard
                    eyebrow="Revisão de guarda — cabível quando"
                    title="Mudança no ambiente de vida"
                    description="Mudança de cidade, novo casamento, alteração na rotina de trabalho ou surgimento de conflitos graves no lar onde a criança reside podem justificar a revisão da guarda."
                  />

                  <ArticleFeatureCard
                    eyebrow="Revisão de guarda — urgente quando"
                    title="Risco à integridade do menor"
                    description="Situações de negligência, abuso ou exposição a risco justificam pedido de alteração de guarda com tutela de urgência — decisão que pode ser obtida em horas."
                  />
                </div>

                <ArticleCard variant="yellow">
                  A revisão não é automática — precisa ser requerida formalmente
                  ao juízo que acompanha o caso. E enquanto não há nova decisão,
                  a obrigação atual continua valendo. Não deixe de pagar a
                  pensão por conta própria sem autorização judicial — isso pode
                  gerar dívida e risco de prisão.
                </ArticleCard>
              </ArticleSection>

              <ArticleSection
                id="section-7"
                title="7. Como conduzir esse processo com segurança na prática?"
              >
                <Reveal animation="fade-up" delayClass="delay-150">
                  <div className="text-lg md:text-xl text-primary-75 grid gap-4 mb-4">
                    <p>
                      Questões de família envolvem, ao mesmo tempo, direitos
                      patrimoniais relevantes e vínculos emocionais profundos —
                      uma combinação que torna o processo ainda mais delicado e
                      exige uma abordagem jurídica equilibrada.
                    </p>
                    <p>
                      <span className="font-medium">
                        Quando há acordo entre as partes:
                      </span>{" "}
                      mesmo quando o divórcio é consensual e as partes chegaram
                      a um entendimento, é fundamental que cada um tenha seu
                      próprio advogado para revisar o que está sendo assinado.
                      Acordos mal redigidos ou incompletos criam brechas que
                      geram litígios futuros — especialmente sobre guarda e
                      alimentos.
                    </p>
                    <p>
                      <span className="font-medium">Quando não há acordo:</span>{" "}
                      o divórcio litigioso exige uma estratégia jurídica bem
                      definida desde o início. Provas de patrimônio, registros
                      de convivência com os filhos, documentação de gastos e
                      histórico de renda são elementos que precisam ser reunidos
                      antes mesmo de ingressar com a ação.
                    </p>
                    <p>
                      <span className="font-medium">
                        Medidas urgentes disponíveis:
                      </span>{" "}
                      em situações de risco — seja para a integridade dos
                      filhos, seja para a preservação do patrimônio —, é
                      possível requerer ao juiz medidas liminares que incluem
                      bloqueio de bens para evitar dilapidação do patrimônio,
                      regulamentação provisória de visitas e guarda, fixação de
                      alimentos provisórios com pagamento imediato, e
                      afastamento do lar em casos de violência doméstica.
                    </p>
                  </div>
                </Reveal>

                <ArticleCard variant="green">
                  A separação não precisa ser um processo destruidor. Com
                  orientação jurídica adequada, é possível proteger seus
                  direitos, garantir o bem-estar dos filhos e encerrar o vínculo
                  com segurança — evitando que decisões tomadas sob pressão
                  emocional gerem consequências jurídicas por anos.
                </ArticleCard>
              </ArticleSection>

              <ArticleCTA
                title="Está passando por um processo de separação ou tem dúvidas sobre guarda, pensão ou divisão de bens?"
                description={
                  <>
                    Nossos advogados analisam seu caso sem compromisso e
                    <br />
                    ajudam a tomar as decisões certas no momento mais
                    importante.
                  </>
                }
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
