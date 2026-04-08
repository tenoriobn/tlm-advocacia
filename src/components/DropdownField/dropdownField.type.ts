export type CaseTypeOption = {
  label: string;
  value: string;
};

export type DropdownFieldProps = {
  icon: React.ReactNode;
  placeholder: string;
  options: CaseTypeOption[];
  onChange?: (value: string) => void;
  value?: string;
  error?: string;
  isSubmitting?: boolean;
};
