import * as React from 'react';
import { Component } from 'react';
import Temperature from '../containers/Temperature';
import { IReactWeatherProps } from '../../types';
import Summary from '../containers/Summary';
import LastUpdated from "../containers/LastUpdated";
import styled from 'styled-components';
import LocationDisplay from "../containers/LocationDisplay";
import '../../styles/html5reset-1.6.1.css';
import WeatherIcon from '../containers/WeatherIcon';
import LocationSelector from "../containers/LocationSelector";

const RWContainer = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  height: 280px;
  width: 480px;
  padding: 20px;
`;

const LocationDisplayContainerSC = styled.div`
  display: flex;
  justify-content: center;
`;

const Row2 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  font-size: 72px;
  justify-content: center;
`;

class ReactWeather extends Component<IReactWeatherProps> {
  constructor(props: IReactWeatherProps) {
    super(props);
  }

  render() {
    let locationSelector;
    if (this.props.showLocationSelector) {
      locationSelector = <LocationSelector/>;
    }

    return (
      <RWContainer>
        <LocationDisplayContainerSC>
          <LocationDisplay />
        </LocationDisplayContainerSC>
        {locationSelector}
        <Summary/>
        <Row2>
          <WeatherIcon/>
          <Temperature/>
        </Row2>
        <LastUpdated/>
      </RWContainer>
    )
  }
}

export default ReactWeather