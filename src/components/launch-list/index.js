import React from 'react';
import  './style.css';
import Card from '../card';
import Result from '../result';

// const API_HOST ='https://api.spacexdata.com/v3';

export default class LaunchList extends React.Component{

    constructor(props){
        super(props)
    }

    // FOR INFINITE SCROLL
    //  componentDidMount = () => {

    //     const handleIntersection = (entries, observer) => {
    //         entries.forEach((entry) => {
    //             if (entry.intersectionRatio > prevRatio) {
    //                 console.log('Last row of data')
    //             } else {
    //                 console.log('Not in viewport')
    //             }
    //             prevRatio = entry.intersectionRatio;
    //         });
    //     }

    //     let observer = new IntersectionObserver(handleIntersection);
    //     observer.observe(document.querySelector('#loadmore'));
    //     let prevRatio = 0;

    // }

    render = () =>{
        return<>
            <div className='list'>
                {
                    this.props.list ?
                    (
                        this.props.list.length ?  this.props.list.map( (launch,i) => <Card launch={launch} key={`card${i}`} /> )
                         : 
                        <Result type='notfound' />
                    )
                    :
                    <Result type='loading' />
                }
            </div>
        </>
    }
}