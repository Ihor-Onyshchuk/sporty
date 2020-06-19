import React, { PureComponent } from 'react';

import { getClubs } from './api/index';
import ClubList from './components/ClubList/ClubList';
import CitiesList from './components/CitiesList/CitiesList';
import { setCities, setActivities } from './utils/formatData';
import ActivitiesList from './components/ActivitiesList/ActivitiesList';
import ClubCard from './components/ClubCard/ClubCard';

class App extends PureComponent {
  state = {
    clubs: [],
    allCities: {},
    allActivities: {},
    groupedByCity: {},
    selectedCity: null,
    selectedActivity: null
  };

  componentDidMount() {
    getClubs().then(response => {
      console.log('response', response);
      const clubs = response.data;

      const allCities = {};
      const allActivities = {};
      const clubByCity = {};


      clubs.forEach(({ city: { slug, title }, activity }) => {
        allCities[slug] = title;
        activity.forEach(({ slug, title }) => allActivities[slug] = title);

      });

      clubs.forEach(club => {
        const city = club.city.slug;
        clubByCity[city] ? clubByCity[city].push(club) : clubByCity[city] = [club];
      });

      const citySlugs = Object.keys(clubByCity);
      const groupedByCity = citySlugs.reduce((memo, city) => {
        const clubs = clubByCity[city];
        const cityActivities = [];

        clubs.forEach(({ activity }) => {
          activity.forEach(({ slug }) => cityActivities.push(slug))
        });

        return ({
          ...memo,
          [city]: {
            clubs,
            activities: Array.from(new Set(cityActivities))
          }
        })
      }, {})


      console.log('all cities', allCities);
      console.log('all activities', allActivities);
      console.log('club by city', clubByCity);
      console.log('group by city', groupedByCity);

      this.setState({ clubs, allCities, allActivities, groupedByCity });
    })
      .catch(err => console.log('error', err.message));
  }

  render() {
    return (
      <div className="container">
        <CitiesList />
        <ActivitiesList />
        <ClubList />
      </div >
    );
  }
}

export default App;
