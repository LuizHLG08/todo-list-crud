import { HomePage } from "./pages/HomePage"
import { TodoProvider } from "./providers/TodoContext"
import "./styles/index.scss"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <>
      <ToastContainer autoClose={2000} />
      <TodoProvider>
        <HomePage />
      </TodoProvider>
    </>
  )
}

export default App
