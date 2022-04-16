import Button from "../Button/Button";
import * as C from "./Confirm.styles";

export interface ConfirmProps {
  title: string;
  handleConfirmButton: () => void;
  handleCancelButton: () => void;
}

export default function Confirm({
  title,
  handleConfirmButton,
  handleCancelButton,
}: ConfirmProps) {
  return (
    <C.Wrapper>
      <C.Title>{title}</C.Title>
      <C.ButtonsWrapper>
        <Button label="Não" variant="danger" onClick={handleCancelButton} />
        <Button label="Sim" variant="primary" onClick={handleConfirmButton} />
      </C.ButtonsWrapper>
    </C.Wrapper>
  );
}
