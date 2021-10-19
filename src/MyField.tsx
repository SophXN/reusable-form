import * as React from 'react'
import { FieldProps } from 'formik';
import { TextField, TextFieldProps } from '@material-ui/core';


// interface Props extends FieldProps {

// }

export const MyField: React.FC<FieldProps & TextFieldProps> = ({placeholder, field}) => {
  return (
    <TextField
      placeholder={placeholder}
      {...field}
    />
  );
}