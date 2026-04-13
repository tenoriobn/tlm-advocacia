import Image from "next/image";
import type { ProfileImageProps } from "./profileImage.type";
import Reveal from "src/components/Reveal";

export default function ProfileImage({ mobile = false }: ProfileImageProps) {
  return (
    <Reveal animation="fade-up">
      <figure
        className={
          mobile
            ? "xl:hidden relative w-full mb-12"
            : "hidden xl:block relative h-full"
        }
      >
        <div className="absolute top-0 right-0 bottom-0 left-[calc(50%-50vw)] 3xl:left-0 bg-primary rounded-r-sm 3xl:rounded-sm" />

        <div
          className={
            mobile
              ? "relative w-full aspect-16/10 max-h-110 rounded-sm overflow-hidden"
              : "relative w-full h-full min-h-105 rounded-sm overflow-hidden"
          }
        >
          <Image
            alt="Foto de perfil do advogado Paulo L. Martinez"
            src="/images/foto-perfil-advogado.avif"
            fill
            sizes="(max-width: 768px) 90vw, 600px"
            className="object-contain object-bottom max-xs:pt-4 xs:pt-6"
            priority
          />
        </div>
      </figure>
    </Reveal>
  );
}
