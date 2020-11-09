# HW06-weatherdashboard

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