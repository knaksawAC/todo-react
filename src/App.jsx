import AddTodo from "./component/AddTodo"
import Todos from "./component/Todos"


function App() {


  return (
    <div className="" >
      <div className=" w-2/3  border border-1 border-black p-4 mx-auto mt-10 rounded-lg shadow-gray-500 translate-x-2  bg-[#B4D4FF]">
          <h1 className='text-white text-center p-2 font-semibold text-2xl rounded-lg bg-[#00224D]'> To-Do Application</h1>
          <AddTodo />
          <Todos />
      </div>
    </div>
  )
}

export default App;

  