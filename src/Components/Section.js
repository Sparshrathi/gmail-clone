import React from 'react'
import '.././Style/Section.css'

function Section({Icon,title,color,selected}) {
    return (
        <div className={`section ${selected && 'section--selected'}`} 
        style={{
            borderBottom: `0px solid ${color}`,
            color:`${selected && color}`
        }}>
           <Icon />
           <h4>{title}</h4>
        </div>
    )
}

export default Section
