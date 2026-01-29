function checkWeather(){
    let givenCity = document.getElementById("cityName").value
    fetch(`https://api.weatherapi.com/v1/current.json?key=b5777042733e40e3a2292541262801&q=${givenCity}`).then(function(res){
        return res.json()
    }).then(function(response){
        console.log("res", response)
        document.getElementById("result").innerHTML = `<div class="resultbox">
        <img src="https:${response.current.condition.icon}" alt="weather img">
       
        <div class="text">${response.current.condition.text}</div>
        <div class="place" >
        ${response.location.name},
        ${response.location.region},
        ${response.location.country}</div>
        <div class="temp">
        ${response.current.temp_c}°C</div>
    </div>`
    result.classList.add("show");
    }).catch(function(error) {
        console.log("Error" , error)
    })
}