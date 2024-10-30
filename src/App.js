import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { MainPage } from "./components/user/userMainPage/MainPage";
import AdminMainPage from "./components/admin/adminMainPage/AdminMainPage";
import Auth from "./components/admin/adminLogin/Auth";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="mainPage" element={ < MainPage/>}/>
        <Route path="adminMainPage" element={ < AdminMainPage/>}/>
        <Route path="auth" element={ < Auth/>}/>
      </Routes>
    </Router>
  );
}

export default App;
