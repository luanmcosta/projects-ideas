import { BaseSyntheticEvent, useState } from 'react'

function App() {
  
  const [date, setDate] = useState<BaseSyntheticEvent | null>(null);
  const [days, setDays] = useState(0);


  
  function handleCalendar(calendar: BaseSyntheticEvent){
    var timeDate = new Date(calendar.target.value).getTime();
    var now = new Date().getTime();

    var diff = (timeDate - now)/1000;
    var days = Math.ceil(diff / (3600 * 24));
    
    setDays(days);
  }

  return (
    <div className="App">
      <input type="date" name="calendar" id="calendar" onChange={handleCalendar} />
      <h4>Time Remaining: </h4>
      <h5>Days: {days || 'Select before'}</h5>
    </div>
  )
}

export default App
