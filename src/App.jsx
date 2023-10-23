import { HomePage } from "./pages/HomePage"
import { TodoProvider } from "./providers/TodoContext"
import "./styles/index.scss"


function App() {

  return (
    <>
        <TodoProvider>
            <HomePage />
        </TodoProvider>
    </>
  )
}

export default App
