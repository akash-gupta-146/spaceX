import React from 'react';
import  './style.css';
import Card from '../card';

// const API_HOST ='https://api.spacexdata.com/v3';

export default class LaunchList extends React.Component{

    constructor(props){
        super(props)
        // this.state= {
        //     list:[],
        //     start:1,
        //     count:10
        // }

        this.getData()
        
    }

    getData = async() => {
        // let res = await fetch(`${API_HOST}/launches?limit=${this.state.count}`);
        // let data = await res.json();
        // console.log(data)
        // this.setState({list:data})
    }

     componentDidMount = () => {

        // const handleIntersection = (entries, observer) => {
        //     entries.forEach((entry) => {
        //         if (entry.intersectionRatio > prevRatio) {
        //             console.log('Last row of data')
        //         } else {
        //             console.log('Not in viewport')
        //         }
        //         prevRatio = entry.intersectionRatio;
        //     });
        // }

        // let observer = new IntersectionObserver(handleIntersection);
        // observer.observe(document.querySelector('#loadmore'));
        // let prevRatio = 0;

    }

    render = () =>{
        return<>
            <div className='list'>
                {
                    this.props.list ?
                    (
                        this.props.list.length ?  this.props.list.map( (launch,i) => <Card launch={launch} key={`card${i}`} /> )
                         : 
                        <div>No content Available</div>
                    )
                    :
                    <div>Loading</div>
                }
            </div>
        </>
    }
}