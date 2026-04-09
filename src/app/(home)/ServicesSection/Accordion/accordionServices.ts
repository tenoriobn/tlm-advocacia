import BriefcaseIcon from "public/icons/briefcase.svg";
import BuildingLibraryIcon from "public/icons/building-library.svg";
import GlobeIcon from "public/icons/globe.svg";
import HomeIcon from "public/icons/home.svg";
import ShoppingCartIcon from "public/icons/shopping-cart.svg";
import UserGroupIcon from "public/icons/user-group.svg";

export const SERVICES = [
  {
    id: 1,
    title: "Advogado do Consumidor",
    Icon: ShoppingCartIcon,
    description:
      "Atuação em problemas com planos de saúde, cobranças indevidas, fraudes bancárias, atraso de voo, extravio de bagagem e defeitos em produtos ou serviços. Também inclui golpes digitais, bloqueios de conta e questões com concessionárias e construtoras.",
    whatsappMessage:
      "Olá, gostaria de falar sobre um caso de Direito do Consumidor. Preciso de orientação sobre meu problema.",
  },
  {
    id: 2,
    title: "Advogado Trabalhista",
    Icon: BriefcaseIcon,
    description:
      "Atuação em demissões, direitos trabalhistas, horas extras, vínculo empregatício, assédio moral, acidentes de trabalho e doenças ocupacionais. Experiência em demandas de bancários e profissionais da saúde.",
    whatsappMessage:
      "Olá, gostaria de falar sobre um caso Trabalhista. Preciso de orientação sobre meus direitos.",
  },
  {
    id: 3,
    title: "Advogado Imobiliário",
    Icon: HomeIcon,
    description:
      "Assessoria em compra e venda de imóveis, análise de contratos, regularização, usucapião, locações, despejos e conflitos imobiliários. Atuação para evitar riscos e garantir segurança jurídica.",
    whatsappMessage:
      "Olá, gostaria de falar sobre um caso Imobiliário. Preciso de orientação jurídica para agir com segurança.",
  },
  {
    id: 4,
    title: "Advogado de Família",
    Icon: UserGroupIcon,
    description:
      "Atuação em divórcio, pensão, guarda, inventário, testamento e planejamento patrimonial. Orientação jurídica para decisões seguras em momentos sensíveis.",
    whatsappMessage:
      "Olá, gostaria de falar sobre um caso de Família. Preciso de orientação para tomar a melhor decisão.",
  },
  {
    id: 5,
    title: "Advogado Ambiental",
    Icon: GlobeIcon,
    description:
      "Atuação em danos ambientais, licenciamento, autos de infração e defesa em ações civis públicas. Orientação para prevenir riscos legais.",
    whatsappMessage:
      "Olá, gostaria de falar sobre um caso Ambiental. Preciso de orientação para conduzir essa situação.",
  },
  {
    id: 6,
    title: "Advogado em Direito Público",
    Icon: BuildingLibraryIcon,
    description:
      "Atuação em processos administrativos, mandados de segurança, autuações e demandas com órgãos públicos. Suporte jurídico para conduzir com segurança.",
    whatsappMessage:
      "Olá, gostaria de falar sobre um caso de Direito Público. Preciso de orientação para os próximos passos.",
  },
] as const;
