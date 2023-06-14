// // import Message from './comps/message';
// import './App.css';
// import Counter from './comps/counter';
// import Gallery from './comps/gallery';
// import InputVal from './comps/inputVal';
// import M1 from './comps/m1';
// import Gallery from './comps/gallery';
// function App() {
//   return (
//     <div className="container">
//       <h1 className='text-danger'>React</h1>
//       <Counter />
//       <InputVal />
//       <M1/>
//       <Gallery/>
//     </div>
//   );
// }

// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import AppHw from './comps_hw/appHw'; 
// import AppDate from './ofer1/appDate';
import AppApi from './comps_api/appApi';
// import AppRoutes from './comps_routes/appRoutes';

function App() {
  return (
    <React.Fragment>
      {/* <AppRoutes /> */}
      {/* <AppHw /> */}
      {/* <AppDate/> */}
      <AppApi/>
    </React.Fragment>
  );
}

export default App;