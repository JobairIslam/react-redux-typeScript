import { useState } from "react"

export default function App() {
  const [color,setColor] = useState('olive')
  
  return (
    <div className="h-screen flex justify-center items-end pb-10 duration-200" style={{backgroundColor: color}}>
      <div className="p-2 rounded-full bg-purple-800 border border-black flex flex-row gap-5">
        <button onClick={()=>{setColor('white')}} className="p-2 bg-white rounded-full text-red-900 font-bold">white</button>
        <button onClick={()=>{setColor('red')}} className="p-2 bg-white rounded-full text-red-900 font-bold">red</button>
        <button onClick={()=>{setColor('green')}} className="p-2 bg-white rounded-full text-red-900 font-bold">green</button>
        <button onClick={()=>{setColor('yellow')}} className="p-2 bg-white rounded-full text-red-900 font-bold">yellow</button>
        <button onClick={()=>{setColor('pink')}} className="p-2 bg-white rounded-full text-red-900 font-bold">pink</button>
      </div>
    </div>
  )
}