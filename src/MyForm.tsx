import * as React from 'react';
import { TextField, Button } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}
interface Props {
  // All the types we will accept as parameters
  onSubmit: (values: Values) => void;
}

export const MyForm: React.FC<Props> = ({onSubmit}) => {
  return (
    <Formik
      initialValues={{firstName: '', lastName: '', email: ''}}
      onSubmit={values => {
        onSubmit(values)
      }}>
      {({ values, handleChange, handleBlur }) => (
        <Form>
          <div>
            <Field name="firstName" placeholder="First Name" />
            <Field name="lastName" placeholder="Last Name" />
            <Field name="email" placeholder="Email" />

            <TextField
            name="firstName"
            placeholder="firstName"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          </div>
          <div>
            <TextField
            name="lastName"
            placeholder="lastName"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          </div>
          <div>
            <TextField
            name="email"
            placeholder="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          </div>
          <Button type="submit">Submit</Button>
          <pre>
            {JSON.stringify(values, null, 2)}
          </pre>
        </Form>
      )}
    </Formik>
  )
}