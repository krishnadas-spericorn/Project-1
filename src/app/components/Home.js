import React, { Component } from 'react';
 import Carous from './Carous';
 import Card from './Card';

class Home extends Component {
   render() {
      return (
         <div>
            
             <Carous/>
             <Card/>
         </div>
      );
   }
}
export default Home;