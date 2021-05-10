import React, {useState} from 'react'
import firebase from '../../config/Firebase'
import {useHistory} from 'react-router-dom'

const Register  = () => {

    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');
    const [fullName, setFullName] = useState ('');
    
    let history = useHistory();

    const onSubmit = () => {

        const data = {
            email: email,
            fullName : fullName,
        };

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
        // simpan ke realtime database
        const userId = userCredential.user.uid;
        firebase.database().ref('users/' + userId).set(data);
        setFullName('');
        setEmail('');
        setPassword('');
        //redirect ke login 
        history.push("/login");
        })
        .catch((error) => {
        console.log(error);
        // tampilkan pesan error
        });
    };
    

    return (
        <div className="container mt-3">
            <p className="form-label mt-2  ">Nama Lengkap</p>
            <input className="form-control mt-3" placeholder="Masukkan nama lengkap" value={fullName} onChange={(e) => setFullName(e.target.value)} />
            <p className="form-label mt-2  ">Email</p>
            <input className="form-control mt-3" placeholder="Masukkan email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <p className="form-label mt-2 ">Password</p>
            <input className="form-control mt-3" type="password" placeholder="Masukkan password" value={password} onChange={(e) => setPassword(e.target.value)} /> 
            <br />
            <br />
            <button type="button" onClick={onSubmit} className="btn btn-primary" >Register New User</button>
        </div>
    )
}

export default Register 