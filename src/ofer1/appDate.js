import React, { useState } from 'react'
import ShowDate from './showDate'
import InputDate from './inputDate'

function AppDate(props) {
    let [deadline,setDeadline] =useState("2022-01-01");
    const changeDate = (new_Date) =>{
        setDeadline(new_Date);
    }

  return (
    <div className='container'>
        <ShowDate deadline1={deadline}/>
        <InputDate changeDate1={changeDate}/>
    </div>
  )
}

export default AppDate