import RocketIcon from "public/icons/rocket.svg";
import EyeIcon from "public/icons/eye.svg";
import ScaleIcon from "public/icons/scale.svg";

export const pillars = [
  {
    title: "Missão",
    description:
      "Oferecer soluções jurídicas eficazes, com foco em resolver problemas de forma estratégica e segura.",
    Icon: RocketIcon,
  },
  {
    title: "Visão",
    description:
      "Ser referência em atendimento jurídico personalizado, com agilidade, transparência e confiança.",
    Icon: EyeIcon,
    delayClass: "delay-200",
  },
  {
    title: "Valores",
    description:
      "Atendimento personalizado, análise detalhada de cada caso e facilidade de contato online e presencial.",
    Icon: ScaleIcon,
    itemClassName:
      "md:max-lg:col-span-2 md:w-full md:max-w-md md:justify-self-center lg:max-w-none",
    iconClassName: "text-primary stroke-[2.5] w-6 h-6",
    delayClass: "delay-300",
  },
];
