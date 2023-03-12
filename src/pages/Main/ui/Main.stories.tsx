import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import Main from './Main';

export default {
  title: 'pages/Main',
  component: Main,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Main>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Main> = (args) => <Main {...args} />;

export const Normal = Template.bind({});

Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
