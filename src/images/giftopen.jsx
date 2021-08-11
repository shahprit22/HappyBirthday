import React, { Component } from 'react';
import './giftopen.css';
import hb from './hb.mp4'

class GiftOpen extends Component {
    state = { 
        trigger : true
     }
    render() { 
        return ( 
            this.state.trigger ?
            <div>
                <h1>Hey there!</h1>
                <br/>
                <h2>On your birthday I wish that you be blessed with one real smile and thousands of reasons for it. May you get all that you desire and more. May your life be full of surprises, joy, humor, laughter and happiness. May you smile bright like sunshine and spread it across too like a rainbow 🌈. 
Remember, birthday is nature's way of telling you to cut and eat more cakes🎂.(HaHa..). Make sure you have enough of 'kaju katli', 'ras malai' and 'gulab jamun' all your life(and be like it too..😜)</h2>
                <h2>All the good that you have done in past may come to you always and forever. The kind, generous, loving and caring nature that you have got, may it grows by each passing day. Thank you for being there 🤗. I will always wish for your success and never ending bliss. Have a great day today and everyday! 😊</h2>
                <h2>with love,</h2>
                <h2>Prit and Family</h2>
                <button onClick={() => this.setState({trigger:false})}>Click me</button>
            </div>
            
            :<div>
                 <video id="myVideo" autoPlay>
                     <source src={hb} type="video/mp4" />
                </video>
                <h1 class="content">Many Many Happy Returns of the Day, Happy Birthday</h1>
            </div>
         );
    }
}
 
export default GiftOpen;