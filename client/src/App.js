import Header from './components/header';
import TodoForm from './components/TodoForm';
import './App.css';
import Todos from './components/Todos';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <TodoForm />
      <Todos />
    </div>
  );
}

export default App;
