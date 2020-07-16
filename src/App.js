import React from 'react';
import { connect } from 'react-redux';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import Layout from './components/Layout/Layout';
import Toggler from './components/Toggler/Toggler';

import 'react-toastify/dist/ReactToastify.css';

const App = ({ contacts }) => {
  return (
    <Layout>
      <Toggler />
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length > 2 && <Filter />}
      <ContactList />
    </Layout>
  );
};

const mapStateToProps = state => ({
  contacts: state.contacts.contacts,
});

export default connect(mapStateToProps)(App);
