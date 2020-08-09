import React from  'react';
import  './filter.css';

export default class Filters extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            year: '',
            launch: '',
            land: ''
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

    componentDidUpdate(){
        console.log('Component Updated');

    }

    setYear(year){
        this.setState({year});
    }

    render() {
        return <div className='filterSections'>
            <h3>Filters</h3>
            
            {/* Year */}
            <section className='filter'>
                <label>Launch Year</label>
                <div className='options'>
                    <div onClick={()=>this.setYear('2006')}><span>2006</span></div>
                    <div onClick={()=>this.setYear('2007')}><span>2007</span></div>
                    <div onClick={()=>this.setYear('2008')}><span>2008</span></div>
                    <div onClick={()=>this.setYear('2009')}><span>2009</span></div>
                    <div onClick={()=>this.setYear('2010')}><span>2010</span></div>
                    <div onClick={()=>this.setYear('2011')}><span>2011</span></div>
                    <div onClick={()=>this.setYear('2012')}><span>2012</span></div>
                    <div onClick={()=>this.setYear('2013')}><span>2013</span></div>
                    <div onClick={()=>this.setYear('2014')}><span>2014</span></div>
                    <div onClick={()=>this.setYear('2015')}><span>2015</span></div>
                    <div onClick={()=>this.setYear('2016')}><span>2016</span></div>
                    <div onClick={()=>this.setYear('2017')}><span>2017</span></div>
                    <div onClick={()=>this.setYear('2018')}><span>2018</span></div>
                    <div onClick={()=>this.setYear('2019')}><span>2019</span></div>
                    <div onClick={()=>this.setYear('2020')}><span>2020</span></div>
                </div>
            </section>

            {/* Launch */}
            <section className='filter'>
                <label>Successfull Launch</label>
                <div className='options'>
                    <div><span>True </span></div>
                    <div><span>False</span></div>
                </div>
            </section>

            {/* Landing */}
            <section className='filter'>
                <label>Successfull Landing</label>
                <div className='options'>
                    <div><span>True </span></div>
                    <div><span>False</span></div>
                </div>
            </section>
        </div>
    }
}