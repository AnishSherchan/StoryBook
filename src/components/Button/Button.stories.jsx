import Button from "./Button";
import Wrapper from "../Wrapper/Wrapper";
import { action } from "@storybook/addon-actions";
import { withActions } from "@storybook/addon-actions/decorator";

export default {
  title: "Form/Button",
  component: Button,
  args: {
    // disabled: true,
    onClick: action("clicked"),
  },

  parameters: {
    actions: {
      handles: ["mouseover", "click"],
    },
  },

  // ? using decorator
  decorators: [(story) => <Wrapper>{story()}</Wrapper>, withActions],
  // ?Clicking Actions

  tags: ["autodocs"],
};

export const Primary = () => (
  <Wrapper>
    <Button variant="primary">Primary</Button>
  </Wrapper>
);
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => (
  <Button
    variant="danger"
    onClick={() => {
      console.log("object");
    }}
  >
    Danger
  </Button>
);

// ? Way of Renaming the Story
Primary.storyName = "New primary";

// ? Using args
const Template = (args) => <Button {...args} />;

// ? Creating Same Buttons from args
export const ArgsButton = Template.bind({});

ArgsButton.args = {
  variant: "Large",
  children: "Args Button",
};
