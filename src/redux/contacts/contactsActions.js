import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addContact = createAction('contacts/add', (name, number) => ({
  payload: {
    contact: {
      name,
      number,
      id: shortid.generate(),
    },
  },
}));

const deleteContact = createAction('contacts/delete');
const changeFilter = createAction('contacts/filter');

export default {
  addContact,
  deleteContact,
  changeFilter,
};
