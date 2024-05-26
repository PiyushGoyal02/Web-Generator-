// import { useLocation } from "react-router-dom";
// import { PiDotFill } from "react-icons/pi";
// import { MdKeyboardArrowRight } from "react-icons/md";
// import { FaRegHeart } from "react-icons/fa";
// import black from '../Assets/BlackMan.jpg'
// import sign from '../Assets/Sign.png'
// import text from '../Assets/Text.png'

// function MyHistory(){

//     const location = useLocation();
//     const {time, date, Name, image} = location.state || {};
//     console.log(time);
//     console.log(date);
//     console.log(Name);
//     console.log(image);
//     return (
//         <div>
//             <div className="Top-Hading">
//                 <div className="sign-text">
//                     <img src={sign}></img>
//                     <img src={text}></img>
//                 </div>

//                 <div className="heartlogo-blackman">
//                     <p className="bookan">Book an appointment</p>
//                     <div className="redheartdiv">
//                         <p className="redheart"><FaRegHeart/></p>
//                     </div>
//                     <div className="blackmandiv">
//                         <img className="blackman" src={black}></img>
//                     </div>
//                 </div>
//             </div>


//             <div className="MyHistoryMainDiv">
//                 <p className="MyHistory">My History</p>

//                 <div className="myHistorySingleBox">
//                     <img src={image}className="myHistoryImages"></img>
//                     {/* <img className="myHistoryImages" src="https://w0.peakpx.com/wallpaper/955/713/HD-wallpaper-doctor-medical.jpg"></img> */}

//                     <div className="myHistoryName-Date-Icon">
//                         <div className="Name-date-icon-time">
//                             <div>
//                                 <h4>{Name}</h4>
//                             </div>

//                             <div className="Date-Icon-Time">
//                                 <span>{time}</span>
//                                 <span><PiDotFill /></span>
//                                 <span>{date}</span>
//                             </div>
//                         </div>

//                         {/* <button className="myHistoryRightArrowIcon"><MdKeyboardArrowRight/></button> */}
//                         {/* <button className="myHistoryRightArrowIcon">
//                             <p className="icon-right"><MdKeyboardArrowRight/></p>
//                         </button> */}
//                     </div>

//                 </div>
//             </div>
//         </div>
//     )
// }

// export default MyHistory;


// import { useEffect, useState } from 'react';

// function MyHistory() {
//     const [history, setHistory] = useState([]);

//     useEffect(() => {
//         const storedHistory = JSON.parse(localStorage.getItem('history')) || [];
//         setHistory(storedHistory);
//     }, []);

//     return (
//         <div>
//             <h1>My History</h1>
//             {history.length > 0 ? (
//                 history.map((entry, index) => (
//                     <div key={index}>
//                         <p>Time: {entry.time}</p>
//                         <p>Date: {entry.date}</p>
//                         <p>Name: {entry.Name}</p>
//                         <img src={entry.image} alt={entry.Name} />
//                     </div>
//                 ))
//             ) : (
//                 <p>No history available.</p>
//             )}
//         </div>
//     );
// }

// export default MyHistory;


import React, { useState, useEffect } from 'react';

function MyHistory() {
    const [historyList, setHistoryList] = useState([]);
    console.log(historyList)

    useEffect(() => {
        // Fetch the history data from localStorage
        const historyData = localStorage.getItem('history');
        if (historyData) {
            setHistoryList(JSON.parse(historyData));
        }
    }, []);

    return (
        <div>
            <h1>My History</h1>
            {historyList.length > 0 ? (
                <ul>
                    {historyList.map((item, index) => (
                        <li key={index}>
                            {/* <p>{item.naam}</p> */}
                            <p>Time: {item.time}</p>
                            <p>Date: {item.date}</p>
                            <p>{item.Name}</p>
                            {item.Name && <p>Name: {item.Name}</p>}
                            {item.image && <img src={item.image} alt="History Item" />}
                        </li>

                    ))}
                </ul>
            ) : (
                <p>No history items found.</p>
            )}
        </div>
    );
}

export default MyHistory;
