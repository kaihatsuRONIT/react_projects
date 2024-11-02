import { useState } from 'react'



function App() {
  const [color, setcolor] = useState("#AFC987")

  return (
    <div
    style={{backgroundColor : color, width : "100vw", height : "100vh"}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-3xl'>
          <button className='bg-red-500 p-4 rounded-2xl' onClick={ () => setcolor("red")}>Red</button>
          <button className='bg-yellow-500 p-4 rounded-2xl' onClick={ () => setcolor("yellow")}>Yeloow</button>
          <button className='bg-green-500 p-4 rounded-2xl' onClick={ () => setcolor("green")}>Green</button>
          <button className='bg-blue-500 p-4 rounded-2xl' onClick={ () => setcolor("blue")}>BLUE</button>
          <button className='bg-purple-500 p-4 rounded-2xl' onClick={ () => setcolor("purple")}>Purple</button>
          <button className='bg-white p-4 rounded-2xl' onClick={ () => setcolor("white")}>White</button>
          <button className='bg-olive p-4 rounded-2xl' onClick={ () => setcolor("olive")}>Olive</button>
          <button className='bg-black p-4 rounded-2xl' onClick={ () => setcolor("black")}>Black</button>
          <button className='p-4 rounded-2xl' style = {{backgroundColor : "lavender"}} onClick={ () => setcolor("lavender")}>lavender</button>
        </div>
      </div>
    </div>
  )
}

export default App
