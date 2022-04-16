import { Story, Meta } from "@storybook/react";
import ValueDescriptor, {
  ValueDescriptorProps,
} from "../components/ValueDescriptor/ValueDescriptor";

export default {
  title: "Simple/ValueDescriptor",
  component: ValueDescriptor,
} as Meta;

const Template: Story<ValueDescriptorProps> = (args) => (
  <ValueDescriptor {...args} />
);

export const Default = Template.bind({});
Default.args = {
  description: "Ganhos mensais",
  value: 560322.02,
};

export const Primary = Template.bind({});
Primary.args = {
  description: "Ganhos mensais",
  value: 560322.02,
  color: "primary",
};

export const DefaultCurrency = Template.bind({});
DefaultCurrency.args = {
  description: "Ganhos mensais",
  value: 560322.02,
  isCurrency: true,
};

export const PrimaryCurrency = Template.bind({});
PrimaryCurrency.args = {
  description: "Ganhos mensais",
  value: 560322.02,
  color: "primary",
  isCurrency: true,
};
