import { useState } from 'react'
import { List } from './List'

function App() {
  const [count, setCount] = useState(0)

  const list = [
    {name: 'Luan M.',
    image: 'https://picsum.photos/384/512',
    address: 'Brazil'},
    {name: 'Luan M. Costa',
    image: 'https://picsum.photos/384/512',
    address: 'Brazil'}
  ]

  return (
    <div>
      <List personList={list}/>
    </div>
  )
}

export default App
