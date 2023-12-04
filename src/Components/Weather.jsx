import React, { useEffect, useState } from "react";

function Weather(props) {
    const [date,setDate]=useState();
    var [time,setTime]=useState();

    const backgroundStyles={
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/Final-pic.jpg)`,
        backgroundRepeat: 'no - repeat',
        backgroundSize: 'cover',
        // zIndex:'-1'
    };
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        // Perform API call when the component mounts or when props.inputValue changes
        if (props.inputValue) {
            fetchWeatherData(props.inputValue);
        }
    }, [props.inputValue]);

    async function fetchWeatherData(city) {
        try {
            const apiKey = '45fcc58cee7c4a79a2a03636230312';
            const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
            const data = await response.json();

            // Log the fetched data
            console.log(data);

            // Set weather data to state
            setWeatherData(data);
           const [part1, part2]= weatherData.location.localtime.split(' ')
           console.log(part1);
           console.log(part2);
           setDate(part1)
           setTime(part2)
        } catch (error) {
            console.error('Error fetching weather data:', error);
            // Handle error if needed
        }
    }

    // console.log(typeof (newYear.getUTCDay()));
    return (
        <div style={backgroundStyles} className="weather-outcome">
            
            {/* Display weather information based on the fetched data */}
            {weatherData ? (
                <div className="weather-text">
                    {/* Check if location and name properties are defined */}
                    {weatherData.location && weatherData.location.name && (
                        // <p>City: {weatherData.location.name}</p>
                        <h1> {weatherData.location.name}</h1>
                    )}
                    {/* <h2>{newDay} / {newMonth} / {newYear}</h2>
                    <h3>{newHour}:{newMin}</h3> */}
                    {weatherData.location && weatherData.location.localtime && (
                        <div>
                        <h3>{date}</h3>
                        <h3>{time}</h3>
                        </div>
                    )}
                    {/* Check if current and temp_c properties are defined */}
                    {weatherData.current && weatherData.current.temp_c && (
                        <h3>Temperature: {weatherData.current.temp_c} °C</h3>
                    )}
                    {weatherData.current && weatherData.current.feelslike_c && (
                        <h3>Feels like: {weatherData.current.feelslike_c} °C</h3>
                    )}
                    {weatherData.current && weatherData.current.condition.text && (
                        <h3>Condition: {weatherData.current.condition.text}</h3>
                    )}
                    {weatherData.current && weatherData.current.condition.icon && (
                        <img className="weather-icon" src={weatherData.current.condition.icon} alt="weather condition" />
                    )}
                    
                    {/* Add more data as needed */}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Weather;


// import React, { useEffect, useState } from "react";

// function Weather(props) {
//     const [weatherData, setWeatherData] = useState(null);

//     useEffect(() => {
//         // Perform API call when the component mounts or when props.inputValue changes
//         if (props.inputValue) {
//             fetchWeatherData(props.inputValue);
//         }
//     }, [props.inputValue]);

//     async function fetchWeatherData(city) {
//         try {
//             const apiKey = '45fcc58cee7c4a79a2a03636230312';
//             const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
//             const data = await response.json();
//             setWeatherData(data);
//         } catch (error) {
//             console.error('Error fetching weather data:', error);
//         }
//     }

//     return (
//         <div>
//             <div className="weather-outcome">
//                 <h1>Weather Data</h1>
//                 {/* Display weather information based on the fetched data */}
//                 {weatherData && (
//                 <div>
//                     <p>City: {weatherData.location.name}</p>
//                     <p>Temperature: {weatherData.current.temp_c} °C</p>
//                     {/* Add more data as needed */}
//                 </div>
//                 )}
                
//             </div>
            
//         </div>
//     );
// }

// export default Weather;

// import React from "react";
// import SearchArea from "./SearchArea";

// function Weather(props) {
//     const container = document.querySelector('.container');
//     const myImg = document.querySelector('img')
//     const mySelect = document.querySelector("select")

//     var selectedCity = "London"
    
//     const apiKey = '45fcc58cee7c4a79a2a03636230312';
//     mySelect.addEventListener("change", function () {
//         selectedCity = props.inputValue
//         console.log(selectedCity);

//         fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${selectedCity}`)
//             .then(
//                 (response) => {
//                     console.log(response);
//                     let data = response.json();   // promise
//                     return data;
//                 })
//             .then((myData) => {
//                 console.log(myData);
//                 myImg.src = myData.current.condition.icon  //.current.temp_c
//             })
//     }); 

//     const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${selectedCity}`;


//     return <div className="weather-outcome">
//         <h1>hello</h1>
//     </div>
// }

// export default Weather