import PaperAirplaneIcon from "public/icons/paper-airplane.svg";

export default function ContactForm() {
  return (
    <form className="grid gap-6 w-full h-full">
      <input
        id="name"
        placeholder="Nome"
        type="text"
        className="bg-primary-dark w-full rounded-sm max-xs:p-4 xs:p-6 text-xl md:text-2xl text-secondary placeholder:text-secondary-50"
      />

      <input
        id="email"
        placeholder="Email"
        type="email"
        className="bg-primary-dark w-full rounded-sm max-xs:p-4 xs:p-6 text-xl md:text-2xl text-secondary placeholder:text-secondary-50"
      />

      <input
        id="phone"
        placeholder="Telefone"
        type="tel"
        className="bg-primary-dark w-full rounded-sm max-xs:p-4 xs:p-6 text-xl md:text-2xl text-secondary placeholder:text-secondary-50"
      />

      <input
        id="type-case"
        placeholder="Tipo de caso"
        type="text"
        className="bg-primary-dark w-full rounded-sm max-xs:p-4 xs:p-6 text-xl md:text-2xl text-secondary placeholder:text-secondary-50"
      />

      <textarea
        id="message"
        placeholder="Digite sua mensagem"
        className="bg-primary-dark w-full rounded-sm max-xs:p-4 xs:p-6 text-xl md:text-2xl text-secondary placeholder:text-secondary-50 min-h-43 h-full resize-none"
      />

      <button
        className="justify-self-end bg-secondary text-primary text-xl md:text-2xl font-medium rounded-sm max-xs:p-4 xs:px-6 xs:py-4 flex items-center justify-center gap-3 max-w-max transition-default hover:bg-secondary-75 active:bg-secondary-50 active:scale-90"
        aria-label="Falar com advogado no LinkedIn"
      >
        <PaperAirplaneIcon aria-hidden="true" focusable="false" />
        <span>Enviar Mensagem</span>
      </button>
    </form>
  );
}
