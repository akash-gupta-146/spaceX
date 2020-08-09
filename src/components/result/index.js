import React from 'react';

export default function Result({type}) {

    let image = type === 'loading' ? 
    'https://static.dribbble.com/users/503653/screenshots/3143656/fluid-loader.gif' 
    : 'https://sterngoff.com/wp-content/uploads/No-Results.svg';

    return <div style={{position:'absolute',top:'50%',left:'60%',transform:'translate(-50%,-50%)'}}>
    <img src={image} alt='image' />
    <div style={{textAlign:'center'}}>
        { type === 'loading' ? 'Loading...' : 'No Related Results'}
    </div>
        </div>
}