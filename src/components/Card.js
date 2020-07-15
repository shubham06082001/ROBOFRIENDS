import React from "react";

const Card = ({ name, email, id }) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5">
      <img src={`https://robohash.org/${id}?size=200x200`} alt={`${name}`} />
      <div>
        <h2 className="ttu tracked green">{name}</h2>
        <p className="ttl purple">{email}</p>
      </div>
    </div>
  );
};

export default Card;
