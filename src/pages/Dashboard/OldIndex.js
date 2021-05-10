import React, {useEffect, useState} from 'react'
import Card from '../../components/molecules/Card';
import NavBar from '../../components/molecules/NavBar'

const Dashboard = () => {
    
    const [users, setUsers] = useState([]);

    useEffect(() => {
        //fetch
        fetch("https://reqres.in/api/users").then((res) => res.json()).then((json) => setUsers(json.data));
        //axios
    }, [])

    console.log(users);
    return (
        <div className="container" >
            <NavBar />
            <h3>Dashboard</h3>
            <hr />
            <div >
                {
                    users.map(item => {
                        <p>{item.email}</p>
                    })
                }
            </div>
        </div>
    )
}

export default Dashboard