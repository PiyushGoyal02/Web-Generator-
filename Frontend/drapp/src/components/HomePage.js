import { FaRegHeart } from "react-icons/fa";
import black from '../Assets/BlackMan.jpg'
import sign from '../Assets/Sign.png'
import text from '../Assets/Text.png'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


function HomePage({ AccountType, jsondata}){

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
        if(pageData.length > 0){
            // navigator(`/page1/${ValueName}`, { state: { pageData, ValueName } });
            navigator(`/page1/${ValueName}`, { state: { pageData, ValueName, index : 0 } });
        }
    }
    
    // Input Tag Value Fetch Karna
    const [query, setQuery] = useState("");

    // const [tilesdata,setNewJSONData] = useState(jsondata)
    // console.log( tilesdata);

    const [tilesData, setNewJSONData] = useState(() => {
        const storedData = sessionStorage.getItem('tilesData');
        return storedData ? JSON.parse(storedData) : jsondata;
    });

    

    const InputHandlerEnterKeyPress = async (event) => {

        if(event.key === "Enter"){
            try{
                const responce = await axios.get(
                    "http://18.116.140.175:8000/documents?query=${encodeURIComponent(query)",
                    {
                        headers : {
                            'accept': 'application/json'
                        }
                    }
                )

                const newData = responce.data

                const updateData = newData.tiles.map((val) => ({...val}));
                console.log("updateData", updateData)

                const mergeData = {
                    ...tilesData,
                    Heading : newData.Heading,
                    description: newData.description,
                    tiles : newData.tiles
                }
                
                console.log(mergeData)

                setNewJSONData(mergeData);
                sessionStorage.setItem('tilesData', JSON.stringify(mergeData)); // Save to session storage

                // console.log("JSON-Data", setNewJSONData)
            }catch(error){
                console.error('Error fetching new data:', error);
            }
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

            <div className="boxcontantdiv">

                <div>
                    <h1 className="HealeefyHading">{tilesData.Heading}</h1>
                    <p className="description">{tilesData.description}</p>
                </div>

                {
                        tilesData.tiles.map((value) => {
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
            <input
                    className="inputTag"
                    placeholder="Type Here to make changes or add new questions"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={InputHandlerEnterKeyPress}
                />
                {/* <input onKeyDown={InputHandlerEnterKeyPress} onChange={(event) => setQuery(event.target.value)} value={query} name="InputTagValue" className="inputTag" placeholder="Type Here to make changes or add new questions"></input> */}
            </div>

        </div>
        
        
    )
}

export default HomePage;