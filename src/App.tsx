import React from 'react';

import './App.css';
import {Link,Route,Routes} from "react-router-dom";
import {User} from "./user";
import Home from "./home";
import Users from "./users";
function App() {
  return (
<>
    <ul>
      <li>
         <Link to="/">Anasayfa</Link>
      </li>
      <li>
         <Link to="/users">Kullanıcılar</Link>
      </li>

    </ul>


     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/users/:id" element={<User/>}/>
        <Route path="*" element={<h1>Sayfa Bulunamadı</h1>}/>
     </Routes>
</>
  );
}
/////<Route path="/users" element={<Users/>}>
//              <Route path=":id" element={<User/>}/>
//          </Route>
export default App;
