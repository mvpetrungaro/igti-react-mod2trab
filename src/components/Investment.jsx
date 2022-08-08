import { useState } from "react"
import Yield from "./Yield"
import Yields from "./Yields"

import { parseDateMMYYYY, parseCurrency, parseYield } from '../utils/utils'

export default function Investment({ reports, children }) {
    // let [investment, setInvestment] = useState('Investment')

    console.log(reports)

    return (
        <div>
            <Yields>
                {
                    reports.map((r, i, a) => {
                        return (
                            <>
                                <Yield key={r.id} month={parseDateMMYYYY(r.month, r.year)} value={parseCurrency(r.value)} yieldValue={parseYield((i > 0 ? a[i - 1].value : 0), r.value)}></Yield>
                                {i < (a.length - 1) && <hr />}
                            </>
                        )
                    })
                }
            </Yields>
        </div>
    )
}