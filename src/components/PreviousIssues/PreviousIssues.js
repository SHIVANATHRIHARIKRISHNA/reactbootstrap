import React, { Component } from 'react'
import storyimg from './../../images/pitch_a_story.png';
import './PreviousIssues.css'
import PrevMagIssues from './../PrevMagIssues/PrevMagIssues.js';

class PreviousIssues extends Component{
    render(){
        return(
          <div class="container-fluid clr">

            <div class="row txtstyle"> {/*First Primary Row */}


              Previous Issues

            </div>

            <div class="row imgsrow"> {/*Second Primary Row */}

                <div class="col-sm">
                  <PrevMagIssues/>
                </div>
                <div class="col-sm">
                  <PrevMagIssues/>
                </div>
                <div class="col-sm">
                   <PrevMagIssues/>
                </div>

            </div>

            <div class="row imgsrow">  {/*Third Primary Row */}

              <div class="col-sm">
                <PrevMagIssues/>
              </div>
               <div class="col-sm">
                  <PrevMagIssues/>
                </div>
                <div class="col-sm">
                   <PrevMagIssues/>
                </div>

            </div>

          </div>
        )
    }
}

export default PreviousIssues;