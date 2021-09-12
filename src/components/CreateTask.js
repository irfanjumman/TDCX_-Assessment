import react, { useState, useEffect } from 'react'
import { network } from '../api/network'

export default function CreateTask(props) {
    const [disabletaskItem, setDisabletaskItem] = useState(true)
    const [addTask, setAddTask] = useState({
        taskName: props ? props.item : ''
    })

    const handleNewTask = (e) => {
        setAddTask({ taskName: e.target.value })
    }

    const addNewTask = async (addTask) => {
        setDisabletaskItem(false)
        let taskInformation = {
            'name': addTask.taskName
        }

        let newTaskResponse = await network.addNewTask(taskInformation);
        if (newTaskResponse) {
            props.addItemRefreshs();
        }

    }

    const editTask = async (item) => {
        setDisabletaskItem(false)
        // setChangeTask(true) 
        let editInformation = {
            "name": addTask.taskName,
            "completed": item.completed
        }
        let editTaskResponse = await network.editTask(item._id, editInformation)
        if (!editTaskResponse.network) {
            props.addItemRefreshs();
        }

    }

    return (
        <>
            {disabletaskItem &&
                <>
                    <div style={styles.backgroundChange}>
                        <div style={styles.addnewItembackground}>
                            <div style={styles.taskContainer}>
                                <div style={styles.addnewtaskText}>
                                    + New Task
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                                    {props.item ? <> <input type="text" placeholder="Task Name" value={addTask.taskName.name} onChange={handleNewTask} style={styles.inputfield} />
                                        <button style={styles.addnewtaskbutton} onClick={() => editTask(props.item)}>+ Edit Task</button> </>
                                        : <><input type="text" placeholder="Task Name" value={addTask.taskName} onChange={handleNewTask} style={styles.inputfield} />
                                            <button style={styles.addnewtaskbutton} onClick={() => addNewTask(addTask)}>+ New Task</button></>}
                                </div>
                            </div>
                        </div>
                    </div>
                </>}
        </>
    )
}

const styles = ({
    taskContainer: {
        width: 296,
        height: 193,
        background: "#FFFFFF",
        boxShadow: "0px 3px 6px #00000029",
        borderRadius: 12,
        opacity: 1,
        opacity: 1
    },
    backgroundChange: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        marginLeft: 0,
        width: 1200,
        overflowX: "hidden",
        overflowY: "hidden",
        background: "#00000033 0% 0% no-repeat padding-box",
        opacity: 1

    },
    addnewItembackground: {
        display: 'flex',    
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        width: 1200,
        overflowX: "hidden",
        overflowY: "hidden",
        height: window.innerHeight,
        background: "#00000033 0% 0% no-repeat padding-box;",
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
})