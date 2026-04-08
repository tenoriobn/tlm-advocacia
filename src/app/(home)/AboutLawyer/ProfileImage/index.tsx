import Image from "next/image";
import type { ProfileImageProps } from "./profileImage.type";

export default function ProfileImage({ mobile = false }: ProfileImageProps) {
  return (
    <figure
      className={
        mobile
          ? "xl:hidden relative w-full mb-12"
          : "hidden xl:block relative h-full"
      }
    >
      <div className="absolute top-0 right-0 bottom-0 left-[calc(50%-50vw)] bg-primary rounded-r-sm" />

      <div
        className={
          mobile
            ? "relative w-full aspect-16/10 max-h-[440px] rounded-sm overflow-hidden"
            : "relative w-full h-full min-h-[420px] rounded-sm overflow-hidden"
        }
      >
        <Image
          alt="Foto de perfil do advogado Thiago L. Martinez"
          src="/images/foto-perfil-advogado.png"
          fill
          sizes={mobile ? "100vw" : "(min-width: 1280px) 45vw, 0px"}
          className="object-contain object-bottom"
        />
      </div>
    </figure>
  );
}
