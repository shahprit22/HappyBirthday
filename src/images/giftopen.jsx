import React, { Component } from 'react';
import './giftopen.css';

class GiftOpen extends Component {
    state = { 
        trigger : true
     }
    render() { 
        return ( 
            this.state.trigger ?
            <div>
                <h1>Hello, today is your day</h1>
                <button onClick={() => this.setState({trigger:false})}>Click me</button>
            </div>
            
            :<div>
                 <video id="myVideo" autoPlay>
                     <source src="/images/hb.mp4" type="video/mp4" />
                </video>
                <h1 class="content">Many Many Happy Returns of the Day, Happy Birthday</h1>
            </div>
         );
    }
}
 
export default GiftOpen;