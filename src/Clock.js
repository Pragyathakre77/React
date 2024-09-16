import React, { useState } from 'react'

const Clock = () => {
    let[time,SetTime] = useState()
    setInterval(()=>{
        let a = new Date().toLocaleTimeString()
        SetTime(a)
    })
  return (
    <div>
      {
        time
      }
    </div>
  )
}

export default Clock
