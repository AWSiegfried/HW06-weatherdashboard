$(document).ready(function() {

    //Pull Current Weather data function

    // var cityCurrent = $("#city-input").text();
    var cityCurrent = "Austin"
    var currentQueryURL = "api.openweathermap.org/data/2.5/forecast?q=" + cityCurrent + "&appid=397227bf482a5ff23f440af123eee801";

    $.ajax({
        url: currentQueryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
    });

    //Pull Current Weather data function

});