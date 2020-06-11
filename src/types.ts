import {
  FieldErrors,
  FieldName,
  Message,
  MultipleFieldErrors,
  AsProps,
  Assign,
} from 'react-hook-form';

type FieldValuesFromFieldErrors<
  TFieldErrors extends FieldErrors
> = TFieldErrors extends FieldErrors<infer TFieldValues> ? TFieldValues : never;

export type ErrorMessageProps<
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
