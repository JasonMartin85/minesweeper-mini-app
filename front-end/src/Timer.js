import React, {useEffect, useState} from 'react'


const Timer = () => {
  const[startTime,setStartTime] = useState();
  const[timeElapsed,setTimeElapsed] = useState()
  useEffect(()=>{
    setStartTime(new Date())
  },[])


  setInterval(()=>{
    let tempTime = Math.floor((Date.now() - startTime) / 1000)
    if (tempTime % 1 === 0) {
      setTimeElapsed(`${tempTime/60 > 1 ? Math.floor(tempTime/60) : 0} Minutes ${tempTime%60} Seconds`)
    }
  },1000)

  return(
    <div>Timer: {timeElapsed}</div>
  )
  
}

export default Timer