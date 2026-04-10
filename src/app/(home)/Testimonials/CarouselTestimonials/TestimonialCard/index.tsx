"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import StarIcon from "public/icons/star.svg";
import VerifiedIcon from "public/icons/verified.svg";
import type { TestimonialCardProps } from "./testimonialCard.type";
import Link from "next/link";

export function TestimonialCard({
  id,
  avatar,
  name,
  testimony,
  href,
}: TestimonialCardProps) {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const [isTruncated, setIsTruncated] = useState(false);

  useEffect(() => {
    const el = paragraphRef.current;
    if (!el) {
      return;
    }
    setIsTruncated(el.scrollHeight > el.clientHeight);
  }, []);

  return (
    <article
      className="bg-primary-dark max-xs:p-4 xs:p-6 rounded-sm w-full flex flex-col h-full"
      aria-labelledby={`testimonial-${id}-name`}
      aria-describedby={`testimonial-${id}-text`}
    >
      <header className="">
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver comentário de ${name} no Google`}
          className="flex gap-3 items-center max-w-max"
        >
          <Image
            src={avatar}
            alt={`Foto de ${name}`}
            width={36}
            height={36}
            className="w-9 h-9 object-cover rounded-full"
          />
          <h3
            id={`testimonial-${id}-name`}
            className="text-xl md:text-2xl font-medium text-secondary flex items-center gap-2 min-w-0"
          >
            <span className="truncate">{name}</span>
            <VerifiedIcon
              className="w-4 h-4 shrink-0"
              aria-label="Perfil verificado"
            />
          </h3>
        </Link>
      </header>

      <div
        className="flex gap-1 max-xs:mt-4 xs:mt-6"
        role="img"
        aria-label="Avaliação: 5 de 5 estrelas"
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} aria-hidden="true" focusable="false" />
        ))}
      </div>

      <blockquote className="flex-1 mt-3">
        <p
          ref={paragraphRef}
          id={`testimonial-${id}-text`}
          className="text-lg md:text-xl italic text-secondary-75 whitespace-pre-line line-clamp-3 select-none"
        >
          {testimony}
        </p>

        {isTruncated && (
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary text-lg font-medium max-w-max block mt-3 transition-default hover:text-secondary-75 active:text-secondary-50 active:scale-90"
            aria-label={`Ler comentário completo de ${name} no Google`}
          >
            Ver avaliação
          </Link>
        )}
      </blockquote>
    </article>
  );
}
