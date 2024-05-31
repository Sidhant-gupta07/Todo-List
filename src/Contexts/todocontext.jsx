import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const TodoContext = createContext();
const useTodoContext = () => useContext(TodoContext)


const getLocalItem = ()=>{
  const storeItem = localStorage.getItem("list")
  return storeItem? JSON.parse(localStorage.getItem("list")):[]
}



const TodoProvider = ({ children }) => {
    const [activity, setActivity] = useState("");
    const [task, setTask] = useState(getLocalItem());
    const [update, setUpdate] = useState(false);
    const [edit, setEdit] = useState(null);


    useEffect(() => {
      localStorage.setItem("list", JSON.stringify(task))
    }, [task])


    const handleUpdate = () => {
        if (activity === "") {
            alert("Please fill the box first"); 
        }
        else if(update){
            setTask(task.map((newElement)=> {
                if (newElement.id === edit) {
                    return{...newElement, title:activity}
                }
                return newElement;
            }))
            setActivity("");
            setUpdate(false); 
            setEdit(null);
        }else{
            const allActivity = {id: uuidv4(), title: activity, complete:false}
        
            setTask([...task, allActivity])
            setActivity("")
        }
        };

        const handleRemove = (index)=>{
            const isConfirm = window.confirm("are you sure you want to remove it");
            if (isConfirm) {
              const filterItem = task.filter((item)=>index != item.id)
          setTask(filterItem)
            }
          
          };
          
          const handleEdit = (id) => {
            const findItem = task.find((element)=> {
              return id === element.id
            })
            setActivity(findItem.title);
            setUpdate(true)
            setEdit(id)
          }
          
          const handleAllRemove = ()=> {
            setTask([]);
          }
          
          const handleComplete = (id)=>{
            setTask(task.map((compItem)=> {
               if (id === compItem.id) {
                return {...compItem, complete: !compItem.complete}
               }
               return compItem;
            }))
          }


    
    const allActivity = {activity, setActivity, task, setTask, update,setUpdate, edit, setEdit, handleUpdate, handleRemove, handleEdit, handleAllRemove, handleComplete};

    return (
        <TodoContext.Provider value={allActivity}>
            {children}
        </TodoContext.Provider>
    );

};
TodoProvider.propTypes = {
    children: PropTypes.node.isRequired,
};







export {TodoContext, TodoProvider, useTodoContext}