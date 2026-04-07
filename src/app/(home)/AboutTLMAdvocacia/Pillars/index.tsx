import RocketIcon from "public/icons/rocket.svg";
import EyeIcon from "public/icons/eye.svg";
import ScaleIcon from "public/icons/scale.svg";

export default function Pillars() {
  const pillars = [
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
    },
    {
      title: "Valores",
      description:
        "Atendimento personalizado, análise detalhada de cada caso e facilidade de contato online e presencial.",
      Icon: ScaleIcon,
      itemClassName:
        "md:max-lg:col-span-2 md:w-full md:max-w-md md:justify-self-center lg:max-w-none",
    },
  ];

  return (
    <ul className="mt-12 lg:mt-18 grid gap-6 md:gap-y-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-18">
      {pillars.map(({ title, description, Icon, itemClassName }, index) => (
        <li
          key={title}
          className={`${itemClassName ?? ""} ${
            index > 0
              ? "lg:relative lg:before:content-[''] lg:before:absolute lg:before:-left-9 lg:before:top-1/2 lg:before:-translate-y-1/2 lg:before:w-px lg:before:h-full lg:before:bg-primary-25"
              : ""
          }`}
        >
          <article className="h-full">
            <div className="flex items-center max-lg:justify-center gap-3">
              <Icon aria-hidden="true" />
              <h3 className="font-medium text-primary text-xl md:text-2xl">
                {title}
              </h3>
            </div>
            <p className="text-primary-75 text-lg md:text-xl  max-lg:text-center mt-6 ">
              {description}
            </p>
          </article>
        </li>
      ))}
    </ul>
  );
}
