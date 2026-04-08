import PhoneMobileIcon from "public/icons/phone-mobile.svg";
import PhoneIcon from "public/icons/phone.svg";
import InboxIcon from "public/icons/inbox.svg";
import LocationIcon from "public/icons/location.svg";
import CalendarIcon from "public/icons/calendar.svg";

export const CONTACTS_INFO = [
  {
    title: "Celular",
    description: "(11) 99940-3955",
    Icon: PhoneMobileIcon,
    href: "tel:+5511999403955",
  },
  {
    title: "Telefone",
    description: "(11) 2601-0614",
    Icon: PhoneIcon,
    href: "tel:+551126010614",
  },
  {
    title: "Email",
    description: "contato@tlmadvocacia.com.br",
    Icon: InboxIcon,
    href: "mailto:contato@tlmadvocacia.com.br",
  },
  {
    title: "Endereço",
    description: "Rua Pereira Jácome, 132 – Mooca, São Paulo/SP",
    Icon: LocationIcon,
    href: "https://www.google.com/maps/search/?api=1&query=TLM+Advocacia+R+Pereira+Jacome+132+Sala+01+Alto+da+Mooca+Sao+Paulo+SP+03181-080",
  },
  {
    title: "Atendimento",
    description: "Online: 9h às 22h\nPresencial: com agendamento",
    Icon: CalendarIcon,
    href: null, // sem ação de clique
  },
];
