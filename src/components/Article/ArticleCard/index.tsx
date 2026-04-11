import type { ArticleCardProps } from "./articleCard.type";

const styles = {
  yellow: "bg-yellow border-l-3 border-yellow-dark text-yellow-dark",
  blue: "bg-blue-light border-l-3 border-blue-dark text-blue-dark",
  red: "bg-red-light border-l-3 border-red-dark text-red-dark",
  green: "bg-green border-l-3 border-green-dark text-green-dark",
};

export default function ArticleCard({ variant, children }: ArticleCardProps) {
  return (
    <aside className={`${styles[variant]} max-xs:p-4 xs:p-6 rounded-sm`}>
      <p className="text-lg md:text-xl">{children}</p>
    </aside>
  );
}
