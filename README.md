<div align="center">
    <p align="center">
        <a href="https://react-hook-form.com" title="React Hook Form - Simple React forms validation">
            <img src="https://raw.githubusercontent.com/bluebill1049/react-hook-form/master/website/logo.png" alt="React Hook Form Logo - React hook custom hook for form validation" width="300px" />
        </a>
    </p>
</div>

<p align="center">Performant, flexible and extensible forms with easy to use validation.</p>

<div align="center">

[![npm downloads](https://img.shields.io/npm/dm/error-message.svg?style=flat-square)](https://www.npmjs.com/package/error-message)
[![npm](https://img.shields.io/npm/dt/error-message.svg?style=flat-square)](https://www.npmjs.com/package/error-message)
[![npm](https://badgen.net/bundlephobia/minzip/error-message)](https://badgen.net/bundlephobia/minzip/error-message)
[![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=React+hooks+for+form+validation+without+the+hassle&url=https://github.com/rect-hook-form/error-message)
[![Join the community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/react-hook-form)

</div>

## Install

```
$ npm install @hookform/error-message
```

## Quickstart

### Single Error Message

[![Edit React Hook Form - ErrorMessage](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/error-messagemessage-pc2b6?fontsize=14&hidenavigation=1&theme=dark)

```jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from 'hookform@error-message';

export default function App() {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="singleErrorInput"
        ref={register({ required: 'This is required.' })}
      />
      <ErrorMessage errors={errors} name="singleErrorInput" />

      <ErrorMessage errors={errors} name="singleErrorInput">
        {({ message }) => <p>{message}</p>}
      </ErrorMessage>

      <input name="name" ref={register({ required: true })} />
      <ErrorMessage errors={errors} name="name" message="This is required" />

      <input type="submit" />
    </form>
  );
}
```

### Multiple Error Messages

[![Edit React Hook Form - ErrorMessage: multiple error messages](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/error-messagemessage-multiple-error-messages-cis2m?fontsize=14&hidenavigation=1&theme=dark)

```jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-messagee';

export default function App() {
  const { register, errors, handleSubmit } = useForm({
    validateCriteriaMode: 'all',
  });
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="multipleErrorInput"
        ref={register({
          required: 'This is required.',
          pattern: {
            value: /d+/,
            message: 'This input is number only.',
          },
          maxLength: {
            value: 10,
            message: 'This input exceed maxLength.',
          },
        })}
      />
      <ErrorMessage errors={errors} name="multipleErrorInput">
        {({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <p key={type}>{message}</p>
          ))
        }
      </ErrorMessage>

      <input type="submit" />
    </form>
  );
}
```

## API

| Prop       | Type                                                                                                                                                                                                                                                                  | Required | Default | Description                                                                                                                                                                              |
| :--------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------: | :-----: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`     | string                                                                                                                                                                                                                                                                |    ✓     |         | associated field name.                                                                                                                                                                   |
| `errors`   | object                                                                                                                                                                                                                                                                |          |         | errors object from React Hook Form. It's optional if you are using `FormProvider`.                                                                                                       |
| `message`  | string \| React.ReactElement                                                                                                                                                                                                                                          |          |         | inline error message.                                                                                                                                                                    |
| `as`       | string \|<br>React.ReactElement \| <br>React.ComponentType                                                                                                                                                                                                            |          |         | Wrapper component or HTML tag. eg: `as="p"`, `as={<p />}` or `as={CustomComponent}`                                                                                                      |
| `children` | (payload: {<br>&nbsp;&nbsp;message: string \| React.ReactElement;<br>&nbsp;&nbsp;messages?: Record<<br>&nbsp;&nbsp;&nbsp;&nbsp;string,<br>&nbsp;&nbsp;&nbsp;&nbsp;(string \| React.ReactElement \| boolean \| undefined)[]<br>&nbsp;&nbsp;>;<br>}) => React.ReactNode |          |         | This is a [render prop](https://reactjs.org/docs/render-props.html) for rendering error message or messages. <br>Note: you need to set validateCriteriaMode to 'all' for using messages. |

## Backers

Thank goes to all our backers! [[Become a backer](https://opencollective.com/react-hook-form#backer)].

<a href="https://opencollective.com/react-hook-form#backers">
    <img src="https://opencollective.com/react-hook-form/backers.svg?width=950" />
</a>

## Contributors

Thanks goes to these wonderful people. [[Become a contributor](CONTRIBUTING.md)].

<a href="https://github.com/react-hook-form/react-hook-form/graphs/contributors">
    <img src="https://opencollective.com/react-hook-form/contributors.svg?width=950" />
</a>
