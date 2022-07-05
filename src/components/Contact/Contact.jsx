import { ContactList, ContactItem, Delete } from './Contact.styled';
import PropTypes from 'prop-types';
function Contact({
  states: { contacts, filter = '' },
  onChangeSearchInput,
  deleteContact,
}) {
  return (
    <div>
      <input type="text" onInput={onChangeSearchInput} />
      <ContactList>
        {contacts
          .filter(({ name }) => {
            return name.toUpperCase().includes(filter.toUpperCase());
          })
          .map(({ id, name, number }) => {
            return (
              <ContactItem key={id}>
                {name}: {number}
                <Delete onClick={() => deleteContact(id)}>Delete</Delete>
              </ContactItem>
            );
          })}
      </ContactList>
    </div>
  );
}
export default Contact;

Contact.propTypes = {
  contacts: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  filter: PropTypes.string,
  deleteContact: PropTypes.func.isRequired,
  onChangeSearchInput: PropTypes.func.isRequired,
};
