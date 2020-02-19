import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Divgrid from './Divgrid.js'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      groups: [],
      city_name:'',
      store_id:'',
      is_clicked: false,
    };
    this.updateCity = this.updateCity.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }


  Find_Store = async (event) => {
    event.preventDefault();
    let storeID = this.state.store_id;
    let cityName=this.state.city_name;
    let temp_array = [];
    if (storeID == 8) {
      let response = await fetch('/'+'MN/');
      let body = await response.json();
      temp_array = body;
    }
    else {
      let response = await fetch('/'+'MN'+'/'+storeID);
      let body = await response.json();
      temp_array.push(body);

    }
    this.setState({ groups: temp_array, isLoading: false ,is_clicked: true});
  }

  updateInput(evt){
      const val = evt.target.value
      this.setState({
          store_id: val
      }, () => {
          console.log('Selected store- ', val)
      })
    }

  updateCity(evt){
      const val = evt.target.value
      this.setState({
          city_name: val
      }, () => {
          console.log('Selected city- ', val)
      })
  }



  render() {
    const {groups, isLoading,is_clicked} = this.state;

    if (is_clicked == false){
      return (
        <header className="App-header">
          <div align="center">
          <p>WELCOME TO ELEVATE-2020</p>
          <select className="input_style" value={this.state.city_name} onChange={this.updateCity}>
          <option value="">Select Store City </option>
          <option value="MNP">Minneapolis</option>
          <option value="BLR">Bangalore</option>
          </select>

          &nbsp;

          <select  className="input_style" value={this.state.store_id} onChange={this.updateInput}>
          <option value="">Select Store ID </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">ALL</option>
          </select>

          &nbsp;
          <button className="button_style" onClick={(event)=>this.Find_Store(event)}>Search </button>
          </div>
          <br/>

          <img src={logo} className="App-logo" alt="logo" />
      </header>
      );
    }
    return (
        <header className="App-header">
            <div>
            <div align="center">

            <select className="input_style" value={this.state.city_name} onChange={this.updateCity}>
            <option value="">Select Store City </option>
            <option value="MNP">Minneapolis</option>
            <option value="BLR">Bangalore</option>
            </select>

            &nbsp;

            <select  className="input_style" value={this.state.store_id} onChange={this.updateInput}>
            <option value="">Select Store ID </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">ALL</option>
            </select>

            &nbsp;
            <button className="button_style" onClick={(event)=>this.Find_Store(event)}>Search </button>
            </div>
            <br/>
            <span >
            <h3 className="table_head"> &nbsp; &nbsp; &nbsp; &nbsp;Target Store </h3>
            </span>
            <ul>
            &nbsp;
            {this.state.groups.map(function(item,index) {
              return (

                <li className="list">
                <Divgrid Items={item} />
                <br />
                </li>
              )
            }
            )}
            </ul>
            </div>

        </header>

    );
  }
}

export default App;
