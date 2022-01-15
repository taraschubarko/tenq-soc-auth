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
