import React, { useEffect, useState } from 'react'
import M from "materialize-css"
import MarkDown from "react-markdown"
import "materialize-css/dist/css/materialize.min.css"
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GENAI_KEY);
console.log(process.env)

const GenAI = () => {
   useEffect(() => M.AutoInit(), []);
   const [input, setInput] = useState(null)
   const [data, setData] = useState(null)
   const [loading, setLoading] = useState(false)
   
   const run = async() => {
      setLoading(true)
      if (!input) {
         alert("Enter prompt to continue..")
         return
      }
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
      const prompt = input
      const result = await model.generateContent(prompt);
      const response = result.response;
      const text = response.text();
      setData(text)
      console.log(text)
      return text
   }

   return (
      <div className="GenAI container">
         <h2 className="center">Gemini - GenAI</h2>
         <div className="input-container">
            <input id="GenAI-input" type="text" placeholder="Enter prompt.." onChange={e => setInput(e.target.value)} />
            <a href="#!" className="btn" onClick={run}>Click</a>
         </div>
         <div className="loading">
            { loading && "Loading.."}
         </div>
         <MarkDown>{data}</MarkDown>
      </div>
   );
}
 
export default GenAI;