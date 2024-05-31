import React from 'react'
import Todoing from '../assets/todoing.jpg'
import Tasklist from './Tasklist'

import { useTodoContext } from '../Contexts/todocontext';
const Todolist = () => {

const{activity, setActivity, update, handleUpdate} = useTodoContext()


    return (
    <>
    <div>
            <section className='text-gray-300 body-font overflow-hidden'>
            <div className='container px-5 py-24 mx-auto'>
                <div className='w-[80%] mx-auto flex flex-wrap'>
                <div className='lg:w-1/2'>
                <img src={Todoing}
                        alt='e-commerce'
                        className='w-full lg:h-auto h-64 object-cover object-center rounded'/>
                    </div>
                    <div className='lg:w-[40%] md:w-1/2 bg-[#003049] rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0'>
                        <h2 className='text-[#e9d8a6] font-bold mb-5 text-center text-4xl'>
                            Todo-List
                        </h2>
                        <div className='mb-4'>
                            <input 
                            type="text"
                            className='w-full bg-[#fff] rounded border border-gray-300 focus:border-indig0-500 focus:ring-2 focus:rign-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transitions-colors duration-200 ease-in-out'
                            value={activity}
                            onChange={(event) => {setActivity(event.target.value)}}
                            />
                        </div>

{
    update?<dutton className="text-white bg-indigo-500 border-0 py-2 mb-6 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg text-center" onClick={handleUpdate}>
    Update
    </dutton>:
<dutton className="text-white bg-indigo-500 border-0 py-2 mb-6 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg text-center" onClick={handleUpdate}>
    Add
    </dutton>
}
                        
                            <div>
                            <Tasklist/>
                            </div>
                    </div>
                </div>
            </div>
            </section>
        </div>
    </>
  )
}

export default Todolist