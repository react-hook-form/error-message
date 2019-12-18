import * as React from 'react';
import { useFormContext } from 'react-hook-form';
import { FieldError } from 'react-hook-form/dist/types';

type ErrorFields = Record<string, FieldError>;
type ErrorMessages = Record<string, string>;

const RHFError = <Errors extends ErrorFields, Name extends keyof Errors>({
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
  const message =
    errors &&
    errors[name] &&
    (errors[name].message || messages[errors[name].type]);

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
