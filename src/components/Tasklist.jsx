import React from 'react'
import { CiSquareCheck } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useTodoContext } from '../Contexts/todocontext';
const Tasklist = () => {
const{ task, handleRemove, handleEdit, handleAllRemove, handleComplete } = useTodoContext()

  return (
    <div>
      <ul>
        {task.map((taskList) => (
          <li key={taskList.id} className={`flex justify-between border-b-2 px-2 py-1 items-center ${taskList.complete?"line-through":""}`}>
            <div className='flex gap-3'>
              <span className='cursor-pointer' onClick={()=>handleComplete(taskList.id)}>
                <CiSquareCheck size={25}/>
              </span>
              <span>{taskList.title}</span>
            </div>
            <div className='flex gap-3'>
              <span className='cursor-pointer' onClick={()=>handleEdit(taskList.id)}>
                <FaEdit size={25}/>
              </span>
              <span className='cursor-pointer' onClick={()=>handleRemove(taskList.id)}>
                <MdOutlineDeleteOutline size={25}/>
              </span>
            </div>
          </li>
        ))}
      </ul>

{
    task.length>=1?<button 
    className='bg-red-600 hover:bg-red-500 text-white px-3 py-2 rounded cursor-pointer my-3' onClick={handleAllRemove}>
    Remove All
    </button>:""
}

      
    </div>
  );
};

export default Tasklist;
