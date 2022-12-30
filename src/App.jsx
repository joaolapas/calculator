import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [result, setResult] = useState(0)

  useEffect(()=>(
    document.addEventListener('keydown', (event) => setResult(event.key))
  ))

  return (
    <div id='calculator'>
      <div id='display'>
        <div id='upper'>98+7</div>
        <div id='result'>{result}</div>


      </div>
      <div id='keyboard'>
        <button id='clear'>AC</button>
        <button id='divide' className='small'>/</button>
        <button id='multiply' className='small'>*</button>
        <button id='seven' className='small'>7</button>
        <button id='eight' className='small'>8</button>
        <button id='nine' className='small'>9</button>
        <button id='subtract' className='small'>-</button>
        <button id='four' className='small'>4</button>
        <button id='five' className='small'>5</button>
        <button id='six' className='small'>6</button>
        <button id='add' className='small'>+</button>
        <div id='cont-2'>
          <div id='container-keys'>
            <button id='one' className='small'>1</button>
            <button id='two' className='small'>2</button>
            <button id='three' className='small'>3</button>
            <button id='zero'>0</button>
            <button id='decimal' className='small'>.</button>
          </div>
          <button id='equals'>=</button>
        </div>
      </div>
      <p>CALCULATOR by João Lapas</p>
    </div>
  )
}

export default App
