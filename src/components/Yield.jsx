import { useState } from "react"

export default function Yield({ month, value, yieldValue }) {
    // let [investment, setInvestment] = useState('Investment')

    return (<div>
        <span>{month}</span>
        <span>{value}</span>
        <span>{yieldValue}</span>
    </div>)
}