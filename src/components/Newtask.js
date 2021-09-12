import react, { useState } from 'react'
import { network } from '../api/network';
import CreateTask from './CreateTask';
import NoTask from './NoTask';
export default function Newtask(props) {
    const [addTaskItem, setAddTaskItem] = useState(false)
   
    const newTaskItem = () => {
        setAddTaskItem(true);
    }
    const getAllTaskList = () => {
        props.getTaskList();
    }
    return (
        <>
            {!addTaskItem ?
               <NoTask handleTask ={newTaskItem}/>:
                <CreateTask addItemRefreshs={getAllTaskList}/>
            }
        </>
    )
}

