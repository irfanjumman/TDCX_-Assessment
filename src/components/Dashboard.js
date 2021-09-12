import react, { useEffect, useState } from 'react'
import profile1 from '../asset/images/profile1.png';
import AllTaskListItems from './AllTaskListItems';
import CompletedTask from './CompletedTask';
import LatestCreatedTask from './LatestCreatedTask';
import Newtask from './Newtask';
import PieChartTaskStatus from './PieChartTaskStatus';
import { useHistory } from 'react-router-dom';
import { network } from '../api/network';
import Spinner from './Spinner';
export default function Dashboard() {
    const [initialDashboard, setInitialDashboard] = useState(undefined)
    const [taskDetails, setTaskDetails] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [toggle, setToggle] = useState(false)
    let history = useHistory()
    useEffect(async () => {
        if (!sessionStorage.getItem('token')) {
            history && history.push('/login')
        }
        setIsLoading(true)
        let dashboardResponse = await network.getDashboard()
        setInitialDashboard(dashboardResponse.totalTasks)
        setIsLoading(false)
        getAllTaskList();
    }, [initialDashboard])

    const getAllTaskList = async () => {
        setIsLoading(true)
        let getAllTaskResponse = await network.getAllTasks()
        setTaskDetails(getAllTaskResponse.tasks)
        setToggle(!toggle)
        setIsLoading(false)
    }

    const logout = () => {
        history && history.push('/')
        sessionStorage.clear();
    }

    const isAuthenticated = sessionStorage.getItem('token');
    return (
        <>
            {isAuthenticated &&
                <><nav>
                    <div style={styles.navbarContainer}>
                        <div style={{ paddingLeft: 110, paddingTop: 15 }}>
                            <img
                                src={profile1}
                                width="40px"
                                height="40px" />
                        </div>
                        <div style={{ paddingLeft: 10, paddingTop: 5 }}>
                            <h4>Ali</h4>
                        </div>
                        <div style={{
                            position: "absolute",
                            right: 110,
                            top: 25
                        }}>
                            <button onClick={logout}>Logout</button>
                        </div>
                    </div>
                </nav>
                    {taskDetails.length > 0 ?
                        <>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', paddingLeft: 70, paddingRight: 70 }}>
                                <CompletedTask taskDetails={taskDetails} />
                                <LatestCreatedTask taskDetails={taskDetails} />
                                <PieChartTaskStatus taskDetails={taskDetails} />
                            </div>
                            <div>
                                <AllTaskListItems
                                    getAllTaskLists={getAllTaskList}
                                    taskDetails={taskDetails} />
                            </div>
                        </> :
                        <> {!isLoading &&
                            <div style={{
                                position:'relative',
                                background: "#F4F4F6 0% 0% no-repeat padding-box",
                                opacity: 1, marginTop:280
                            }}>
                                <div style={styles.notask}>
                                    <Newtask getTaskList={getAllTaskList} />
                                </div></div>}</>
                    }
                </>
            }
            {isLoading && <div style={styles.loader}><Spinner /></div>}
        </>
    )
}

const styles = ({
    navbarContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: 1200,
        height: 72,
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        boxShadow: "0px 3px 6px #00000029",
        opacity: 1
    },
    loader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItem: 'center',
        marginTop: 200
    },
    notask: {
        position: "absolute", 
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        transform: "translate(-50%, -50%)",
        background: "#FFFFFF",
        boxShadow: "0px 3px 6px #0000000A",
        borderRadius: 12,
        opacity: 1
    }
})