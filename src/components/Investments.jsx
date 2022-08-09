import Investment from './Investment'

import { data } from '../data/investments-2-1-2-3-1-2'

export default function Investments() {
  return (
    <>
      {data.investments.map((i) => {
        return (
          <Investment
            key={i.id}
            investment={i}
            reports={data.reports.filter((r) => r.investmentId === i.id)}
          ></Investment>
        )
      })}
    </>
  )
}
