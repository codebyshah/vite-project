import './App.css'
import { Button } from "@/components/ui/button"

function App() {

  return (
    <div className="flex justify-center items-center min-h-screen bg-brown-100">

      <div className="bg-white p-10 rounded-2x1 shadow-2x1 max-w-md text-center">
        <h1 className="text-3xl font-bold text-red-700">Welcome to React + Vite + Tailwind!</h1>
      </div>
      <div className="flex min-h-svh flex-col items-center justify-center">
        <Button>Click me</Button>
      </div>
    </div>
  )
}

export default App
