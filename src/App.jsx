import { Suspense } from 'react'
import './App.css'
import Countries from'./components/Countries/Countries'


const Countryfetch = fetch("https://openapi.programming-hero.com/api/all#").then(res => res.json())
function App() {
  
  return (
    <>
   <Suspense fallback={<p>waiting for data....</p>}>
    <Countries Countryfetch={Countryfetch}></Countries>
    
   </Suspense>
    </>
  )
}

export default App
