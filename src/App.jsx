import { useState } from 'react'
import './App.css'

export function App() {
  const [topLeft, setTopLeft] = useState('0')
  const [topRight, setTopRight] = useState('0')
  const [bottomRight, setBottomRight] = useState('0')
  const [bottomLeft, setBottomLeft] = useState('0')

  return (
    <div className='All-Body'>

      <h1>Border-Radius Preview</h1>

      <div 
        className='Box'
        aria-label='box'
        style={{
          width: '300px', 
          height: '300px',  
          borderRadius: `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`
        }}
      />

      <div className='Values'>
        <label htmlFor="top-left">Top-Left: </label>
        <input 
          id="top-left" 
          type="text" 
          value={topLeft}
          onChange={(e) => setTopLeft(e.target.value)}
        />

        <label htmlFor="top-right">Top-Right: </label>
        <input 
          id="top-right" 
          type="text" 
          value={topRight}
          onChange={(e) => setTopRight(e.target.value)}
        />

        <label htmlFor="bottom-right">Bottom-Right: </label>
        <input 
          id="bottom-right" 
          type="text" 
          value={bottomRight}
          onChange={(e) => setBottomRight(e.target.value)}  
        />

        <label htmlFor="bottom-left">Bottom-Left: </label>
        <input 
          id="bottom-left" 
          type="text" 
          value={bottomLeft}
          onChange={(e) => setBottomLeft(e.target.value)}
        />
      </div>

    </div>
  )
}
