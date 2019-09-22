import React from 'react';

import Splash from './components/Splash';

import { admin, products, clients, orders } from './Backend.js';

function App() {
  
  console.log(admin);
  console.log(products);
  console.log(clients);
  console.log(orders);

  return (
    <div className="App">
      <Splash />
    </div>
  );
}

export default App;
