
import {Person, PersonProps} from './../Person'

interface ListProps {
    personList: Array<PersonProps>
}

export function List({personList}: ListProps){
    return (
        <>
            <ul>
                {personList.map((person) => (
                    <Person name={person.name} image={person.image} address={person.address} />
                ))} 
            </ul>


           

        </>
    )
}