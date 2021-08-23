
import React from 'react';
import Profilephoto from './profile/ProfilePhoto';
import Fullname from './profile/fullname';
import Myadress from './profile/Adress';
import './profile/style.css';
// import {style} from'./profile/style.css';
function App() {
  return (
   <div>
   <Fullname/>
     <Profilephoto/>
     <Myadress/>
   </div>
    
  );
}

export default App;
