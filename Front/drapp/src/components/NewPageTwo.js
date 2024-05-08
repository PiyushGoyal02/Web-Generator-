import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import black from '../Assets/BlackMan.jpg'
import sign from '../Assets/Sign.png'
import text from '../Assets/Text.png'
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

function NewPageTwo(){

    const location = useLocation();
    const { PageId } = location.state || {}
    console.log("PageId", PageId)

    // Back Jane Kai liye
    function ClickBackHandler(){
        navigator(-1);
    }

    const navigator = useNavigate();
        
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timerInterval;
    
        if (isRunning) {
          timerInterval = setInterval(() => {
            setTime((prevTime) => {
              if (prevTime <= 0) {
                clearInterval(timerInterval);
                setIsRunning(false);
                return 0;
              }
              return prevTime - 1;
            });
          }, 1000);
        }
    
        return () => clearInterval(timerInterval);
    }, [isRunning]);        // Jab Eski Value Change Ho Tab Update Hona Chahiye...

    const handleTimeChange = (event) => {
        setTime(parseInt(event.target.value));
    };
    
    const handlePlayClick = () => {
        setIsRunning(true);
    };
    
    const handleStopClick = () => {
        setIsRunning(false);
        setTime(0);
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    return (
        <div>


            <div className="Top-Hading">
                <div className="sign-text">
                    <img src={sign}></img>
                    <img src={text}></img>
                </div>

                <div className="heartlogo-blackman">
                    <p className="bookan">Book an appointment</p>
                    <div className="redheartdiv">
                        <p className="redheart"><FaRegHeart/></p>
                    </div>
                    <div className="blackmandiv">
                        <img className="blackman" src={black}></img>
                    </div>
                </div>
            </div>

            <div onClick={ClickBackHandler} className="leftarrowdiv">
                <p className="arrowleft"><FaArrowLeft /></p>
            </div>


            <div className="mindfulnesspagetwodiv">
                <p className="mindfultwodescription">{PageId ? PageId.description : "Description Is Not Found"}</p>
                <p className="length">{PageId ? PageId.length : "Length Is NOt Found"}</p>
                <input onChange={handleTimeChange} value={time} className="rangeinput" type="range" min="09:00" max="18:00" class="slider" step="0.1" ></input>

                <div className="circle">
                    <p className="timecount">{formatTime(time)}min</p>
                    <p className="remaining">remaining</p>
                </div>

                <div className="Icons">
                    {/* <div className="SingleSingleIconDiv"><p> <MdOutlineReplay/> </p></div> */}
                    <div className="SingleSingleIconDiv"><p onClick={handlePlayClick}> <FaPlay/> </p></div>
                    <div className="SingleSingleIconDiv"><p onClick={handleStopClick}> <RxCross2/> </p></div>
                </div>
            </div>

        </div>
    )
}

export default NewPageTwo;