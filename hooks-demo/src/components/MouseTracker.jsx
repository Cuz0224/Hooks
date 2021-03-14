import React,{useState,useEffect} from 'react'

const MoustTracker = () =>{
    const [positions,setPositions] = useState({x:0,y:0})
    useEffect(()=>{
        const updateMouse = (event)=>{
            console.log('hello')
            setPositions({x:event.clientX,y:event.clientY})
        }
        console.log('addListener')
        document.addEventListener('click',updateMouse)
        return ()=>{
            console.log('removeListener')
            document.removeEventListener('click',updateMouse)
        }
    })
    return (
        <span>X:{positions.x}&nbsp;&nbsp;Y:{positions.y}</span>
    )
}

export default MoustTracker