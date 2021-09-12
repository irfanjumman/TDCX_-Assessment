import react, { useState } from 'react'
export default function LatestCreatedTask(props) {
    
    return (
        <div style={styles.container}>
            <h4 style={styles.taskText}>Latest Created Tasks</h4>
            <ul style={styles.totalList}>
                {props?.taskDetails?.map((item) => {
                    return (
                        item.completed == true ? 
                            <li style={styles.striketaskItems}>{item.name}</li> : <li style={styles.taskItems}>{item.name}</li> 
                    )
                })}

            </ul>
        </div>
    )
}

const styles = ({
    container: {
        marginTop: 34,
        width: 280,
        height: 140,
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        boxShadow: "0px 3px 6px #0000000A",
        borderRadius: 12,
        opacity: 1
    },
    striketaskItems: {
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
        listStylePosition: "inside",
        textAlign: "left",
        font: "normal normal medium 14px/26px Montserrat",
        letterSpacing: 0,
        color: "#8F9EA2",
        opacity: 1,
        textDecoration: "line-through"
    },
    taskItems: {
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
        listStylePosition: "inside",
        textAlign: "left",
        font: "normal normal medium 14px/26px Montserrat",
        letterSpacing: 0,
        color: "#8F9EA2",
        opacity: 1,
    },
    totalList: {
        width: 253,
        height: 70,
        paddingLeft: 25,
        overflowX: "auto",
        overflowY: "auto"
    },
    taskText: {
        textAlign: "left",
        font: "normal normal medium 20px/24px Montserrat",
        letterSpacing: 0,
        color: "#537178",
        marginLeft: 25,
        opacity: 1
    }
})