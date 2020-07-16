import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactsActions from './contactsActions';

const addContact = (state, action) => {
  return [...state, action.payload.contact];
};

const deleteContact = (state, action) => {
  return state.filter(contact => contact.id !== action.payload);
};

const contacts = createReducer([], {
  [contactsActions.addContact]: addContact,
  [contactsActions.deleteContact]: deleteContact,
});

const filter = createReducer('', {
  [contactsActions.changeFilter]: (state, action) => action.payload,
});

export default combineReducers({
  contacts,
  filter,
});
