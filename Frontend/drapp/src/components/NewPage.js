import { useLocation, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import black from '../Assets/BlackMan.jpg'
import sign from '../Assets/Sign.png'
import text from '../Assets/Text.png'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";


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

    // Jab hasNext Mark True then This Function execute.
    const handleNext = () => {
        if (hasNext) {
            navigator(`/page1/${ValueName}`, { state: { pageData, index: index + 1 } });
        }
    };

    // Function ChangeHandler
    function handleInputChange (event){
        setInputValue(event.target.value);
    }
    // Replace \n with <br> in the description
    const formatDescription = (description) => {
        return description ? description.replace(/\n/g, '<br>') : '';
    };
    
    
    const [inputValue, setInputValue] = useState("");   // Fetched Data On InputTag Widgit-Questions
    const [interactionHistory, setInteractionHistory] = useState([]);    // InputTag Value Show form UI Widgit Question reply
    const [questions, setQuestions] = useState([]);       // Question ko store Karega jo user sai puchne hai
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);  // yai question ka index track krte hai ki abhi aap konse question par hai

    // useEffect(() => {
    //     const widgit = pageData[index]?.Widgit;
    //     if (widgit && widgit.Name === "Chatbot") {
    //         setQuestions(widgit.Properties.Questions);
    //     }
    // }, [pageData, index]);

    useEffect(() => {
        if (pageData[index] && pageData[index].Widgit && pageData[index].Widgit.Name === "Chatbot") {
            const newQuestions = pageData[index].Widgit.Properties.Questions;
            setQuestions(newQuestions);
            if (newQuestions.length) {
                // Start with the first question
                setInteractionHistory([`Question: ${newQuestions[0]}`]);   // Display/Ui Print 
            }
        }
    }, [pageData, index]);      // Updated Value pageData || index value



    // InputTag Send Button Click  
    // const handleButtonClick = () => {
    //     if(inputValue.trim() !== ""){
    //         setInteractionHistory([...interactionHistory, inputValue])
    //         setInputValue('');
    //     }
    // }

    const handleSubmitAnswer = () => {
        if (inputValue.trim() !== "") {
            // Update interaction history with the user's answer
            const updatedHistory = [...interactionHistory, `Answer: ${inputValue}`];
            setInputValue('');  // Clear input field

            const nextQuestionIndex = currentQuestionIndex + 1;
            if (nextQuestionIndex < questions.length) {
                // Add the next question to the interaction history
                updatedHistory.push(`Question: ${questions[nextQuestionIndex]}`);
                setCurrentQuestionIndex(nextQuestionIndex);
            } else {
                updatedHistory.push('End of the questions.');
            }
            
            setInteractionHistory(updatedHistory);
        }
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


                <div className="Widgi-Button-Input-Para">

                    {/* <div>
                        {interactionHistory.map((item, idx) => (
                            <p className="InputText" key={idx}>{item}</p>
                        ))}
                    </div> */}

                    {/* <div>
                    {interactionHistory.map((item, idx) => {
                        const isQuestion = item.startsWith("Question:"); // Check if the item is a question
                        return (
                        <p className={isQuestion ? "questionText" : "answerText"} key={idx}>
                            {item}
                        </p>
                        );
                    })}
                    </div> */}

                    <div className="container">
                        {interactionHistory.map((item, idx) => {
                            const isQuestion = item.startsWith("Question:");
                            return (
                            <p className={isQuestion ? "questionText" : "answerText"} key={idx}>
                                {item}
                            </p>
                            );
                        })}
                    </div>

                    
                    <div className="Widgit-InputTag-Button">
                        
                    {currentPage ? 
                        (
                            currentPage.inputTag ? (
                                <input
                                className="Widgit-Input-tag"
                                type="text"
                                value={inputValue}
                                onChange={handleInputChange}
                                placeholder="Type your answer here..."
                                />
                            ) : ''
                        ) : <input
                                className="Widgit-Input-tag"
                                type="text"
                                value={inputValue}
                                onChange={handleInputChange}
                                placeholder="Type your answer here..."
                            />
                    }

                    {currentPage ? 
                        (
                            currentPage.button_Send ? (
                                <button className="Widgit-Send-Button" onClick={handleSubmitAnswer}>{currentPage.button_Send}</button> 
                            ) : ''
                        ) : <button className="Widgit-Send-Button" onClick={handleSubmitAnswer}>{currentPage.button_Send}</button> 
                    }
                    </div>
                </div>

                {currentPage ? 
                    (
                        currentPage.button_label ? (
                            <button className="start-excer" onClick={handleNext}>{currentPage.button_label}</button> 
                        ) : ''
                    ) : <button className="start-excer" onClick={handleNext}>{currentPage.button_label}</button> 
                }

            </div>
        </div>
    )
}

export default NewPage;