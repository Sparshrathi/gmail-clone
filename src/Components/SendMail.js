import React from 'react'
import '.././Style/SendMail.css'
import CloseIcon from '@mui/icons-material/Close';
import {Button} from '@material-ui/core';

function SendMail() {
    return (
        <div className="sendmail">
            <div className="sendMail_header">
                <h3>New Message</h3>
                <CloseIcon className="sendMail_close"/>
            </div>
            
            <form>
                <input type="text" className="text" />
                <input type="text" className="text" />
                <input type="text" className="text" />

                <div className="sendMail_button">
                    <Button variant="contained">Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
