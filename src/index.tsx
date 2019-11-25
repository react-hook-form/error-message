import * as React from 'react';

const RHFError = ({
  as,
  errors,
  name,
  messages,
}: {
  as: any;
  errors: any;
  name: string;
  messages: any;
}) => {
  const message = errors[name]?.message || messages[errors[name].type];

  if (!message) {
    return null;
  }

  return as ? React.cloneElement(as, { children: message }) : message;
};

export { RHFError };
