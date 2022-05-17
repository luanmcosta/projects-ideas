import { useEffect, useState } from "react";
import { Light } from "../Light";

import './style.css'

interface BarProps {
    timeInterval: number,
    isOn: boolean,
    barOn: boolean
}

export function Bar({timeInterval, isOn, barOn}: BarProps) {
    
    const [lightOn, setLightOn] = useState(isOn);
    const [isBarOn, setIsBarOn] = useState(barOn);

    useEffect(() => {
        setInterval(()=> {
            setLightOn(!lightOn);
        }, timeInterval);
    }, [lightOn]);

    return (
        <div className="bar" style={{filter: (!barOn ? 'grayscale(100%)': 'grayscale(0%)')}}>
            <Light color='red' isOn={lightOn} />
            <Light color='green' isOn={!lightOn} />
            <Light color='yellow' isOn={lightOn} />
            <Light color='blue' isOn={!lightOn} />
            <Light color='purple' isOn={lightOn} />
        </div>
    )
}