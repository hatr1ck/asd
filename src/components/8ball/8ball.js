import React, {useState} from "react";
import "./Magickball.css";
import {Link} from 'react-router-dom';
import home from '../Home.svg';
import code from '../code.svg';


export default function Magickball() {
    let answers = [
        'It is certain',
        'It is decidedly so',
        'Without a doubt',
        'Yes - definitely',
        'You may rely on it',
        'As I see it, yes',
        'Most likely',
        'Outlook good',
        'Yes',
        'Signs point to yes',
        'Reply hazy, try again',
        'Ask again later',
        'Better not tell you now',
        'Cannot predict now',
        'Concentrate and ask again',
        "Don't count on it",
        'My reply is no',
        'My sources say no',
        'Outlook not so good',
        'Very doubtful'
    ];

    let [showing,
        setShowing] = useState(false);

    let [somestyle,
        setSomestyle] = useState("up");
    let [answer,
        setAnswer] = useState("click me");

    let clicked = (e) => {
        if (somestyle === 'up') {
            setAnswer(answers[Math.floor(Math.random() * 20)]);
            setSomestyle("up1");
        } else {
            setAnswer(answers[Math.floor(Math.random() * 20)]);
            setSomestyle("up");
        }
    }
    return (
        <div>
            <Link to='/'><img alt='404' src={home} height='100rem' className='imge'/></Link>
<img alt='404' src={code} height='100rem' className='imge' onClick={()=>setShowing(!showing)} />
 {showing ?  <div className='codewra'>
                <pre><h1>React</h1>{`
import React, {useState} from "react";
import "./Magickball.css";
import {Link} from 'react-router-dom';

export default function Magickball() {
    let answers = [
        'It is certain',
        'It is decidedly so',
        'Without a doubt',
        'Yes - definitely',
        'You may rely on it',
        'As I see it, yes',
        'Most likely',
        'Outlook good',
        'Yes',
        'Signs point to yes',
        'Reply hazy, try again',
        'Ask again later',
        'Better not tell you now',
        'Cannot predict now',
        'Concentrate and ask again',
        "Don't count on it",
        'My reply is no',
        'My sources say no',
        'Outlook not so good',
        'Very doubtful'
    ];

    let [somestyle,
        setSomestyle] = useState("up");
    let [answer,
        setAnswer] = useState("click me");

    let clicked = (e) => {
        if (somestyle === 'up') {
            setAnswer(answers[Math.floor(Math.random() * 20)]);
            setSomestyle("up1");
        } else {
            setAnswer(answers[Math.floor(Math.random() * 20)]);
            setSomestyle("up");
        }
    }
    return (
        <div>
            <div className='try'>
                <div className='ball' onClick={clicked}>
                    <div className="egrad"></div>
                    <div className="ewin">
                        <div className={somestyle}>
                            <p>{answer}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
            `}</pre><pre><h1>CSS</h1>{` 
                .try{
  text-align: center;
}
.ball{
  display: inline-block;
  cursor: pointer;
  height: 500px;
  width: 500px;
  background: rgb(30,30,30);
  border-radius: 100%;
  overflow: hidden;
  position: relative;
  box-shadow: inset -10px 10px 50px rgba(255,255,255,0.4), inset 5px -5px 50px rgba(0,0,0,1), inset 50px -50px 200px rgba(0,0,0,1), inset 0px -20px 20px rgba(60,0,60, 1);
}
.egrad{
  position: absolute;
  background: radial-gradient(ellipse at center, rgba(255,255,255,0.2) 0%,rgba(242,242,242,0.2) 7%,rgba(30,30,30,0.1) 30%,rgba(30,30,30,0.00) 100%);
  width: 600px;
  height: 700px;
  border-radius: 100%;
  left: 60%;
  top: 30%;
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
}
.ewin{
  position: absolute;
  background: linear-gradient(45deg, rgba(20,0,20,1) 0%, rgba(40,0,40,1) 100%);
  width: 300px;
  height: 300px;
  border-radius: 100%;
  border: solid 4px rgba(20,20,20,0.8);
  box-shadow: 10px -10px 10px rgba(20,20,20,0.6), 10px -10px 1px rgba(20,20,20,0.5),-10px -10px 1px rgba(20,20,20,0.5),10px 10px 1px rgba(50,50,50,0.5),-10px 10px 1px rgba(50,50,50,0.5), 8px -10px 10px rgba(20,20,20,0.6), -8px 10px 10px rgba(60,60,60,0.6), inset -10px 10px 40px rgba(200,0,20,0.05), inset 10px -10px 40px rgba(20,0,200,0.1);
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
}
.up {
  width: 0px;
  height: 0px;
  border-style: inset;
  border-width: 0 100px 173.2px 100px;
  border-color: transparent transparent #007bff transparent;
  margin: auto;
  margin-top: 50px;
  transform: rotate(360deg);
  -ms-transform: rotate(360deg);
  -moz-transform: rotate(360deg);
  -webkit-transform: rotate(360deg);
  -o-transform: rotate(360deg);
  animation: opac 2s ease-in-out;
}
.up1 {
  width: 0px;
  height: 0px;
  border-style: inset;
  border-width: 0 100px 173.2px 100px;
  border-color: transparent transparent #007bff transparent;
  margin: auto;
  margin-top: 50px;
  transform: rotate(360deg);
  -ms-transform: rotate(360deg);
  -moz-transform: rotate(360deg);
  -webkit-transform: rotate(360deg);
  -o-transform: rotate(360deg);
  animation: opac1 2s ease-in-out;
}
@keyframes opac {
    0%{
        opacity: 0;
    }
    100%{
        opacity:1;
    }
}
@keyframes opac1 {
    0%{
        opacity: 0;
    }
    100%{
        opacity:1;
    }
}
p {
    font-size:18px;
  text-align: center;
  top: 80px;
  left: -47px;
  position: relative;
  width: 93px;
  height: 93px;
  margin: 0px;
}
             `}</pre> </div> : null}
            <div className='try'>
                <div className='ball' onClick={clicked}>
                    <div className="egrad"></div>
                    <div className="ewin">
                        <div className={somestyle}>
                            <p>{answer}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}