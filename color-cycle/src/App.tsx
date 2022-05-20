import { useCallback, useEffect, useState } from 'react';
import './App.css';

interface ColorProp {
  r: number,
  g: number,
  b: number 
}

function App() {

  const [inputColor, setInputColor] = useState('');
  const [bgColor, setBgColor] = useState('');
  const [decColor, setDecColor] = useState<ColorProp | null >(null);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalOn, setIntervalOn] = useState<any>();

  function hexToRGB(hex: string){
    if(hex >= 'A' && hex <= 'F')
      return 10 + (hex.charCodeAt(0) - 'A'.charCodeAt(0));
    return Number.parseInt(hex);
  }

  function convert(color: string){
    
    let r = hexToRGB(color[1]) * 16  + hexToRGB(color[2]);
    let g = hexToRGB(color[3]) * 16  + hexToRGB(color[4]);
    let b = hexToRGB(color[5]) * 16  + hexToRGB(color[6]);

    return {r, g, b};
  }

  function changeBg(){
    setDecColor(convert(inputColor));
    setIsRunning(true);
  }

  function toogleRunning(){
    setIsRunning(!isRunning);
  }

  function increment(prev: any){
    return {r: prev.r + 1, g: prev.g + 1, b: prev.b + 1}
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if(decColor)
        setDecColor(prevCol => increment(prevCol));
    }, 300);
    setIntervalOn(interval);
  }, [isRunning]);

  useEffect(() => {
    if(!isRunning && intervalOn)
      clearInterval(intervalOn);
  }, [isRunning, intervalOn]);

  useEffect(() => {
    if(decColor)
      setBgColor(`rgb(${decColor.r}, ${decColor.g}, ${decColor.b})`);
  }, [decColor]);

  return (
    <div className="App" style={{backgroundColor: bgColor}}>
      <header className="App-header">
        <input type="text" name="input-field" onChange={(e)=> {setInputColor(e.target.value)}} placeholder='#FFFFFF' id="input-field" />
        <button onClick={() => changeBg()}>Apply</button>
        <button onClick={toogleRunning}>Start/Stop</button>
      </header>
    </div>
  );
}

export default App;
