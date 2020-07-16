import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem/ContactListItem';
import contactsActions from '../../redux/contacts/contactsActions';
import styles from './ContactList.module.css';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={styles.list}>
      {contacts &&
        contacts.map(({ id, name, number }) => (
          <li key={id}>
            <ContactListItem
              name={name}
              number={number}
              onDeleteContact={() => onDeleteContact(id)}
            />
          </li>
        ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const { contacts, filter } = state.contacts;
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return {
    contacts: visibleContacts,
  };
};
const mapDispatchToProps = {
  onDeleteContact: contactsActions.deleteContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
