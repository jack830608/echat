import React, { useState, useEffect } from 'react';
import Register from '../../components/Register'

export default () => {
    const [op, setOp] = useState(0)

    useEffect(() => {
        setOp(1)
    }, [])
    return (
        <div style={{ opacity: op, transition: '1s', overflow: 'hidden' }}>
            <Register />
        </div>
    )
}
