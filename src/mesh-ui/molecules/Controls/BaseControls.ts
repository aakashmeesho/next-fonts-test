export interface StyleProps {
  disabled?: boolean;
  onClick: any;
  checked?: any;
}

export interface ControlProps {
  checked?: boolean;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
  ) => void;
  name?: string;
  label: string | React.ReactNode;
  disabled?: boolean;
}
