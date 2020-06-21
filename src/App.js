import React, { PureComponent } from 'react';

import Promo from './components/Promo/Promo';
import ClubList from './components/ClubList/ClubList';
import ButtonSwitcher from './components/common/ButtonSwitcher/ButtonSwitcher';
import LoadingIndicator from './components/LoadingIndicator/LoadingIndicator';

import { fetchClubs } from './services/clubs';

import './assets/scss/index.scss';

class App extends PureComponent {
  state = {
    citiesOptions: [],
    groupedByCity: {},
    selectedCity: 'all',
    selectedActivity: 'all',
    loading: true,
    error: false
  };

  componentDidMount() {
    this.getClubs();
  }

  getClubs = () => {
    fetchClubs()
      .then(({ citiesOptions, groupedByCity }) => {
        this.setState({
          citiesOptions,
          groupedByCity,
          loading: false
        });
      })
      .catch(() => {
        this.setState({
          error: true,
          loading: false
        });
      })
  }

  handleFilterClubs = (clubs, selectedActivity) => {
    if (selectedActivity === 'all') return clubs;
    return clubs.filter(({ activity }) => activity.some(({ slug }) => slug === selectedActivity));
  }

  handleCityChange = (selectedCity) => {
    this.setState({
      selectedCity,
      selectedActivity: 'all'
    });
  }

  handleActivityChange = (selectedActivity) => {
    this.setState({ selectedActivity });
  }

  render() {
    const {
      selectedCity,
      selectedActivity,
      groupedByCity,
      citiesOptions,
      loading,
      error
    } = this.state;

    const isLoaded = !loading && !error;
    const hasError = !loading && error;
    const filteredClubs = isLoaded ? this.handleFilterClubs(groupedByCity[selectedCity].clubs, selectedActivity) : [];

    return (
      <div className="container">
        {loading && <LoadingIndicator />}
        {hasError && (
          <div className='text-center alert alert-danger mt-3' role="alert">
            Something occurred wrong, please reload the page
          </div>)}
        {isLoaded && (
          <>
            <Promo />
            <ButtonSwitcher
              onChange={this.handleCityChange}
              active={selectedCity}
              options={citiesOptions}
              className="border-primary"
            />
            <hr />
            <ButtonSwitcher
              onChange={this.handleActivityChange}
              active={selectedActivity}
              options={groupedByCity[selectedCity].activities}
              className="border-success"
            />
            <hr />
            <ClubList clubs={filteredClubs} />
          </>
        )}
      </div >
    );
  }
}

export default App;
