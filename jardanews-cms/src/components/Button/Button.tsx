import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import * as B from "./Button.styles";

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant: "danger" | "text" | "primary";
  label: string;
  disabled?: boolean;
}

export default function Button({ label, variant, ref, ...rest }: ButtonProps) {
  return (
    <B.Wrapper variant={variant} {...rest}>
      {label}
    </B.Wrapper>
  );
}
