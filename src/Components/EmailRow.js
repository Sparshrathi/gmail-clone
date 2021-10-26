import React from 'react'
import '.././Style/EmailRow.css'
import { IconButton ,Checkbox } from '@mui/material';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { useHistory } from 'react-router';

function EmailRow({id,title,subject,description,time}) {

    const history = useHistory();


    return (
        <div onClick={()=>history.push("/mail")} className="emailRow">
            <div className="emailRow_option">            
                <Checkbox/>
                <IconButton>
                    <StarOutlineIcon/>
                </IconButton>
                <IconButton>
                    <LabelImportantIcon/>
                </IconButton>
            </div>

            <h3 className="emailRow_title">{title}</h3>

            <div className="emailRow_message">
                <h4>{subject}{" - "}
                <span className="emailRow_description">
                    {description}
                </span>
                </h4>
            </div>
            
            <p className="emailRow_time">{time}</p>
        </div>
    )
}

export default EmailRow
