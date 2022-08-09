export default function Yield({ month, value, yieldValue }) {
  return (
    <div className="w-full relative">
      <div className="inline-block text-sm p-2 font-mono">{month}</div>
      <div className="inline-block text-sm p-2 font-mono">{value}</div>
      <div
        className={`inline-block text-sm p-2 font-mono text-right right-0 absolute ${
          yieldValue[0] !== '-' ? 'text-green-500' : 'text-red-500'
        }`}
      >
        {(yieldValue[0] !== '-' ? '+' : '') + yieldValue}
      </div>
    </div>
  )
}
