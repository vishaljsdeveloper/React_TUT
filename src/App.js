
import './App.css';
import User1 from './User1';
import User2 from './User2';
import User3 from './User3';
import User4 from './User4';
import User5 from './User5';
import User6 from './User6';
import User7 from './User7';
import Student8 from './Student8';
// import Student9 from './Student9';
import Student10 from './Student10';
import Input11 from './Input11';
import Input12 from './Input12';
import Toggle13 from './Toggle13';
import Toggle14 from './Toggle14';
import Forms15 from './Forms15';
import Condition16 from './Condition16';
import Propsfumction17 from './Propsfunction17';
import Members18 from './Members18';
import Constructorlife19 from './Constructorlife19';
import Renderlife20 from './Renderlife20';
import Didmount21 from './Didmount21';
import Didupdate22 from './Didupdate22';
import Shouldupdate23 from './Shouldupdate23';
import Willunmount24 from './Willunmount24';
import Effecthook25 from './Effecthook25';
import Effecthook26 from './Effecthook26';
import Effecthook27 from './Effecthook27';
import Effectprop28 from './Effectprop28';
import Stylecss29 from './Stylecss29';
import Bootstrap30 from './Bootstrap30';
import Handlearraylist31 from './Handlearraylist31';
import Bootstraparraylist32 from './Bootstraparraylist32';
import Nestedarraynestedlist33 from './Nestedarraynestedlist33';
import Reusecomponent34 from './Reusecomponent34';
import Liftingstateup35 from './Liftingstateup35';
import Purecomponent36 from './Purecomponent36';
import Purecomponentprops37 from './Purecomponentprops37';
import Usememo38 from './Usememo38';
import Ref39 from './Ref39';
import UseRef40 from './UseRef40';
import Test from './Test';
import ForwardRef41 from './ForwardRef41';
import Controlledcomponent42 from './Controlledcomponent42';
import Uncontrolledcomponent43 from './Uncontrolledcomponent43';
function App() {
  // yaha ek function bana rahe hai jisko ki as a props pass karenge lec 17 menubar.
  function getFunction() {
    alert('passing from app.js to lec 17')
  }
  //yaha get function khatam ho gaya.
  return (
    <div className="App">
      <h1>Hello world this is vishal</h1>
      <User1 />
      <User1 />
      <User2 />
      <User3 />
      <User4 />
      <User5 />
      <User6 />
      <User7 />
      <Student8 name={'functional component props'} email='anil@test.com' other={{ address: "delhi", mobile: '0000' }} />
      <Student8 name={'danish'} email='danish@test.com' other={{ address: "noida", mobile: '1111' }} />
      <Student8 name={'priti'} email='priti@test.com' other={{ address: "mumbai", mobile: '2222' }} />
      {/* <Student9 name={'raj'} /> */}
      <Student10 name={'class component props'} email='raj@test.com' />
      <Student10 name={'ram'} email='ram@test.com' />
      <Input11 /><hr></hr>
      <Input12 /><hr></hr>
      <Toggle13 /><hr></hr>
      <Toggle14 /><hr></hr>
      <Forms15 /><hr></hr>
      <Condition16 /><hr></hr>
      <Propsfumction17 data={getFunction} /><hr></hr>
      <Members18 data={getFunction} /><hr></hr>
      <Constructorlife19 /><hr></hr>
      <Renderlife20 /><hr></hr>
      <Didmount21 /><hr></hr>
      <Didupdate22 /><hr></hr>
      <Shouldupdate23 /><hr></hr>
      <Willunmount24 /><hr></hr>
      <Effecthook25 /><hr></hr>
      <Effecthook26 /> <hr></hr>
      <Effecthook27 /><hr></hr>
      <Effectprop28 /><hr></hr>
      <Stylecss29 /><hr></hr>
      <Bootstrap30 /> <hr></hr>
      <Handlearraylist31 /><hr></hr>
      <Bootstraparraylist32 /><hr></hr>
      <Nestedarraynestedlist33 /><hr></hr>
      <Reusecomponent34 /><hr></hr>
      <Liftingstateup35 /><hr></hr>
      <Purecomponent36 /><hr></hr>
      <Purecomponentprops37 /><hr></hr>
      <Usememo38 /><hr></hr>
      <Ref39 /><hr></hr>
      <UseRef40 /><hr></hr>
      <Test /><hr></hr>
      <ForwardRef41 />
      <Controlledcomponent42 />
      <Uncontrolledcomponent43 />
    </div>
  );
}

export default App;
