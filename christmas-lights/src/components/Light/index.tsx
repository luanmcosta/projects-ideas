import { useEffect, useState } from "react"

import './style.css'

interface ColorProps{
    color: string,
    isOn: boolean,
}

export function Light({color, isOn}: ColorProps) {

    const [lightColor, setLightColor] = useState('')
    const [isLightOn, setIsLightOn] = useState(false);
    const [styleBall, setStyleBall] = useState({});
    
    useEffect(()=> {
        setLightColor(color);
        setIsLightOn(isOn);
        setStyleBall({
            backgroundColor: lightColor,
            boxShadow: '0px 0px 30px ' + lightColor
        })
    }, [isOn]);

    useEffect(() => {
        
        if(isLightOn)
        setStyleBall({
            backgroundColor: lightColor,
            boxShadow: '0px 0px 30px ' + lightColor
        })
            else 
        setStyleBall({
            backgroundColor: lightColor,
            boxShadow: '0px 0px 0px ' + lightColor
        })


    }, [isLightOn]);

    return (
        <div 
            className="ball" 
            style={
                styleBall
            }>
        </div>
    )
}