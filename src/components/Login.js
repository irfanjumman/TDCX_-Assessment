import react, {useState, useEffect} from 'react'
import { network } from '../api/network';
import { useHistory } from 'react-router-dom';

export default function Login() {
    const [loginstate , setLoginstate] = useState({
        id : "",
        name : ""
    })

    let history = useHistory();
  

    const handleLogin = async(e) => {
        e.preventDefault();
        const loginResponse = await network.login(loginstate.name);
        let token = loginResponse?.token?.token;
        sessionStorage.setItem('token',token)
        history && history.push('/dashboard')
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value
        setLoginstate({ ...loginstate, [name]: value})
    }
    return (
        <div style={styles.loginContainer}>
            <div style={styles.loginText}>Login</div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
                <form onSubmit={handleLogin}>
                    <input type="text" name="id" autoComplete="off" placeholder="Id" style={styles.inputfield}  value={loginstate.id} onChange={handleChange}/>
                    <input type="text" name="name" autoComplete="off" placeholder="Name" style={styles.inputfield} value={loginstate.name} onChange={handleChange}/>
                    <button type="submit" style={styles.loginButton}>Login</button>
                </form>
            </div>
        </div>
    )
}

const styles = ({
    container:{
        position:'relative'
    },
    loginContainer: {
        position: "absolute", top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        transform: "translate(-50%, -50%)",
        width: 296,
        height: 249,
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        boxShadow: "0px 3px 6px #00000029",
        borderRadius: 12,
        opacity: 1
    },
    loginText: {
        paddingLeft: 10,
        width: 57,
        height: 24,
        textAlign: 'right',
        font: "normal",
        fontSize:18,
        letterSpacing: 0,
        color: "#537178",
        opacity: 1
    },
    inputfield: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 244,
        height: 40,
        background: "#EEF1F8",
        borderRadius: 8,
        borderWidth: 0.1,
        opacity: 1,
        marginTop: 20,
        marginBottom: 20,
        borderColor:"#EEF1F8"
    },
    loginButton: {
        width: 250,
        height: 40,
        background: "#5285EC",
        borderRadius: 8,
        opacity: 1,
        borderWidth: 0.1,
        borderColor:"#5285EC"
    }
})