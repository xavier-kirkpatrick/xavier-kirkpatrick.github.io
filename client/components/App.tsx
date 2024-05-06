import { useFruits } from '../hooks/useFruits.ts'

function App() {
  const { data } = useFruits()

  return (
    <div className="">
      <h1>Personal Portfolio</h1>
      {/* <ul>{data && data.map((fruit) => <li key={fruit}>{fruit}</li>)}</ul> */}
      <ul>{data?.map((fruit) => <li key={fruit}>{fruit}</li>)}</ul>
    </div>
  )
}

export default App
