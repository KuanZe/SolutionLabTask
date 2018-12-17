import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/App.css';
import { indexActions } from '../actions/indexActions'
import Coffee from './Coffee'

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

  addNewCoffee = () => {
    let newCoffee = {
      title:this.state.title,
      price:this.state.price,
      imageUrl:this.state.imageUrl,
    };
    this.setState({
      coffeeList :this.state.coffeeList.concat([newCoffee])
    })
  }

  removeCoffee = (e) => {
    console.log(e.target);
    let currentCoffeeList = [...this.state.coffeeList];
    var index = currentCoffeeList.indexOf(e.target.value);
    if (index !== -1) {
      currentCoffeeList.splice(index, 1);
      this.setState({coffeeList: currentCoffeeList});
    }
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
        <label>Title</label><input type="text" name="title" onChange={this.handleChange} />
      </div>
      <div>
        <label>Price</label><input type="text" name="price" onChange={this.handleChange} />
      </div>
      <div>
        <label>Image url</label><input type="text" name="imageUrl" onChange={this.handleChange} />
      </div>
      <div><button type="button" onClick={this.addNewCoffee}>Add</button></div>
    </div>
    <div className="App-container">
    {
      this.state.coffeeList.map((item, i) => (
        <Coffee key={i} index={i} title={item.title} price={item.price} imageUrl={item.imageUrl} onClick={e => this.removeCoffee(e)}/>
      ))
    }
    </div>
   </div>
  );
 }
}
const mapStateToProps = state => ({
  ...state
 })

const mapDispatchToProps = dispatch => ({
  indexAction: () => dispatch(indexActions())
 })

 export default connect(mapStateToProps, mapDispatchToProps)(App);
