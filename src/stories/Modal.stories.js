import React from 'react';
import CustomModal from '../components/Modal.jsx';

export default {
  title: 'Componentes/Modal',
  component: CustomModal,
  argTypes: {
    button: {control: 'text'},
    title: { control: 'text' },
    body: { control: 'text' },
  },
};

const Template = (args) => <CustomModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  button: 'Open Dialog',
  title: 'Modal Title',
  body: 'Modal Body Content',
};