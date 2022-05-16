import React from 'react';

interface ButtonProps {
    value: string,
    onPress: (str: string) => void
}

export function Button ({value, onPress}: ButtonProps){
    return (
        <button onClick={()=>onPress(value)}>{value}</button>
    )
}