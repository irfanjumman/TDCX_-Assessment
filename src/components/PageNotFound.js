import react, {useState, useEffect} from 'react'
export default function PageNotFound() { 
    return (
        <div style={styles.loginContainer}>
           <h3>Sorry, we couldn’t find the page you were looking for.</h3>
        </div>
    )
}

const styles = ({
    loginContainer:{
        display:"flex",
        flexDirection:'row',
        justifyContent:'center',
        alignItem:'center',
        marginTop:200
    }
})