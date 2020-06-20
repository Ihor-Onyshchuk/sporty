import { http } from '../api';

const keys = (object) => Object.keys(object);

const getOptions = (list, dictionary) => list.map(slug => ({
  slug,
  title: dictionary[slug]
}));

const getCitiesOption = (clubs) => {
  const citiesList = {};
  clubs.forEach(({ city: { slug, title } }) => citiesList[slug] = title);
  return [
    { slug: 'all', title: 'Все' },
    ...getOptions(keys(citiesList), citiesList)
  ]
}

const getActitvitiesList = (clubs) => {
  const activitiesList = {};
  clubs.forEach(({ activity }) => {
    activity.forEach(({ slug, title }) => activitiesList[slug] = title);
  });
  return activitiesList;
}

const clubByCity = (clubs) => {
  const clubList = {};
  clubs.forEach(club => {
    const city = club.city.slug;
    clubList[city] ? clubList[city].push(club) : clubList[city] = [club];
  });
  return clubList;
}

const groupedByCity = (clubs) => {
  const activitiesList = getActitvitiesList(clubs);
  const clubsByCity = clubByCity(clubs);

  const groupedDataByCity = keys(clubsByCity).reduce((memo, city) => {
    const cityClubs = clubsByCity[city];

    const cityActivitiesSlugs = [];
    cityClubs.forEach(({ activity }) => {
      activity.forEach(({ slug }) => cityActivitiesSlugs.push(slug));
    });
    const cityActivities = [
      { slug: 'all', title: 'Все' },
      ...getOptions(Array.from(new Set(cityActivitiesSlugs)), activitiesList)
    ]

    return ({
      ...memo,
      [city]: {
        clubs: cityClubs,
        activities: cityActivities
      }
    })
  }, {})

  return {
    all: {
      clubs,
      activities: [
        { slug: 'all', title: 'Все' },
        ...getOptions(keys(activitiesList), activitiesList)
      ]
    },
    ...groupedDataByCity
  }
}

export const fetchClubs = () => http.get('/clubs')
  .then(({ data }) => ({
    citiesOption: getCitiesOption(data),
    groupedByCity: groupedByCity(data)
  }));

