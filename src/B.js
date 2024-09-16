import React, { useContext } from 'react'
import Context from './Context';

const B = () => {
  let a=  useContext(Context)
  console.log(a,"kya aa rha");
  return (
    <div>
      {
        a
      }
    </div>
  )
}

export default B
