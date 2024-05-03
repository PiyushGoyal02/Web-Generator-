import { useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import black from '../Assets/BlackMan.jpg'
import sign from '../Assets/Sign.png'
import text from '../Assets/Text.png'
import { useNavigate } from "react-router-dom";


function NewPage(){

    const location = useLocation();
    const { pageData } = location.state || {};
    // console.log(pageData);


    const navigator = useNavigate();
    function ClickBackHandler(){
        navigator(-1);
    }

    function ClickButtonHandler(){
        navigator('/Mindfulness2')
    }

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

            <div className="mindfullnessdiv">
                <h1 className="mindfulnessName">{pageData ? pageData.header : "Header Not Found"}</h1>
                <img className="mindfulnessPic" src={pageData ? pageData.img_url : "Image Not Found"}></img>
                <p className="intro">{pageData ? pageData.sub_heading : "sub_heading Not Found"}</p>
                <p className="introDiscription">{pageData ? pageData.description : "Description Not Found"}</p>
                <button onClick={ClickButtonHandler} className="start-excer">{pageData ? pageData.button_label : "Button Not Found"}</button>
            </div>
        </div>
    )
}

export default NewPage;