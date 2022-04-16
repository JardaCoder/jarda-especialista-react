import Icon from "@mdi/react";
import { mdiInformation } from "@mdi/js";
import * as I from "./Info.styles";

export interface InfoProps {
  title: string;
  description: string;
}

export default function Info(props: InfoProps) {
  return (
    <I.InfoWrapper>
      <I.InfoInnerContent>
        <I.InfoIcon>
          <Icon color="#09f" size="48px" path={mdiInformation} />
        </I.InfoIcon>
        <I.InfoMessages>
          <I.InfoTitle>{props.title}</I.InfoTitle>
          <p>{props.description}</p>
        </I.InfoMessages>
      </I.InfoInnerContent>
    </I.InfoWrapper>
  );
}
