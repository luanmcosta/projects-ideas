import { useState } from 'react'
import { List } from './List'
import { Person, PersonProps } from './Person'

function App() {

  const [currentPerson, setCurrentPerson] = useState<PersonProps | null>(null);

  const list = [
    {name: 'Luan M.',
    image: 'https://picsum.photos/384/512',
    address: 'Brazil'},
    {name: 'John Doe',
    image: 'https://picsum.photos/384/512',
    address: 'Brazil'},
    {name: 'Test Something',
    image: 'https://picsum.photos/384/512',
    address: 'Brazil'}
  ]

  function handleSelectedPerson(person: PersonProps) {
    setCurrentPerson(person)
  }

  return (
    <div className='h-screen flex justify-center items-center bg-slate-200'>

      <div className='bg-zinc-300 transition-all flex items-stretch p-1 rounded min-w-[80%] lg:min-w-[50%]'>

        <div className='flex w-1/2 p-2'>
          <List personList={list} onSelectedPerson={handleSelectedPerson}/>
        </div>

        <div className='flex w-1/2 p-2'>
          {currentPerson ? 
            (
              <Person person={currentPerson} />
            ):(
              <li>Nothing Selected</li>
            )
          }
        </div>

      </div>

    </div>
  )
}

export default App
