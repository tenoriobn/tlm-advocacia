import Link from "next/link";
import { ADVICE_CARDS } from "./adviceCards";
import Reveal from "src/components/Reveal";

export default function AdviceCards() {
  return (
    <section aria-labelledby="advice-cards-title">
      <h2 id="advice-cards-title" className="sr-only">
        Lista de orientações jurídicas
      </h2>

      <ul className="w-full grid md:grid-cols-2 lg:grid-cols-3 grid-rows-[auto_auto_auto]">
        {ADVICE_CARDS.map(
          ({ title, description, id, linkArticle, delayClass }) => {
            const isFirst = id === 1;
            const isLast = id === ADVICE_CARDS.length;
            const isLastTwo = id > ADVICE_CARDS.length - 2;
            const isEven = id % 2 === 0;
            const isThirdCol = id % 3 === 0;
            const isTopRow = id <= 3;

            return (
              <Reveal key={title} animation="fade-up" delayClass={delayClass}>
                <article
                  className={[
                    "grid grid-rows-subgrid row-span-3 max-xs:p-4 xs:p-6 border-primary-25",
                    isFirst &&
                      "bg-primary rounded-tl-sm rounded-tr-sm rounded-bl-sm rounded-br-none",
                    !isLast && "max-md:border-b",
                    !isLastTwo && "md:max-lg:border-b",
                    !isEven && "md:max-lg:border-r",
                    isTopRow && "lg:border-b",
                    !isThirdCol && "lg:border-r",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <h3
                    className={`text-xl md:text-2xl font-medium mb-4 md:mb-6 ${
                      id === 1 ? "text-secondary" : "text-primary"
                    }`}
                  >
                    {title}
                  </h3>

                  <p
                    className={`text-lg md:text-xl leading-[140%] mb-4 md:mb-6 ${
                      id === 1 ? "text-secondary-75" : "text-primary-75"
                    }`}
                  >
                    {description}
                  </p>

                  <Link
                    href={linkArticle}
                    className={`block px-6 py-4 rounded-sm font-medium text-center text-xl md:text-2xl max-md:w-full md:w-max transition-default active:scale-95 self-start
              ${
                id === 1
                  ? "bg-secondary text-primary hover:bg-secondary-75 active:bg-secondary-50"
                  : "bg-primary text-secondary hover:bg-primary-75 active:bg-primary-50"
              }`}
                    aria-label={`Saiba mais sobre ${title}`}
                  >
                    Saber mais
                  </Link>
                </article>
              </Reveal>
            );
          },
        )}
      </ul>
    </section>
  );
}
