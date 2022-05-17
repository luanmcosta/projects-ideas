import { Bar } from './components/Bar'
import './app.css'
import { ChangeEvent, useState } from 'react';

function App() {

  const [isBarOn, setIsBarOn] = useState(true);
  const [timeInterval, setTimeInterval] = useState(1000);

  function handleBarOn(sts: boolean) {
    setIsBarOn(sts);
  }

  function handleTimeInterval(time: string){
    setTimeInterval(Number.parseInt(time)*1000);
  }

  return (
    <>
      <div className='container'>
        <Bar timeInterval={timeInterval} isOn={true} barOn={isBarOn}/>
      </div>
      <div className='container'>
        <input type="range" onChange={(event) => handleTimeInterval(event.target.value)} name="range" id="range" max={5} defaultValue={1} min={1} />
        <input type="checkbox" defaultChecked={true} onChange={(event) => { handleBarOn(event.target.checked)}} name="check" id="check" />
      </div>
    </>
  )
}

export default App
