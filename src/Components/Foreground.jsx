import React, { useRef, useState } from 'react'
import Card from './Card'


const Foreground = () => {

  const ref = useRef(null);

  const data = [
    {
      desc: "I'm nọt superstitious, but I am a little stitious.",
      data : "Feb",
      close: true,
      author : "Jay Pokharna"
    },
    {
      desc: "They say 'dont try this at home' so I'm coming over to your house to try it.",
      data : "Dec",
      close: true,
      author : "unknown"
    },
    {
      desc: "I know that I am intelligent, because I know that I know nothing. ",
      data : "Mar",
      close: true,
      author : "Socrates"
    }
  ]

  return (
    <div ref={ref} className="foreground fixed top-0 left-0 z-[3] w-full h-full flex">

    {/* <Card/>
    <Card/> */}

    {data.map((item , index)=>(
    <Card data={item} reference={ref}/>
    ))}

    </div>
  )
}

export default Foreground