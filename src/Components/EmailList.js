import React from 'react'
import '.././Style/EmailList.css'
import { IconButton ,Checkbox } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Section from './Section';
import EmailRow from './EmailRow' 

function EmailList() {
    return (
       <div className="emailList">
            <div className="emailList_setting">
                <div className="emailList_settingLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDown/>
                    </IconButton>
                    <IconButton>
                        <RedoIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
                <div className="emailList_settingRight">
                    <IconButton>
                        <ChevronLeftIcon/>
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon/>
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon/>
                    </IconButton>
                    <IconButton>
                        <SettingsIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="emailList_section">
                <Section Icon={InboxIcon} title="Primary" color="red" selected />
                <Section Icon={PeopleIcon} title="Social" color="#1A73E8"  />
                <Section Icon={LocalOfferIcon} title="Promotions" color="green"  />                            
            </div>
            <div className="emalList_list">
                <EmailRow   
                    title="Twitch"
                    subject="Hey fellow Streamer!!!"
                    description="This is the test"
                    time="10pm"
                />
                <EmailRow   
                    title="Twitch"
                    subject="Hey fellow Streamer!!!"
                    description="This is the test"
                    time="10pm"
                />
            </div>
       </div>
    )
}

export default EmailList;
