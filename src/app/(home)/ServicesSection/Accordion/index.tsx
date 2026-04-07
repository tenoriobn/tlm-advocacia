"use client";

import { useState } from "react";
import ArrowIcon from "public/icons/arrow.svg";
import BriefcaseIcon from "public/icons/briefcase.svg";
import BuildingLibraryIcon from "public/icons/building-library.svg";
import GlobeIcon from "public/icons/globe.svg";
import HomeIcon from "public/icons/home.svg";
import ShoppingCartIcon from "public/icons/shopping-cart.svg";
import UserGroupIcon from "public/icons/user-group.svg";
import CaseCtaLink from "../CaseCtaLink";

const SERVICES = [
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

export default function Accordion() {
  const [openServiceId, setOpenServiceId] = useState<number>(SERVICES[0].id);

  const toggleItem = (serviceId: number) => {
    setOpenServiceId((currentId) => (currentId === serviceId ? -1 : serviceId));
  };

  return (
    <div className="w-full max-w-[1200px]">
      {SERVICES.map(({ id, title, Icon, description, whatsappMessage }) => {
        const isOpen = openServiceId === id;
        const buttonId = `service-accordion-button-${id}`;
        const panelId = `service-accordion-panel-${id}`;
        const whatsappHref = `https://wa.me/5511999403955?text=${encodeURIComponent(whatsappMessage)}`;

        return (
          <article
            key={id}
            onClick={() => toggleItem(id)}
            className={`border-b border-primary-25 max-xs:p-4 xs:p-6 cursor-pointer ${isOpen ? "bg-primary rounded-sm" : ""}`}
          >
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              className={`cursor-pointer w-full flex items-center justify-between gap-4 text-left transition-default ${isOpen ? "text-secondary mb-6" : "text-primary-75"}`}
            >
              <span className="flex items-center gap-3">
                <Icon aria-hidden="true" />
                <span className="text-xl md:text-2xl font-medium">{title}</span>
              </span>

              <ArrowIcon
                aria-hidden="true"
                className={`shrink-0 transition-transform duration-300 ease-out ${isOpen ? "rotate-180 text-secondary" : "rotate-0 text-primary-75"}`}
              />
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`
                overflow-hidden transition-[max-height,opacity] duration-300 ease-out
                ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
              `}
            >
              <p
                onClick={(event) => event.stopPropagation()}
                className="text-lg md:text-xl text-secondary-75 mb-6"
              >
                {description}
              </p>

              <CaseCtaLink
                href={whatsappHref}
                tone="secondary"
                ariaLabel={`Falar sobre o caso de ${title}`}
                onClick={(event) => event.stopPropagation()}
                className="flex"
              />
            </div>
          </article>
        );
      })}
    </div>
  );
}
