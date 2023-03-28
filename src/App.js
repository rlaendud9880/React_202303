import { Link, Route, Routes } from "react-router-dom";
import InputSample from "./Pages/InputSample/InputSample";
import MainAside from './Components/Aside/MainAside/MainAside';
import UserList from './Pages/UserList/UserList';
import Todo from './Pages/Todo/Todo';
import NumberCounter from './Pages/NumberCounter/NumberCounter';



function Test1(){
    return(<h1>Test1</h1>);
}

function Test2(){
    return(<h1>Test2</h1>);
}

function App() {
  return (
    <>
      <MainAside />
      <Routes>
        <Route path="/t1" Component={Test1}/> 
        <Route path="/t2" Component={Test2}/> 
        <Route path="/sample/input/1" Component={InputSample}/> 
        <Route path="/users" Component={UserList}/> 
        <Route path="/todo" Component={Todo}/>
        <Route path="/number/counter" Component={NumberCounter}/>
      </Routes>
    </>    
  );
}

export default App;