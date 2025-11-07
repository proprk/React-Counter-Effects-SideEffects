import {useState, useEffect} from 'react'
import { RiResetLeftFill } from "react-icons/ri";


function CounterWithEffects() {

    const [count, setCount] = useState(0);
    const [auto, setAuto] = useState(false);

    useEffect(() => {
        document.title = `Count : ${count}`
    }, [count])

    useEffect(() => {
        if(!auto) return;

        const autoCount = setInterval(() => {
            setCount(prev => prev + 1)
        },1000)

        return () => clearInterval(autoCount);
    }, [auto])



    // Manual Counter Handlers
    const handleIncrement = () => {
        setCount(prev => prev +1)
    }
    const handleDecrement = () => {
        if(count <1) return;
        setCount(prev => prev -1)
    }
    const handleReset = () => {
        setCount(0)
    }

    const toggleAuto = () => {
        setAuto(!auto)
    }

  return (
    <>
        <div className="h-[80vh] w-[80vw] bg-[#0247ff] rounded-[50px] text-[#F5F1DC] text-ellipsis">
            <div className="flex flex-col gap-4 items-center justify-center text-ellipsis">
                <h1 className="text-center text-[200px] font-bold">Count: {count}</h1>
                {!auto ? (
                    <div className="flex gap-4 justify-center">
                        <button className="bg-orange-500 px-4 py-2 rounded-lg text-[#F5F1DC]  cursor-pointer" onClick={handleIncrement}>Increment</button>
                        <button className="bg-orange-500 px-4 py-2 rounded-lg text-[#F5F1DC]  cursor-pointer" onClick={handleDecrement}>Decrement</button>
                        <button className="bg-orange-500 px-4 py-2 rounded-lg text-[#F5F1DC]  cursor-pointer" onClick={handleReset}><RiResetLeftFill /></button>
                    </div>  
                ) : (
                    <div className="flex flex gap-4 justify-center items-center">
                        <p className="text-xl font-semibold">Auto Counting...</p>
                        <button className="bg-orange-500 px-4 py-2 rounded-lg text-[#F5F1DC]  cursor-pointer" onClick={handleReset}><RiResetLeftFill /></button>
                    </div>  
                )}

                <p className="mb-[-12px]">Toggle Counter Type:</p>

                <button 
                    className='bg-orange-500 px-4 py-2 rounded-lg text-[#F5F1DC] cursor-pointer' 
                    onClick={toggleAuto}
                    >
                        {auto ? "Stop Auto" : "Start Auto"}
                </button>
                
            </div>
        </div>
    </>

  )
}

export default CounterWithEffects;