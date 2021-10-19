import React from 'react'
import ".././Style/Header.css"
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton ,Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ArrowDropDown } from '@mui/icons-material';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <IconButton>
                    <MenuIcon/>
                </IconButton>
                <img 
                    src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202010/Google_Gmail_New_Logo_India_To_1200x768.jpeg?WgdQ3Tx7r4ZssTpgfxm1Iwb5KMAG8S4A&size=1200:675"
                    alt=""
                />
            </div>

            <div className="header_center">
                <SearchIcon/>
                <input placeholder="Search mail" type="text" />
                <ArrowDropDown className="header_inputCaret"/>
            </div>

            <div className="header_right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon/>                
                </IconButton>
                <Avatar/>
            </div>
        </div>
    )
}

export default Header
