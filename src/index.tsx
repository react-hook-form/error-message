import * as React from 'react';
import { useFormContext } from 'react-hook-form';

type ErrorFields = Record<string, { message?: string; type: string }>;

const RHFError = <Errors extends ErrorFields, Name extends keyof Errors>({
  as,
  errors: errorsFromProps,
  name,
  messages = {},
}: {
  as?: React.ReactElement;
  errors?: Errors;
  name: Name;
  messages?: Record<string, string>;
}) => {
  const methods = useFormContext();
  const errors = errorsFromProps || methods.errors;
  // @ts-ignore
  const message = errors[name].message || messages[errors[name].type];

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
