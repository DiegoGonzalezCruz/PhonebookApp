import React from 'react'

const successBox = {
    color: 'green',
    fontSize: 20
}

//console.log(successBox)

export default function Notification({ message, userAdded }) {
    if (message === '') {
        return ''
    }
    return (
        <div className={successBox}>
            {message} {userAdded}
        </div>
    )
}
