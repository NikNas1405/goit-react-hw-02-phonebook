import React from 'react';
import { Formik, Form, Field } from 'formik';
import { nanoid } from 'nanoid';

// Synchronous validation function
const validateName = value => {
  let errorMessage;
  if (
    !/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i.test(value)
  ) {
    errorMessage =
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";
  }
  return errorMessage;
};

const validateNumber = value => {
  let errorMessage;
  if (
    !/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i.test(
      value
    )
  ) {
    errorMessage =
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +';
  }
  return errorMessage;
};

//usage
export const Basic = ({ onAdd }) => (
  <Formik
    initialValues={{
      name: '',
      number: '',
    }}
    onSubmit={(values, actions) => {
      onAdd({ ...values, id: nanoid() });
      actions.resetForm();
      //   console.log('click');
    }}
  >
    {({ errors, touched }) => (
      <Form>
        <label htmlFor="name">Name</label>
        <Field
          validate={validateName}
          type="text"
          name="name"
          placeholder="Taras Shevchenko"
        >
          {errors.name && touched.name ? <div>{errors.name}</div> : null}
        </Field>
        <label htmlFor="number">Number</label>
        <Field
          validate={validateNumber}
          type="tel"
          name="number"
          placeholder="0501234567"
        >
          {errors.number && touched.number ? <div>{errors.number}</div> : null}
        </Field>

        <button type="submit">Add contact</button>
      </Form>
    )}
  </Formik>
);
