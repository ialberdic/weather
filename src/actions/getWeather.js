require('dotenv');

let getType = (type) => {
  return type === 'Celsius' ? 'metric' : 'imperial';
} 

export const getWeather = (param) => {
  return dispatch => new Promise((resolve, reject) =>
    fetch('http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=d3888b8e4390818bf15a90c3031f5956&cnt=40&units='+  getType(param))
      .then(response => response.json())
      .then(data => {
        return resolve(dispatch({ type: 'GET_CELSIUS_DEGREES', data }));
      }).catch(reject)).catch((err) => { throw err.message; });
}

