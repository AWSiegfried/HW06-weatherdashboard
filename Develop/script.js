$(document).ready(function() {

    //Search History, start with empty array and push city input answers into it
    var searchArray = [];


    //On click (after input of text) we want to pull current day,  5 day data, and update our searchArray
    $("#search-button").on("click", function() {
        pullCurrentWeather();
        pullFiveDayWeather();
        console.log(searchArray);
        updateSearchArray();

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
            console.log(response);
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
            console.log(response);
        });

    }
});