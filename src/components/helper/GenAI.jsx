import React, { useEffect, useState } from 'react'
import M from "materialize-css"
import MarkDown from "react-markdown"
import "materialize-css/dist/css/materialize.min.css"
import { GoogleGenerativeAI } from "@google/generative-ai";
import { handleEnter } from "./Helper"

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GENAI_KEY);

const GenAI = () => {
   useEffect(() => M.AutoInit(), []);
   const [input, setInput] = useState(null)
   const [data, setData] = useState(null)
   const [error, setError] = useState(null)
   const [loading, setLoading] = useState(false)
   
   const generateContent = async() => {
      if (!input) {
         alert("Enter prompt to continue..")
         return
      }
      setLoading(true)
      try {
         const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
         const prompt = input
         const result = await model.generateContent(prompt);
         const response = result.response;
         const text = response.text();
         setData(text)
         setError(null)
         setLoading(false)
      } catch (err) {
         console.log(err)
         setData(null)
         setError(err)
         setLoading(false)
      }
   }

   return (
      <div className="GenAI container">
         <h2 className="center">Gemini - GenAI</h2>
         <div className="input-container">
            <input id="GenAI-input" type="text" placeholder="Enter prompt.."
               onKeyDown={ e => handleEnter(e, ".GenAI-btn") }
               onChange={ e => setInput(e.target.value) }
            />
            <a href="#!" className="btn GenAI-btn" onClick={ generateContent }>Click</a>
         </div>
         <div className="message-text">
            { error }
            { loading && "Loading.."}
         </div>
         <MarkDown>{ data }</MarkDown>
      </div>
   );
}
 
export default GenAI;