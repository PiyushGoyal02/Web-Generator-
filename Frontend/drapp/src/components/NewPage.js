import { useLocation, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import black from '../Assets/BlackMan.jpg'
import sign from '../Assets/Sign.png'
import text from '../Assets/Text.png'
import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";


function NewPage(){

    const location = useLocation();

    // Data Fetched HomePage.js (pageData and index)
    const { pageData, index } = location.state || { pageData: [], index: 0 };

    // Data Fetched HomePage.js (ValueName)
    const { ValueName } = location.state || {}; 

    // This is a Navigator Onclick Arrow One Step Back
    const navigator = useNavigate();
    function ClickBackHandler(){
        navigator(-1);
    }

    // Pages Index Ka Current Index 
    const currentPage = pageData[index];


    const hasNext = index < pageData.length - 1;

    // Button onclick Same Route But Data Change
    const handleNext = () => {
        if (hasNext) {
            navigator(`/page1/${ValueName}`, { state: { pageData, index: index + 1 } });
        }
    };

    // Replace `\n` with `<br>` in the description
    const formatDescription = (description) => {
        return description ? description.replace(/\n/g, '<br>') : '';
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

            <div className="mindfullnessdiv">
                <h1 className="mindfulnessName">{pageData ? pageData[0].title : ""}</h1>
                <img className="mindfulnessPic" src={pageData ? pageData[0].img_url : ""}></img>
                <p className="intro">{pageData ? pageData[0].sub_heading : ""}</p>
                <p className="introDiscription" dangerouslySetInnerHTML={{ __html: formatDescription(currentPage.description) }}></p>
                {/* <p className="introDiscription">{pageData ? pageData[0].description : "Description Not Found"}</p> */}
                {/* <p className="introDiscription">{currentPage.description}</p> */}
                {/* <button onClick={handleNext} className="start-excer">{pageData ? pageData[0].button_label : "Button Not Found"}</button> */}
                {/* <button onClick={handleNext} className="start-excer" >{pageData ? pageData[0].button_label : ""}</button> */}

            </div>
        </div>
    )
}

export default NewPage;