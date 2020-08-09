import React from 'react';

import './App.css';
import LaunchList from './components/launch-list';
import Filters from './components/filters';

class App extends React.Component{

  constructor(props){
    super(props)

    this.state = {
        year: '',
        launch: '',
        land: ''
    }
  }

  setYear(year){
    this.setState({year});
}
componentDidUpdate(){
  console.log('Component Updated');
  this.updateLocalstorage()

}

changeYear = (year) => {
  this.setState({year})
}

changeLaunchFilter = (launch) => {
  this.setState({launch})

}

changeLandingFilter = (land) => {
  this.setState({land})
}

updateLocalstorage = () =>{
  if(window){
    let temp = JSON.stringify(this.state);
    console.log(temp)
    window.localStorage.setItem('configuration',temp)
}
}

  componentDidMount(){
    if(window){
        if(window.localStorage.configuration){
            let temp = JSON.parse(window.localStorage.configuration)
            this.setState({...temp})
        }else{
            let temp = JSON.stringify(this.state);
            console.log(temp)
            window.localStorage.setItem('configuration',temp)
        }
    }
}

render(){
  return <div className="App">
  <h1>SpaceX Launch Programs</h1>
  <div className='container'>
    <Filters config={this.state} setYear={this.changeYear} setLaunch={this.changeLaunchFilter} setLand={this.changeLandingFilter} />
    <LaunchList  config={this.state} year={this.state.year}  />
  </div>
</div> 
}
}

export default App;
