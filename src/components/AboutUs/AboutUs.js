import React, { Component } from 'react';
import featureimg from './../../images/get_featured.png';
import storyimg from './../../images/pitch_a_story.png';
import './AboutUs.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
class AboutUs extends Component{
    render(){
        return(
            <div class="container abt">
              
              <div class="row">{/*Primary row */}

                 <div class="col-sm-7">

                   <div class="row headin">  {/*Secondary row */}

                      {/*Header text */}
                         
                         About Pankhuri  

                   </div>

                   <div class="row txts">  {/*Secondary Row*/}

                     Pankhuri is one-stop for all ur bridal needs.We aim to make the planning process as stress-free
                          as possible for soon-to-wed brides by recommending classical bridal trousseau,providing fashion
                          advice to the bridal brigade along with handpicked vendors and ideas to make your dream wedding a reality
                           
                   </div>
 
                   <div class="row buttonrow">   {/*Secondary Row */}
                        {/*Ask button*/}

                       <Link to={{pathname:'https://pankhuri.co/'}} target='_blank'>
                        <button type="button" class="btn btn-lg stylebtn">Ask Pankhuri</button>
                          </Link>
                   </div>
                  
                 </div>

                 {/*Both images below */}

                 <div class="col-sm">

                     <img src={storyimg}></img>

                 </div>

                 <div class="col-sm">

                     <img src={featureimg}></img>

                 </div>

              </div>

            </div>
        )
    }
}

export default AboutUs;