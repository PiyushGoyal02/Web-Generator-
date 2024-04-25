import { FaRegHeart } from "react-icons/fa";
import black from '../Assets/BlackMan.png'
import sign from '../Assets/Sign.png'
import text from '../Assets/Text.png'

function HomePage({jsondata}){
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
                            <div className="imagehadingdiv">
                                <div className="imagetextcontantbox">
                                    <img className="imagess" src={value.img_url}></img>
                                    {/* <hr></hr> */}
                                    <p className="imageKaText">{value.name}</p>
                                </div>
                            </div>
                        )
                    })
                }


            </div>
                <input className="inputTag" placeholder="write your problem.."></input>


        </div>
    )
}

export default HomePage;