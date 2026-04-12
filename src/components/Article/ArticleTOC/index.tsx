import type { ArticleTOCProps } from "./articleTOC.type";

export default function ArticleTOC({ items }: ArticleTOCProps) {
  return (
    <nav
      aria-labelledby="sumario-titulo"
      className="flex flex-col md:flex-row md:items-stretch items-center gap-6"
    >
      <div className="p-6 bg-blue min-w-32 min-h-39 max-w-37 flex items-center justify-center rounded-sm">
        <h2
          id="sumario-titulo"
          className="text-lg md:text-xl text-secondary uppercase"
        >
          Sumário
        </h2>
      </div>

      <ol className="text-blue text-lg md:text-xl leading-5 underline grid gap-4 list-decimal list-inside">
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.label}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
