import React, { useEffect, useState } from 'react'
import M from "materialize-css"
import MarkDown from "react-markdown"
import "materialize-css/dist/css/materialize.min.css"
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GENAI_KEY);

const GenAI = () => {
   useEffect(() => M.AutoInit(), []);
   const [input, setInput] = useState(null)
   const [data, setData] = useState(null)

   const run = async() => {
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
         <h1>GenAI</h1>
         <input type="text" onChange={e => setInput(e.target.value)} />
         <button onClick={run}>Click</button>
         <MarkDown>{data ? data : "Loading.."}</MarkDown>
      </div>
   );
}
 
export default GenAI;