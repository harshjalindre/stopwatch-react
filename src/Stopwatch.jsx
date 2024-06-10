import { useState } from "react";
import BoxButton from "./BoxButton"
import { useEffect } from "react";
import { useRef } from "react";

const Stopwatch = () => {

    const [clock, runClock] = useState(false);
    const [elapsed, setElapsed] = useState(0);

    const intervalRef = useRef(null);
    const startClockRef = useRef(0);

    useEffect(()=>{
        if(clock){
            intervalRef.current = setInterval(()=>{
                setElapsed(Date.now() - startClockRef.current)
            },10)
        }

        return (()=> clearInterval(intervalRef.current));
    },[clock])

    const handleStart = () => { 
        runClock(true);
        startClockRef.current = Date.now() - elapsed;
    }

    const handleStop = () => {
        runClock(false);
    }

    const handleReset = () => {
        setElapsed(0);
        runClock(false)
    }

    const TimeFormat = () => {
        // let h = Math.floor(elapsed / (1000 * 60 * 60));
        let m = Math.floor(elapsed / (1000 * 60 ) % 60);
        let s = Math.floor(elapsed / (1000) % 60);
        let ml = Math.floor((elapsed % 1000) / 10);

        // h = String(h).padStart(2,"0");
        m = String(m).padStart(2,"0");
        s = String(s).padStart(2,"0");
        ml = String(ml).padStart(2,"0");

        return `${m} : ${s} : ${ml}`;


    }

  return (
    <>
        <div className="container-box">
            <div className="box">
                <h1>Stopwatch</h1>
                <h1>{TimeFormat()}</h1>
                <div className="button-group">
                <BoxButton btnName={'Start'} background={'green'} events={handleStart}/>
                <BoxButton btnName={'Stop'} background={'red'} events={handleStop}/>
                <BoxButton btnName={'Reset'} background={'blue'} events={handleReset}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Stopwatch