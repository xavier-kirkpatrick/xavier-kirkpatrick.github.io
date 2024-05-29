import { createFileRoute } from '@tanstack/react-router'

// The Index component is rendered inside the root route or __route.tsx via the outlet.
// This is done via the createLazyFileRoute function which in configured to render Index below.

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="bg-yellow-100 min-h-screen">
      <h1 className="flex justify-center items-center p-0.5 border border-gray-300 hover:bg-green-200 hover:text-green-800 transition-colors">
        Personal Portfolio
      </h1>
      <h2 className="text-red-400">Welcome Home buddy!</h2>
    </div>
  )
}
