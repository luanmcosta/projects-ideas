import React from 'react'
import { Button } from '../Button'

interface KeyboardProps {
    onButtonPressed: (str: string) => void
}

export function Keyboard({onButtonPressed}: KeyboardProps){

    function handleButtonPressed(value: string){
        onButtonPressed(value);
    }

    return (
        <div className='keyboard'>
            <div className='column left'>
                <Button onPress={handleButtonPressed} value='1' />
                <Button onPress={handleButtonPressed} value='2' />
                <Button onPress={handleButtonPressed} value='3' />
                <Button onPress={handleButtonPressed} value='4' />
                <Button onPress={handleButtonPressed} value='5' />
                <Button onPress={handleButtonPressed} value='6' />
                <Button onPress={handleButtonPressed} value='7' />
                <Button onPress={handleButtonPressed} value='8' />
                <Button onPress={handleButtonPressed} value='9' />
                <Button onPress={handleButtonPressed} value='0' />
            </div>
            <div className='column right'>
                <Button onPress={handleButtonPressed} value='.' />
                <Button onPress={handleButtonPressed} value='/' />
                <Button onPress={handleButtonPressed} value='*' />
                <Button onPress={handleButtonPressed} value='+' />
                <Button onPress={handleButtonPressed} value='-' />
                <Button onPress={handleButtonPressed} value='OK' />
                <Button onPress={handleButtonPressed} value='CC' />
            </div>
        </div>
    )
}