import React from "react";
import "../styles/game.css"

export default function Game() {
    return (

        <div className="game-page">

            <h3 className="instructions">
                Drag food items to Ksh to be consumed! (do NOT feed her too much)
            </h3>
            <Character />
            <Foods />

        </div>
    );
}