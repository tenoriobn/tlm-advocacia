"use client";
import { InputField } from "src/components/InputField";
import { TextareaField } from "src/components/TextareaField";
import { DropdownField } from "src/components/DropdownField";
import UserIcon from "public/icons/user.svg";
import EmailIcon from "public/icons/email.svg";
import PhoneIcon from "public/icons/phone-number.svg";
import ScaleIcon from "public/icons/scale.svg";
import MessageIcon from "public/icons/message.svg";
import PaperAirplaneIcon from "public/icons/paper-airplane.svg";
import LoadingIcon from "public/icons/loading.svg";
import { CASE_TYPE_OPTIONS } from "./caseTypeOptions";
import { useContactForm } from "./useContactForm";
import Reveal from "src/components/Reveal";

export default function ContactForm() {
  const { data, errors, handleChange, handleSubmit, isSubmitting } =
    useContactForm();

  return (
    <form
      aria-labelledby="contact-form-title"
      onSubmit={handleSubmit}
      className="grid gap-6 w-full h-full"
    >
      <h2 id="contact-form-title" className="sr-only">
        Formulário de contato
      </h2>

      <InputField
        icon={<UserIcon />}
        placeholder="Nome"
        value={data.name}
        onChange={(e) => handleChange("name", e.target.value)}
        error={errors.name}
        disabled={isSubmitting}
        delayClass="delay-100"
      />

      <InputField
        icon={<EmailIcon />}
        placeholder="Email"
        type="email"
        value={data.email}
        onChange={(e) => handleChange("email", e.target.value)}
        error={errors.email}
        disabled={isSubmitting}
        delayClass="delay-150"
      />

      <InputField
        icon={<PhoneIcon />}
        placeholder="Telefone"
        value={data.phone}
        onChange={(e) => handleChange("phone", e.target.value)}
        error={errors.phone}
        disabled={isSubmitting}
        delayClass="delay-200"
      />

      <DropdownField
        icon={<ScaleIcon className="w-6 h-6 stroke-2" />}
        placeholder="Tipo de caso"
        options={CASE_TYPE_OPTIONS}
        onChange={(value) => handleChange("caseType", value)}
        value={data.caseType}
        error={errors.caseType}
        isSubmitting={isSubmitting}
        delayClass="delay-250"
      />

      <TextareaField
        icon={<MessageIcon />}
        placeholder="Digite sua mensagem"
        value={data.message}
        onChange={(e) => handleChange("message", e.target.value)}
        error={errors.message}
        disabled={isSubmitting}
        delayClass="delay-300"
      />

      <Reveal animation="fade-up" delayClass="delay-350">
        <button
          disabled={isSubmitting}
          type="submit"
          className={`
          justify-self-end bg-secondary text-primary text-xl md:text-2xl font-medium rounded-sm max-xs:p-4 xs:px-6 xs:py-4 flex items-center justify-center gap-3 max-sm:w-full sm:max-w-max transition-default 
          ${
            isSubmitting
              ? "cursor-not-allowed opacity-50"
              : "cursor-pointer hover:bg-secondary-75 active:bg-secondary-50 active:scale-90 focus-visible:border-2"
          }
        `}
        >
          {isSubmitting ? (
            <LoadingIcon
              className="w-6 h-6"
              aria-hidden="true"
              focusable="false"
            />
          ) : (
            <PaperAirplaneIcon aria-hidden="true" focusable="false" />
          )}
          <span>{isSubmitting ? "Enviando Mensagem" : "Enviar Mensagem"}</span>
        </button>
      </Reveal>
    </form>
  );
}
