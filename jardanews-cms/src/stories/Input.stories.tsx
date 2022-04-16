import { Story, Meta } from "@storybook/react";
import Input, { InputProps } from "../components/Input/Input";

export default {
  title: "Simple/Input",
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: "e.g.: Jon Doe",
};

export const WithLabelAndPlaceholder = Template.bind({});
WithLabelAndPlaceholder.args = {
  label: "Name",
  placeholder: "e.g.: Jon Doe",
};

export const WithLabelAndContent = Template.bind({});
WithLabelAndContent.args = {
  label: "Name",
  placeholder: "e.g.: Jon Doe",
  value: "Jon doe",
};

export const WithContent = Template.bind({});
WithContent.args = {
  value: "Jon doe",
};
