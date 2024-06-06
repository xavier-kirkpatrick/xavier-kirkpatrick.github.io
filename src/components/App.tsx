import { useFruits } from '../hooks/useFruits.ts'

function App() {
  // Register the router instance for type safety

  const { data } = useFruits()

  return (
    <div className="bg-yellow-100 min-h-screen">
      <h1 className="flex justify-center items-center p-0.5 border border-gray-300 hover:bg-green-200 hover:text-green-800 transition-colors">
        Personal Portfolio
      </h1>
      {/* <ul>{data && data.map((fruit) => <li key={fruit}>{fruit}</li>)}</ul> */}
      <ul>{data?.map((fruit) => <li key={fruit}>{fruit}</li>)}</ul>
    </div>
  )
}

export default App
