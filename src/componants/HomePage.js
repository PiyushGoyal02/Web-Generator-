import { FaRegHeart } from "react-icons/fa";
import black from '../Assets/BlackMan.jpg'
import sign from '../Assets/Sign.png'
import text from '../Assets/Text.png'
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";



function HomePage({jsondata}){

    const [selectedPageData, setSelectedPageData] = useState(null);

    const navigator = useNavigate()
    // const navigator2 = useNavigate()

    //  LeftArrow Click BackFunction
    function ClickBackHandler(){
        navigator(-1);
    }

    // Route Ka Name Define Karna
    const funcode = (name) => {
        return name.toLowerCase().replace(/ /g, '-');
    }

    // onclick karna Jab ham ek single pic par click kare
    function clickHandler (value, pageIndex){
        const apnacode = funcode(value)
        console.log(pageIndex);
        console.log(apnacode);
        navigator(`/${apnacode}`)


        if (pageIndex[0] > 0 ) {
            const route = jsondata.tiles.pages[pageIndex[0]];
            navigator(route + `/${apnacode}`);
        } else {
            console.error('Invalid pageIndex:', pageIndex[0]);
        }
        


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

            <div className="boxcontantdiv">
                <h1 className="HealeefyHading">{jsondata.Heading}</h1>
                <p className="description">{jsondata.description}</p>
                
                {
                    jsondata.tiles.map((value) => {
                        return(
                    
                            <div key={value.id} className="imagehadingdiv">
                                <div className="imagetextcontantbox">
                                    <img onClick={() => clickHandler (value.name, value.pages)}  className="imagess" src={value.img_url} alt={value.name} ></img>
                            
                                    <p className="imageKaText">{value.name}</p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            
            <div>
                <input className="inputTag" placeholder="Type Here to make changes or add new questions"></input>
            </div>





            {/* Mindfulness1 */}

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

export default HomePage;




