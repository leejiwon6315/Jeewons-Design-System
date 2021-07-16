import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DefaultButton from "../../components/atoms/buttons/defaultButton";

export default {
  title: "Default Button",
  component: DefaultButton,
} as ComponentMeta<typeof DefaultButton>;

const Template: ComponentStory<typeof DefaultButton> = (args) => (
  <DefaultButton {...args} />
);

const testCallback = () => {
  console.log("test case");
};

export const Large = Template.bind({});
Large.args = {
  text: "Large Button",
  textColor: "white",
  size: "large",
  callback: testCallback,
};

export const Medium = Template.bind({});
Medium.args = {
  text: "Medium Button",
  textColor: "white",
  size: "medium",
  callback: testCallback,
};

export const Small = Template.bind({});
Small.args = {
  text: "Small Button",
  textColor: "white",
  size: "small",
  callback: testCallback,
};

export const justCallback = Template.bind({});
justCallback.args = {
  callback: testCallback,
};
