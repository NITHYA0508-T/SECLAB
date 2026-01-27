import React,{useEffect,useState} from 'react'   

function Greetings() {
    const [Greeting,setGreetings]=useState("")
    useEffect(()=>{
        const hours=new Date().getHours().toString().padStart(2,"0")
        const minutes=new Date().getMinutes().toString().padStart(2,"0")
        const seconds=new Date().getSeconds().toString().padStart(2,"0")
        if(hours<12){
            setGreetings(`Good Morning! ${hours}:${minutes}:${seconds}`)
        }
        else if(hours>=12 && hours<=17){
            setGreetings(`Good Afternoon! ${hours}:${minutes}:${seconds}`)
        }
        else if(hours>17 && hours<=19){
            setGreetings(`Good Evening! ${hours}:${minutes}:${seconds}`)
        }
        else{
            setGreetings(`Good Night!`)
        }
    })
  return (
    <div>
      {Greeting}
    </div>
  )
}
