let latitude = '45.5132931';
let longitude = '-73.56940139999999';
let weatherLocation = "Montreal";

function getYahooForecast() {
  let degreeUnits = "c"; // "f" for fahrenheit;
  let yqlQuery = `select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${weatherLocation}") and u="${degreeUnits}"`;
  let url = `https://query.yahooapis.com/v1/public/yql?q=${encodeURIComponent(yqlQuery)}&format=json`;

  fetch(url).then((response) => {      
    return response.json();
  }).then((json) => {
    let {results} = json.query;
    let {location, item, units} = results.channel;
    let {forecast, condition} = item;
    let forecastElement = document.getElementById('forecast');

    let {code, date, day, temp} = condition;
    let iconClass = yahooWeatherIconMapper(code);

    let newIcon = document.createElement('i');
    let classNames = `wi ${iconClass} weather-icon`;
    newIcon.setAttribute('class', classNames);

    let tempSpan = document.createElement('span');
    tempSpan.innerHTML = "&nbsp;" + temp;
    tempSpan.setAttribute('class', 'temp');

    let degreeSpan = document.createElement('span');
    degreeSpan.innerHTML = "&deg";
    degreeSpan.setAttribute('class', 'weather-degree');

    let locationParagraph = document.createElement('p');
    locationParagraph.innerHTML = `${location.city.toUpperCase()}`;
    locationParagraph.setAttribute('class', 'weather-location');

    forecastElement.appendChild(newIcon);
    forecastElement.appendChild(tempSpan);
    forecastElement.appendChild(degreeSpan);
    forecastElement.appendChild(locationParagraph);
  });
}

function yahooWeatherIconMapper(code) {
  // https://developer.yahoo.com/weather/documentation.html#item

  let icon = '';
  let number = Number.parseInt(code);
  switch(number) {
    case 0:
      icon = 'wi-tornado';
      break;
    case 2: 
      icon = 'wi-hurricane';
      break;
    case 3:
    case 4:
    case 37:
    case 38:
    case 39:
      icon = 'wi-thunderstorm';
      break;
    case 5:
    case 6:
      icon = 'wi-rain-mix';
      break;
    case 7:
    case 16:
    case 43:
      icon = 'wi-snow';
      break;
    case 11:
    case 12:
      icon = 'wi-rain';
      break;
    case 15: 
      icon = 'wi-snow-wind';
      break;
    case 17:
      icon = 'wi-hail';
      break;
    case 19:
      icon = 'wi-dust';
      break;
    case 24:
      icon = 'wi-windy';
      break;
    case 26:
    case 27:
    case 28:
      icon = 'wi-cloudy';          
      break;
    case 29:
    case 30:
      icon = 'wi-cloud';
      break;
    case 31:
      icon = 'wi-night-clear';
      break;
    default:            
      icon = "wi-na";
      break;
  }
  return icon;
}

getYahooForecast();
