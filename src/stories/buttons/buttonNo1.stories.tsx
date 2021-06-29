import * as React from "react";
import { Story } from "@storybook/react/types-6-0";
import ButtonNo1 from "../../components/atoms/buttons/buttonNo1";

export default {
  title: "Button No.1",
  component: ButtonNo1,
};

const dummyData = {
  text: "test button",
  width: "100px",
  height: "20px",
  borderRadius: "10px",
  func: () => console.log("test"),
};

const Template: Story = () => <ButtonNo1 {...dummyData} />;

export const ButtonNumberOne = Template.bind({});
