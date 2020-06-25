import React, {useState} from 'react'

const DemoHook = () =>{
    // const [count, setCount] = useState(0);

   
        
    const [{maNv,tenNv}, setInfo] = useState({})

    const fixState = () => {
        setInfo(maNv+1, tenNv+1)
    }

    // const increaseCount = () => {
    //     setCount(count+1)
    // }

    // const decreaseCount = () => {
    //     setCount(count-1)
    // }
    return (
        <div>
            <h1>Demo Hook</h1>
            {/* <button className="btn btn-success mr-3" onClick={increaseCount}>Increase count</button>
            <button className="btn btn-success mr-3" onClick={decreaseCount}>Decrease count</button> */}
            <button className="btn btn-success" onClick={fixState}>Fix staff</button>
            {/* <h1 className="display-4">Count: {count} </h1> */}
            <h1>maNV:{maNv} </h1>
            
        </div>
    )
}

export default DemoHook;
