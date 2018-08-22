import * as React from 'react';
import { Component } from 'react';
import LocationService from '../../services/LocationService';
import Location from '../../services/Location'
import Temperature from '../containers/Temperature';
import { IReactWeatherProps } from '../../types';

class ReactWeather extends Component<IReactWeatherProps> {
  constructor(props: IReactWeatherProps) {
    super(props);
  }

  componentDidMount() {
    const locationService = new LocationService();
    locationService.getLocation().then(
      (location: Location) => {
        this.props.loadWeatherData(location.lat, location.lon);
      });

  }

  render() {
    return (
      <Temperature />
    )
  }
}

export default ReactWeather