import type { NextPage } from 'next'
import { useState } from 'react'

const Home: NextPage = () => {

  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState(0);

  function bin2dec(number: string){
    let res = 0;
    let arr = number.split('');
    for(let i = arr.length-1; i >= 0; i--){
      res += Number.parseInt(arr[i]) * Math.pow(2, arr.length-i-1); 
    }
    return res;
  } 


  function handleCalculateButton() {
    setResultValue(bin2dec(inputValue));
  }



  return (
    <div className='container'>
      <div className="box">
        <h1>Calc. BIN 2 DEC</h1>
        <input type="number" onChange={(e) => setInputValue(e.target.value)} placeholder="Valor binário"/>
        <button type="submit" onClick={handleCalculateButton}>CALCULATE</button>
        <h3>RESULT: {resultValue}</h3>
      </div>
    </div>
  )
}

export default Home
