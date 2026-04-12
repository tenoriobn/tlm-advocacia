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

export default function LaborLaw() {
  return (
    <>
      <Header />

      <main
        id="conteudo-principal"
        className="bg-secondary flex flex-1 flex-col items-center justify-between w-full"
      >
        <article className="w-full">
          <ArticleHero
            eyebrow="Direito Trabalhista"
            title={
              <>
                Fui demitido: <br />
                quais são meus direitos{" "}
                <br className="hidden xs:max-lg:block" /> e o que a empresa é{" "}
                <br className="hidden sm:max-lg:block" /> obrigada a pagar?
              </>
            }
            description="A demissão é um dos momentos em que mais direitos trabalhistas são desrespeitados — seja por omissão da empresa, por pressão para assinar documentos apressadamente ou por simples desconhecimento do trabalhador. Saber o que você tem direito a receber pode fazer uma diferença significativa no valor da sua rescisão."
            image={{
              src: "/images/labor-law.jpg",
              alt: "Trabalhador segurando caixa com pertences após demissão, analisando documento de rescisão",
            }}
          />

          <div className="max-xs:px-4 max-md:px-6 pt-18 pb-25 md:pb-32 md:px-8 lg:px-20 w-full">
            <div className="max-w-211.5 mx-auto grid gap-18">
              <ArticleTOC
                items={[
                  {
                    id: "section-1",
                    label:
                      "Quais os tipos de demissão e o que muda em cada caso?",
                  },
                  {
                    id: "section-2",
                    label: "O que a empresa é obrigada a pagar na rescisão?",
                  },
                  {
                    id: "section-3",
                    label:
                      "Quando o trabalhador tem direito ao seguro-desemprego?",
                  },
                  {
                    id: "section-4",
                    label: "O que é demissão indireta e quando ela se aplica?",
                  },
                  {
                    id: "section-5",
                    label:
                      "Situações em que a demissão pode ser considerada ilegal?",
                  },
                  {
                    id: "section-6",
                    label: "O que fazer antes de assinar a rescisão?",
                  },
                  {
                    id: "section-7",
                    label: "Como cobrar direitos trabalhistas na prática?",
                  },
                ]}
              />

              <ArticleSection
                id="section-1"
                title="1. Quais os tipos de demissão e o que muda em cada caso?"
              >
                <p className="text-lg md:text-xl text-primary-75 grid gap-4 mb-4">
                  O tipo de demissão define diretamente quais verbas rescisórias
                  o trabalhador tem direito a receber. Entender essa diferença é
                  o primeiro passo para verificar se a rescisão foi calculada
                  corretamente.
                </p>

                <ul className="grid gap-4 mb-4">
                  <ArticleListItem label="1" title="Demissão sem justa causa:">
                    a empresa encerra o contrato sem necessidade de
                    justificativa. O trabalhador tem direito a aviso prévio,
                    multa de 40% do FGTS, liberação do saldo do FGTS e
                    seguro-desemprego.
                  </ArticleListItem>

                  <ArticleListItem label="2" title="Demissão por justa causa:">
                    ocorre quando o empregado comete falta grave prevista na
                    CLT. Nesse caso, perdem-se o aviso prévio, a multa do FGTS e
                    o seguro-desemprego — restando apenas saldo de salário e
                    férias vencidas.
                  </ArticleListItem>

                  <ArticleListItem label="3" title="Pedido de demissão:">
                    o próprio trabalhador decide encerrar o contrato. Deve
                    cumprir ou indenizar o aviso prévio, e perde o direito à
                    multa do FGTS e ao seguro-desemprego.
                  </ArticleListItem>

                  <ArticleListItem label="4" title="Demissão indireta:">
                    o trabalhador rompe o contrato por falta grave cometida pela
                    empresa. Garante todos os direitos da demissão sem justa
                    causa — incluindo multa do FGTS e seguro-desemprego.
                  </ArticleListItem>

                  <ArticleListItem label="5" title="Acordo mútuo (§6º CLT):">
                    ambas as partes concordam com o encerramento. O aviso prévio
                    e a multa do FGTS são reduzidos à metade, e o
                    seguro-desemprego não é devido.
                  </ArticleListItem>
                </ul>

                <ArticleCard variant="red">
                  Empresas frequentemente pressionam o trabalhador a pedir
                  demissão ou a aceitar um acordo informal para evitar o
                  pagamento da multa do FGTS e impedir o acesso ao
                  seguro-desemprego. Nunca assine nada sem entender exatamente o
                  que está perdendo.
                </ArticleCard>
              </ArticleSection>

              <ArticleSection
                id="section-2"
                title="2. O que a empresa é obrigada a pagar na rescisão"
              >
                <p className="text-lg md:text-xl text-primary-75 grid gap-4 mb-4">
                  As verbas rescisórias variam conforme o tipo de demissão, mas
                  há um conjunto de direitos que se aplica à maioria das
                  situações de desligamento. Confira o que deve constar no seu
                  acerto.
                </p>

                <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(min(100%,336px),1fr))] mb-4">
                  <ArticleFeatureCard
                    eyebrow="Sempre devido"
                    title="Saldo de salário"
                    description="Dias trabalhados no mês da demissão que ainda não foram pagos, calculados proporcionalmente."
                  />

                  <ArticleFeatureCard
                    eyebrow="Sempre devido"
                    title="Férias vencidas e proporcionais"
                    description="Férias que o trabalhador tinha direito e não gozou, mais o proporcional ao período trabalhado no último ciclo — ambas acrescidas de 1/3."
                  />

                  <ArticleFeatureCard
                    eyebrow="Sempre devido"
                    title="13º salário proporcional"
                    description="Valor proporcional aos meses trabalhados no ano da demissão, calculado sobre o salário bruto."
                  />

                  <ArticleFeatureCard
                    eyebrow="Sem justa causa"
                    title="Aviso prévio"
                    description="30 dias de aviso mínimo, acrescido de 3 dias por ano trabalhado, limitado a 90 dias — podido ou indenizado."
                  />

                  <ArticleFeatureCard
                    eyebrow="Sem justa causa"
                    title="Multa de 40% do FGTS"
                    description="Incide sobre o saldo total do FGTS acumulado durante o contrato, incluindo os depósitos de aviso prévio indenizado."
                  />

                  <ArticleFeatureCard
                    eyebrow="Sem justa causa"
                    title="Liberação do FGTS"
                    description="O trabalhador tem direito a sacar o saldo total do FGTS, que deve ser liberado pela empresa para movimentação."
                  />
                </div>

                <ArticleCard variant="yellow">
                  Além das verbas listadas, o trabalhador pode ter direito a
                  horas extras não pagas, banco de horas com saldo positivo,
                  comissões pendentes, PLR proporcional e outros valores
                  acumulados durante o contrato. Tudo isso deve constar na
                  rescisão.
                </ArticleCard>
              </ArticleSection>

              <ArticleSection
                id="section-3"
                title="3. Quando o trabalhador tem direito ao seguro-desemprego"
              >
                <p className="text-lg md:text-xl text-primary-75 grid gap-4 mb-4">
                  O seguro-desemprego é um benefício pago pelo governo ao
                  trabalhador demitido sem justa causa, destinado a garantir
                  renda durante o período de recolocação. Para ter direito, é
                  preciso atender alguns requisitos mínimos estabelecidos em
                  lei.
                </p>

                <ul className="grid gap-4 mb-4">
                  <ArticleListItem label="1" title="Primeiro pedido:">
                    ter trabalhado com carteira assinada por pelo menos 12 meses
                    nos últimos 18 meses anteriores à demissão.
                  </ArticleListItem>

                  <ArticleListItem label="2" title="Segundo pedido:">
                    ter trabalhado com carteira assinada por pelo menos 9 meses
                    nos últimos 12 meses anteriores à demissão.
                  </ArticleListItem>

                  <ArticleListItem label="3" title="Terceiro pedido em diante:">
                    ter trabalhado por pelo menos 6 meses com carteira assinada
                    imediatamente antes da demissão.
                  </ArticleListItem>
                </ul>

                <p className="text-lg md:text-xl text-primary-75 grid gap-4 mb-4">
                  Além dos requisitos de tempo, o trabalhador não pode ter outra
                  fonte de renda suficiente para sustentar a si e a família, nem
                  estar recebendo outro benefício previdenciário — com exceção
                  do auxílio-acidente e da pensão por morte.
                </p>

                <ArticleCard variant="yellow">
                  O prazo para solicitar o seguro-desemprego vai do 7º ao 120º
                  dia após a demissão. Não perca esse prazo — depois disso, o
                  direito é perdido independentemente das circunstâncias.
                </ArticleCard>
              </ArticleSection>

              <ArticleSection
                id="section-4"
                title="4. O que é demissão indireta e quando ela se aplica"
              >
                <div className="text-lg md:text-xl text-primary-75 grid gap-4 mb-4">
                  <p>
                    A demissão indireta é o direito que o trabalhador tem de
                    romper o contrato de trabalho por culpa da empresa — e ainda
                    assim receber todos os direitos como se tivesse sido
                    demitido sem justa causa, incluindo multa do FGTS, aviso
                    prévio indenizado e seguro-desemprego.
                  </p>
                  <p>
                    Ela é aplicável quando a empresa comete falta grave que
                    torne insustentável a continuidade do vínculo empregatício.
                    As situações mais reconhecidas pela Justiça do Trabalho
                    incluem:
                  </p>
                </div>

                <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(min(100%,336px),1fr))] mb-4">
                  <ArticleFeatureCard
                    eyebrow="Falta grave do empregador"
                    title="Atraso ou falta de pagamento"
                    description="Salários pagos sistematicamente com atraso ou deixados de pagar configuram descumprimento grave do contrato."
                  />

                  <ArticleFeatureCard
                    eyebrow="Falta grave do empregador"
                    title="Assédio moral ou sexual"
                    description="Situações de humilhação, pressão psicológica, constrangimento ou abuso praticados por superiores ou pela própria empresa."
                  />

                  <ArticleFeatureCard
                    eyebrow="Falta grave do empregador"
                    title="Redução ilegal de salário"
                    description="Diminuição do salário sem acordo coletivo ou sem respaldo legal, incluindo a retirada de benefícios habituais."
                  />

                  <ArticleFeatureCard
                    eyebrow="Falta grave do empregador"
                    title="Desvio de função"
                    description="Exigir que o trabalhador exerça funções diferentes das contratadas de forma contínua, especialmente com acúmulo de atividades sem remuneração."
                  />

                  <ArticleFeatureCard
                    eyebrow="Falta grave do empregador"
                    title="Não recolhimento do FGTS"
                    description="Deixar de depositar o FGTS durante o contrato é uma das irregularidades mais comuns e pode fundamentar a demissão indireta."
                  />

                  <ArticleFeatureCard
                    eyebrow="Falta grave do empregador"
                    title="Ambiente de trabalho insalubre"
                    description="Manter condições de trabalho que ofereçam risco à saúde ou integridade física do trabalhador sem as devidas proteções legais."
                  />
                </div>

                <ArticleCard variant="yellow">
                  Muitos trabalhadores pedem demissão quando na verdade estão
                  sendo vítimas de uma falta grave da empresa — e com isso
                  perdem direitos significativos. Antes de pedir demissão em
                  situações difíceis, consulte um advogado.
                </ArticleCard>
              </ArticleSection>

              <ArticleSection
                id="section-5"
                title="5. Situações em que a demissão pode ser considerada ilegal"
              >
                <p className="text-lg md:text-xl text-primary-75 grid gap-4 mb-4">
                  Nem toda demissão é válida. A legislação trabalhista
                  brasileira prevê uma série de situações em que o trabalhador
                  possui estabilidade no emprego — ou seja, a empresa não pode
                  dispensá-lo, e caso o faça, a demissão pode ser anulada ou o
                  trabalhador tem direito a indenização equivalente ao período
                  de estabilidade.
                </p>

                <ul className="grid gap-4 mb-4">
                  <ArticleListItem
                    label="A"
                    title="Gestante ou em licença-maternidade:"
                  >
                    a trabalhadora grávida tem estabilidade desde a confirmação
                    da gravidez até cinco meses após o parto, independentemente
                    de ter comunicado a empresa.
                  </ArticleListItem>

                  <ArticleListItem
                    label="B"
                    title="Acidente de trabalho ou doença ocupacional:"
                  >
                    após retornar de afastamento por acidente de trabalho, o
                    trabalhador tem estabilidade mínima de 12 meses — mesmo que
                    já tenha recebido alta do INSS.
                  </ArticleListItem>

                  <ArticleListItem
                    label="C"
                    title="Membro de CIPA ou candidato:"
                  >
                    representantes e candidatos à Comissão Interna de Prevenção
                    de Acidentes têm estabilidade durante o mandato e por 12
                    meses após o término.
                  </ArticleListItem>

                  <ArticleListItem label="D" title="Dirigente sindical:">
                    o representante sindical tem estabilidade durante o
                    exercício do mandato e por um ano após o seu término.
                  </ArticleListItem>

                  <ArticleListItem
                    label="E"
                    title="Próximo à aposentadoria (por norma coletiva):"
                  >
                    muitas convenções coletivas preveem estabilidade
                    pré-aposentadoria. Vale verificar o acordo da categoria.
                  </ArticleListItem>
                </ul>

                <ArticleCard variant="red">
                  Se você se enquadra em alguma dessas situações e foi demitido
                  mesmo assim, a demissão pode ser revertida judicialmente ou
                  convertida em indenização. O prazo para agir é de dois anos
                  após o desligamento.
                </ArticleCard>
              </ArticleSection>

              <ArticleSection
                id="section-6"
                title="6. O que fazer antes de assinar a rescisão"
              >
                <p className="text-lg md:text-xl text-primary-75 grid gap-4 mb-4">
                  A rescisão é um documento com consequências jurídicas
                  importantes. Assinar sem verificar o conteúdo pode significar
                  abrir mão de valores que você tem direito a receber. Siga
                  estes passos antes de qualquer assinatura.
                </p>

                <ul className="grid gap-4 mb-4">
                  <ArticleListItem
                    label="1"
                    title="Não assine no mesmo dia da demissão:"
                  >
                    a empresa deve conceder prazo para você analisar o
                    documento. Se houver pressão para assinar imediatamente,
                    isso já é um sinal de alerta.
                  </ArticleListItem>

                  <ArticleListItem
                    label="2"
                    title="Confira todas as verbas listadas:"
                  >
                    compare o que está sendo pago com o que você tem direito —
                    saldo de salário, férias, 13º, aviso prévio, multa do FGTS e
                    demais verbas devidas no seu caso.
                  </ArticleListItem>

                  <ArticleListItem
                    label="3"
                    title="Verifique o tipo de rescisão registrado:"
                  >
                    certifique-se de que o documento indica corretamente se foi
                    demissão sem justa causa, pedido de demissão ou outra
                    modalidade — isso impacta diretamente os seus direitos.
                  </ArticleListItem>

                  <ArticleListItem
                    label="4"
                    title="Cheque o histórico de FGTS:"
                  >
                    antes de assinar, acesse o extrato do FGTS pelo aplicativo
                    do FGTS e confira se todos os depósitos foram feitos
                    corretamente durante o período do contrato.
                  </ArticleListItem>

                  <ArticleListItem
                    label="5"
                    title="Consulte um advogado trabalhista:"
                  >
                    especialmente em contratos longos, com benefícios variáveis
                    ou em situações de estabilidade, uma revisão profissional
                    pode identificar valores esquecidos ou calculados de forma
                    errada que somam quantias expressivas.
                  </ArticleListItem>
                </ul>
              </ArticleSection>

              <ArticleSection
                id="section-7"
                title="7. Como resolver essa situação na prática?"
              >
                <div className="text-lg md:text-xl text-primary-75 grid gap-4 mb-4">
                  <p>
                    Se após a demissão você identificar que a rescisão foi paga
                    de forma incompleta, que verbas foram calculadas errado ou
                    que a empresa descumpriu obrigações durante o contrato,
                    existem caminhos concretos para buscar o que é seu.
                  </p>
                  <p>
                    <span className="font-medium">
                      Negociação direta ou extrajudicial:
                    </span>{" "}
                    em alguns casos, a simples notificação formal enviada por um
                    advogado já é suficiente para que a empresa corrija os
                    valores sem necessidade de processo. Esse caminho é mais
                    rápido e evita desgastes desnecessários.
                  </p>
                  <p>
                    <span className="font-medium">
                      Reclamação trabalhista (ação na Justiça do Trabalho):
                    </span>{" "}
                    quando a negociação não resolve, o trabalhador pode
                    ingressar com reclamação trabalhista na Vara do Trabalho da
                    sua cidade. O prazo para entrar com ação após a demissão é
                    de dois anos — e os direitos podem ser cobrados
                    retroativamente pelos últimos cinco anos do contrato.
                  </p>
                  <p>
                    <span className="font-medium">
                      O que pode ser cobrado judicialmente:
                    </span>{" "}
                    além das verbas rescisórias não pagas, é possível cobrar
                    horas extras não quitadas, adicional noturno, insalubridade
                    ou periculosidade, intervalo intrajornada suprimido,
                    diferenças salariais por desvio de função, e danos morais em
                    casos de assédio ou dispensa discriminatória.
                  </p>
                </div>

                <ArticleCard variant="green">
                  A Justiça do Trabalho é uma das mais acessíveis do sistema
                  judiciário brasileiro. Em muitos casos, o trabalhador não
                  precisa nem pagar custas processuais. O prazo de dois anos
                  após a demissão é o único limite — depois disso, o direito
                  prescreve.
                </ArticleCard>
              </ArticleSection>

              <ArticleCTA
                title="Foi demitido e tem dúvidas se recebeu tudo corretamente ou identificou que a empresa descumpriu direitos durante o contrato?"
                description={
                  <>
                    Nossos advogados analisam seu caso sem compromisso e
                    <br />
                    indicam o que pode ser cobrado.
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
