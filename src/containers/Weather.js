import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getWeather } from '../actions/getWeather';

class WeatherContainer extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
    arrWeather: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    fetchWeather: PropTypes.func.isRequired
  }

  static defaultProps = {
    match: null,
  }

  state = {
    error: null,
    loading: false,
    isFirstLoad: false
  }

  componentDidMount = () => this.fetchData();

  fetchData = (data) => {
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
    const { Layout, arrWeather } = this.props;
    const { loading } = this.state;
    return (
      <Layout
        loading={loading}
        arrWeather={arrWeather}
        reFetch={(param) => this.fetchData(param)}
      />
    );
  }
}

const mapStateToProps = state => ({
  arrWeather: state.arrWeather.arrWeather || {},
});

const mapDispatchToProps = {  
  fetchWeather: getWeather,
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer);
