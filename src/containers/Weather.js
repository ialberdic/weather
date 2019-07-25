import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getWeather } from '../actions/getWeather';

class WeatherContainer extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
    weather: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    match: PropTypes.shape({ params: PropTypes.shape({}) }),
    fetchWeather: PropTypes.func.isRequired
  }

  static defaultProps = {
    match: null,
  }

  state = {
    error: null,
    loading: false
  }

  componentDidMount = () => this.fetchData();

  fetchData = (data) => {
    console.log(data, " DTAAAAAAAAAAAAAA");
    const { fetchWeather } = this.props;

    this.setState({ loading: true });

    return fetchWeather(data)
      .then(() => this.setState({
        loading: false,
        error: null,
      })).catch(err => this.setState({
        loading: false,
        error: err,
      }));
  }

  render = () => {
    const { Layout, weather, match } = this.props;
    const { loading, error } = this.state;
    const id = (match && match.params && match.params.id) ? match.params.id : null;
    return (
      <Layout
        //redditId={id}
        //error={error}
        loading={loading}
        weather={weather}
        //reFetch={() => this.fetchData()} 
      />
    );
  }
}

const mapStateToProps = state => ({
  weather: state.weather.weather || {},
});

const mapDispatchToProps = {
  fetchWeather: getWeather,
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer);
