import './App.css'
import AddTodo from './compoonents/AddTodo'
import TodoList from './compoonents/TodoList'

function App() {

  return (
    <div className="container">
        <h1>Lista de Tarefas com Redux</h1>
        <AddTodo />
        <TodoList />
    </div>
  );
}

export default App;
