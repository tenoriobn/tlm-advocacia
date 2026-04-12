import Image from "next/image";
import "./article.css";
import type { ArticleHeroProps } from "./articleHero.type";

export default function ArticleHero({
  eyebrow,
  title,
  description,
  image,
}: ArticleHeroProps) {
  return (
    <header className="bg-primary w-full">
      <div className="max-xs:px-4 max-md:px-6 md:px-8 lg:px-20">
        <div className="grid gap-6 justify-items-center max-w-211.5 w-full pt-42 md:pt-46 m-auto">
          <div className="bg-secondary-50 px-3 py-1.5 rounded-sm w-max">
            <p className="text-primary text-text-xs md:text-base">{eyebrow}</p>
          </div>

          <h1
            id="main-title"
            className="font-playfair text-secondary font-semibold text-center text-[clamp(1.75rem,7vw,3.125rem)] leading-[112%]"
          >
            {title}
          </h1>

          <p className="text-secondary text-lg md:text-xl text-center">
            {description}
          </p>
        </div>
      </div>

      <div className="article--diagonal-bg mt-12 md:mt-18 grid justify-center max-xs:px-4 max-md:px-6 md:px-8 lg:px-20">
        <Image
          src={image.src}
          alt={image.alt}
          width={1280}
          height={526}
          className="rounded-sm"
          priority
        />
      </div>
    </header>
  );
}
