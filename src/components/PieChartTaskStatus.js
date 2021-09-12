import react, { useState } from 'react'
import { PieChart } from 'react-minimal-pie-chart';
export default function PieChartTaskStatus(props) {

    let completedTasks=0;
    let totalTasks = props?.taskDetails.length;
    props?.taskDetails?.map((item)=>{
        if(item.completed == true){
            completedTasks += 1;    
        }   
    })
    return (
        <div style={styles.container}>
            <PieChart 
            startAngle={270} 
            totalValue={totalTasks}
            lengthAngle={360}
            animate={true} 
            animationEasing="ease-out" 
            animationDuration={1000} 
            viewBoxSize={ 100} 
            style={{marginLeft:80,marginTop:20 }}
                data={[
                    { title: 'completed Tasks', value: completedTasks, color:"#5285EC"},
                ]}
            />
        </div>
    )
}

const styles = ({
    container: {
        display:'flex', flexDirection:'row',justifyContent:'center',
        marginTop: 34,
        // paddingLeft: 40,
        width: 280,
        height: 140,
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        boxShadow: "0px 3px 6px #0000000A",
        borderRadius: 12,
        opacity: 1
    },
})