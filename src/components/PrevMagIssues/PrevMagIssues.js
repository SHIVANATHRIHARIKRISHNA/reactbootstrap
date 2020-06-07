import React, { Component } from 'react'
import storyimg from './../../images/pitch_a_story.png';
import './PrevMagIssues.css'

class PrevMagIssues extends Component{
    render(){
        return(
            <div>
             <img src={storyimg} alt="Loading..." ></img>
            </div>
        )
    }
}

export default PrevMagIssues;