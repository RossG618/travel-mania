import React, { useState, useEffect } from 'react';

const startDate = new Date();
const Timer = ({ end }) => {
  const[rHour, setRHour] = useState(1); //countdown 2 hours.
  const[rMin, setRMin] = useState(0);
  const[rSec, setRSec] = useState(0);

  function getTime(){
    const finishHours = startDate.getHours() + 1 + startDate.getMinutes() / 60 + startDate.getSeconds() / 3600;
    const currentHours =  new Date().getHours() + new Date().getMinutes() / 60 + new Date().getSeconds() / 3600;
    const remainingHours = finishHours - currentHours;

    const remainingHour = Math.floor(remainingHours);
    const remainingMinute = Math.floor((remainingHours - remainingHour) * 60);
    const remainingSecond = Math.floor(((remainingHours - remainingHour) * 60 - remainingMinute)*60)

    setRHour(remainingHour);
    setRMin(remainingMinute);
    setRSec(remainingSecond);
    console.log("count")
  }

  useEffect(()=>{
    setInterval(function(){
      getTime()
    }, 1000);
  }, []);

  return(
    <div className="timer-container">
      <div className="numbers">
        <span className= "num-span">{("0" + rHour).slice(-2)}</span>
        <span className= "segment">:</span>
        <span className= "num-span">{("0" + rMin).slice(-2)}</span>
        <span className= "segment">:</span>
        <span className= "num-span">{("0" + rSec).slice(-2)}</span>
      </div>
      
    </div>
  );
};


export {Timer};