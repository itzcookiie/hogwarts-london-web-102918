import React from 'react'
import SingleHog from './SingleHog.js'


const HogList = (props) => {

    return (
    <div> {props.hogsData.map(singleHog => <SingleHog hogData={singleHog}/>)} </div>
    )
}

export default HogList