import "./App.css";
import React, { useState, useEffect, useReducer } from "react";
import { reducer, initialLoggedInDetails } from "./utils/Reducer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import UserLogin from "./pages/UserLogin/UserLogin";
import HomePage from "./pages/HomePage/HomePage";
import NavigationBar from "./common/components/NavigationBar";
import FeedbackPage from "./pages/FeedbackPage/FeedbackPage";
import FeedbackForm from "./pages/FeedbackForm/FeedbackForm";
import AdminLogin from "./pages/AdminLogin/AdminLogin";
import AboutPage from "./pages/AboutPage/AboutPage";
import AdminFeedback from "./pages/AdminFeedback/AdminFeedback";


export const Context = React.createContext();

function App() {
  const [user, setUser] = useState({});
  const [loggedInDetails, dispatch] = useReducer(
    reducer,
    initialLoggedInDetails
  );

  useEffect(() => {
    //console.log(localStorage.getItem("UserName"));
    const setData = async () => {
      const loginData = JSON.parse(localStorage.getItem("UserName"));
      if (loginData) {
        if (loginData.type === "admin") {
          const date = new Date(loginData.tokenExpiry);
          const currentDate = new Date();
          if (currentDate - date >= 0) {
            localStorage.removeItem("UserName");
            window.location.pathname = '/'
            dispatch({
              type: "UserLogout",
            });
            return null;
          }
        }
        setUser(loginData);
          dispatch({
            type: "UserLogin",
            payload: loginData
          });
      }
    };
    setData();
  }, []);
  return (
    
    <BrowserRouter basename='/'>
      <Context.Provider value={{ loggedInDetails, dispatch, user, setUser }}>
        <NavigationBar />
        <Routes>
          <Route path="/" element={(user.type) ? <Navigate replace to={"/home"} /> : <UserLogin/>} />
          <Route path="/admin-signin" element={(user.type) ?<Navigate replace to={"/home"}/> : <AdminLogin />} />
          <Route path="/about" element={(user.type) ? <AboutPage /> : <Navigate replace to={"/"}/>} />
          <Route
            path="/adminFeedback/:feedbackType"
            element={(user.type==="admin") ? <AdminFeedback /> : (user.type==="user") ? <Navigate replace to={"/home"}/> : <Navigate replace to={"/"}/>}
          />
          <Route path="/home" element={(user.type) ? <HomePage /> : <Navigate replace to={"/"}/>} />
          <Route
            path="/feedback/:feedbackType/:question"
            element={(user.type==="user") ? <FeedbackForm /> : (user.type==="admin") ? <Navigate replace to={"/home"}/> : <Navigate replace to={"/"}/>}
          />
          <Route path="/feedback" element={(user.type) ? <FeedbackPage /> : <Navigate replace to={"/home"}/>} />
          <Route path="*" element={<Navigate replace to={"/home"}/>}/>
        </Routes>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
