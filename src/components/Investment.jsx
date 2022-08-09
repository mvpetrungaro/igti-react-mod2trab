import Yield from './Yield'
import Yields from './Yields'

import { parseDate, parseCurrency, parsePercent } from '../utils/utils'

export default function Investment({ investment, reports }) {
  reports = reports.sort((a, b) => a.month - b.month)

  const firstValue = reports.at(0).value
  const lastValue = reports.at(-1).value

  return (
    <div className="border-2 my-5 mx-auto px-2 max-w-screen-lg">
      <div className="text-center">
        <h2 className="text-xl font-semibold">{investment.description}</h2>
        <div className="text-lg">
          <span>Rendimento total: </span>
          <span
            className={
              lastValue > firstValue ? 'text-green-500' : 'text-red-500'
            }
          >
            {`${parseCurrency(lastValue - firstValue)} (${parsePercent(
              firstValue,
              lastValue
            )})`}
          </span>
        </div>
      </div>
      <Yields>
        {reports.map((r, i, a) => {
          return (
            <>
              <Yield
                key={r.id}
                month={parseDate(r.month, r.year)}
                value={parseCurrency(r.value)}
                yieldValue={parsePercent(i > 0 ? a[i - 1].value : 0, r.value)}
              ></Yield>
              {i < a.length - 1 && <hr />}
            </>
          )
        })}
      </Yields>
    </div>
  )
}
