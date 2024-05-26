import { FaRegHeart } from "react-icons/fa";
import black from '../Assets/BlackMan.jpg'
import sign from '../Assets/Sign.png'
import text from '../Assets/Text.png'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


function HomePage({ AccountType, jsondata}){ 

    const navigator = useNavigate()
    const [sharedValue,setSharedValue] = useState({
        Name:'',
        image:''
    })

    console.log(sharedValue,"sharedValue");

    let date = ('');
    let time = ('');

    //  LeftArrow Click BackFunction
    function ClickBackHandler(){
        navigator(-1);
    }

    // Route Ka Name Define Karna
    const NameToUrl = (name) => {
        return name.toLowerCase().replace(/ /g, '-');
    }

    // onclick karna Jab ham ek single pic par click kare
    const clickHandler = async (value) => {

        const ValueName = NameToUrl(value.name)
        const pageData = value.pages;

        // these are using Option for manegment.
        const Options = {
            hour:'numeric',
            minute:'numeric',
            second:'numeric',
            hour12:true
        }

        // These Using localStorage can we save data on Browser
        const token = localStorage.getItem("token");

        // Current Time.
        time = new Date().toLocaleTimeString('en-US', Options);

        // Current Date.
        date = new Date().toLocaleDateString();
        // MyHistoryClickHandler(time, date, value.name, value.img_url);

        setSharedValue({Name:value.name, image:value.img_url});

        try{
            const TileResponse = await axios.post(`http://localhost:4000/api/v1/tile/storeTileName`,{
                tileName:value.name,
                time:time,
                date:date
            },
                {
                    headers:{
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            console.log('Tile name stored successfully:', TileResponse.data);

            // MyHistoryClickHandler(navigator);
            // MyHistoryClickHandler(time, date, value.name, value.img_url);

        }catch(error){
            console.error('Error storing tile name:', error);
        }
        if(pageData.length > 0){
            navigator(`/page1/${ValueName}`, { state: { pageData, ValueName, index : 0 } });
        }
    }

    const MyHistoryClickHandler = () => {
        const {Name, image} = sharedValue
        const time = new Date().toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true
        });
        const date = new Date().toLocaleDateString();
        const existingHistory = JSON.parse(localStorage.getItem('history')) || [];
        const newHistoryEntry = { Name, image, time, date };
        localStorage.setItem('history', JSON.stringify([...existingHistory, newHistoryEntry]));
        navigator('/myHistory');
    };
    
    // Input Tag Value Fetch Karna
    const [query, setQuery] = useState("");

    // JSON.parse  <== Using Json String Data To Convert Array Ya Object Data
    const [tilesData, setNewJSONData] = useState(() => {      // using useState with callback function
        const storedData = sessionStorage.getItem('tilesData');    // Reading a data using sessionStorage.getItem
        return storedData ? JSON.parse(storedData) : jsondata;  // storedData is present then return (JSON.parse(storedData)) Nhi to return jsondata
    });

    const externalImgUrls = [
        "data:image/png;base64,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",
        "data:image/png;base64,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",
        "data:image/png;base64,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" ,
        "data:image/png;base64,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" ,
        "data:image/png;base64,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"
    ];

    const getRandomImageUrl = () => {
        const randomIndex = Math.floor(Math.random() * externalImgUrls.length);
        return externalImgUrls[randomIndex];
    };

    const InputHandlerEnterKeyPress = async (event) => {

        if(event.key === "Enter"){
            try{
                const responce = await axios.get(
                    `http://18.116.140.175:8000/documents?query=${encodeURIComponent(query)}`,
                    {
                        headers : {
                            'accept': 'application/json'
                        }
                    }
                )

                const newData = responce.data
                console.log(newData);

                const updateData = newData.tiles.map((val) => ({
                    ...val,
                    img_url: val.img_url || getRandomImageUrl()
                }));

                console.log(updateData, "updateData")

                const mergeData = {
                    ...responce.data,
                    tiles : updateData
                }
                
                console.log(mergeData, "mergeData")

                setNewJSONData( mergeData);
                sessionStorage.setItem('tilesData', JSON.stringify(mergeData)); // Save to session storage

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
                    <h1 className="HealeefyHading">{tilesData ? tilesData.Heading : ""}</h1>
                    <p className="description">{tilesData ? tilesData.description : ""}</p>
                </div>

                {
                    tilesData.tiles.map((value, index) => {
                        return(
                            <div key={index} className="imagehadingdiv">
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
                <button onClick={MyHistoryClickHandler}>My History</button>
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




