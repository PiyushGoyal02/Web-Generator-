import { FaRegHeart } from "react-icons/fa";
import black from '../Assets/BlackMan.jpg'
import sign from '../Assets/Sign.png'
import text from '../Assets/Text.png'
import { useNavigate } from "react-router-dom";


function HomePage({jsondata}){

    const navigator = useNavigate()

    const clickHandler = (productId) => {
        navigator('/Mindfulness1')
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
                    
                            <button key={value.id} className="imagehadingdiv">
                                <div className="imagetextcontantbox">
                                    <img onClick={clickHandler} className="imagess" src={value.img_url} alt={value.name}></img>
                                    <p className="imageKaText">{value.name}</p>
                                </div>
                            </button>
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




