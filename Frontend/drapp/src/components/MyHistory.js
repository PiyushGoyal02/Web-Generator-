// import { useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import { PiDotFill } from "react-icons/pi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import black from '../Assets/BlackMan.jpg'
import sign from '../Assets/Sign.png'
import text from '../Assets/Text.png'

function MyHistory(){

    const [historyList, setHistoryList] = useState([]);

    useEffect(() => {
        // Fetch the history data from localStorage
        const historyData = localStorage.getItem('history');
        if (historyData) {
            setHistoryList(JSON.parse(historyData));
        }
    }, []);


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

            <div className="MyHistoryMainDiv">
                <h1>My History</h1>
                {historyList.length > 0 ? (
                    <div>
                        {historyList.map((items, index) => (
                            <div className="myHistorySingleBox" key={index}>
                                <img className="myHistoryImages" src={items.image}></img>

                                <div className="myHistoryName-Date-Icon">
                                    <div className="Name-date-icon-time">
                                        <div>
                                            <h4>{items.Name}</h4>
                                        </div>

                                        <div className="Date-Icon-Time">
                                            <span>{items.time}</span>
                                            <span><PiDotFill /></span>
                                            <span>{items.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ):(
                    <p>No History Item Found</p>
                )}
            </div>
        </div>
    )
}

export default MyHistory;