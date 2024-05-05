import { FaRegHeart } from "react-icons/fa";
import black from '../Assets/BlackMan.jpg'
import sign from '../Assets/Sign.png'
import text from '../Assets/Text.png'
import { useNavigate } from "react-router-dom";


function HomePage({jsondata}){

    const navigator = useNavigate()

    //  LeftArrow Click BackFunction
    function ClickBackHandler(){
        navigator(-1);
    }

    // Route Ka Name Define Karna
    const funcode = (name) => {
        return name.toLowerCase().replace(/ /g, '-');
    }

    // onclick karna Jab ham ek single pic par click kare
    function clickHandler (value){
        const ValueName = funcode(value.name)
        console.log(ValueName)
        const pageData = value.pages;
        console.log(pageData)
        // navigator(`/page/${ValueName}`, { state: { pageData, ValueName } });
        navigator(`/page1/${ValueName}`, { state: { pageData, ValueName } });
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
                                    <img onClick={() => clickHandler (value)}  className="imagess" src={value.img_url} alt={value.name} ></img>
                            
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

        </div>
        
        
    )
}

export default HomePage;