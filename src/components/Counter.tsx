import React,{useState,useEffect} from 'react'

const Counter:React.VFC = () => {
    const [count,setCount] = useState(10)
    useEffect(()=>{
        console.log("useEffect発生");
    },[count])
    return (
        <button onClick={()=>setCount(count+1)}>
            {count}
        </button>
    )
}

export default Counter
