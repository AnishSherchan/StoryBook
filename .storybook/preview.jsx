/** @type { import('@storybook/react').Preview } */
import Wrapper from "../src/components/Wrapper/Wrapper";
const preview = {
  decorators: [(story) => <Wrapper>{story()}</Wrapper>],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
