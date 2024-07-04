import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className="text-3xl font-bold underline text-center mt-4">
      <a className='text-center mt-2' href="https://docs.google.com/presentation/d/1kUfBMbqxfVpULn3dDYQ4lh5HGb2D8dvo/edit#slide=id.p8">
        Click here to Access the SQM Slide
      </a>
    </h1>
    </>
  )
}

export default App
