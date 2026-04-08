import { useState } from "react";
import type { FormData } from "./contactForm.type";

const initialState: FormData = {
  name: "",
  email: "",
  phone: "",
  caseType: "",
  message: "",
};

export function useContactForm() {
  const [data, setData] = useState<FormData>(initialState);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function formatPhone(value: string) {
    const numbers = value.replace(/\D/g, "");

    if (numbers.length <= 10) {
      return numbers
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{4})(\d)/, "$1-$2")
        .slice(0, 14);
    }

    return numbers
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .slice(0, 15);
  }

  function handleChange(field: keyof FormData, value: string) {
    const formattedValue = field === "phone" ? formatPhone(value) : value;

    setData((prev) => ({
      ...prev,
      [field]: formattedValue,
    }));

    setErrors((prev) => ({
      ...prev,
      [field]: undefined,
    }));
  }

  function validate() {
    const newErrors: Partial<FormData> = {};

    const name = data.name.trim();
    if (!name) {
      newErrors.name = "Informe seu nome";
    } else if (name.length < 3) {
      newErrors.name = "Nome muito curto";
    } else if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(name)) {
      newErrors.name = "Nome inválido";
    }

    const email = data.email.trim();
    if (!email) {
      newErrors.email = "Informe seu email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      newErrors.email = "Email inválido";
    }

    const phone = data.phone.replace(/\D/g, "");
    if (!phone) {
      newErrors.phone = "Informe seu telefone";
    } else if (phone.length < 10 || phone.length > 11) {
      newErrors.phone = "Telefone inválido";
    } else if (phone.length === 11 && phone[2] !== "9") {
      newErrors.phone = "Celular inválido";
    }

    if (!data.caseType) {
      newErrors.caseType = "Selecione uma opção";
    }

    const message = data.message.trim();
    if (!message) {
      newErrors.message = "Digite sua mensagem";
    } else if (message.length < 10) {
      newErrors.message = "Mensagem muito curta";
    } else if (message.length > 500) {
      newErrors.message = "Mensagem muito longa";
    }

    return newErrors;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setIsSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("FORM DATA:", {
        ...data,
        phone: data.phone.replace(/\D/g, ""),
      });

      setData(initialState);
      setErrors({});
    } finally {
      setIsSubmitting(false);
    }
  }

  return {
    data,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting,
  };
}
