import { FieldErrors } from 'react-hook-form';

export type FormValuesFromErrors<Errors> = Errors extends FieldErrors<
  infer FormValues
>
  ? FormValues
  : never;

export type ErrorMessages = Record<string, string>;
