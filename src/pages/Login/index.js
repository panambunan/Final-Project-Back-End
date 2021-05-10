import React, { useState, useEffect} from 'react'
import firebase from '../../config/Firebase'
import {useHistory} from 'react-router-dom'

const Login = ({title, angka}) =>{
    const [welcomeText, setWelcomeText] = useState("Welcome!!");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let history = useHistory();

    useEffect (() => {
        console.log("Component did mount");
    }, []);

    useEffect (() =>{
        console.log("Component did update");
    }, [welcomeText, email, password])

    const handleSubmit = () => {
        setWelcomeText("Selamat Datang");
        const data = {
            email : email, 
            password : password,
        }
        // console.log(data);
        firebase.auth().signInWithEmailAndPassword(email, password).then(res => history.push("/")).catch(error => console.log("Error", error));
    }

    return (
        //JSK
        <div className="container mt-5">
            <h3>{welcomeText}</h3>
            <h5>{title}{angka}</h5>
            <p className="form-label mt-5">Email</p>
            <input className="form-control" placeholder="Masukkan email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <p className="form-label mt-3">Password</p>
            <input className="form-control" type="password" placeholder="Masukkan passwords" value={password} onChange={(e) => setPassword(e.target.value)} /> 
            <br />
            <br />
            <button type="button" onClick={handleSubmit} className="btn btn-primary" >Submit</button>
        </div>
    )
}

export default Login;