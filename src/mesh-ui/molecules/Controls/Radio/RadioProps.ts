interface Option {
  label?: string;
  value?: any;
  [x: string]: any;
}

export interface RadioProps {
  options: Option[];
  defaultSelectFirst?: number;
  onSelection: (selectedOption: Option) => void;
}
