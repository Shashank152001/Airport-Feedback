import React, { useContext, useState } from "react";
import "./UserLogin.css";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../App";
import Loader from "../../common/components/Loader";
import TitleLetterDisplay from "../../common/components/TitleLetterDisplay";
import Swal from "sweetalert2";
import { useHttpClient} from "../../hooks/useHttpClient";
const UserLogin = () => {
  const { error, sendRequest, isLoading } = useHttpClient();
  const [userDetails, setUserDetails] = useState();

  const navigate = useNavigate();
  
  const { dispatch, setUser } = useContext(Context);
  const onChangeHandler = (e) => {
    setUserDetails({ ...userDetails, [e.target.id]: e.target.value });
  };  

  const handleForm = async (event) => {
    event.preventDefault();
    //console.log(JSON.stringify(userDetails))
    try {
      const data = await sendRequest(
        "/api/user",
        "POST",
        JSON.stringify(userDetails),
        {
          Accept: "application/json",
          "Content-Type": "application/json",
        }
      );
      if (!error) {
        Swal.fire("Welcome to Airport" , "", "success");
        dispatch({
          type: "UserLogin",
          payload: {
            type: "user",
            flightNumber: data.data.flightNumber,
            gate: data.data.gate,
            userName: userDetails.name,
          },
        });
        setUser({type:"user"})
        localStorage.setItem(
          "UserName",
          JSON.stringify({
            type: "user",
            flightNumber: data.data.flightNumber,
            gate: data.data.gate,
            userName: userDetails.name
          })
        );
        setUserDetails({});
        navigate("/home");
      }
    } catch (err) {}
  };

  return (
    <>
    {isLoading && <Loader/>}
    <div
      className="login"
      style={{
        backgroundImage: "url('Images/airport-3.jpg')"
      }}
    >
      <div className="login-inside-border">
        <div className="login-form-div">
          <div className="login-head">
            {["E", "N", "T", "E", "R"].map((letter, idx) => {
              return <TitleLetterDisplay key={idx} letter={letter} />;
            })}
          </div>
          <div className="login-head">
            {["D", "E", "T", "A", "I", "L", "S"].map((letter, idx) => {
              return <TitleLetterDisplay key={idx} letter={letter} />;
            })}
          </div>
          <form onSubmit={handleForm} className="login-form">
            <div className="login-form-input">
            <input
              type="text"
              id="name"
              placeholder="Name"
              onChange={(e) => onChangeHandler(e)}
              required
            />
            <input
              type="email"
              id="email"
              placeholder="E-Mail"
              onChange={(e) => onChangeHandler(e)}
              required
            />
            <input
              type="number"
              id="mobileNumber"
              placeholder="Mobile Number"
              onChange={(e) => onChangeHandler(e)}
              required
            />
            <input
              type="text"
              id="pnr"
              placeholder="PNR"
              onChange={(e) => onChangeHandler(e)}
              required
            />
            </div>
            <input type="submit" value="Submit" className="login-form-submit" />
            <Link to="/admin-signin" className="other-login">
              Are you an admin? Click to Login
            </Link>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default UserLogin;
