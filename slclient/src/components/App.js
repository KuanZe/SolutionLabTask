import React from 'react';
import { connect } from 'react-redux';
import '../css/App.css';
import { actions  } from '../actions/appActions'
import Coffee from './Coffee'

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          title: "",
          price: "",
          imageUrl: ""
      }
  }

  addNewCoffee = () => {
    const { title, price, imageUrl } = this.state;
    const { addCoffee } = this.props;
    if(!title || !price || !imageUrl){
            alert("Please fill all form fields");
            return;
    }
    let newCoffee = {
      title: title,
      price: price,
      imageUrl: imageUrl,
    };
    addCoffee(newCoffee);
  }

  removeCoffee = (id) => {
    const { removeCoffee } = this.props;
    removeCoffee(id);
  }

  handleChange = (e) =>{
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value
    });
  }

 render() {
  return (
   <div className="App">
    <header className="App-header">
     <h1 className="App-title">Coffee price list billboard</h1>
    </header>
    <div className="Form-add">
      <h2>Add new coffee</h2>
      <div>
        <label>Title</label>
        <input type="text" name="title" onChange={this.handleChange} />
      </div>
      <div>
        <label>Price ($)</label>
        <input type="number" step="0.01" name="price" onChange={this.handleChange} />
      </div>
      <div>
        <label>Image url</label>
        <input type="text" name="imageUrl" onChange={this.handleChange} />
      </div>
      <div><button type="button" onClick={this.addNewCoffee}>Add</button></div>
    </div>
    <div className="App-container">
    {
      this.props.coffeeList.map((item) => (
        <Coffee key={item.id} title={item.title} price={item.price} imageUrl={item.imageUrl} removeFunction={e => this.removeCoffee(item.id)}/>
      ))
    }
    </div>
   </div>
  );
 }
}
const mapStateToProps = ({ appState }) => ({
  coffeeList: appState.coffeeList
 })

 const mapDispatchToProps = {
  ...actions
};

 export default connect(mapStateToProps, mapDispatchToProps)(App);
