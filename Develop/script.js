$(document).ready(function() {

    //Search History, start with empty array and push city input answers into it
    var searchArray = [];


    //On click (after input of text) we want to pull current day,  5 day data, and update our searchArray
    $("#search-button").on("click", function() {
        pullCurrentWeather();
        pullFiveDayWeather();
        updateSearchArray();
        // $("#city-input").empty();
    })

    function updateSearchArray() {
        //Display searchArray.  Clear then append for loop
        $("#search-history").empty();
        for (var i = 0; i < searchArray.length; i++) {
            var newCity = $("<button>");
            newCity.addClass("clickable-ctiy");
            newCity.attr("data-name", searchArray[i]);
            newCity.text(searchArray[i]);
            $("#search-history").append(newCity);
        }
    }

    //Pull Current Weather data function
    function pullCurrentWeather() {
        var cityCurrent = $("#city-input").val().trim();
        var currentQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityCurrent + "&appid=397227bf482a5ff23f440af123eee801";
        //Push city input into searchArray
        searchArray.push(cityCurrent);

        $.ajax({
            url: currentQueryURL,
            method: "GET"
        }).then(function(response) {
            // console.log(response);
            //Feed information onto the site
            //Name, date, weather type
            console.log(cityCurrent);
            console.log(moment().format("MMMM Do YYYY"));
            console.log(response.weather[0].main);
            $("#current-status").text(cityCurrent + " " + moment().format("MMMM Do YYYY") + " " + response.weather[0].main);

            //Temperature
            console.log(response.main.temp);
            var reasonableTemp = (response.main.temp - 273.15) * 1.80 + 32
            $("#current-temperature").text("Temperature: " + reasonableTemp.toFixed(0) + " \xB0F");

            //Humidity
            console.log(response.main.humidity);
            $("#current-humidity").text("Humidity: " + response.main.humidity + "%")

            //Wind Speed
            console.log(response.wind.speed);
            $("#current-windspeed").text("Windspeed: " + response.wind.speed + "mph")

            //UV index.  Need lat and lon then use seperate api 
            console.log(response.coord.lon);
            console.log(response.coord.lat);

            //Need to pull different api to get UV index, based on lat and lon from prev
            var lon = response.coord.lon
            var lat = response.coord.lat
            var uvIndexURL = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=397227bf482a5ff23f440af123eee801"
            $.ajax({
                url: uvIndexURL,
                method: "GET"
            }).then(function(response) {
                $("#current-uvindex").text("UV Index: " + response.value)
            })


        });

    }

    //Pull 5-Day Weather data function
    function pullFiveDayWeather() {
        var cityCurrent = $("#city-input").val().trim();
        var fiveDayQueryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityCurrent + "&appid=397227bf482a5ff23f440af123eee801";

        $.ajax({
            url: fiveDayQueryURL,
            method: "GET"
        }).then(function(response) {
            var forecastEls = $(".forecast")
            for (i = 0; i < forecastEls.length; i++) {
                forecastEls[i].innerHTML = "";
                //Because the weather app gives you the 5 day forecast in 3 hour intervals, starting with the morning.  You multiple by 8 (there are 8 3 hour intervals in a day) and then I added 4, so it would give it's 3pm weather prediction, opposed to 6am. 
                var forecastIndex = i * 8 + 4;
                //The new date function takes into account milliseconds, so I multiplied by 1000 as the oringal number only went to seconds. 
                var forecastDate = new Date(response.list[forecastIndex].dt * 1000);
                var forecastDay = forecastDate.getDate();
                var forecastMonth = forecastDate.getMonth() + 1;
                var forecastYear = forecastDate.getFullYear();
                var futureDate = $("<div>").text(forecastMonth + "/" + forecastDay + "/" + forecastYear)
                forecastEls[i].append(futureDate.text());
                //Append weather icon
                // console.log(response.list[forecastIndex].weather[0].icon);

                //Append Temperature
                console.log(response.list[forecastIndex].main.temp);
                var reasonableTemp2 = (response.list[forecastIndex].main.temp - 273.15) * 1.80 + 32
                var futureTemp = $("<div>").text("Temperature: " + reasonableTemp2.toFixed(0) + " \xB0F");
                forecastEls[i].append(futureTemp.text());

                //Append Humidity
                console.log(response.list[forecastIndex].main.humidity);
                var futureHumidity = $("<div>").text("Humidity: " + response.list[forecastIndex].main.humidity + "%");
                forecastEls[i].append(futureHumidity.text());

            }
        });

    }

    //When button of city is clicked, populate that data

});