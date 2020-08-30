import React from 'react';
import {
  Assign,
  FieldName,
  Message,
  MultipleFieldErrors,
  FieldErrors,
} from 'react-hook-form';

export type FieldValuesFromFieldErrors<
  TFieldErrors
> = TFieldErrors extends FieldErrors<infer TFieldValues> ? TFieldValues : never;

type AsProps<TAs> = TAs extends undefined
  ? {}
  : TAs extends React.ReactElement
  ? Record<string, any>
  : TAs extends React.ComponentType<infer P>
  ? P
  : TAs extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[TAs]
  : never;

export type Props<
  TFieldErrors extends FieldErrors,
  TAs extends
    | undefined
    | React.ReactElement
    | React.ComponentType<any>
    | keyof JSX.IntrinsicElements
> = Assign<
  {
    as?: TAs;
    errors?: TFieldErrors;
    name: FieldName<FieldValuesFromFieldErrors<TFieldErrors>>;
    message?: Message;
    render?: (data: {
      message: Message;
      messages?: MultipleFieldErrors;
    }) => React.ReactNode;
  },
  AsProps<TAs>
>;
