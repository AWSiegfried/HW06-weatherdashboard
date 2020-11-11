# HW06-weatherdashboard

### Overview
The purpose of this assignment was to create a site that allows the user to input a city and spit out two different data sets (one for the current weather status and one for the 5 day forecast).  The site was also to save their search results to the local storage so that when they reload the page it saves their pre-searched cities. I used three APIs from Open Weather Map (links below).  I had to use three because the current weather, 5-day forecast and UV index all utilize separate APIs (links below).  One poorly optimized facet of the pulling of the UV index.  Because it requires the latitude and longitude of the city to run, it required and AJAX call inside of another AJAX call, which then makes the site slower.

If I had more time, I'd fix:
1. If they enter a city that doesn't exist in the APIs dataset, don't add the button (that then pulls no information). 
2. Don't add duplicate button if that city already exists. 


### Used APIs
Current Weather - https://openweathermap.org/current

5-day forecast - https://openweathermap.org/forecast5

UV Index - https://openweathermap.org/api/uvi 


### Links
Live URL - https://awsiegfried.github.io/HW06-weatherdashboard/

Github URL - https://github.com/AWSiegfried/HW06-weatherdashboard


### Screenshot
![screenshot](/Assets/weatherdashboard.png?raw=true)


### Psuedocode 
1. Build box using bootstrap
2. Add Search for a City functionalit.  
2a. Add text to preexisting input bar
2b. Click search icon to populate data to the right
2c. Add input to search history.  
2d. Empty text from input bar
3. Populate weather data for searched city
3a. Populate City name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
3ai. Change UV index background depending on condition favorability. 
4. Populate future weather conditions for searched city 
4a. Populate 5-day forecast (5 separate boxes of information) that displays:
4ai. The date, an icon representation of weather conditions, the temperature, and the humidity
5. Make search history clickable
5a. When a previous city is clicked, populate all of that city's data
6. Local storage
6a. When a city is input and searched, SET to local storage 
6b. When page is loaded, GET last searched city OR pull in empty array if it doens't exist