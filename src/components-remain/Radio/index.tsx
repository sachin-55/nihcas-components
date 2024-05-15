import { Label, StyledRadio } from "./style";

export type RadioButtonProps = {
  id?: string;
  name: string;
  value: string;
  checked?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
};

const Radio = ({
  name,
  value,
  checked,
  label,
  ...restProps
}: RadioButtonProps) => {
  return (
    <Label>
      <StyledRadio
        type="radio"
        name={name}
        value={value}
        checked={checked}
        {...restProps}
      />
      {label}
    </Label>
  );
};

export default Radio;
