import { Story, Meta } from "@storybook/react";
import FieldDescriptor, {
  FieldDescriptorProps,
} from "../components/FieldDescriptor/FieldDescriptor";

export default {
  title: "Simple/FieldDescriptor",
  component: FieldDescriptor,
} as Meta;

const Template: Story<FieldDescriptorProps> = (args) => (
  <FieldDescriptor {...args} />
);

export const Default = Template.bind({});
Default.args = {
  description: "Ganhos mensais",
  value: "25 de dezembro de 1999 (22 anos)",
};
