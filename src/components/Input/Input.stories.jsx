import Input from "./Input";

export default {
  title: "Input",
  component: Input,
};

export const SmallInput = () => <Input placeHolder="test" size="small" />;
export const MediumInput = () => <Input defaultValue="uaiusb" size="medium" />;
export const LargeInput = () => <Input size="large" />;
export const NoSizeProp = () => <Input />;
