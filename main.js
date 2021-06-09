// // Erste Schritte: Kopierter Code von TryIt


// let number = document.getElementById('number')
// const sendToAPI = () =>{
//     const userInput = number.value
// fetch(`https://jsonplaceholder.typicode.com/todos/${userInput}`)
//   .then(response => response.json())
//   .then(data => {
//      console.log(data)
//         result.innerHTML += `<div>
//         <h2>User ID: ${data.userId}
//         </h2>
//         <p>
//             <input type="checkbox" ${data.completed ? "checked" : ""}>
//             ${data.title}
//         </p>
//         </div>`
//       });
      
//     }
    let result = document.getElementById('result')
    let city = document.getElementById('city')
    
    const wheatherByCity = () => {
    const userInput = city.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=cb7588bd108fe14c40bc75b5d8c43314&lang=de&units=metric
    `)
    .then(response => response.json())
    .then(json => {
        console.log(json)
        result.innerHTML =`
            <div class="card">
                <div class="cardhead">
                <h1>Wetter in ${json.name}, ${json.sys.country}</h1>
                </div>

                <div class="wrapper">
                <div class="icon">
                <img src="http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png">
                <div>
                <p>${Math.round(json.main.temp)}°C</p>
                <p>${json.weather[0].description}</p>
                </div>
                </div>

                <div class="info">
                
                
                <p class="infolabel">Gefühlte Temperatur</p>
                <p>${Math.round(json.main.feels_like)}°C</p>
                <p class="infolabel">Tageshoch</p>
                <p>${Math.round(json.main.temp_max)}°C</p>
                <p class="infolabel">Tagestief</p>
                <p>${Math.round(json.main.temp_min)}°C</p>
                <p class="infolabel">Luftfeuchtigkeit</p>
                <p>${json.main.humidity}%</p>
                </div>
            </div>
            </div>
        `   
        
     })

     city.value=""
     
    } 
    