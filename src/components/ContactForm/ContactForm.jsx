import { Component } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { Label, Input, Btn } from './ContactFom.styled';
import * as yup from 'yup';
const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().min(3).max(8).required(),
});
class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handSubmit = (valus, { resetForm }) => {
    this.props.formSubmitHandler(valus);

    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={this.state}
        validationSchema={schema}
        onSubmit={this.handSubmit}
      >
        <Form
          autoComplete="off"
          style={{
            display: 'inline-block',
            border: '1px solid green',
            padding: '10px',
            paddingRight: '150px',
          }}
        >
          <Label htmlFor="name">
            Name
            <Input type="text" name="name" />
            <ErrorMessage name="name" />
          </Label>

          <Label htmlFor="number" style={{ marginTop: '20px' }}>
            Number
            <Input type="tel" name="number" />
            <ErrorMessage name="number" />
          </Label>
          <Btn type="submit">Add contact</Btn>
        </Form>
      </Formik>
    );
  }
}
export default ContactForm;
