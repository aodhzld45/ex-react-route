import React, { useState } from "react";
//import { Redirect } from "react-router-dom";
import { FormattedMessage, useIntl } from "react-intl";
import imgfile from "./img/gaubiz_logo.png";

//StyleCss
import "./style.css";

function LoginForm({authenticated, login, location }) {

  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");

  const [locale, setLocale] = useState(localStorage.getItem("locale") ?? "ko"); //local 기본값 - 한국어
  const intl = useIntl();

  //Login Auth Event Handler
  const handleClick = (e) => {
    
    try {
      login({username, password});
    } catch (e) {
      console.log(username, password);
      //alert("로그인에 성공하였습니다." );
      //window.location.href = "/about"
      alert("로그인에 실패하였습니다. 아이디나 비밀번호를 확인하세요." );
      setUserName("");
      setPassWord("");
    }
  };

  /*
  const { from } = location.useState || { from: { pathname: "/" } };
  if (authenticated) return <Redirect to={from} />;
  */
    
  const IntlHandler = (e) => {
    localStorage.setItem("locale", locale);
  };

  return (

  <div className="app">

     <img src={imgfile} width="200" alt="logo"></img>
       <h1>
              <FormattedMessage id="title" />
      </h1>
   
    <div className="form">
      <form>
        <label htmlFor="locale">
        <FormattedMessage
          id="label"
        />
        </label>
        <select
            id="locale"
            value={locale}
            onChange={({ target: { value } }) => setLocale(value)}
        >
            <option value="ko">한국어</option>
            <option value="en-US">en-US</option>   
        </select>
      
        <button   
            onClick={IntlHandler}  >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-save"
            >
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
              <polyline points="17 21 17 13 7 13 7 21"></polyline>
              <polyline points="7 3 7 8 15 8"></polyline>
            </svg>

          </button>

          <div className="form">
          <div className="input-container">
            <label htmlFor="locale">
              <FormattedMessage
              id="username"
              defaultMessage="아이디" 
              />
              </label>
          <input 
              type="text" 
              name="username" 
              id="username" 
              value={username}
              onChange={({ target : {value} }) => setUserName(value)}

               />
              {/* {renderErrorMessage("uname")} */}
            </div>
            <div className="input-container">
            <label htmlFor="locale">
              <FormattedMessage
              id="password"
              defaultMessage="비밀번호" 
              />
              </label>
            <input 
                type="password" 
                name="password" 
                id="password"
                value={password}
                onChange={({ target : {value} }) => setPassWord(value)}
                 />
            {/* {renderErrorMessage("pass")} */}

            </div>
          <div className="button-container">


            <input onClick={handleClick}
                    type="submit"
                    name="btn"
                    id="btn"               
                    value={
                      intl.formatMessage({
                        id: 'btn'
                      })
                    }
            >
            </input>
            
          </div> 
      </div> 
    </form>
  </div>
</div>
    );
}
export default LoginForm;

