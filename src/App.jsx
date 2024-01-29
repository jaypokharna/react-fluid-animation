import React from 'react'
import Background from './Components/background'
import Foreground from './Components/Foreground'

const App = () => {
  return (
    <div className=' body relative h-screen w-full bg-zinc-800'>
      <Background/>
      <Foreground/>
    </div>
  )
}

export default App