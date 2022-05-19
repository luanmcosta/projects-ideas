
import {Person, PersonProps} from './../Person'

interface ListProps {
    personList: Array<PersonProps>,
    onSelectedPerson: (person: PersonProps) => void
}

export function List({personList, onSelectedPerson}: ListProps){
    return (
        <>
            <ul>
                {personList.map((person) => (
                    <li onClick={()=>onSelectedPerson(person)}>{person.name}</li>
                ))} 
            </ul>

        </>
    )
}