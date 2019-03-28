<p align="center">
  <img src="/logo.png" />
  <br/><br/>
  <b>Babel plugin that lets you create files with JSX only</b>
  <br/><br/>
  <img src="https://img.shields.io/badge/experimental-AF-red.svg"/> <a href="https://travis-ci.org/siddharthkp/jsxo"><img src="https://travis-ci.org/siddharthkp/jsxo.svg?branch=master&maxAge=3600"/></a> <img src="https://sid.studio/dx-badge.svg"/>
</p>

&nbsp;

Babel plugin that lets you write files with _JSX only_ and converts them into components at compile time.

Sometimes I need the power of components but miss the simplicity of writing HTML files. (especially for presentation components).

This is a _let the bots do the work_ solution.

&nbsp;

You can create a file called `about.js` and put only the JSX you need, feels like HTML ❤️

```js
<div>Hi, My name is Sid</div>
```

This will be transpiled to:

```js
import React from 'react'

function About(props) {
  return <div>Hi, my name is Sid</div>
}

export default About
```

That component name is picked up from the file name.

&nbsp;

#### Supports props:

  ```js
  <div>Hi my name is {props.name}</div>
  ```

#### Supports local variables:

  ```js
  const name = "Sid";

  <div>Hi my name is {name}</div>
  ```


#### Supports imports:

  ```js
  import Input from './input';

  <form>
    <label for="name">Name</label>
    <Input id="name"/>
  </form>
  ```

#### Can be imported into other files

  `my-input.js`
  ```js
  <input type="text" {...props} />
  ```

  `form.js`
  ```js
  import Input from './my-input';

  <form>
    <label for="name">Name</label>
    <Input id="name"/>
  </form>
  ```

&nbsp;

### Usage

Step 1. Install dependency

```
npm install babel-plugin-jsxo --dev

yarn add babel-plugin-jsxo --dev
```

Step 2. Drop it in your `babel` config as a plugin

```js
{
  "presets": ["@babel/preset-react"],
  "plugins": ["jsxo"]
}
```

&nbsp;

#### Usage with create-react-app

It might be possible to write a [babel macro](https://github.com/kentcdodds/babel-plugin-macros) for this, I'm not sure 🤷

&nbsp;

### like it?

:star: this repo

&nbsp;

### license

MIT © [siddharthkp](https://github.com/siddharthkp)
