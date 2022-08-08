import { useState } from "react"
import Investment from "./Investment"

import data from '../data/investments-2-1-2-3-1-2'

export default function Investments() {
    //let [investments, setInvestments] = useState('Investments')

    console.log(data.investments)

    return (
        <>
            {
                data.investments.map(i => {
                    return <Investment key={i.id} reports={data.reports.filter(r => r.investmentId === i.id)}></Investment>
                })
            }
        </>
    )
}