import { Story, Meta } from "@storybook/react";
import Info, { InfoProps } from "../components/Info/Info";

export default {
  title: "Simple/Info",
  component: Info,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as Meta;

const Template: Story<InfoProps> = (args) => <Info {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Post não encontrado",
  description: "Você está sendo redirecionado para lista de posts",
};
