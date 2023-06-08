// import Message from './comps/message';
import './App.css';
import Counter from './comps/counter';
import Gallery from './comps/gallery';
import InputVal from './comps/inputVal';
import M1 from './comps/m1';
import Gallery from './comps/gallery';
function App() {
  return (
    <div className="container">
      <h1 className='text-danger'>React</h1>
      {/* חיבור בין קומפנינטה
      פשוט זימון שלה ממש כמו תגית יחידה */}
      {/* <Message txt="first 111111" /> */}
      {/* 
      let msg1 = new Message("first 1111")
      msg1.render()
      */}
      {/* <Message txt="last 22222"  /> */}
      <Counter />
      <InputVal />
      <M1/>
      <Gallery/>
    </div>
  );
}

export default App;
