import React, { useState } from 'react'
import "./Dropdown.css"
export default function Dropdown({data}) {
    const [showOption, setShowOption] = useState(false);
  return (
    <div className='wrapper' onMouseLeave={()=>setShowOption(false)}>
        <button onMouseEnter={()=>setShowOption(true)}>Select</button>
        {
            showOption && data.map((option, i)=>(
                <li onClick={()=>setShowOption(false)} key={i}>{option}</li>
            ))
        }
    </div>
  )
}
