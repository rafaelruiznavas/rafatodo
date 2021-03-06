import { useEffect, useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core'
import Todo from './components/Todo'
import { db } from './firebaseconfig'
import { collection, onSnapshot, serverTimestamp, addDoc,query, orderBy } from 'firebase/firestore';
import './App.css';

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')
  useEffect(() => {
    queryTodo()
  }, [])

  const queryTodo = () => {
    const q = query(collection(db, 'todos'), orderBy('timestamp','desc'))
    onSnapshot(q, (snapshot) => {
      setTodos(snapshot.docs.map(doc => ({
        id: doc.id,
        item: doc.data()
      })))
    })
  }

  const addTodo = e => {
    e.preventDefault()
    addDoc(collection(db,'todos'),{
      todo: input,
      timestamp: serverTimestamp()
    })
    setInput('')
    queryTodo()
  }

  return (
    <div className="app">
      <h1>RAFA TODO App</h1>
      <form>
        <FormControl>
          <InputLabel>Escribe un TODO</InputLabel>
          <Input value={input} onChange={e => setInput(e.target.value)} />
        </FormControl>
        <Button type="submit" onClick={addTodo} variant="contained" color="primary" disabled={!input}>Agregar TODO</Button>


      </form>
      <ul>
        {todos.map(it => <Todo key={it.id} arr={it} />)}
      </ul>
    </div>
  );
}

export default App;
