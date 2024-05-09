import { useLocation, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import black from '../Assets/BlackMan.jpg'
import sign from '../Assets/Sign.png'
import text from '../Assets/Text.png'
import { useNavigate } from "react-router-dom";


function NewPage(){

    const location = useLocation();
    const { pageData, index } = location.state || { pageData: [], index: 0 };
    const { ValueName } = location.state || {}; 

    const navigator = useNavigate();
    function ClickBackHandler(){
        navigator(-1);
    }

    const currentPage = pageData[index];

    // Determines whether there is a next page by checking if index is less than the last index of pageData.
    const hasNext = index < pageData.length - 1;
    console.log(hasNext);

    // Jab hasNext Mark True then This Function execute.
    const handleNext = () => {
        if (hasNext) {
            navigator(`/page1/${ValueName}`, { state: { pageData, index: index + 1 } });
        }
    };

    // Replace \n with <br> in the description
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
                <h1 className="mindfulnessName">{currentPage ? currentPage.header : ""}</h1>
                <img className="mindfulnessPic" src={currentPage ? currentPage.img_url : ""}></img>
                <p className="intro">{currentPage ? currentPage.sub_heading : ""}</p>
                <p className="introDiscription" dangerouslySetInnerHTML={{ __html: formatDescription(currentPage.description) }}></p>
                <button onClick={handleNext} className="start-excer" >{currentPage ? currentPage.button_label : ""}</button>
                {/* <p className="introDescription">{currentPage.description}</p> */}
            </div>
        </div>
    )
}

export default NewPage;