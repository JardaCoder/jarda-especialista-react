import * as FD from "./FieldDescriptor.styles";

export interface FieldDescriptorProps {
  description: string;
  value: React.ReactNode;
}

export default function FieldDescriptor({
  description,
  value,
}: FieldDescriptorProps) {
  return (
    <FD.Wrapper>
      <span className="Description">{description}:</span>
      <span className="Value">{value}</span>
    </FD.Wrapper>
  );
}
