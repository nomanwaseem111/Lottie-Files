import React from 'react'
import Lottie from 'react-lottie'
import data from './data.json'
import './style.css'

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
   <>
   <div className='parent'>
    <div>
      <h1>Hi all, I'm Noman 👋</h1>
      <h2>A passionate Full Stack Software Developer 🚀 having an experience </h2>
    </div>
     <div >
      <Lottie options={defaultOptions} height={800} width={800} />
      
    </div>
    </div>
    </>
  )
}

export default App
