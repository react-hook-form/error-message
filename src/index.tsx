import * as React from 'react';
import {
  useFormContext,
  FieldErrors,
  FieldError,
  FieldName,
} from 'react-hook-form';
import get from './utils/get';
import { FormValuesFromErrors, ErrorMessages } from './types';

const RHFError = <
  Errors extends FieldErrors<any>,
  Name extends FieldName<FormValuesFromErrors<Errors>>
>({
  as,
  errors: errorsFromProps,
  name,
  messages = {},
}: {
  as?: React.ReactElement;
  errors?: Errors;
  name: Name;
  messages?: ErrorMessages;
}) => {
  const methods = useFormContext();
  const errors = errorsFromProps || (methods.errors as Errors);
  const error = get(errors, name) as FieldError | undefined;
  const message = error && (error.message || messages[error.type]);
  if (!message) {
    return null;
  }

  return as ? (
    React.cloneElement(as, { children: message })
  ) : (
    <span>{message}</span>
  );
};

export { RHFError };
