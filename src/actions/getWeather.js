import URIs from '../constants/URIs';

/**
  * Get Celsius weather 
  */

// TODO: GET Weather passing params comign from front, default CELSIUS
 export const getWeather = () => {
  return dispatch => new Promise((resolve, reject) => 
  fetch('http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=d3888b8e4390818bf15a90c3031f5956&cnt=40&units=metric')
    .then(response => response.json())
    .then(data => {
        console.log(data, " DATA1111111111111111");
      return resolve(dispatch({ type: 'GET_CELSIUS_DEGREES', data }));
    }).catch(reject)).catch((err) => { throw err.message; });
}

/**
  * Get farenheit weather 
  */
 export const getFarenheitWeather = () => {
    return dispatch => new Promise((resolve, reject) => 
    fetch('http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=d3888b8e4390818bf15a90c3031f5956&cnt=40&units=imperial')
      .then(response => response.json())
      .then(data => {
        return resolve(dispatch({ type: 'GET_CELSIUS_DEGREES', data }));
      }).catch(reject)).catch((err) => { throw err.message; });
  }


/**
  * Get Page index 
  */
 export const getPageIndex = () => {
    /* return dispatch => new Promise((resolve, reject) => fetch('http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=d3888b8e4390818bf15a90c3031f5956&cnt=40&units=metric')
      .then(response => response.json())
      .then(data => {
        return resolve(dispatch({ type: 'GET_CELSIUS', data }));
      }).catch(reject)).catch((err) => { throw err.message; }); */
  }

  /**
  * Get Page Size 
  */
 export const getPageSize = () => {
    /* return dispatch => new Promise((resolve, reject) => fetch('http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=d3888b8e4390818bf15a90c3031f5956&cnt=40&units=metric')
      .then(response => response.json())
      .then(data => {
        return resolve(dispatch({ type: 'GET_CELSIUS', data }));
      }).catch(reject)).catch((err) => { throw err.message; }); */
  }