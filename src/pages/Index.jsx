import React from "react";
import './styles/indexStyle.css';
import { Link } from "react-router-dom";
import BackgroundVid from "./styles/Background.mp4"
import ClickMe from "./ClickMe";
import Projects from "./Projects";

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
        <div id="ticTacToe">
            <Projects></Projects>
            <img id="arrow3" width="100px" height="100px" src={process.env.PUBLIC_URL + '/img/arrowIcon.png'} />
        </div>
        <img id="spaceMe" width="150px" src={process.env.PUBLIC_URL + '/img/spaceMe.png'} />
        <div id="fixLatinXSection">
            <div id="LatinXTech">
                <h2>LatinX.tech Project</h2>
                <p id="centerCenter">-A full stack website built during the 2021 ShellHacks Hackathon.</p>
                                <p id="textCenter">-Front end: React, JavaScript, Css, Html</p>
                                <p id="textCenter">-Back end: MongoDB, Express,Node.js</p>
                                <p id="textCenter">-This project has a full quiz that tests your knowledge on various LatinX topics. Which upon completion will display information of the LatinX tech person of the month, with a small biography. Also included is an interactive button mini game feature, and a subscription box that generates an automated email to you every month, with the new LatinX member of the month.</p>
            </div>
            <img id="arrow4" width="100px" height="100px" src={process.env.PUBLIC_URL + '/img/arrowIcon.png'} />
            <a target="_blank" href="https://github.com/AlexLecusay/LatinX.tech"><img id="latinImg" src={process.env.PUBLIC_URL + '/img/latinImg.jpg'} /></a>
        </div>
        <div id="fixSnakeSection">
            <a target="_blank" href="https://github.com/AlexLecusay/SnakeGame"><img id="snakeImg" src={process.env.PUBLIC_URL + '/img/snakeImg.jpg'} /></a>
            <img id="arrow5" width="100px" height="100px" src={process.env.PUBLIC_URL + '/img/arrowIcon2.png'} />
            <div id="Snake">
                <h2>Snake Project</h2>
                <p id="centerCenter">-For this webpage i built a Snake game </p>
                                <p id="textCenter">-Front end: React, JavaScript, Css, Html</p>
                                <p id="textCenter">-In this project you play the world famous Snake game, where you increasingly become bigger for every apple eaten. But be careful not to take a bite out of yourself!</p>
            </div>
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