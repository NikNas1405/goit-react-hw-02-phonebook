// import { List, ListItem } from './QuizList.styled';

export const ContactList = ({
  contacts,
  // onDelete
}) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <div>
            <p>
              {name}: {number}
            </p>
            {/* <button onClick={() => onDelete(id)}>Delete</button> */}
          </div>
        </li>
      ))}
    </ul>
  );
};
