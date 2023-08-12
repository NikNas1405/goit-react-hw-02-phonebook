import { TextFilter, InputFilter, ContactFilterDiv } from './filter.styled';

export const ContactFilter = ({ filter, onChange }) => {
  return (
    <ContactFilterDiv>
      <TextFilter> Find contacts by name </TextFilter>
      <InputFilter
        type="text"
        value={filter}
        onChange={evt => onChange(evt.target.value)}
      />
    </ContactFilterDiv>
  );
};
