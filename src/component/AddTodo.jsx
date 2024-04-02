import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../Features/TodoSlice'
import Zoom from '@mui/material/Zoom';
import AddIcon from '@mui/icons-material/Add';
function AddTodo() {
const [Input, setInput] = useState('')
const dispatch=useDispatch()
const addTodoHandler=(e)=>{
e.preventDefault()
dispatch(addTodo(Input))
setInput('')

}

  return (
    <div className=' w-96'>
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className=" rounded border border-gray-700 focus:border-indigo-200 focus:ring-2 focus:ring-indigo-400 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={Input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Zoom in ="true">
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        <AddIcon />
      </button>
      </Zoom>
    </form>
    </div>
  )
}

export default AddTodo;
// "bg-gray-800