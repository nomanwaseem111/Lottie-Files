import React from 'react'
import Lottie from 'react-lottie'
import data from './data.json'

const App = () => {

  const defaultOptions = {
     loop:true,
     autoplay:true,
     animationData:data,
     rendererSettings:{
       preserveAspectRatio:'xMidyMid slice'
     }

  };

  return (
    <div>
      <Lottie options={defaultOptions} height={800} width={800}/>
      <h1>Noman</h1>
    </div>
  )
}

export default App
