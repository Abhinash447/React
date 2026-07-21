import React from 'react'
import { useParams } from 'react-router'

function User() {
    const {userid} = useParams();

    return (
        <div className="bg-blue-600 text-white text-2xl font-semibold px-8 py-4 rounded-lg text-center">
        User ID: {userid}
        </div>
    )
}

export default User