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

export default function RealEstateLaw() {
  return (
    <>
      <Header />

      <main
        id="conteudo-principal"
        className="bg-secondary flex flex-1 flex-col items-center justify-between w-full"
      >
        <article className="w-full">
          <ArticleHero
            eyebrow="Direito Imobiliário"
            title={
              <>
                Compra de imóvel: <br />
                os cuidados que podem <br className="max-xs:hidden md:hidden" />
                evitar prejuízos e <br className="md:hidden" /> dores de cabeça
              </>
            }
            description="Comprar um imóvel é uma das decisões financeiras mais importantes da vida — e também uma das que mais concentra riscos jurídicos. Dívidas ocultas, documentação irregular, contratos desequilibrados e problemas com construtoras são armadilhas que afetam milhares de compradores todos os anos. Saber o que verificar antes de assinar pode fazer toda a diferença."
            image={{
              src: "/images/real-estate-law.jpg",
              alt: "Casal recebendo as chaves de um imóvel novo após compra, simbolizando aquisição de casa própria",
            }}
          />

          <div className="max-xs:px-4 max-md:px-6 pt-18 pb-25 md:pb-32 md:px-8 lg:px-20 w-full">
            <div className="max-w-211.5 mx-auto grid gap-18">
              <ArticleTOC
                items={[
                  {
                    id: "section-1",
                    label: "Quais os principais riscos na compra de um imóvel?",
                  },
                  {
                    id: "section-2",
                    label:
                      "Quais documentos verificar antes de fechar negócio?",
                  },
                  {
                    id: "section-3",
                    label: "O que analisar no contrato de compra e venda?",
                  },
                  {
                    id: "section-4",
                    label: "Compra na planta: direitos e riscos específicos?",
                  },
                  {
                    id: "section-5",
                    label:
                      "O que fazer quando o imóvel tem problema após a compra?",
                  },
                  {
                    id: "section-6",
                    label:
                      "Quando o vendedor ou a construtora podem ser responsabilizados?",
                  },
                  {
                    id: "section-7",
                    label: "Como proteger sua compra na prática?",
                  },
                ]}
              />

              <ArticleSection
                id="section-1"
                title="1. Quais os principais riscos na compra de um imóvel?"
              >
                <p className="text-lg md:text-xl text-primary-75 grid gap-4 mb-4">
                  A compra de um imóvel envolve uma cadeia longa de documentos,
                  partes e obrigações — e em qualquer elo dessa cadeia pode
                  surgir um problema que comprometa toda a transação. Conhecer
                  os riscos mais comuns é o primeiro passo para se proteger.
                </p>

                <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(min(100%,336px),1fr))] mb-4">
                  <ArticleFeatureCard
                    eyebrow="Risco jurídico"
                    title="Dívidas ocultas do vendedor"
                    description="Débitos do vendedor em execuções fiscais, ações trabalhistas ou dívidas bancárias podem recair sobre o imóvel, mesmo após a venda — comprometendo a posse do comprador."
                  />

                  <ArticleFeatureCard
                    eyebrow="Risco jurídico"
                    title="Irregularidade na matrícula"
                    description="Imóveis com matrícula desatualizada, construções não averbadas ou situações de espólio sem inventário podem gerar impedimentos legais para a transferência da propriedade."
                  />

                  <ArticleFeatureCard
                    eyebrow="Risco financeiro"
                    title="Débitos de IPTU e condomínio"
                    description="Dívidas de IPTU e cotas de condomínio em atraso acompanham o imóvel — não o antigo dono. O comprador que não verifica assume essas dívidas automaticamente."
                  />

                  <ArticleFeatureCard
                    eyebrow="Risco contratual"
                    title="Cláusulas abusivas no contrato"
                    description="Contratos de construtoras e imobiliárias frequentemente contêm cláusulas desequilibradas que penalizam exclusivamente o comprador em caso de rescisão ou atraso."
                  />

                  <ArticleFeatureCard
                    eyebrow="Risco na planta"
                    title="Atraso ou abandono de obra"
                    description="Construtoras que atrasam a entrega, entregam imóveis com defeitos ou encerram atividades deixam compradores em situação de grande prejuízo financeiro e emocional."
                  />

                  <ArticleFeatureCard
                    eyebrow="Risco de fraude"
                    title="Venda por quem não é dono"
                    description="Golpes envolvendo procurações falsas, herdeiros que vendem imóveis sem autorização dos demais ou proprietários com restrições judiciais são mais frequentes do que parecem."
                  />
                </div>

                <ArticleCard variant="red">
                  A maioria desses problemas pode ser detectada antes da
                  assinatura do contrato — com a análise correta dos documentos.
                  O que custa caro é descobrir o problema depois que o negócio
                  já foi fechado.
                </ArticleCard>
              </ArticleSection>

              <ArticleSection
                id="section-2"
                title="2. Quais documentos verificar antes de fechar negócio?"
              >
                <p className="text-lg md:text-xl text-primary-75 grid gap-4 mb-4">
                  A diligência documental — conhecida no meio jurídico como due
                  diligence imobiliária — é o conjunto de verificações que deve
                  ser feito antes de qualquer assinatura. Ela protege o
                  comprador de surpresas que podem custar muito mais do que o
                  próprio imóvel.
                </p>

                <ul className="grid gap-4 mb-4">
                  <ArticleListItem
                    label="1"
                    title="Matrícula atualizada do imóvel:"
                  >
                    solicite a certidão de matrícula atualizada no Cartório de
                    Registro de Imóveis. Ela revela o histórico completo do bem
                    — proprietários anteriores, ônus, penhoras, hipotecas e
                    restrições registradas.
                  </ArticleListItem>

                  <ArticleListItem
                    label="2"
                    title="Certidões negativas do vendedor:"
                  >
                    verifique a existência de ações cíveis, execuções fiscais,
                    dívidas trabalhistas e protestos no nome do vendedor —
                    especialmente se pessoa jurídica. Uma dívida grande pode
                    levar à penhora do imóvel mesmo após a venda.
                  </ArticleListItem>

                  <ArticleListItem label="3" title="Débitos de IPTU:">
                    solicite a certidão de débitos do imóvel junto à Prefeitura.
                    Débitos de IPTU têm caráter propter rem — ou seja,
                    acompanham o imóvel independentemente de quem seja o dono.
                  </ArticleListItem>

                  <ArticleListItem label="4" title="Situação do condomínio:">
                    para imóveis em condomínio, solicite declaração da
                    administradora informando a inexistência de débitos em
                    aberto. Dívidas condominiais também acompanham o imóvel.
                  </ArticleListItem>

                  <ArticleListItem
                    label="5"
                    title="Habite-se e regularidade da construção:"
                  >
                    verifique se o imóvel possui o Habite-se (Certificado de
                    Conclusão de Obra) e se todas as construções ou reformas
                    estão devidamente averbadas na matrícula e aprovadas pela
                    Prefeitura.
                  </ArticleListItem>

                  <ArticleListItem
                    label="6"
                    title="Identidade e capacidade do vendedor:"
                  >
                    confirme que quem está vendendo é realmente o proprietário
                    registrado, que está em plena capacidade civil e que não há
                    restrições judiciais impedindo a alienação do bem.
                  </ArticleListItem>
                </ul>

                <ArticleCard variant="yellow">
                  A análise documental parece burocrática, mas é o único
                  mecanismo real de proteção do comprador. Um advogado
                  especializado em direito imobiliário consegue realizar toda
                  essa verificação com muito mais rapidez e segurança do que o
                  comprador sozinho.
                </ArticleCard>
              </ArticleSection>

              <ArticleSection
                id="section-3"
                title="3. O que analisar no contrato de compra e venda?"
              >
                <p className="text-lg md:text-xl text-primary-75 grid gap-4 mb-4">
                  O contrato de compra e venda é o documento que regula os
                  direitos e obrigações de ambas as partes — e é exatamente nele
                  que surgem as maiores armadilhas para o comprador desatento.
                  Alguns pontos merecem atenção especial antes da assinatura.
                </p>

                <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(min(100%,336px),1fr))] mb-4">
                  <ArticleFeatureCard
                    eyebrow="Atenção redobrada"
                    title="Cláusula de rescisão unilateral"
                    description="Contratos que permitem à construtora ou vendedor rescindir o negócio com multa irrisória, enquanto penalizam o comprador com retenções elevadas, são abusivos e contestáveis."
                  />

                  <ArticleFeatureCard
                    eyebrow="Atenção redobrada"
                    title="Prazo e tolerância para entrega"
                    description='Verifique o prazo de entrega e o chamado "prazo de tolerância" — que não pode ultrapassar 180 dias. Atrasos além desse limite dão direito a rescisão com devolução integral ou indenização.'
                  />

                  <ArticleFeatureCard
                    eyebrow="Atenção redobrada"
                    title="Reajuste e índice de correção"
                    description="O índice que corrige as parcelas deve estar claramente definido no contrato. Reajustes unilaterais ou indexadores não previamente acordados podem ser questionados na Justiça."
                  />

                  <ArticleFeatureCard
                    eyebrow="Verificar presença"
                    title="Descrição detalhada do imóvel"
                    description="Área, metragem, número de matrícula, localização e especificações de acabamento devem constar de forma clara — especialmente em contratos de imóveis na planta."
                  />

                  <ArticleFeatureCard
                    eyebrow="Verificar presença"
                    title="Responsabilidade por vícios"
                    description="O contrato deve prever a responsabilidade do vendedor ou construtora por vícios ocultos e defeitos de construção — com prazos compatíveis com a legislação."
                  />

                  <ArticleFeatureCard
                    eyebrow="Verificar presença"
                    title="Condições para transferência"
                    description="Deve estar claro quando e como a escritura definitiva será lavrada e registrada, quem arca com os custos de cartório e o que acontece em caso de financiamento bancário."
                  />
                </div>

                <ArticleCard variant="yellow">
                  Nunca assine um contrato imobiliário sem antes submetê-lo à
                  análise de um advogado. Ajustes no contrato antes da
                  assinatura são simples — contestar cláusulas depois que o
                  negócio está fechado é lento, custoso e incerto.
                </ArticleCard>
              </ArticleSection>

              <ArticleSection
                id="section-4"
                title="4. Compra na planta: direitos e riscos específicos?"
              >
                <div className="text-lg md:text-xl text-primary-75 grid gap-4 mb-4">
                  <p>
                    A compra de imóvel na planta tem dinâmica própria e
                    concentra riscos que não existem em transações de imóveis
                    prontos. O comprador paga por algo que ainda não existe — e
                    fica sujeito ao cumprimento de obrigações por parte da
                    construtora por anos.
                  </p>
                  <p>
                    A boa notícia é que a legislação brasileira protege esse
                    comprador de forma expressiva. A Lei nº 4.591/1964, o Código
                    de Defesa do Consumidor e a Lei nº 13.786/2018 (Lei do
                    Distrato) estabelecem regras claras que as construtoras são
                    obrigadas a cumprir.
                  </p>
                </div>

                <ul className="grid gap-4 mb-4">
                  <ArticleListItem label="1" title="Atraso na entrega:">
                    o comprador tem direito a multa por atraso — geralmente 1%
                    ao mês sobre o valor pago — e pode optar pela rescisão com
                    devolução integral dos valores pagos corrigidos, além de
                    indenização por lucros cessantes (aluguel do período).
                  </ArticleListItem>

                  <ArticleListItem label="2" title="Defeitos na entrega:">
                    vícios de construção detectados na vistoria ou nos primeiros
                    anos de uso geram obrigação de reparo pela construtora. O
                    prazo de garantia é de 5 anos para vícios estruturais e 1
                    ano para acabamentos, conforme o Código Civil.
                  </ArticleListItem>

                  <ArticleListItem
                    label="3"
                    title="Área menor que a prometida:"
                  >
                    se o imóvel entregue tiver área inferior à contratada em
                    mais de 5%, o comprador pode exigir complementação, redução
                    proporcional do preço ou rescisão do contrato.
                  </ArticleListItem>

                  <ArticleListItem label="4" title="Rescisão pelo comprador:">
                    em caso de desistência, a Lei do Distrato limita a retenção
                    pela construtora a 25% do valor pago (ou 50% em casos de
                    patrimônio de afetação). O restante deve ser devolvido
                    corrigido.
                  </ArticleListItem>
                </ul>

                <ArticleCard variant="red">
                  Construtoras frequentemente tentam reter valores acima do
                  permitido por lei em casos de rescisão, ou ignoram prazos de
                  entrega sem oferecer a compensação devida. Esses abusos têm
                  solução judicial com alta taxa de êxito.
                </ArticleCard>
              </ArticleSection>

              <ArticleSection
                id="section-5"
                title="5. O que fazer quando o imóvel tem problema após a compra?"
              >
                <p className="text-lg md:text-xl text-primary-75 grid gap-4 mb-4">
                  Descobrir um problema no imóvel depois que o contrato foi
                  assinado e o pagamento realizado é uma situação que gera
                  angústia — mas nem sempre significa prejuízo inevitável. A lei
                  protege o comprador em diversas situações, mesmo após a
                  conclusão do negócio.
                </p>

                <ul className="grid gap-4 mb-4">
                  <ArticleListItem
                    label="1"
                    title="Registre o problema imediatamente:"
                  >
                    fotografe, documente e notifique a outra parte por escrito
                    assim que identificar o defeito ou irregularidade. O prazo
                    para agir começa a contar a partir da ciência do problema.
                  </ArticleListItem>

                  <ArticleListItem
                    label="2"
                    title="Identifique se é vício aparente ou oculto:"
                  >
                    vícios aparentes devem ser reclamados na entrega ou logo
                    após. Vícios ocultos — aqueles que só se manifestam com o
                    tempo, como infiltrações e problemas estruturais — têm prazo
                    próprio e podem ser cobrados mesmo anos depois.
                  </ArticleListItem>

                  <ArticleListItem
                    label="3"
                    title="Verifique se o problema estava na documentação:"
                  >
                    dívidas e restrições que não foram informadas ao comprador e
                    que não apareceriam em uma análise diligente podem gerar
                    responsabilidade do vendedor por evicção — ou seja, você
                    pode ser indenizado.
                  </ArticleListItem>

                  <ArticleListItem
                    label="4"
                    title="Não faça reparos por conta própria sem orientação:"
                  >
                    em casos de defeitos de construção, realizar reparos sem
                    antes notificar formalmente a construtora pode dificultar a
                    responsabilização posterior. Documente antes de qualquer
                    intervenção.
                  </ArticleListItem>

                  <ArticleListItem
                    label="5"
                    title="Consulte um advogado imobiliário: "
                  >
                    cada situação tem prazos e caminhos distintos. A orientação
                    especializada evita que você tome medidas que enfraqueçam
                    sua posição jurídica antes mesmo de iniciar qualquer
                    cobrança.
                  </ArticleListItem>
                </ul>
              </ArticleSection>

              <ArticleSection
                id="section-6"
                title="6. Quando o vendedor ou a construtora podem ser responsabilizados?"
              >
                <div className="text-lg md:text-xl text-primary-75 grid gap-4 mb-4">
                  <p>
                    A responsabilidade do vendedor e da construtora vai além do
                    momento da assinatura do contrato. A lei estabelece
                    obrigações que se estendem por anos após a conclusão do
                    negócio — e o comprador que conhece esses prazos está em
                    posição muito mais forte para buscar reparação.
                  </p>
                  <p>
                    <span className="font-medium">
                      Responsabilidade do vendedor por evicção:
                    </span>{" "}
                    se o comprador perder o imóvel — total ou parcialmente — por
                    decisão judicial decorrente de um direito anterior que o
                    vendedor omitiu, tem direito à devolução do preço pago,
                    acrescido de indenização por perdas e danos.
                  </p>
                  <p>
                    <span className="font-medium">
                      Responsabilidade por vícios redibitórios:
                    </span>{" "}
                    defeitos ocultos que tornam o imóvel impróprio para uso ou
                    que reduzem seu valor podem ser cobrados do vendedor no
                    prazo de um ano para imóveis usados e de até cinco anos para
                    imóveis novos. O comprador pode exigir o abatimento do
                    preço, o reparo do defeito ou a rescisão do contrato.
                  </p>
                  <p>
                    <span className="font-medium">
                      Responsabilidade da construtora:
                    </span>{" "}
                    além das garantias legais, construtoras respondem pelos
                    vícios da obra independentemente de culpa — a chamada
                    responsabilidade objetiva pelo fato do produto, prevista no
                    Código de Defesa do Consumidor.
                  </p>
                </div>

                <ArticleCard variant="green">
                  Os prazos para responsabilizar vendedor ou construtora variam
                  entre 1 e 5 anos dependendo do tipo de problema. Identificou
                  algo errado com seu imóvel? Não deixe o tempo passar —
                  consulte um advogado para saber se ainda está dentro do prazo.
                </ArticleCard>
              </ArticleSection>

              <ArticleSection
                id="section-7"
                title="7. Como proteger sua compra na prática"
              >
                <div className="text-lg md:text-xl text-primary-75 grid gap-4 mb-4">
                  <p>
                    A proteção jurídica na compra de um imóvel começa muito
                    antes da assinatura do contrato — e pode continuar sendo
                    necessária por anos após a conclusão do negócio. Há dois
                    momentos distintos em que a atuação de um advogado faz
                    diferença real.
                  </p>
                  <p>
                    <span className="font-medium">
                      Antes da compra — prevenção:
                    </span>{" "}
                    a análise prévia da documentação do imóvel e do vendedor, a
                    revisão do contrato e a orientação sobre os riscos
                    específicos da transação são os serviços que mais evitam
                    problemas. Resolver uma pendência antes da assinatura custa
                    uma fração do que custa resolver um litígio depois.
                  </p>
                  <p>
                    <span className="font-medium">
                      Após a compra — resolução:
                    </span>{" "}
                    quando o problema já ocorreu — seja atraso de obra, defeito
                    no imóvel, dívida oculta ou contrato abusivo — o caminho
                    jurídico pode incluir notificação extrajudicial para
                    resolução rápida, ação de indenização por perdas e danos,
                    revisão ou rescisão contratual com devolução de valores, e
                    medidas liminares para suspender cobranças indevidas ou
                    preservar o bem.
                  </p>
                  <p>
                    Em ambos os casos, agir com orientação especializada é o que
                    separa quem resolve a situação de quem convive com o
                    problema por anos sem saber por onde começar.
                  </p>
                </div>

                <ArticleCard variant="green">
                  Os prazos para responsabilizar vendedor ou construtora variam
                  entre 1 e 5 anos dependendo do tipo de problema. Identificou
                  algo errado com seu imóvel? Não deixe o tempo passar —
                  consulte um advogado para saber se ainda está dentro do prazo.
                </ArticleCard>
              </ArticleSection>

              <ArticleCTA
                title={
                  <>
                    Vai comprar um imóvel e quer garantir que a transação seja
                    <br /> segura ou Já comprou e identificou algum problema?
                  </>
                }
                description={
                  <>
                    Nossos advogados analisam seu caso sem compromisso e indicam
                    <br />o melhor caminho para proteger seu patrimônio.
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
