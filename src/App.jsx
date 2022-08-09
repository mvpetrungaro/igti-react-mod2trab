import Investments from './components/Investments'

export default function App() {
  console.log('Teste no console do navegador')

  return (
    <div>
      <header>
        <div className="bg-gray-100 mx-auto p-4">
          <h1 className="text-center font-semibold text-xl">
            React Investments
          </h1>
        </div>
      </header>

      <main>
        <div className="container mx-auto p-4">
          <Investments></Investments>
        </div>
      </main>
    </div>
  )
}
