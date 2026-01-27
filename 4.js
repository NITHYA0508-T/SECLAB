import React from 'react'

function App() {
  const [color, setColor] = React.useState('white')
  return (
    <div>
      <h1>colour-picker</h1>
      <button onClick={()=>setColor("red")}>red</button>
      <button onClick={()=>setColor("green")}>green</button>
      <button onClick={()=>setColor("blue")}>blue</button>
      <div style={{height:"100px",
          width:"200px",
          border:"1px solid",
          marginLeft:"200px",
          marginTop:"20px",
          backgroundColor:color}}></div>
    </div>
  )
}

export default App
