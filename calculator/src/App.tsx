import { useState } from 'react'
import { Display } from './components/Display'
import { Keyboard } from './components/Keyboard'
import './assets/style.css'

function App() {

  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState('');

  function handleButtonPressed(str: string){

    if(str == 'CC')
      setInputValue('');
    else if(str == "OK")
      try{
        setInputValue(eval(inputValue));
      }catch (e){
        alert('Invalid input value');
      }
    else 
      setInputValue(inputValue+str);
  }

  return (
    <div className="App">
      
      <div className="board">
        
        <Display value={inputValue} />

        <Keyboard onButtonPressed={handleButtonPressed} />

      </div>

    </div>
  )
}

export default App
