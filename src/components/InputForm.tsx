import React,{useState,useEffect} from 'react'

const InputForm:React.VFC = () => {

    const [Fname,setFName] = useState("北川")
    const [Mname,setMName] = useState("D")
    const [Lname,setLName] = useState("太朗")


    return (
        <div>
            <input value={Fname} onChange={(e)=>setFName(e.target.value)}/>
            <input value={Mname} onChange={(e)=>setMName(e.target.value)}/>
            <input value={Lname} onChange={(e)=>setLName(e.target.value)}/>

        </div>
    )
}

export default InputForm
