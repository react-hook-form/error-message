import * as React from 'react';

type ErrorFields = Record<string, { message?: string; type: string }>;

const RHFError = <Errors extends ErrorFields, Name extends keyof Errors>({
  as,
  errors,
  name,
  messages,
}: {
  as: any;
  errors: Errors;
  name: Name;
  messages: Record<string, string>;
}) => {
  const message = errors[name].message || messages[errors[name].type];

  if (!message) {
    return null;
  }

  return as ? React.cloneElement(as, { children: message }) : message;
};

export { RHFError };
