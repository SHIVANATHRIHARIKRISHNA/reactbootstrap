import React, { Component } from 'react';
import coverimg from './../../images/Mag_Cover.png';
import './MagImage.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

class MagImage extends Component{
    render(){
        return(
        <div class="container-fluid containclr">
           
           <div class="row ">{/*Primary Row */}

                <div class="col-sm">

                  {/** Header */}

                    <div class="row heading">  {/*Secondary row */}
                          Live the fantasy world of wedding fashion
                    </div>

                    {/* Magazine text*/ }

                    <div class="row txt">    {/*Secondary row */}
                          Our magazine is an eclectic blend of modernity and traditions-the complete package of coontemporary couples
                          to plan and execute a wedding of their dreams.Our magazine focuses of how to make your wedding day your most
                          memorable event.From bridal musings and a curated list of beauty essentials to expert advice on wedding planning,
                          we cover it all
                    </div>

                    {/*Read and Subscribe buttons */}

                    <div class="row buttons">  {/*Secondary row */}
                       
                        <div class="col-sm">
                            <Link to={{pathname:'https://pankhuri.co/indian-wedding-magazines/pankhuri-vol-1.pdf'}} target='_blank'>
                               <button type="button" class="btn btn-lg reads">Read</button>
                              </Link>
                           </div>

                           <div class="col-sm">
                            <button type="button" class="btn btn-lg subs">Subscribe</button>
                         </div>
                    </div>

                </div>

                <div class="col-sm">
                    {/*Cover Image  */}
                    <img  src={coverimg} class="imgstyle"></img>
                </div>

           </div>

           </div>
        )
    }

}

export default MagImage;