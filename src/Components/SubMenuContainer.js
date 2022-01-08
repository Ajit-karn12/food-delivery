import { ChevronRightRounded } from '@mui/icons-material'
import React from 'react'

function SubMenuContainer({name}) {
    return (
        <div className="SubMenuContainer">
            <h3>{name}</h3>
            <div className="viewAll">
                <p>view all</p>
                <i><ChevronRightRounded/></i>
            </div>
        </div>
    )
}

export default SubMenuContainer
