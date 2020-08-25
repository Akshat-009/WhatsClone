import React from 'react'
import "./Login.css"
import Button from '@material-ui/core/Button';
import {auth,provider} from './firebase'
import {useStateValue} from './StateProvider'

function Login() {
    const [{},dispatch] = useStateValue()
    const signin=()=>{
    auth.signInWithPopup(provider).then((result)=>{
        dispatch({type:"SET_USER",
                 user:result.user})
    }).catch((err)=>{
        alert(err.message)
    })
    }
    return (
        <div className="login__cont">
           <Button onClick ={signin}variant="contained">
           Sign In with Google
            </Button>
        </div>
    )
}

export default Login
