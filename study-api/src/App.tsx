import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios, { Axios } from 'axios'

async function getRadomCatUrl()
{
 const apikey='live_npcREMG5iunXUhXxayijRA8WmVMgxtwejHi5m5UUtb4yM4qOrpBidgyY03v9ZPpU'
 const response = await axios.get(`https://api.thecatapi.com/v1/images/search?api_key=`+ apikey)
  return response.data[0].url
}
 function App() {
  const [url, setUrl] = useState('')
  
  return (
    <>
      <div>
        <button onClick={async() => setUrl(await getRadomCatUrl())}>Click vao day</button>
        </div>
      <div>
        {url && <img src={url} alt="Random Cat" />}
        </div>
    </>
  )
}

export default App
