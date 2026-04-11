import type { ArticleListItemProps } from "./articleListItem.type";

export default function ArticleListItem({
  label,
  title,
  children,
}: ArticleListItemProps) {
  return (
    <li className="bg-blue-light border-l-3 border-blue-dark max-xs:p-4 xs:p-6 rounded-sm grid grid-cols-[auto_1fr] max-xs:gap-4 xs:gap-6">
      <div className="w-8 h-8 rounded-full bg-blue-dark flex items-center justify-center">
        <span className="text-blue-light">{label}</span>
      </div>

      <p className="text-lg md:text-xl text-blue-dark">
        {title && <span className="font-medium">{title}</span>} {children}
      </p>
    </li>
  );
}
