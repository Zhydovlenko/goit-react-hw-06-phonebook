import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contactsActions';

const Filter = ({ value, onChangeFilter }) => (
  <div>
    <p>Find contacts by name</p>
    <input
      type="text"
      value={value}
      onChange={e => onChangeFilter(e.target.value)}
    />
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = {
  onChangeFilter: contactsActions.changeFilter,
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
