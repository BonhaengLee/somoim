import React from 'react';

const Card = (props: { name: string }): JSX.Element => {
  return (
    <div key={props.name}>
      <p>{props.name}</p>
    </div>
  );
};

export default Card;
