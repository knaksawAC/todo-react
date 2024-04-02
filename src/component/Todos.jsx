import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { removeTodo } from '../Features/TodoSlice';

import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function Todos() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  return (
    <>

      <ul className="list-none">
        {todos && todos.map((todo) => (
          <li
            className="mt-6 flex justify-between items-center  px-2 py-1 rounded bg-[#1B1A55]"
            key={todo.id}
          >
            <div className='text-white'>{todo.text}</div>
            <Zoom in ="true">
              <Fab onClick={() => dispatch(removeTodo(todo.id))} > <DeleteIcon />  </Fab>
            </Zoom>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos;
