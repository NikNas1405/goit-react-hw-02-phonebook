import {
  ContactListStyled,
  ContactListItem,
  ContactListItemText,
  ContactListItemButton,
} from './contact-list.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ContactListStyled>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id}>
          <ContactListItemText>
            {name}: {number}
          </ContactListItemText>
          <ContactListItemButton onClick={() => onDelete(id)}>
            {' '}
            Delete{' '}
          </ContactListItemButton>
        </ContactListItem>
      ))}
    </ContactListStyled>
  );
};
