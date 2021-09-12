import react, { useState, useEffect } from 'react'
import Newtask from './Newtask'
import pen from '../asset/images/pen2.png';
import trash from '../asset/images/trash2.png';
import { network } from '../api/network';
import CreateTask from './CreateTask';
export default function AllTaskListItems(props) {
    const [toggle, setToggle] = useState(false)
    const [taskList, setTaskList] = useState([])
    const [filteredItems, setFilteredItems] = useState([])

    const [addNewTask, setAddNewTask] = useState(false)
    const [editTasks, setEditTasks] = useState(false)
    const [assignEditTask, setAssignEditTask] = useState('')
    const [search, setSearch] = useState({
        taskName: ''
    })

    useEffect(() => {
        let filtered = []
        props?.taskDetails?.map((item) => {
            filtered.push(item)
        })
        setFilteredItems(filtered)
    }, [props?.taskDetails])

    const ItemRefresh = () =>{
        props.getAllTaskLists()
        setEditTasks(false)
        setAddNewTask(false)
    }

    const newTaskHandle = () => {
        setAddNewTask(true)
    }

    const editTask = async (item) => {
        setEditTasks(true)
        setAssignEditTask(item)
    }

    const deleteTask = async (item) => {
        let deleteInformation ={
            "name": item.name,
            "completed": item.completed
        }
        let deleteTaskResponse = await network.deleteTask(item._id, deleteInformation)
        if(!deleteTaskResponse.network){
            props.getAllTaskLists();
        }
    }

    const handleSearch = (e) => {
        setSearch({
            taskName: e.target.value
        })
        if (e.target.value.length) {
            let searchResult = props?.taskDetails.filter(item => item.name.includes(e.target.value))
            setFilteredItems(searchResult)
        } else {
            setFilteredItems(props.taskDetails)
        }
    }

    const handleCheckBox = (idx,item) => {
        filteredItems[idx].completed = !filteredItems[idx].completed
        setFilteredItems(filteredItems)
        setToggle(!toggle)
        completeCurrentTask(item, filteredItems[idx].completed);
        
        
    }
    const completeCurrentTask = async(item, flag) =>{
        let editInformation ={
            "name": item.name,
            "completed": flag
        }
        let editTaskResponse = await network.editTask(item._id, editInformation)
        if(!editTaskResponse.network){
            props.getAllTaskLists();
        }
    }

    return (
        <>
            <div style={styles.mainContainer}>
                <div style={styles.taskText}>
                    <h4>Tasks</h4>
                </div>
                <div style={styles.searchInput}>
                    <input type="text" name="name" autoComplete="off" placeholder="Search by task name"
                        style={styles.searchField} value={search.taskName} onChange={handleSearch} />
                </div>
                <div style={{ marginTop: 20, marginLeft: 10 }}>
                    <button style={styles.newTaskButton} onClick={newTaskHandle}>+ New Task</button>
                </div>
            </div>
            <div style={styles.taskList}>

                {filteredItems.map((item, idx) => {
                    return (
                        <>
                            <>
                                <div style={styles.mainContainer}>
                                    <input type="checkbox" style={styles.checkboxfield} checked={item.completed} value={item.completed} onChange={(e) => handleCheckBox(idx,item)} />
                                    {item.completed == true ? <span style={styles.striketaskDetails}>{item.name}</span> : <span style={styles.taskDetails}>{item.name}</span>}

                                    <div style={styles.eidtDelatefield}>
                                        <div onClick={() => editTask(item)}><img
                                            src={pen}
                                            width="12px"
                                            height="12px"
                                            style={{ paddingRight: 15, opacity: 1 }}

                                        /></div>
                                        <div onClick={() => deleteTask(item)}>
                                        <img
                                            src={trash}
                                            width="12px"
                                            height="12px"
                                        />
                                        </div>
                                    </div>

                                </div>
                               <div style={styles.horizontalLine}> 
                                </div>

                            </>

                        </>
                    )
                })}

                {editTasks &&
                    <div style={styles.createNewTask}>
                        <div style={styles.displayCenter}><CreateTask addItemRefreshs={ItemRefresh} item={assignEditTask} /></div>
                    </div>}

            </div>
            {addNewTask && <div>
                <div style={styles.displayCenter}><CreateTask flag={true} addItemRefreshs={ItemRefresh}/></div>
            </div>}
        </>
    )
}

const styles = ({
    mainContainer: {
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
    },
    displayCenter: {
        position: "absolute", top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        transform: "translate(-50%, -50%)",
        background: "#00000033 0% 0% no-repeat padding-box",
        opacity: 1,
    },
    inputfield: {
        width: 230,
        height: 35,
        background: "#EEF1F8",
        borderRadius: 8,
        borderWidth: 0.1,
        opacity: 1,
        marginTop: 20,
        marginBottom: 20,
        borderColor: "#EEF1F8"
    },
    addnewtaskbutton: {
        color: 'white',
        fontSize: 12,
        marginTop: 10,
        width: 244,
        height: 40,
        background: "#5285EC",
        borderRadius: 8,
        borderColor: 'white',
        opacity: 1
    },
    taskContainer: {
        marginTop: 200,
        width: 296,
        height: 193,
        background: "#FFFFFF",
        boxShadow: "0px 3px 6px #00000029",
        borderRadius: 12,
        opacity: 1,
        // background: "#00000033 0% 0% no-repeat padding-box",
        opacity: 1
    },
    addnewtaskText: {
        paddingTop: 20,
        paddingLeft: 30,
        width: 114,
        height: 24,
        textAlign: "left",
        font: "normal normal medium 20px/24px Montserrat",
        letterSpacing: 0,
        color: "#537178",
        opacity: 1
    },
    eidtDelatefield: {
        display:'flex', 
        flexDirection:'row',
        paddingLeft: 10,
        paddingTop: 2,
        marginTop: 15,
        marginLeft: 376,
        paddingLeft: 20
    },
    checkboxfield: {
        width: 16,
        height: 16,
        marginTop: 20,
        marginLeft: 30,
        marginBottom: 20
    },
    searchInput: {
        marginTop: 20,
        marginLeft: 540
    },
    taskText: {
        marginTop: 10,
        marginLeft: 110,
        width: 55,
        height: 24,
        textAlign: "left",
        font: "normal normal medium 20px/24px Montserrat",
        letterSpacing: 0,
        color: "#537178",
        opacity: 1
    },
    searchField: {
        background: "#D9DFEB",
        borderRadius: 8,
        opacity: 1,
        width: 244,
        height: 30
    },
    newTaskButton: {
        width: 124,
        height: 36,
        background: "#5285EC",
        borderRadius: 8,
        color: 'white',
        opacity: 1
    },
    taskList: {
        marginTop: 20,
        marginLeft: 110,
        width: 980,
        height: 250,
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        boxShadow: "0px 3px 6px #00000014",
        borderRadius: 12,
        opacity: 1,
        overflowX: "auto",
        overflowY: "auto"
    },
    striketaskDetails: {
        marginLeft: 15,
        marginTop: 18,
        width: 400,
        height: 10,
        textAlign: "left",
        font: "normal normal medium 20px/24px Montserrat",
        letterSpacing: 0,
        color: "#5285EC",
        opacity: 1,
        textDecoration: "line-through"
    },
    taskDetails: {
        marginLeft: 15,
        marginTop: 18,
        width: 400,
        height: 10,
        textAlign: "left",
        font: "normal normal medium 20px/24px Montserrat",
        letterSpacing: 0,
        color: "#5285EC",
        opacity: 1,
    },
    horizontalLine: {
        width: 912,
        height: 2,
        background: "#E8E8E8 0% 0% no-repeat padding-box",
        opacity: 1,
        marginLeft: 30
    }
})