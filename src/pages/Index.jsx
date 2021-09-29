import React from "react";
import './styles/indexStyle.css';
import { Link } from "react-router-dom";
import BackgroundVid from "./styles/Background.mp4"
import ClickMe from "./ClickMe";

const MainPage= ()=>{
return(
    <section id="fullPage">
        <div id="banner">
            <div id="topPage">Full-stack Developer</div>
            <div id="socialBtn">
                <a target="_blank" href="https://www.linkedin.com/in/alex-lecusay-0a51a5217/"><img id="icon" width="50px" src={process.env.PUBLIC_URL + '/img/linkedInIcon.png'} /></a>
                <a target="_blank" href="https://github.com/AlexLecusay?tab=repositories"><img id="icon" width="50px" src={process.env.PUBLIC_URL + '/img/gitHubIcon.png'} /></a>
                <a target="_blank" href="https://twitter.com/AlexxIzNasty"><img width="50px" id="icon" src={process.env.PUBLIC_URL + '/img/twitterIcon.png'} /></a>
                <a target="_blank" href="https://www.twitch.tv/alexxiznasty"><img width="50px" id="icon" src={process.env.PUBLIC_URL + '/img/twitchIcon.png'} /></a>
            </div>
        </div>
        <div id="center">
            <div id="centerLeft">
                <h2>Welcome to my portfolio</h2>
                <div id="centerCenter">
                    <p>--____ my name is Alex and i am a Computer Science student at Florida International University.
                    This is my webpage and portfolio, follow the → to see more about what ive done and like!</p>
                    <img id="moveMe" width="100px" src={process.env.PUBLIC_URL + '/img/welcomeMe.png'} />
                </div>
            </div>
            <img id="arrow" width="100px" height="100px" src={process.env.PUBLIC_URL + '/img/arrowIcon.png'} />
                <div>
                    <ClickMe></ClickMe>
                </div>  
        </div>
        <div id="code">
            <img id="codeInsertFix" src={process.env.PUBLIC_URL + '/img/codeInsert.png'} />
            <img id="arrow2" width="100px" height="100px" src={process.env.PUBLIC_URL + '/img/arrowIcon.png'} />
        </div>
        <div id="snakeGame">
            <h1></h1>

        </div>
            <video id="backgroundVid" autoPlay loop muted>
                <source src={BackgroundVid} type="video/mp4"/>
            </video>
        <div id="stayAway">
            {/* <Link to="/projects">Projects<img width="50px" src="/img/projectsIcon.png"/></Link> */}
            {/* <Link to="/404">404</Link> */}
        </div>
    </section>
    );
};
export default MainPage;