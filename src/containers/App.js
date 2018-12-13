import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/searchbox'
import Scroll from '../components/Scroll';
import './App.css';

//to make use of it you must make a class, below displays it
class App extends Component {
    constructor() {
        //super calls constructor of component
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    //to run the robots api
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>response.json())
        .then(users => {this.setState({robots: users})});
        }


    onSearchChange = (event) => {
        //to update the search field send to render to have component perform function
        this.setState({searchfield: event.target.value}) 
    }

    render() {  
        const filteredRobots = this.state.robots.filter(robots => {
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    }) 
    if (this.state.robots.length === 0){
        return <h1>Loading</h1>
    } else {
     return (
        <div className='tc'>
            <h1 className='f1'> RoboFriends </h1>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
            <CardList robots= {filteredRobots} />
            </Scroll>
        </div>
    );
     }
    } 
}

//export
export default App;