
import './App.css'
import Todolist from './components/Todolist'
import { TodoProvider } from './Contexts/todocontext'
function App() {


  return (
    <>
        <TodoProvider>
        <Todolist/>
        </TodoProvider>

    </>
  )
}

export default App
