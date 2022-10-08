import { Story, Meta } from '@storybook/react';
import { useState } from 'react';
import { Button, ButtonProps } from './theme-button';

export default {
  component: Button,
  title: 'Button',
  argTypes: {
    onClick: { action: 'onClick executed!' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => {
  const [clicked, setClicked] = useState<number>(0);
  return (
    <div className="bg-gray-100 p-20">
      <Button
        {...args}
        onClick={() => setClicked(clicked + 1)}
        text={args.text}
      />
      <div>Button has been clicked {clicked} times</div>
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  text: 'Click Me',
};
