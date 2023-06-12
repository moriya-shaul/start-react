import React from 'react';
import './App.css';
import AppHW from './comps/appHW';
import AppColor from './comps_color/appColor';

function App() {
  return (
    <React.Fragment>
      <h1 className='text-danger'>React</h1>
      <hr/>
      <AppHW/>
      <AppColor/>
    </React.Fragment>
  );
}

export default App;
