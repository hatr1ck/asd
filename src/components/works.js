import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './works.css';
import ball from'./8ball/ballLogo.svg';
import ball8 from'./8ball/kill.png';
import weat from'./weather API/if.svg';
import weats from'./weather API/weather.png';
import todos from'./shoping/todo.svg';
import todo from'./shoping/todo.png';
import spin from'./spinners/loading.svg';
import spin1 from'./spinners/spin.png';
import key from'./login/key.svg';
import bg from'./login/bg.png';
import puzzle from'./Puzzle/puzzle.svg';
import puzzle1 from'./Puzzle/game.png';
import chat from'./socket/chat.svg';
import chatbg from'./socket/chat.png';
import tetris1 from'./tetris/tetris.svg';
import tetris2 from'./tetris/tetris.png';
import arrowL from '../icons/arrowL.svg';
import arrowR from '../icons/arrowR.svg';
import bls from'./canvas/bls.svg';
import canvas from'./canvas/canvas.png';
import flake from'./christmas/flake.svg';
import chr from'./christmas/christmas.png';
import clock from'./canvasGame/clocks.svg';
import clock1 from'./canvasGame/codeC.png';

class Works extends Component {
    state= {
      first:0,
      last:0,
      projects: [
                {title:"Weather API", logo:weat, info:'Test of faith', link:"/weather", kkey:"1", pic:weats},
                {title:"Coding Challenge №2", logo:clock, info:'HTML/CSS/JS Clock', link:"/canvasGame", kkey:"11", pic:clock1},
                {title:"Todo", logo:todos, info:'It is what it is', link:"/todo", kkey:"2", pic:todo},
                {title:"Login", logo:key, info:'Test of faith', link:"/login1", kkey:"3", pic:bg},
                {title:"Coding Challenge №1", logo:flake, info:'Christmas HTML/CSS only', link:"/christmas", kkey:"12", pic:chr},
                {title:"HTML5 Canvas", logo:bls, info:'My canvas experiment', link:"/canvas", kkey:"10", pic:canvas},
                {title:"Chat", logo:chat, info:'Chat on WebSockets', link:"/socket", kkey:"9", pic:chatbg},
                {title:"Spinners", logo:spin,info:'Test of faith', link:"/spinners", kkey:"4", pic:spin1},
                {title:"15 Puzzle",logo:puzzle,info:'Test of faith', link:"/puzzle", kkey:"5", pic:puzzle1},
                {title:"Tetris",logo:tetris1,info:'Build the wall', link:"/tetris", kkey:"8", pic:tetris2},
                 {title:"Magick 8-ball", logo:ball, info:'Test of faith', link:"/8ball", kkey:"6", pic:ball8}
          ]}
              render() {
      return (
        <div>
        <ul className='ele'>
          {this.state.projects.map((elem)=>{
            return (<Link to={elem.link} key={elem.kkey}><li className="carde">
              <img alt='404' src={elem.pic} className="card-banner" />
                <img src={elem.logo} height='80rem'alt='404' className="imag"  />
                <h3 id='goGreen'>{elem.title}</h3>
                <span className='goWhite'>{elem.info}</span>
            </li></Link>)})}
          </ul>
          <div className='cen'>
          <img className='arrow' alt='404' width='50px'src={arrowL} onClick={this.moveLeft} />
          <span>{this.state.last - this.state.first + "/" + this.state.projects.length}</span>
           <img className='arrow' alt='404' width='50px' src={arrowR} onClick={this.moveRight} />
         </div>
         </div>
      );
    }
  }

  export default  Works;