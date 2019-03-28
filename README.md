<p align="center">
  <img src="/logo.png" />
  <br/><br/>
  <b>JSXonly files</b>
  <br/><br/>
  <img src="https://travis-ci.org/siddharthkp/jsxo.svg?branch=master&maxAge=3600"/> <img src="https://sid.studio/dx-badge.svg"/>
</p>

&nbsp;

Babel plugin that lets you write files with _JSX only_ and converts them into components at compile time.

Sometimes I need the power of components but miss the simplicity of writing HTML files. This is a sweet "let the bots do the work" solution.

A file named `about.js`

```js
<div>Hi, I'm Sid</div>
```

will be transpiled to:

```js
import React from 'react'

function About(props) {
  return <div>Hi I'm Sid</div>
}

export default About
```

&nbsp;

- [x]  Supports props:

  ```js
  <div>Hi, I'm {props.name}</div>
  ```

- [x] Supports variables:

  ```js
  const name = "Sid";

  <div>Hi, I'm {props.name}</div>
  ```


- [x] Supports imports:

  ```js
  import Input from './input';

  <form>
    <label for="name">Name</label>
    <Input id="name"/>
  </form>
  ```

- [x] Can be imported into other files

  my-input.js
  ```js
  <input type="text" {...props} />
  ```

  form.js:
  ```js
  import Input from './my-input';

  <form>
    <label for="name">Name</label>
    <Input id="name"/>
  </form>
  ```

&nbsp;

#### usage

1. Install dependency

  ```
  npm install babel-plugin-jsxo --dev

  yarn add babel-plugin-jsxo --dev
  ```

2. Drop it in your `babel` config as a plugin

  ```js
  {
    "presets": ["@babel/preset-react"],
    "plugins": ["jsxo"]
  }
  ```

&nbsp;

#### usage with create-react-app

It might be possible to write a [babel macro](https://github.com/kentcdodds/babel-plugin-macros) for this, I'm not sure 🤷

&nbsp;

#### like it?

:star: this repo

&nbsp;

#### license

MIT © [siddharthkp](https://github.com/siddharthkp)
