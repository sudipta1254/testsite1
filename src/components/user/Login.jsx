import React, { useEffect, useState } from 'react'
import M from "materialize-css"
import $ from "jquery"

const Login = () => {
   const [email, setEmail] = useState(null);
   const [password, setPaassword] = useState(null);

   useEffect(() => {
      M.AutoInit();                             /* Auto initialize materialize css */
      document.title = "Flights - Login";
   }, []);
   useEffect(() => {
      $(".login-btn").on("submit", (e) => {
         e.preventDefault();
         if (email && password) {
            fetch("/login", {
               method: "post",
               headers: {
                  "Content-Type": "application/json"
               },
               body: JSON.stringify({
                  email: email,
                  password: password
               })
            })
         }
      })
   }, [])

   return (
      <div className="Login container">
         <h1 className="center">Login</h1>
         <form action="">
            <div className="row">
               <div className="input-field col s12">
                  <input id="email" type="email" className="validate"
                     onKeyPress={e => setEmail(e.target.value)}
                  />
                  <label htmlFor="email">Email</label>
               </div>
               <div className="input-field col s12">
                  <input id="password" type="password" className="validate"
                     onKeyPress={e => setPaassword(e.target.value)}
                  />
                  <label htmlFor="password">Password</label>
               </div>
               <div className="col s12">
                  <button className="btn waves-effect waves-light login-btn" type="submit">Login
                     <i className="material-icons right">send</i>
                  </button>
               </div>
               <div className="col s12">
                  <a href="/signup" className="btn waves-effect waves-light">Signup</a>
               </div>
            </div>
         </form>
      </div>
   );
}

export default Login;