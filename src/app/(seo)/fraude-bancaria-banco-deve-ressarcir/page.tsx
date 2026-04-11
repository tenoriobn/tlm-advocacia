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

export default function FraudeBancaria() {
  return (
    <>
      <Header />

      <main
        id="conteudo-principal"
        className="bg-secondary flex flex-1 flex-col items-center justify-between w-full"
      >
        <article className="w-full">
          <ArticleHero
            eyebrow="Fraudes Bancárias"
            title="Fui vítima de fraude bancária: o banco é obrigado a me ressarcir?"
            description="Sofrer uma fraude ou golpe bancário gera prejuízo financeiro, transtorno emocional e, muitas vezes, negativações indevidas no nome da vítima. O que poucos sabem é que, na maioria dos casos, o banco tem responsabilidade — e você tem direito à reparação."
            image={{
              src: "/images/fraude-bancaria.jpg",
              alt: "Trabalhador preocupado após ser vítma de fraude bancária",
            }}
          />

          <div className="max-xs:px-4 max-md:px-6 pt-18 pb-25 md:pb-32 md:px-8 lg:px-20 w-full">
            <div className="max-w-211.5 mx-auto grid gap-18">
              <ArticleTOC
                items={[
                  {
                    id: "secao-1",
                    label: "Quais os principais tipos de fraudes bancárias?",
                  },
                  {
                    id: "secao-2",
                    label: "O banco tem responsabilidade em casos de fraude?",
                  },
                  {
                    id: "secao-3",
                    label:
                      "É possível ser ressarcido ou indenizado pelo banco?",
                  },
                  {
                    id: "secao-4",
                    label:
                      "O que fazer com negativações indevidas causadas pela fraude?",
                  },
                  {
                    id: "secao-5",
                    label:
                      "Quais providências tomar ao descobrir que foi vítima?",
                  },
                  {
                    id: "secao-6",
                    label: "Como resolver essa situação na prática?",
                  },
                ]}
              />

              <ArticleSection
                id="secao-1"
                title="Quais os principais tipos de fraudes bancárias?"
              >
                <p className="text-lg md:text-xl text-primary-75 grid gap-4 mb-4">
                  As fraudes bancárias evoluem constantemente, mas alguns golpes
                  são recorrentes e afetam milhares de consumidores todos os
                  anos. Conhecê-los é o primeiro passo para se proteger — e para
                  entender seus direitos caso já tenha sido vítima.
                </p>

                <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(min(100%,336px),1fr))] mb-4">
                  <ArticleFeatureCard
                    eyebrow="Fraude de identidade"
                    title="Abertura fraudulenta de conta"
                    description="A alta do INSS não extingue o vínculo empregatício. O
                      contrato de trabalho continua suspenso até que o retorno
                      seja formalizado ou a situação seja resolvida."
                  />

                  <ArticleFeatureCard
                    eyebrow="Engenharia social"
                    title="Falsa central de atendimento"
                    description="Criminosos se passam por atendentes bancários por ligação
                      ou WhatsApp e induzem a vítima a fornecer senhas e dados
                      de acesso à conta."
                  />

                  <ArticleFeatureCard
                    eyebrow="Documento adulterado"
                    title="Golpe do falso boleto"
                    description="Boletos com código de barras adulterados são enviados
                      imitando bancos ou empresas, desviando o pagamento para
                      contas de criminosos."
                  />

                  <ArticleFeatureCard
                    eyebrow="Dados do cartão"
                    title="Clonagem de cartão"
                    description="Informações do cartão são capturadas em sites falsos ou dispositivos físicos e usadas para realizar compras e transações indevidas."
                  />

                  <ArticleFeatureCard
                    eyebrow="Abordagem presencial"
                    title="Golpe do motoboy"
                    description="O fraudador, fingindo ser do banco, convence a vítima a entregar o cartão e fornecer a senha a um entregador, dando início às transações fraudulentas."
                  />

                  <ArticleFeatureCard
                    eyebrow="Endividamento forçado"
                    title="Falsa portabilidade de empréstimo"
                    description="Empresas prometem reduzir parcelas existentes, mas na prática criam novas dívidas no nome da vítima, piorando sua situação financeira."
                  />

                  <ArticleFeatureCard
                    eyebrow="Caixa eletrônico"
                    title="Falso funcionário em ATM"
                    description="Golpistas se posicionam próximos a caixas eletrônicos fingindo ajudar clientes, aproveitando para trocar cartões, capturar senhas e desviar valores."
                  />
                </div>

                <ArticleCard variant="red">
                  Se você se identificou com qualquer uma dessas situações,
                  saiba que não está sozinho — e que existem caminhos legais
                  para buscar reparação pelos prejuízos sofridos.
                </ArticleCard>
              </ArticleSection>

              <ArticleSection
                id="secao-2"
                title="O banco tem responsabilidade em casos de fraude?"
              >
                <div className="text-lg md:text-xl text-primary-75 grid gap-4 mb-4">
                  <p>
                    Sim. Os bancos são responsáveis pelos riscos inerentes à sua
                    própria atividade. Isso significa que eles têm a obrigação
                    legal de oferecer serviços seguros, proteger os dados dos
                    clientes e adotar mecanismos capazes de identificar e
                    bloquear transações suspeitas — especialmente aquelas que
                    fogem ao perfil habitual do consumidor.
                  </p>
                  <p>
                    Essa responsabilidade está expressamente prevista no Código
                    de Defesa do Consumidor, que classifica os bancos como
                    fornecedores de serviço e os obriga a responder pelos danos
                    causados a seus clientes, independentemente de culpa.
                    Trata-se da chamada responsabilidade objetiva.
                  </p>
                  <p>
                    Na prática, isso significa que, ao alegar que &quot;o
                    cliente forneceu os dados voluntariamente&quot; ou que
                    &quot;não houve falha nos sistemas&quot;, o banco não está
                    automaticamente isento. A Justiça analisa o contexto — e, na
                    maioria dos casos, entende que cabia ao banco detectar a
                    irregularidade antes que o prejuízo ocorresse.
                  </p>
                </div>

                <ArticleCard variant="yellow">
                  Mesmo que você tenha, de alguma forma, facilitado o golpe ao
                  fornecer dados, isso não elimina necessariamente a
                  responsabilidade do banco. Cada caso precisa ser analisado
                  individualmente.
                </ArticleCard>
              </ArticleSection>

              <ArticleSection
                id="secao-3"
                title="É possível ser ressarcido ou indenizado pelo banco?"
              >
                <div className="text-lg md:text-xl text-primary-75 grid gap-4 mb-4">
                  <p>
                    Sim. Na grande maioria dos casos levados à Justiça, os
                    bancos são condenados a restituir os valores perdidos pela
                    vítima e, dependendo das circunstâncias, a pagar
                    também indenização por danos morais.
                  </p>
                  <p>
                    Os danos morais são cabíveis quando a fraude gerou situações
                    como negativações indevidas no CPF da vítima, cobranças
                    abusivas, inclusão em cadastros de inadimplentes, abalo de
                    crédito ou outros transtornos comprovados.
                  </p>
                  <p>
                    O valor das indenizações varia conforme a gravidade do caso,
                    o impacto na vida da vítima e o comportamento do banco após
                    o comunicado da fraude. Casos em que o banco ignora o
                    problema ou demora a agir costumam resultar em condenações
                    mais expressivas.
                  </p>
                </div>

                <ArticleCard variant="green">
                  A reparação não se limita ao valor perdido no golpe.
                  Dependendo do caso, é possível receber de volta o prejuízo
                  financeiro mais uma indenização pelos danos morais sofridos.
                </ArticleCard>
              </ArticleSection>

              <ArticleSection
                id="secao-4"
                title="O que fazer com negativações indevidas causadas pela fraude?"
              >
                <div className="text-lg md:text-xl text-primary-75 grid gap-4 mb-4">
                  <p>
                    Um dos efeitos mais danosos das fraudes bancárias —
                    especialmente as que envolvem abertura fraudulenta de contas
                    ou contratação de crédito no nome da vítima — é a
                    negativação indevida em órgãos como Serasa e SPC.
                  </p>
                  <p>
                    Nesses casos, é possível solicitar ao juiz uma liminar, que
                    é uma decisão judicial antecipada, obtida no início do
                    processo, determinando a retirada imediata do nome da vítima
                    dos cadastros de inadimplentes enquanto o caso é analisado.
                  </p>
                  <p>
                    Essa medida é frequentemente concedida com rapidez,
                    especialmente quando há indícios claros de fraude. Isso
                    significa que, mesmo antes do fim do processo, você pode ter
                    seu nome limpo e voltar a ter acesso ao crédito normalmente.
                  </p>
                </div>

                <ArticleCard variant="yellow">
                  Não espere o processo terminar para tirar seu nome do Serasa.
                  A liminar existe exatamente para evitar que você continue
                  sendo prejudicado enquanto busca a reparação.
                </ArticleCard>
              </ArticleSection>

              <ArticleSection
                id="secao-5"
                title="Quais providências tomar ao descobrir que foi vítima?"
              >
                <p className="text-lg md:text-xl text-primary-75 grid gap-4 mb-4">
                  Agir rapidamente ao descobrir uma fraude bancária é
                  fundamental para preservar provas, minimizar prejuízos e
                  fortalecer qualquer ação futura. Siga estes passos:
                </p>

                <ul className="grid gap-4 mb-4">
                  <ArticleListItem
                    label="1"
                    title="Comunique o banco imediatamente:"
                  >
                    entre em contato pelo canal oficial e informe a ocorrência.
                    Solicite bloqueios de conta, cartões ou transações ainda em
                    processamento. Anote os números de protocolo e as datas de
                    cada contato — esses registros são essenciais.
                  </ArticleListItem>

                  <ArticleListItem
                    label="2"
                    title="Registre um boletim de ocorrência:"
                  >
                    procure a Delegacia de Crimes Cibernéticos ou a Delegacia
                    Civil mais próxima e formalize a denúncia. Sem B.O., fica
                    mais difícil comprovar a fraude em uma ação judicial.
                  </ArticleListItem>

                  <ArticleListItem
                    label="3"
                    title="Reúna e preserve todas as provas:"
                  >
                    guarde prints de mensagens, e-mails, comprovantes de
                    transações, boletos fraudados, documentos utilizados no
                    golpe e qualquer comunicação com o banco sobre o ocorrido.
                  </ArticleListItem>

                  <ArticleListItem
                    label="4"
                    title="Não assine acordos ou propostas do banco sem orientação:"
                  >
                    em alguns casos, o banco pode oferecer uma solução informal
                    ou um acordo. Antes de aceitar qualquer coisa, consulte um
                    advogado — você pode estar abrindo mão de valores maiores.
                  </ArticleListItem>

                  <ArticleListItem
                    label="5"
                    title="Busque orientação jurídica especializada:"
                  >
                    um advogado com experiência em direito bancário e do
                    consumidor consegue avaliar seu caso, identificar as
                    melhores estratégias e acelerar a resolução — inclusive com
                    medidas emergenciais como a liminar para retirada de
                    negativações.
                  </ArticleListItem>
                </ul>
              </ArticleSection>

              <ArticleSection
                id="secao-6"
                title="Como resolver essa situação na prática?"
              >
                <div className="text-lg md:text-xl text-primary-75 grid gap-4 mb-4">
                  <p>
                    A resolução de um caso de fraude bancária pode seguir
                    diferentes caminhos, dependendo da gravidade do prejuízo, do
                    comportamento do banco e das provas disponíveis.
                  </p>
                  <p>
                    <span className="font-medium">
                      Resolução extrajudicial:
                    </span>{" "}
                    em alguns casos, a atuação de um advogado junto ao banco —
                    por meio de notificações formais e negociação direta — já é
                    suficiente para obter o ressarcimento dos valores sem a
                    necessidade de processo judicial. Esse caminho é mais rápido
                    quando o banco reconhece a fraude.
                  </p>
                  <p>
                    <span className="font-medium">Ação judicial:</span> quando o
                    banco nega responsabilidade ou ignora o pedido de reparação,
                    o caminho é ingressar na Justiça. Ações dessa natureza
                    costumam ser propostas nos Juizados Especiais Cíveis ou na
                    Vara Cível, dependendo dos valores envolvidos. O banco,
                    nesse caso, é citado a se defender e, na maioria das vezes,
                    acaba condenado a ressarcir o prejuízo e pagar danos morais.
                  </p>
                  <p>
                    <span className="font-medium">Medidas emergenciais:</span>{" "}
                    em paralelo, é possível solicitar liminares para suspender
                    cobranças indevidas, bloquear negativações e até suspender
                    descontos em folha decorrentes de contratos fraudulentos —
                    medidas que protegem o consumidor enquanto o processo
                    tramita
                  </p>
                </div>

                <ArticleCard variant="green">
                  O mais importante é não deixar o tempo passar sem tomar
                  providências. A demora pode dificultar a comprovação dos fatos
                  e, em alguns casos, resultar em prescrição do direito à
                  reparação..
                </ArticleCard>
              </ArticleSection>

              <ArticleCTA
                title="Foi vítima de fraude ou golpe bancário e não sabe por onde começar?"
                description="Nossos advogados analisam seu caso sem compromisso e indicam o melhor caminho para buscar a reparação que você merece."
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
