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
    href: "tel:+5511989400334",
  },
  {
    title: "Telefone",
    description: "(11) 9999-9999",
    Icon: PhoneIcon,
    href: "tel:+551199999999",
  },
  {
    title: "Email",
    description: "contato@psmadvocacia.com.br",
    Icon: InboxIcon,
    href: "mailto:contato@psmadvocacia.com.br",
  },
  {
    title: "Endereço",
    description: "Av. Paulista, 1578 – Bela Vista, São Paulo – SP",
    Icon: LocationIcon,
    href: "https://maps.app.goo.gl/3QrhpVRLRNajfmU66",
  },
  {
    title: "Atendimento",
    description: "Online: 9h às 22h\nPresencial: com agendamento",
    Icon: CalendarIcon,
    href: null, // sem ação de clique
  },
];
