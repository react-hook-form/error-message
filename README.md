<div align="center">
    <p align="center">
        <a href="https://react-hook-form.com" title="React Hook Form - Simple React forms validation">
            <img src="https://raw.githubusercontent.com/bluebill1049/react-hook-form/master/website/logo.png" alt="React Hook Form Logo - React hook custom hook for form validation" width="300px" />
        </a>
    </p>
</div>

<p align="center">Performant, flexible and extensible forms with easy to use validation.</p>

<div align="center">

[![npm downloads](https://img.shields.io/npm/dm/react-hook-form-error.svg?style=flat-square)](https://www.npmjs.com/package/react-hook-form-error)
[![npm](https://img.shields.io/npm/dt/react-hook-form-error.svg?style=flat-square)](https://www.npmjs.com/package/react-hook-form-error)
[![npm](https://badgen.net/bundlephobia/minzip/react-hook-form-error)](https://badgen.net/bundlephobia/minzip/react-hook-form-error)
[![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=React+hooks+for+form+validation+without+the+hassle&url=https://github.com/bluebill1049/react-hook-form-error)&nbsp;[![Join the community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/react-hook-form-error)

</div>

## Install

    $ npm install react-hook-form-error

## Demo

Check out this <a href="https://codesandbox.io/s/react-hook-form-hookforminput-rzu9s">demo</a>.

## Quickstart

```jsx
import React from 'react';
import useForm from 'react-hook-form';
import { RHFError } from 'react-hook-form-error';

function App() {
  const { handleSubmit, register, errors } = useForm();

  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <input name="test" ref={register} />
      <RHFError name="test" errors={errors} />
      <button>submit</button>
    </form>
  );
}
```

## API

| Prop       | Type      | Required | Default | Description                                                                                                                                                     |
| :--------- | :-------- | :------: | :-----: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`     | string    |    ✓     |         | Unique name to register the custom input                                                                                                                        |
| `errors`   | Object    |    ✓     |         | (optional when using <a href="https://react-hook-form.com/api#errors">errors</a>) React Hook Form <a href="https://react-hook-form.com/api#setValue">errors</a> |
| `as`       | Component |          |         | Component reference eg: `Select` from `react-select`                                                                                                            |
| `messages` | Object    |          |         | keys of error type's message                                                                                                                                    |

## Contributors

Thanks goes to these wonderful people. [[Become a contributor](CONTRIBUTING.md)].

<a href="https://github.com/react-hook-form/react-hook-form/graphs/contributors">
    <img src="https://opencollective.com/react-hook-form/contributors.svg?width=950" />
</a>

## Backers

Thank goes to all our backers! [[Become a backer](https://opencollective.com/react-hook-form#backer)].

<a href="https://opencollective.com/react-hook-form#backers">
    <img src="https://opencollective.com/react-hook-form/backers.svg?width=950" />
</a>
