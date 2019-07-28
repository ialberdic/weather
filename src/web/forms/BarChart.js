import React from 'react';
import {
  BarChart, ResponsiveContainer, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Grid from '@material-ui/core/Grid';

export default function Chart(props) {

  const getInitialDay = () => {
    const data = [];
    const { daysWeather } = props;
    let i = 0;
    const dayOne = daysWeather.find(t => t.show === true).dateNotTime;
    daysWeather.forEach((element) => {
      if (i < 8 && element.dateNotTime === dayOne) {
        data.push(element)
        i += 1;
      }
    });

    return data
  }

  const getSelectedDay = () => {
    const { daysWeather } = props;
    const data = [];
    daysWeather.filter((item) => {
      return item.selected ? data.push(item) : null;
    });

    return data;
  }
  const { daysWeather } = props;

  return (
    <Grid item xs={12} sm={6}>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={daysWeather.find(t => t.selected === true) ? getSelectedDay() : getInitialDay()}
          margin={{
            top: 50, right: 40, left: 0, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="temp" fill="rgb(30,144,255)" />
        </BarChart>
      </ResponsiveContainer>
    </Grid>
  );
}
