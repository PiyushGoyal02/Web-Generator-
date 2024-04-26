import { FaArrowLeft } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import black from '../Assets/BlackMan.png'
import sign from '../Assets/Sign.png'
import text from '../Assets/Text.png'
import { useNavigate } from "react-router-dom";


function MindfulnessPage1({jsondata}){

    const navigator = useNavigate();
    function ClickBackHandler(){
        navigator(-1);
    }

    return(
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

            <div className="mindfullnessdiv">
                <h1 className="mindfulnessName">{jsondata.tiles[0].pages[0].header}</h1>
                <img className="mindfulnessPic" src={jsondata.tiles[0].pages[0].img_url}></img>
                <p className="intro">{jsondata.tiles[0].pages[0].sub_heading}</p>
                <p className="introDiscription">{jsondata.tiles[0].pages[0].description}</p>
                <button className="start-excer">{jsondata.tiles[0].pages[0].button_label}</button>
            </div>
        </div>
    )
}

export default MindfulnessPage1;