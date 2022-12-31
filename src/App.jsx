import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [expression, setExpression] = useState(0)
  const [result, setResult] = useState(0)

  
  
  const handleNumber = (event) =>{
    const number = event.target.textContent
      if(expression=='0' && number == '0'){}else{
        if((expression===0) || expression[expression.length-1]==='='){
          setExpression(number)
          setResult(number)
        }else if(expression[expression.length-1]==='.'){
          setExpression((prev)=>prev+number)
          setResult((prev)=>prev+number)
        }else{
          setExpression((prev)=>prev+number)
          setResult((prev)=>prev+number)
        }
      }
  }

  const handleOperator = (event) =>{
      const operator = event.target.textContent
      
      if(expression.includes('=')){
        setExpression(result + operator)
      }else if(operator=='-' && /\W+$/.test(expression)){
        setResult((prev)=>operator)
        setExpression((prev)=>prev + operator)
      }else if(operator!=='-'){
        if(/\W+$/.test(expression)){
          setExpression(expression.replace(/\W+$/, operator))
        }else{
            setResult(()=>operator)
            setExpression((prev)=>prev + operator)
        }
      }else{
        setResult(()=>operator)
        setExpression((prev)=>prev + operator)
      }

      
      



  }
      
      
      
      
  

  const handleDecimal = () =>{
    if(!result.includes('.')){
      setExpression((prev)=>prev+ '.') 
      setResult((prev)=>prev + '.')  
    }
    
  }

  const handleClear = () => {
    setExpression(0)
    setResult(0)
  }
  

  const calculate = () =>{
    setResult(+eval(expression).toFixed(5))
    setExpression((prev)=> prev +' =')
  }
  

  return (
    <div id='calculator'>
      <div id='display-container'>
        <span>{expression}</span>
        <span id='display'>{result}</span>


      </div>
      <div id='keyboard'>
        <button id='clear' onClick={handleClear}>AC</button>
        <button id='divide' className='small signal' onClick={handleOperator}>/</button>
        <button id='multiply' className='small signal' onClick={handleOperator}>*</button>
        <button id='seven' className='small' onClick={handleNumber}>7</button>
        <button id='eight' className='small' onClick={handleNumber}>8</button>
        <button id='nine' className='small' onClick={handleNumber}>9</button>
        <button id='subtract' className='small signal' onClick={handleOperator}>-</button>
        <button id='four' className='small' onClick={handleNumber}>4</button>
        <button id='five' className='small' onClick={handleNumber}>5</button>
        <button id='six' className='small' onClick={handleNumber}>6</button>
        <button id='add' className='small signal' onClick={handleOperator}>+</button>
        <div id='cont-2'>
          <div id='container-keys'>
            <button id='one' className='small' onClick={handleNumber}>1</button>
            <button id='two' className='small' onClick={handleNumber}>2</button>
            <button id='three' className='small' onClick={handleNumber}>3</button>
            <button id='zero' onClick={handleNumber}>0</button>
            <button id='decimal' className='small' onClick={handleDecimal}>.</button>
          </div>
          <button id='equals' onClick={calculate}>=</button>
        </div>
      </div>
      <p>CALCULATOR by João Lapas</p>
    </div>
  )
}

export default App
