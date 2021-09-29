import React from "react";
import ReactDom from "react-dom";
import './styles/TicTacToe.css';
import { Link } from "react-router-dom";
import Game from "./components/Game";
import BackgroundVid from "./styles/Background.mp4"

const Projects= ()=>{
    return(
        
        <div id="styleTicTacToe">
        <Game></Game>
        </div>
        
    );
};

export default Projects;