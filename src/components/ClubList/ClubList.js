import React from 'react';

const ClubList = ({ clubs }) => {

  return (
    <div className="d-flex flex-wrap">
      {clubs.map(club => (
        <div class="card" style={{ width: 18 + "rem" }} key={club.title}>
          <img src={club.logo} class="card-img-top" alt={club.title_short} />
          <div class="card-body">
            <h5 class="card-title">{club.title}</h5>
          </div>
        </div >
      ))}
    </div>
  )
}


export default ClubList;

