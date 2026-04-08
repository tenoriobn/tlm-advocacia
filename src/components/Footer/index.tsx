import Image from "next/image";
import { SOCIAL_LINK } from "./socialLink";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary w-full max-xs:px-4 max-md:px-6 md:px-8 lg:px-20">
      <div className="max-w-[1920px] w-full m-auto border-t border-secondary-25 py-6 grid gap-6 items-center justify-items-center md:grid-cols-2 xl:flex xl:justify-between">
        <div
          className="flex items-center gap-2 md:justify-self-start xl:w-51"
          role="img"
          aria-label="TLM Advocacia OAB"
        >
          <Image
            src="/icons/logo.png"
            alt=""
            aria-hidden="true"
            width={30}
            height={40}
            className="w-7.5 h-10"
          />

          <p className="text-secondary text-lg md:text-xl font-medium">
            OAB/SP nº 28.182
          </p>
        </div>

        {/* SOCIAL */}
        <div className="flex gap-4 md:justify-self-end xl:w-51 lg:justify-end xl:order-2">
          {SOCIAL_LINK.map(({ icon: Icon, href, ariaLabel }) => (
            <Link
              key={ariaLabel}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={ariaLabel}
              className="transition-all duration-200 hover:opacity-70 active:opacity-50 active:scale-90"
            >
              <Icon aria-hidden />
            </Link>
          ))}
        </div>

        <p className="uppercase font-medium text-lg md:text-xl text-secondary text-center md:col-span-2 xl:col-span-1">
          © TLM ADVOCACIA <span className="hidden md:inline">—</span> TODOS OS
          DIREITOS RESERVADOS
        </p>
      </div>
    </footer>
  );
}
