import React, { PureComponent } from 'react';
import { getClubs } from '../api/index';

export default class ClubList extends PureComponent {
  state = {
    clubs: [],
    city: [],
    activity: []
  };

  componentDidMount() {
    getClubs().then(response => {
      console.log('response', response);
      const clubs = response.data;
      const city = this.setCity(clubs);
      const activity = this.setActivity(clubs);

      this.setState({ clubs, city, activity });
    })
      .catch(err => console.log('error', err.message));
  }

  setCity = (clubs) => {
    const prepareCityData = clubs.map(club => club.city.title);
    const city = Array.from(new Set(prepareCityData));

    console.log('city', prepareCityData);
    console.log('set', city);

    return city;
  }

  setActivity = (clubs) => {
    const prepareActivityData = clubs.map(club => club.activity.map(el => el.slug));
    const activity = Array.from(new Set(prepareActivityData.flat()));

    console.log('Activity', prepareActivityData);
    console.log('seted activity', activity);

    return activity;
  }

  render() {
    return (
      <div>
        Club list
      </div>
    );
  }
}

