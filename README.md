# tenq-soc-auth

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/tenq-soc-auth.svg)](https://www.npmjs.com/package/tenq-soc-auth) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save tenq-soc-auth
or
yarn add tenq-soc-auth
```

## Usage

```jsx
import React from 'react'

import TenqSocAuth  from 'tenq-soc-auth'
import 'tenq-soc-auth/dist/index.css'

const autEventListener = (data) => {
  console.log(data)
  console.log(JSON.stringify(data.data))
}

const App = () => {
  const host = 'https://localhost';
  return <div className={'pa-md'}>
    <br/>
    <TenqSocAuth
      provider={'google'}
      host={host}
      label={'google'}
      onAuth={autEventListener}
    />
    <br/><br/>
    <TenqSocAuth
      provider={'vkontakte'}
      host={host}
      label={'vk'}
      onAuth={autEventListener}
    />
    <br/><br/>
    <TenqSocAuth
      provider={'facebook'}
      host={host}
      label={'facebook'}
      onAuth={autEventListener}
    />

  </div>
}

export default App

```

## License

MIT © [taraschubarko](https://github.com/taraschubarko)
