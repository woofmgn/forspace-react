import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
  StoreDecorator({
    loginForm: { username: '123', password: 'asds' },
  }),
];

export const withError = Template.bind({});
Primary.args = {};
withError.decorators = [
  StoreDecorator({
    loginForm: { username: '123', password: 'asds', error: 'ERROR' },
  }),
];

export const Loading = Template.bind({});
Primary.args = {};
Loading.decorators = [
  StoreDecorator({
    loginForm: { isLoading: true },
  }),
];
