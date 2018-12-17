import React from 'react';
import '../css/Coffee.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            price: "",
            imageUrl: "",
            coffeeList : []
        }
    }
    const { title, price, imageUrl, index, onClick } = props;

    return (
        <div index={index} className="coffeeContainer" onClick={onClick}>
            <img src={imageUrl} alt={title}></img>
            <label className="information">{title}, Price: {price}$</label>
        </div>
    );
}

export default Coffee