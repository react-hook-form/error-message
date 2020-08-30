import React from 'react';
import { useFormContext, get, FieldErrors } from 'react-hook-form';
import { Props } from './types';

const ErrorMessage = <
  TFieldErrors extends FieldErrors,
  TAs extends
    | undefined
    | React.ReactElement
    | React.ComponentType<any>
    | keyof JSX.IntrinsicElements = undefined
>({
  as,
  errors,
  name,
  message,
  render,
  ...rest
}: Props<TFieldErrors, TAs>) => {
  const methods = useFormContext();
  const error = get(errors || methods.errors, name);

  if (!error) {
    return null;
  }

  const { message: messageFromRegister, types } = error;
  const props = {
    ...rest,
    children: messageFromRegister || message,
  };

  return as ? (
    React.isValidElement(as) ? (
      React.cloneElement(as, props)
    ) : (
      React.createElement(as as string, props)
    )
  ) : render ? (
    (render({
      message: messageFromRegister || message,
      messages: types,
    }) as React.ReactElement)
  ) : (
    <React.Fragment {...props} />
  );
};

export { ErrorMessage };
