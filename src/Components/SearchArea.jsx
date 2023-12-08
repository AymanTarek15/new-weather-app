import React, { useState } from "react";
import Weather from "./Weather";

function SearchArea() {
    const [input, setInput] = useState("");

    function handleChange(e) {
        let newInput = e.target.value;
        setInput(newInput);
    }

    async function handleClick() {
        // Perform API call and pass data to Weather component
        // You can use fetch or any other HTTP library here
        fetchWeatherData(input);
    }

    async function fetchWeatherData(city) {
        try {
            const apiKey = '45fcc58cee7c4a79a2a03636230312';
            const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
            const data = await response.json();

            // Pass data to Weather component
            // You can handle data in a more structured way based on your needs
            console.log(data);
            // Set state or perform any other action based on the fetched data

        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }

    return (
        <div className="middle-container container text-container">
            <div className="row">
                <div className="input-container col-sm-12 col-lg-12 col-xl-6">
                    <h1>Search for the city you are looking for</h1>
                    <div className="input-form">
                        <input
                            className="form-control"
                            onChange={handleChange}
                            type="search"
                            name="search"
                            id="city-search"
                            value={input}
                        />
                        <button onClick={handleClick} className="btn bg-primary" name="search-button" id="search-button">
                            Search
                        </button>
                    </div>
                </div>

                <div className="col-sm-12 col-md-12 col-xl-6">
                    <Weather inputValue={input} />
                </div>
            </div>
        </div>
    );
}

export default SearchArea;


// import React, { useState } from "react";
// import Weather from "./Weather";

// function SearchArea() {
//     const [input,setInput]=useState("")
//     function handleChange(e){
//         let newInput=e.target.value;
//         setInput(newInput)
//         console.log(input);
//     }

//     function handleClick(){
//         return <Weather inputValue={input} />
//     }
//     return <div className="input-container">
//         <h1>Search for the city you are looking for</h1>
//         <input className="form-control" onChange={handleChange} type="search" name="search" id="city-search" value={input} />
//         <button onClick={handleClick} className="btn bg-success" name="search-button" id="search-button">Search</button>
//     </div>
// }

// export default SearchArea


