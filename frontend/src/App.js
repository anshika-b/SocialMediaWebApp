// import logo from './logo.svg';
// import './App.css';
// import Navbar from './components/Navbar';
// import {BrowserRouter,Routes,Route} from "react-router-dom";
// import Home from './components/Home';
// import SignUp from './components/SignUp';
// import SignIn from './components/SignIn';
// import HomePage from './components/HomePage';
// // import Profile from './components/Profile';

// function App() {
//   return (<BrowserRouter>
//     <div className="App">
//     <Navbar/>
//     <Routes>
//       <Route path="/" element={<Home />}></Route>
//       <Route path="/signup" element={<SignUp />}></Route>
//       <Route path="/signin" element={<SignIn />}></Route>
//       <Route path="/homepage" element={<HomePage />}></Route>
//     </Routes>
//     </div>
//   </BrowserRouter>
//   );
// }

import './App.css';
import AfterLogin from "./AfterLogin";
import Profile from './components/Profile';
import BeforeLogin from "./BeforeLogin";

function App(){
  return(<div className="App">
    <AfterLogin />
  </div>)
}

export default App;
