import React from 'react';

import './card.styles.css';

export const Card = (props) => (
    <div className='card-container'>
        <img src={`https://robohash.org/${props.monster.id}?set=set3&size=180x180`} alt="" />
        <h2>{props.monster.name}</h2>
        <h4>{props.monster.email}</h4>
    </div>

);