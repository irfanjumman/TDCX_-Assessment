import react from 'react'

export default function NoTask(props){

    const newTaskItem = () => {
        props.handleTask()
    }
    return(
        <div style={styles.Container}>
                    <div style={styles.taskText}>
                        you have no task
                    </div>
                    <div>
                        <button style={styles.newtaskButton} onClick={()=>newTaskItem()}>+ New Task</button>
                    </div>
                </div> 
    )
}

const styles = ({
    Container: {
        //   marginTop: 180,
        // marginLeft: 448,
        // width: 304,
        // height: 158,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 280,
        height: 140,
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        borderRadius: 8,
        opacity: 1
    },
    taskText: {
        width: 176,
        height: 24,
        textAlign: "center",
        font: "normal normal medium 20px/28px Montserrat",
        letterSpacing: 0,
        color: "#537178",
        opacity: 1
    },
    newtaskButton: {
        color: 'white',
        fontSize: 12,
        marginTop: 10,
        width: 100,
        height: 30,
        background: "#5285EC",
        borderRadius: 8,
        borderColor: 'white',
        opacity: 1
    }

})