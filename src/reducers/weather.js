import Store from '../store/weather';

export const initialState = Store;

export default function recipeReducer(state = initialState, action) {

  if (action.data) {

    switch (action.type) {

      case 'GET_CELSIUS_DEGREES': {
        
        let weather = [];

        // Pick out the props I need

        weather = action.data.list.map((item, index) => ({
          id: action.data.city.name + index,
          date: item.dt_txt,
          minTemp: item.main.temp_min,
          maxTemp: item.main.temp_max,
          temp: item.main.temp
        }));

        return {
          ...state,
          weather,
        };
      }

      case 'GET_FARENHEIT_DEGREES': {
        let weather = [];

        // Pick out the props I need

        weather = action.data.listmap((item, index) => ({
          id: action.data.city.name + index,
          date: item.dt_txt,
          minTemp: item.main.temp_min,
          maxTemp: item.main.temp_max,
          temp: item.main.temp
        }));

        return {
          ...state,
          weather,
        };
      }

      default:
        return state;
    }
  }
  return state;
}
