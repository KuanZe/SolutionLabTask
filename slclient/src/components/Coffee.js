import React from 'react';
import '../css/Coffee.css';

const Coffee = (props) => {
    const { title, price, imageUrl, removeFunction } = props;

    return (
        <div className="coffeeContainer">
            <div className="mask" onClick={removeFunction}>Remove item</div>
            <img src={imageUrl} alt={title}></img>
            <label className="information">{title}, Price: {price}$</label>
        </div>
    );
}

export default Coffee