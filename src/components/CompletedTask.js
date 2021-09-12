import react, { useState } from 'react'
export default function CompletedTask(props) {
    let completedTasks=0;
    let totalTasks = props?.taskDetails.length;
    props?.taskDetails?.map((item)=>{
        if(item.completed == true){
            completedTasks += 1;    
        }   
    })
    
    return (
        <div style={styles.container}>
            <div style={styles.taskText}>
                <p>Task Completed</p>
            </div>
            <div style={styles.taskStatus}>
                <h1 style={styles.taskCompleted}>{completedTasks}</h1>
                <h6 style={styles.totalTasks}>/{totalTasks}</h6>
            </div>
        </div>
    )
}

const styles = ({
    container: {
        marginTop: 34,
        // marginLeft: 120,
        width: 280,
        height: 140,
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        boxShadow: "0px 3px 6px #0000000A",
        borderRadius: 12,
        opacity: 1
    },
    taskText: {
        paddingTop: 10,
        paddingLeft: 15,
        width: 174,
        height: 24,
        textAlign: "left",
        font: "normal normal medium 20px/24px Montserrat",
        letterSpacing: 0,
        color: "#537178",
        opacity: 1
    },
    taskStatus: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 15,
        width: 37,
        height: 78,

    },
    taskCompleted: {
        textAlign: "left",
        font: "normal normal medium 64px/78px Montserrat",
        letterSpacing: 0,
        color: "#5285EC",
        opacity: 1
    },
    totalTasks: {
        paddingTop: 20, 
        textAlign: "left",
        font: "normal normal medium 20px/24px Montserrat",
        letterSpacing: 0,
        color: "#8F9EA2",
        opacity: 1
    }

})