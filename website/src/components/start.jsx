import React from "react"
import "../styles/start.css"

export default function Start({onStart}){
    return (

        <div className="start-screen">
            <h1 className="title">
                Feed a 
                <span className="highlight"> 
                 KSH</span>
            </h1>
        
            <button className="start-button"
            onClick={onStart}>
                START!
            </button>
        </div>
    );
}