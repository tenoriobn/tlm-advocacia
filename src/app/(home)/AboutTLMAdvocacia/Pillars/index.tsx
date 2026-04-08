import { pillars } from "./pillars";

export default function Pillars() {
  return (
    <section aria-labelledby="pillars-title">
      <h2 id="pillars-title" className="sr-only">
        Pilares da atuação jurídica
      </h2>

      <ul className="mt-12 lg:mt-18 grid gap-6 md:gap-y-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-18">
        {pillars.map(
          (
            { title, description, Icon, itemClassName, iconClassName },
            index,
          ) => (
            <li
              key={title}
              className={`${itemClassName ?? ""} ${
                index > 0
                  ? "lg:relative lg:before:content-[''] lg:before:absolute lg:before:-left-9 lg:before:top-1/2 lg:before:-translate-y-1/2 lg:before:w-px lg:before:h-full lg:before:bg-primary-25"
                  : ""
              }`}
            >
              <article className="h-full">
                <header className="flex items-center max-lg:justify-center gap-3">
                  <Icon
                    aria-hidden="true"
                    focusable="false"
                    className={`${iconClassName ?? ""}`}
                  />
                  <h3 className="font-medium text-primary text-xl md:text-2xl">
                    {title}
                  </h3>
                </header>

                <p className="text-primary-75 text-lg md:text-xl max-lg:text-center mt-6">
                  {description}
                </p>
              </article>
            </li>
          ),
        )}
      </ul>
    </section>
  );
}
