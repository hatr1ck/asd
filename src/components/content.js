import React from 'react';
import Weather  from './weather API/weather';
import Todo from'./shoping/todo';
import Login from './login/login';
import Puzzle from'./Puzzle/puzzle';
import Spinners from'./spinners/spinners';
import Magickball from'./8ball/8ball';
import Tetris from'./tetris/tetris.js';
import Socket from'./socket/socket.js';
import Canvas from'./canvas/canvas.js';
import CanvasGame from'./canvasGame/canvasGame.js';
import Christmas from'./christmas/christmas.js';
import {Lava} from'./lava/lava.js';
import Works from './works';
import { Route } from 'react-router-dom';

export default class Content extends React.PureComponent {
    render() {
        return (
<div className='content'>
            <h3 id='goGreen'>My works:</h3><br />
          <div className='info'>
          <div className="content">
           {/*<Suspense fallback={<div className="cl"><div className="clock cssload-clock"></div></div>}>*/}
          <Route path="/" exact component={Works} />
           {/*</Suspense>*/}
          <Route path="/weather" exact component={Weather} />
          <Route path="/todo" exact component={Todo}/>
          <Route path="/canvasGame" exact component={CanvasGame}/>
          <Route path="/login1" exact component={Login}/>
          <Route path="/puzzle" exact component={Puzzle}/>
          <Route path="/8ball" exact component={Magickball}/>
          <Route path="/spinners" exact component={Spinners}/>
          <Route path="/tetris" exact component={Tetris}/>
          <Route path="/socket" exact component={Socket}/>
          <Route path="/canvas" exact component={Canvas}/>
          <Route path="/lavalamp" exact component={Lava}/>
          <Route path="/christmas" exact component={Christmas}/>
          </div>
         </div>
          </div>);
    }
}
