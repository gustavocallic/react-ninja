import React from 'react'
import './index.css'

const Square = (props) => {
    return(
        <div>
            <div style={{
                backgroundColor: props.color,
                width: 200,
                height: 200,
                marginBottom: 10
            }}></div>
        </div>
        
    )
}


export default Square;