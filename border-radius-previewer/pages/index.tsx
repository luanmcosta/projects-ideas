import type { NextPage } from 'next'
import { ChangeEventHandler, useState } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  
  const [radius, setRadius] = useState(0);

  return (

    <div className={styles.container}>
      <div className={styles.box} style={{borderRadius: radius+'px'}}>
        <h4>{radius} px</h4>
      </div>

      <input type="range" onChange={(event)=>setRadius(Number.parseInt(event.target.value))} defaultValue={0} min={0} max={100} />
    </div>
  )
}

export default Home
