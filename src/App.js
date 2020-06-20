import React, { PureComponent } from 'react';

import './assets/scss/index.scss';
import { fetchClubs } from './services/clubs';
import ClubList from './components/ClubList/ClubList';
import ButtonSwitcher from './components/common/ButtonSwitcher';
import LoadingIndicator from './components/LoadingIndicator/LoadingIndicator';

class App extends PureComponent {
  state = {
    citiesOption: [],
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
      .then(({ citiesOption, groupedByCity }) => {
        this.setState({ citiesOption, groupedByCity, loading: false });
      })
      .catch(() => {
        this.setState({ error: true, loading: false });
      })
  }

  handleFilterClubs = (clubs, selectedActivity) => {
    if (selectedActivity === 'all') return clubs;
    return clubs.filter(({ activity }) => activity.some(({ slug }) => slug === selectedActivity));
  }

  handleCityChange = (selectedCity) => {
    this.setState({ selectedCity, selectedActivity: 'all' });
  }

  handleActivityChange = (selectedActivity) => {
    this.setState({ selectedActivity });
  }

  render() {
    const {
      selectedCity,
      selectedActivity,
      groupedByCity,
      citiesOption,
      loading,
      error
    } = this.state;

    const isLoaded = !loading && !error;
    const hasError = !loading && error;
    const filteredClubs = isLoaded ? this.handleFilterClubs(groupedByCity[selectedCity].clubs, selectedActivity) : [];
    return (
      <div className="container">
        {loading && <LoadingIndicator />}
        {hasError && <div>An error happens please reload the page</div>}
        {isLoaded && (
          <>
            <ButtonSwitcher
              onChange={this.handleCityChange}
              active={selectedCity}
              options={citiesOption}
            />
            <ButtonSwitcher
              onChange={this.handleActivityChange}
              active={selectedActivity}
              options={groupedByCity[selectedCity].activities}
            />
            <ClubList clubs={filteredClubs} />
          </>
        )}
      </div >
    );
  }
}

export default App;
