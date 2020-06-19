export const setCities = (clubs) => {
  let cities = {};
  const prepareCitiesData = clubs.map(({ city }) => city).forEach(({ slug, title }) => {
    cities[slug] = title;
  });

  console.log('prepareCitiesData', prepareCitiesData);
  console.log('cities', cities);

  return cities;
}

export const setActivities = (clubs) => {
  const activities = [];
  const prepareActivitiesData = clubs.map(({ activity }) => activity);
  // .forEach(({ slug, title }) => {
  //   activities.push({ [slug]: title })
  // });
  // const activities = Array.from(new Set(prepareActivitiesData.flat()));

  console.log('prepareActivitiesData', prepareActivitiesData);
  console.log('seted activity', activities);

  return activities;
}