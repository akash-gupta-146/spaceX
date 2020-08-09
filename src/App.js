import React from 'react';

import './App.css';
import LaunchList from './components/launch-list';
import Filters from './components/filters';

const API_HOST ='https://api.spacexdata.com/v3';

class App extends React.Component{

  constructor(props){
    super(props)

    this.state = {
        year: '',
        launch: '',
        land: '',
        list: [],
        count:100
    }

    this.getLaunches()
  }

  getLaunches = async () => {
    let res = await fetch(`${API_HOST}/launches?limit=${this.state.count}`);
    this.launchData = await res.json();
    console.log(this.launchData)
    this.setState({list:this.launchData})
  }

componentDidUpdate(){
  console.log('Component Updated', this.state.list);
  this.updateLocalstorage();
}

filter = ( year = this.state.year, launch = this.state.launch, land = this.state.land ) => {

  if(this.launchData)
  var temp = this.launchData.filter( launchMission => {
    console.log('xxxxxxxxxxxx');
    console.log(year);
    
    // converting data to match localstorage
    let launch_year = launchMission.launch_year;
    let launch_success = launchMission.launch_success ? 'true' : 'false';
    let launch_land = launchMission.rocket.first_stage.cores[0].land_success ? 'true' : 'false';

    return (
    ( launch_year         == year     ||    year ===  ''   ) && 
    ( launch_success  == launch ||    launch == ''  ) && 
    ( launch_land         == land    ||     land == ''      )
    )
  });

  this.setState({ list: temp })
}

changeYear = (year) => {
  year = year === this.state.year ? '' : year;
  this.setState({year});
  this.filter(year,this.state.launch,this.state.land);
}

changeLaunchFilter = (launch) => {
  this.setState({launch})
  this.filter(this.state.year,launch,this.state.land);
}

changeLandingFilter = (land) => {
  this.setState({land})
  this.filter(this.state.year,this.state.launch,land);
}

updateLocalstorage = () =>{
  const {year,launch,land} = this.state
  if(window){
    let temp = JSON.stringify({year,launch,land});
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
    <LaunchList  config={this.state} year={this.state.year}  list={this.state.list} />
  </div>
</div> 
}
}

export default App;
