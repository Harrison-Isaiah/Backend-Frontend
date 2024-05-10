import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

    useEffect(()=>{
      axios.get('/api/jokes')
      .then((res)=>{
        setJokes(res.data)
      
      })
      .catch((error)=>{
        console.log(error)
      })
      
    })

   




  return (
    <>
    
      <h1>Augmentin Game</h1>
      <p>(QUESTIONS:  {jokes.length})</p>

      <div>
        {
          jokes.map((joke, index)=>(
            <div key={joke.id}>
                
               <h3>{joke.title}</h3>
               <h4>{joke.content}</h4>
            </div>
          ))
        }
      </div>

    </>
  )
}

export default App
