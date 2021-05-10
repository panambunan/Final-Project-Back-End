import React from 'react'

function Card({email, fullname, avatar}) {
        return(
            <div className="card" style={{ width: "18rem"}}>
            <img src={avatar} className="card-img-top" alt="avatar" />
            <div className="card-body">
                <p className="card-text">{fullname}</p>
                <p className="card-text">{email}</p>
            </div>
            </div>
        )
}

export default Card;