import { Button } from '@mui/material'
import React from 'react'
import ".././Style/Sidebar.css"
import AddIcon from '@mui/icons-material/Add';
import SidebarOption from "./SidebarOption"

function Sidebar() {
    return (
        <div className="sidebar">
            <Button className="sidebar_compose" 
                startIcon={<AddIcon fontSize="large"/>} 
            >
                Compose
            </Button>
            <SidebarOption/>
        </div>
    )
}

export default Sidebar
