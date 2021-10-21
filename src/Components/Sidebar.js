import { Button, IconButton } from '@mui/material'
import React from 'react'
import ".././Style/Sidebar.css"
import AddIcon from '@mui/icons-material/Add';
import SidebarOption from "./SidebarOption"
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import SendIcon from '@mui/icons-material/Send';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
function Sidebar() {
    return (
        <div className="sidebar">
            <Button className="sidebar_compose" 
                startIcon={<AddIcon fontSize="large"/>} 
            >
                Compose
            </Button>

            <SidebarOption Icon={InboxIcon} title="Indox" number={54}  selected={true} />
            <SidebarOption Icon={StarIcon} title="Starred" number={14}  selected={false} />
            <SidebarOption Icon={WatchLaterIcon} title="Snoozed" number={4} selected={false} />
            <SidebarOption Icon={LabelImportantIcon} title="Important" number={34} selected={false} />
            <SidebarOption Icon={SendIcon} title="Sent" number={24} selected={false} />
            <SidebarOption Icon={InsertDriveFileIcon} title="Drafts" number={6} selected={false} />
            <SidebarOption Icon={ExpandMoreIcon} title="More" selected={false} />
            
            <div className="sidebar_footer">
                <div className="sidebar_footerIcons">
                    <IconButton><PersonIcon/></IconButton>
                    <IconButton><DuoIcon/></IconButton>
                    <IconButton><LocalPhoneIcon/></IconButton>
                </div>
            </div>
        
        </div>
    )
}

export default Sidebar
