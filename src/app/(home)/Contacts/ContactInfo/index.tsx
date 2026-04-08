import { CONTACTS_INFO } from "./contactinfo";

type HandleClickParams = {
  href: string | null;
  description: string;
};

function handleClick({ href, description }: HandleClickParams) {
  if (!href) {
    return;
  }

  if (typeof navigator !== "undefined" && navigator.clipboard) {
    navigator.clipboard.writeText(description).catch(() => {});
  }

  window.open(href, "_blank", "noopener,noreferrer");
}

export default function ContactInfo() {
  return (
    <section
      aria-labelledby="contact-list-heading"
      className="grid max-xs:gap-4 xs:gap-6"
    >
      <h2 id="contact-list-heading" className="sr-only">
        Informações de Contato
      </h2>

      {CONTACTS_INFO.map(({ title, description, href, Icon }) => {
        const isClickable = Boolean(href);

        return (
          <article
            key={title}
            role="region"
            aria-label={title}
            onClick={() => isClickable && handleClick({ href, description })}
            className={`grid grid-cols-[auto_1fr] gap-3 items-center max-w-max ${isClickable ? "cursor-pointer hover:bg-primary/10" : ""}`}
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleClick({ href, description });
              }}
              disabled={!isClickable}
              className="max-xs:w-12 max-xs:h-12 xs:w-16 xs:h-16 md:w-22 md:h-22 bg-primary-dark rounded-full flex items-center justify-center disabled:opacity-50"
              aria-label={
                isClickable
                  ? `Abrir ${title} e copiar para área de transferência`
                  : title
              }
            >
              <Icon
                aria-hidden="true"
                className="max-xs:w-6 max-xs:h-6 xs:w-8 xs:h-8 md:w-10 md:h-10 text-secondary-75"
              />
            </button>

            <div className="grid gap-1">
              <h3 className="text-xl md:text-2xl text-secondary font-medium">
                {title}
              </h3>
              <p className="italic max-xs:text-base xs:text-lg md:text-xl text-secondary-75 whitespace-pre-line">
                {description}
              </p>
            </div>
          </article>
        );
      })}
    </section>
  );
}
