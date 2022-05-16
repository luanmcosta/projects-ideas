import React from 'react'

interface DisplayProps{
    value: string
}

export function Display({value}: DisplayProps) {
    return (
    <div className='display'>
        <h3 className='input' >
            {value || 0}
        </h3>
    </div>)
}