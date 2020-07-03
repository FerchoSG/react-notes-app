import React from 'react';
import Home from './pages/Home'
import './App.css';

import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App bg-dark">
      <Home />
      <ToastContainer />
    </div>
  );
}

export default App;
