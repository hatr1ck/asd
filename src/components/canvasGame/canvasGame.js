import React, { Component } from 'react';
import './canvasgame.css';
import {Link} from 'react-router-dom';
import home from '../Home.svg';
import code from '../code.svg';

export default class canvasGame extends Component{
    state = {
        showing:false
    }
	componentDidMount(){

		this.intervalId = setInterval(() => {
  let minute = this.refs.minute;
  let hour = this.refs.hour;
  let M = new Date().getMinutes() * 6 - 90;
  let H = new Date().getHours() * 30 - 90;
  minute.style.transform = 'rotate(' + M + 'deg)';
  hour.style.transform = 'rotate(' + H + 'deg)';
}, 100)
	}

componentWillUnmount(){
   clearInterval(this.intervalId);
}

deg2rad(d) { 
	return (2 * d / 360) * Math.PI; 
}

 

vec2ang(x, y) {
 let angleInRadians = Math.atan2(y, x);
 let angleInDegrees = (angleInRadians / Math.PI) * 180.0;
 return angleInDegrees;
}
render(){
            return (
            	<div>
                <Link to='/'><img alt='404' src={home} height='100rem' className='imge'/></Link>
<img alt='404' src={code} height='100rem' className='imge' onClick={()=>this.setState({showing:!this.state.showing})} />
 {this.state.showing ?  <div className='codewra'>
                <pre><h1>React</h1>{`import React, { Component } from 'react';
import './canvasgame.css';

export default class canvasGame extends Component{
	state={
		timer:setInterval(() => {
  let minute = this.refs.minute;
  let hour = this.refs.hour;
  let M = new Date().getMinutes() * 6 - 90;
  let H = new Date().getHours() * 30 - 90;
  minute.style.transform = 'rotate(' + M + 'deg)';
  hour.style.transform = 'rotate(' + H + 'deg)';
}, 10)
	}

deg2rad(d) { 
	return (2 * d / 360) * Math.PI; 
}

 

vec2ang(x, y) {
 let angleInRadians = Math.atan2(y, x);
 let angleInDegrees = (angleInRadians / Math.PI) * 180.0;
 return angleInDegrees;
}
render(){
            return (
            	<div>
            	<div  className='destiny'>

    <div class="plane"><div class="plane1"></div><div class="plane6">Historically accurate btw</div><div class="plane2"></div><div class="plane5"></div><div class="plane4"></div><div class="plane3"></div><div class="planetale"></div><div class='prope'><div class='prope1'></div></div></div>
    <div class="justacloud"><div class="justacloud1"></div><div class="justacloud2"></div></div>
    <div class="justacloud23"><div class="justacloud1"></div><div class="justacloud2"></div></div>
    <div class="justacloud24"><div class="justacloud1"></div><div class="justacloud2"></div></div>
    <div class="tower">
        <div class="rof8">
            <div class="toproof8">
                <div class="ovad"></div>
                <div class="ovad1"></div>
                <div class="toproof88">
                    <div class="monkaS">
                        <div class="monkaS8"></div>
                    </div>
                    <div class="monkaS1">
                        <div class="monkaS8"></div>
                    </div>
                    <div class="monkaS2">
                        <div class="monkaS8"></div>
                    </div>
                    <div class="monkaS3">
                        <div class="monkaS8"></div>
                    </div>
                    <div class="monkaS4">
                        <div class="monkaS8"></div>
                    </div>
                    <div class="monkaS5">
                        <div class="monkaS8"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="wndwwra8">
            <div class="wndwwra88">
                <div class="wndw8"></div>
                <div class="wndw8"></div>
                <div class="wndw8"></div>
                <div class="wndw8"></div>
                <div class="wndw8"></div>
            </div>
        </div>
        <div class="wndwwra">
            <div class="wndw"></div>
            <div class="wndw"></div>
            <div class="wndw"></div>
            <div class="wndw"></div>
            <div class="wndw"></div>
            <div class="wndw"></div>
            <div class="wndw"></div>
        </div>
        <div class="roof8">
            <div class="monkaSS">
                <div class="monkaSS8"></div>
            </div>
            <div class="monkaSS1">
                <div class="monkaSS8"></div>
            </div>
            <div class="monkaSS2">
                <div class="monkaSS8"></div>
            </div>
            <div class="monkaSS3">
                <div class="monkaSS8"></div>
            </div>
            <div class="monkaSS4">
                <div class="monkaSS8"></div>
            </div>
            <div class="monkaSS5">
                <div class="monkaSS8"></div>
            </div>
            <div class="monkaSS6">
                <div class="monkaSS8"></div>
            </div>
        </div>
        <div class="squere88">
        </div>
        <div class="squere8">
        </div>
        <div class="clock8">
            <div class="lete1">I</div>
            <div class="lete2">II</div>
            <div class="lete3">III</div>
            <div class="lete4">IV</div>
            <div class="lete5">V</div>
            <div class="lete6">VI</div>
            <div class="lete7">VII</div>
            <div class="lete8">VIII</div>
            <div class="lete9">IX</div>
            <div class="lete10">X</div>
            <div class="lete11">XI</div>
            <div class="lete12">XII</div>
            <div ref='hour' id="hour">
                <div class="arrow8"></div>
            </div>
            <div ref="minute" id="minute"></div>
        </div>
        <div class="something1"></div>
        <div class="something12"></div>
        <div class="something13"></div>
        <div class="something14"></div>
        <div class="something15"></div>
        <div class="something16"></div>
        <div class="something17"></div>
        <div class="something18"></div>
        <div class="something19"></div>
        <div class="something110"></div>
    </div>
    <div class="building8">
        <div class='colon'>
            <div class='wn66'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn67'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn68'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn69'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='colon1'>
                <div class='conus'>
                    <div class="pimpi">
                        <div class="pimpi1"></div>
                    </div>
                </div>
            </div>
            <div class='colon2'></div>
            <div class='colon3'></div>
        </div>



        <div class='colon77'>
            <div class='wn66'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn67'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn68'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn69'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='colon1'>
                <div class='conus'>
                    <div class="pimpi">
                        <div class="pimpi1"></div>
                    </div>
                </div>
            </div>
            <div class='colon2'></div>
            <div class='colon3'></div>
        </div>

         <div class='colon78'>
            <div class='wn66'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn67'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn68'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn69'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='colon1'>
                <div class='conus'>
                    <div class="pimpi">
                        <div class="pimpi1"></div>
                    </div>
                </div>
            </div>
            <div class='colon2'></div>
            <div class='colon3'></div>
        </div>

         <div class='colon79'>
            <div class='wn66'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn67'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn68'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn69'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='colon1'>
                <div class='conus'>
                    <div class="pimpi">
                        <div class="pimpi1"></div>
                    </div>
                </div>
            </div>
            <div class='colon2'></div>
            <div class='colon3'></div>
        </div>

 <div class='colon710'>
            <div class='wn66'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn67'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn68'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn69'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='colon1'>
                <div class='conus'>
                    <div class="pimpi">
                        <div class="pimpi1"></div>
                    </div>
                </div>
            </div>
            <div class='colon2'></div>
            <div class='colon3'></div>
        </div>
 <div class='colon711'>
            <div class='wn66'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn67'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn68'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn69'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='colon1'>
                <div class='conus'>
                    <div class="pimpi">
                        <div class="pimpi1"></div>
                    </div>
                </div>
            </div>
            <div class='colon2'></div>
            <div class='colon3'></div>
        </div>


 <div class='colon712'>
            <div class='wn66'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn67'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn68'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn69'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='colon1'>
                <div class='conus'>
                    <div class="pimpi">
                        <div class="pimpi1"></div>
                    </div>
                </div>
            </div>
            <div class='colon2'></div>
            <div class='colon3'></div>
        </div>
        <div class="tower81">
            <div class='wn'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn1'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn2'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn3'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn4'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn5'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn6'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn7'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class="roof81">
                <div class="tow81">
                    <div class="pimp">
                        <div class="pimp1"></div>
                    </div>
                </div>
                <div class="tow82">
                    <div class="pimp">
                        <div class="pimp1"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
         </div>
         </div>
        );
}
}`}</pre><pre><h1>CSS</h1>{`.destiny{
  margin: 0;
  padding: 0;
  width: 1240px;
  height: 830px;
  overflow: hidden;
  background-color: #8389a8;
  margin-bottom: 300px;
}
#minute {
    position: absolute;
    top: 50px;
    left:50px;
    width: 48px;
    height: 1px;
    border: 1px solid transparent;
    border-radius: 5px;
    transform: unset;
    background: #3C352D;
    transform-origin: 2px 2px;
}
.clock8{
  border: 3px solid #3C352D;
  border-radius: 50%;
  position: relative;
  width: 100px;
  height: 100px;
  left: 32px;
  top:55px;
  background-color: white;
}
#hour {
    position: absolute;
    top: 50px;
    left:50px;
    width: 30px;
    height: 2px;
    border: 1px solid transparent;
    border-radius: 5px;
    transform: unset;
    background: #3C352D;
    transform-origin: 2px 2px;
}
.arrow8{
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 18px solid #3C352D;
  transform: rotate(90deg);
  float: right;
  top: -7.8px;
  position: relative;
  display: inline-block;
}
.tower{
  background-color: #E6D09E;
  float: right;
  right: 40px;
  position: relative;
  width: 170px;
  top: 50px;
  height: 600px;
  z-index: 1;
  border:0.1px solid #3C352D;
}
.roof8{
  border-left: 40px solid transparent;
  border-right: 40px solid transparent;
  width: 90px;
  border-bottom: 60px solid #636874;
  position: absolute;
  top:-60px;
}
.squere8{
  border: 2px solid #DAD188;
  top:45px;
  left: 23px;
  width: 120px;
  height: 120px;
  position: absolute;
}
.wndw{
  background-color: #121E14;
  width: 10px;
  height: 30px;
  margin: 2.8px;
  border-top-right-radius: 30%;
  border-top-left-radius: 30%;
  display: inline-block;
  position: relative;
}
.wndwwra{
  margin-left: 20px;
  position: absolute;
}
.wndwwra8{
  background-color: #E6D09E;
  width: 90px;
  height: 75px;
  position: absolute;
  top: -120px;
  left: 40px;
}
.wndwwra88{
  width: 130px;
  height: 130px;
  position: absolute;
  display: inline-block;
  margin: 30px 13px 0px 13px;
}
.wndw8{
  background-color: #121E14;
  width: 10px;
  height: 30px;
  margin-left:2.8px;
  border-top-right-radius: 30%;
  border-top-left-radius: 30%;
  display: inline-block;
  position: relative;
}
.rof8{
  position: absolute;
  top: -210px;
  left: 40px;
  border-left: 42px solid transparent;
  border-right: 42px solid transparent;
  width: 5px;
  border-bottom: 90px solid #636874;
}
.toproof8{
  background-color: #DAD188;
  width: 5px;
  height: 30px;
  top:-30px;
  position: absolute;
  border-top-right-radius: 30%;
  border-top-left-radius: 30%;
}
.toproof88{
  background-color: #DAD188;
  width: 10px;
  height: 10px;
  left: -2px;
  top:10px;
  border-radius: 50%;
  position: absolute;
}
.building8{
  background-color: #E6D09E;
  border-top: 40px solid #636874;
  width: 100%;
  height: 500px;
  position: relative;
  top:400px;
  left: -100px;
}

.tower81{
  background-color: #E6D09E;
  float: left;
  left: 110px;
  position: absolute;
  width: 170px;
  top: -130px;
  height: 500px;
  border: 0.1px solid #3C352D;
}

.roof81{
  border-left: 40px solid transparent;
  border-right: 40px solid transparent;
  width: 90px;
  border-bottom: 40px solid #636874;
  position: absolute;
  top:-40px;
}
.tow81{
  width: 30px;
  height: 100px;
  top:-59.5px;
  border:0.5px solid #3C352D;
  left: -40px;
  border-bottom: 0px;
  background-color: #E6D09E;
  border-top-left-radius: 20%;
  border-top-right-radius: 20%;
  position: absolute;
}
.tow82{
  width: 30px;
  height: 100px;
  top:-59.5px;
  border:0.5px solid #3C352D;
  left: 99px;
  background-color: #E6D09E;
  border-top-left-radius: 20%;
  border-top-right-radius: 20%;
  border-bottom: 0px;
  position: absolute;
}
.pimp{
  width: 5px;
  height: 30px;
  top:-30px;
  position: absolute;
  background-color: #77491a;
  left: 13px;
}
.monkaS{
  background-color: #1F2E6A;
  border:1px solid #E6D09E;
  width: 7px;
  height: 11px;
  position: absolute;
  top:35px;
}

.monkaS8{
  position: absolute;
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
  top:-6px;
  left: -2px;
  width: 4px;
  border-bottom: 5px solid #E6D09E;
}
.monkaS1{
  background-color: #1F2E6A;
  border:1px solid #E6D09E;
  width: 7px;
  left: -10px;
  height: 11px;
  position: absolute;
  top:60px;
}

.monkaS2{
  background-color: #1F2E6A;
  border:1px solid #E6D09E;
  width: 7px;
  left: 10px;
  height: 11px;
  position: absolute;
  top:60px;
}

.monkaS3{
  background-color: #1F2E6A;
  border:1px solid #E6D09E;
  width: 7px;
  left: -20px;
  height: 11px;
  position: absolute;
  top:85px;
}

.monkaS4{
  background-color: #1F2E6A;
  border:1px solid #E6D09E;
  width: 7px;
  left: 0px;
  height: 11px;
  position: absolute;
  top:85px;
}

.monkaS5{
  background-color: #1F2E6A;
  border:1px solid #E6D09E;
  width: 7px;
  left: 20px;
  height: 11px;
  position: absolute;
  top:85px;
}

.monkaSS{
  background-color: #1F2E6A;
  border:1px solid #E6D09E;
  width: 10px;
  height: 15px;
  position: absolute;
  top:10px;
}

.monkaSS8{
  position: absolute;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  top:-6px;
  left: -2px;
  width: 6px;
  border-bottom: 7px solid #E6D09E;
}

.monkaSS1{
  background-color: #1F2E6A;
  border:1px solid #E6D09E;
  width: 10px;
  height: 15px;
  left: 38px;
  position: absolute;
  top:10px;
}

.monkaSS2{
  background-color: #1F2E6A;
  border:1px solid #E6D09E;
  width: 10px;
  left: 77px;
  height: 15px;
  position: absolute;
  top:10px;
}

.monkaSS3{
  background-color: #1F2E6A;
  border:1px solid #E6D09E;
  width: 10px;
  left: -15px;
  height: 15px;
  position: absolute;
  top:35px;
}

.monkaSS4{
  background-color: #1F2E6A;
  border:1px solid #E6D09E;
  width: 10px;
  left: 20px;
  height: 15px;
  position: absolute;
  top:35px;
}
.monkaSS5{
  background-color: #1F2E6A;
  border:1px solid #E6D09E;
  width: 10px;
  left: 55px;
  height: 15px;
  position: absolute;
  top:35px;
}
.monkaSS6{
  background-color: #1F2E6A;
  border:1px solid #E6D09E;
  width: 10px;
  left: 90px;
  height: 15px;
  position: absolute;
  top:35px;
}
.squere88{
  background-color: #E6D09E;
  border:.5px solid #3C352D;
  width: 180px;
  height: 150px;
  position: absolute;
  left: -5px;
  top:35px;
}
.something1{
  background-color: #775032;
  width: 170px;
  height: 2px;
  top:230px;
  position: absolute;
}
.something12{
  background-color: #775032;
  width: 170px;
  height: 2px;
  top:260px;
  position: absolute;
}
.something13{
  background-color: #775032;
  width: 170px;
  height: 2px;
  top:330px;
  position: absolute;
}
.something14{
  background-color: #775032;
  width: 170px;
  height: 2px;
  top:360px;
  position: absolute;
}
.something15{
  background-color: #775032;
  width: 170px;
  height: 2px;
  top:430px;
  position: absolute;
}
.something16{
  background-color: #775032;
  width: 170px;
  height: 2px;
  top:460px;
  position: absolute;
}
.something17{
  background-color: #775032;
  width: 2px;
  height: 500px;
  top:190px;
  left: 55px;
  position: absolute;
}
.something18{
  background-color: #775032;
  width: 2px;
  height: 500px;
  top:190px;
  left: 70px;
  position: absolute;
}
.something19{
  background-color: #775032;
  width: 2px;
  height: 500px;
  top:190px;
  left: 100px;
  position: absolute;
}
.something110{
  background-color: #775032;
  width: 2px;
  height: 500px;
  top:190px;
  left: 115px;
  position: absolute;
}
.wn{
  background-color: #3C352D;
  width: 30px;
  height: 50px;
  position: absolute;
  top:10px;
  left: 40px;
  border-top-left-radius: 30%;
  border-top-right-radius: 30%;
}
.wn1{
  background-color: #3C352D;
  width: 30px;
  height: 50px;
  position: absolute;
  top:10px;
  left: 100px;
  border-top-left-radius: 30%;
  border-top-right-radius: 30%;
}
.wn2{
  background-color: #3C352D;
  width: 30px;
  height: 50px;
  position: absolute;
  top:70px;
  left: 40px;
}
.wn3{
  background-color: #3C352D;
  width: 30px;
  height: 50px;
  position: absolute;
  top:70px;
  left: 100px;
}
.wn4{
  background-color: #3C352D;
  width: 30px;
  height: 50px;
  position: absolute;
  top:150px;
  left: 100px;
}
.wn5{
  background-color: #3C352D;
  width: 30px;
  height: 50px;
  position: absolute;
  top:150px;
  left: 40px;
}
.wn6{
  background-color: #3C352D;
  width: 30px;
  height: 50px;
  position: absolute;
  top:210px;
  left: 40px;
}
.wn7{
  background-color: #3C352D;
  width: 30px;
  height: 50px;
  position: absolute;
  top:210px;
  left: 100px;
}
.lete1{
  font-size: 12px;
  left: 65px;
  top:10px;
  transform: rotate(22deg);
  position: absolute;
}
.lete2{
  font-size: 12px;
  left: 76px;
  top:22px;
  transform: rotate(45deg);
  position: absolute;
}
.lete3{
  font-size: 12px;
  left: 80px;
  top:42px;
  transform: rotate(90deg);
  position: absolute;
}
.lete4{
  font-size: 12px;
  left: 75px;
  top:62px;
  transform: rotate(113deg);
  position: absolute;
}
.lete5{
  font-size: 12px;
  left: 65px;
  top:75px;
  transform: rotate(135deg);
  position: absolute;
}
.lete6{
  font-size: 12px;
  left: 47px;
  top:80px;
  transform: rotate(180deg);
  position: absolute;
}
.lete7{
  font-size: 12px;
  left: 24px;
  top:76px;
  transform: rotate(-150deg);
  position: absolute;
}
.lete8{
  font-size: 12px;
  left: 7px;
  top:64px;
  transform: rotate(-123deg);
  position: absolute;
}
.lete9{
  font-size: 12px;
  left: 5px;
  top:43px;
  transform: rotate(-90deg);
  position: absolute;
}
.lete10{
  font-size: 12px;
  left: 9px;
  top:26px;
  transform: rotate(-65deg);
  position: absolute;
}
.lete11{
  font-size: 12px;
  left: 20px;
  top:12px;
  transform: rotate(-40deg);
  position: absolute;
}
.lete12{
  font-size: 11px;
  left: 40px;
  top:6px;
  position: absolute;
}
.toto {
  background-color: black;
  width: 3px;
  height: 50px;
  position: absolute;
  left: 13.5px;
}
.toto1 {
  background-color: black;
  width: 29px;
  height: 3px;
  left: -13px;
  position: absolute;
  top: 23.5px;
}
.ovad{
  background-color: #DAD188;
  transform: rotate(30deg);
  width: 15px;
  height: 6px;
  border-radius: 40%;
  position: absolute;
  top:20px;
}
.ovad1{
  background-color: #DAD188;
  transform: rotate(-30deg);
  width: 15px;
  height: 6px;
  left: -10px;
  border-radius: 40%;
  position: absolute;
  top:20px;
}
.colon1{
  background-color: #E6D09E;
  width: 30px;
  margin-top: 8px;
  height: 60px;
  left: -5px;
  position: relative;
  border:0.1px solid black;
}
.colon2{
  background-color: #E6D09E;
  width: 30px;
  margin-top: 8px;
  height: 60px;
  left: -5px;
  position: relative;
  border:0.1px solid black;
}
.colon3{
  background-color: #E6D09E;
  width: 30px;
  margin-top: 8px;
  height: 60px;
  left: -5px;
  position: relative;
  border:0.1px solid black;
}
.conus{
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  width: 10px;
  border-bottom: 20px solid #E6D09E;
  position: absolute;
  top:-15px;
}
.pimp1{
  background-color: #77491a;
  width: 20px;
  position: absolute;
  height: 8px;
  left: -8px;
  top: 7px;
  border-radius: 40%;
}
.pimpi{
  width: 5px;
  height: 30px;
  top:-30px;
  position: absolute;
  background-color: #77491a;
  left: 3px;
}
.pimpi1{
  background-color: #77491a;
  width: 20px;
  position: absolute;
  height: 8px;
  left: -8px;
  top: 7px;
  border-radius: 40%;
}
.wn66{
  background-color: #3C352D;
  width: 30px;
  height: 50px;
  position: absolute;
  top:78px;
  left: 30px;
}
.wn67{
  background-color: #3C352D;
  width: 30px;
  height: 50px;
  position: absolute;
  top:78px;
  left: -40px;
}
.wn68{
  background-color: #3C352D;
  width: 30px;
  height: 50px;
  position: absolute;
  top:140px;
  left: 30px;
}
.wn69{
  background-color: #3C352D;
  width: 30px;
  height: 50px;
  position: absolute;
  top:140px;
  left: -40px;
}
.colon{
  background-color: #E6D09E;
  width: 20px;
  height: 300px;
  position: absolute;
  border:.1px solid black;
  left: 325px;
  top:-60px;
  z-index: 99;
}
.colon77{
  background-color: #E6D09E;
  width: 20px;
  height: 300px;
  position: absolute;
  border:.1px solid black;
  left: 445px;
  top:-60px;
  z-index: 99;
}
.colon78{
  background-color: #E6D09E;
  width: 20px;
  height: 300px;
  position: absolute;
  border:.1px solid black;
  left: 565px;
  top:-60px;
  z-index: 99;
}
.colon79{
  background-color: #E6D09E;
  width: 20px;
  height: 300px;
  position: absolute;
  border:.1px solid black;
  left: 685px;
  top:-60px;
  z-index: 99;
}
.colon710{
  background-color: #E6D09E;
  width: 20px;
  height: 300px;
  position: absolute;
  border:.1px solid black;
  left: 805px;
  top:-60px;
  z-index: 99;
}
.colon711{
  background-color: #E6D09E;
  width: 20px;
  height: 300px;
  position: absolute;
  border:.1px solid black;
  left: 925px;
  top:-60px;
  z-index: 99;
}
.colon712{
  background-color: #E6D09E;
  width: 20px;
  height: 300px;
  position: absolute;
  border:.1px solid black;
  left: 1045px;
  top:-60px;
  z-index: 99;
}
.justacloud{
  background-color: white;
  width: 130px;
  border-radius: 100px;
  height: 70px;
  position: relative;
  top: 300px;
  animation: shu 70s infinite;
  opacity: .8;
}
.justacloud23{
  opacity: .8;
  background-color: white;
  width: 130px;
  border-radius: 100px;
  height: 70px;
  position: relative;
  top: 100px;
  animation: shu1 120s infinite;
}
.justacloud24{
  opacity: .8;
  background-color: white;
  width: 130px;
  border-radius: 100px;
  height: 70px;
  position: relative;
  top: 50px;
  animation: shu2 60s infinite;
}
@keyframes shu {
  0%{
    left: -200px;
  }
  100%{
    left: 1500px;
  }
}
@keyframes shu1 {
  0%{
    left: -150px;
  }
  100%{
    left: 2000px;
  }
}
@keyframes shu2 {
  0%{
    left: -100px;
  }
  100%{
    left: 2500px;
  }
}
.justacloud1{
  background-color: white;
  width: 70px;
  border-radius: 50%;
  height: 70px;
  top:-25px;
  left: 45px;
  position: absolute;
}
.justacloud2{
  background-color: white;
  width: 40px;
  border-radius: 50%;
  height: 40px;
  position: absolute;
  left: 20px;
  top: -10px;
}
.plane {
  position: relative;
  animation: fry 30s infinite,  fry1 3s infinite linear;
  animation-timing-function: linear;
}
@keyframes fry {
  0%{
    left: -300px;
    top:200px;
  }
100%{
  top:230px;
  left: 1500px;
}
}
@keyframes fry1 {
  0%{
    transform: rotate(1deg);
  }
  50%{
    transform: rotate(-1deg);
  }
100%{
    transform: rotate(1deg);
}
}
.plane1 {
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  width: 8px;
  border-bottom: 80px solid #8c0c0c;
  position: absolute;
  transform: rotate(-86deg);
}
.planetale{
  background-color: white;
  width: 10px;
  height: 7px;
  position: absolute;
  left: -29px;
  top: 26px;
  border-top-right-radius: 50%;
}
.prope{
  width: 5px;
  height: 30px;
  position: absolute;
  background-color: white;
  border-radius: 40%;
  top:25px;
  left: 53px;
}
.plane2 {
  width: 20px;
  height: 15px;
  top:25px;
  left: 20px;
  z-index: -1;
  border-radius: 100px;
  background-color: #84b2ed;
  border:.6px solid black;
  position: absolute;
}
.plane3{
  width: 6px;
  height: 6px;
  border-radius: 50%;
  position: absolute;
  background-color: white;
  top:50px;
  left: 30px;
  border:3px solid black;
}
.plane4{
  width: 30px;
  height: 7px;
  position: absolute;
  background-color: white;
  border-radius: 40%;
  top:15px;
  left: 15px;
}
.plane5{
  width: 5px;
  height: 20px;
  position: absolute;
  background-color: white;
  border-radius: 40%;
  top:15px;
  left: 25px;
  transform: rotate(30deg);
}
.plane6{
  background-color: white;
  font-size: 18px;
  font-family: "Comic Sans MS";
  border-right:5px solid brown;
  position: relative;
  top: 25px;
  left: -270px;
  width: 230px;
}`}</pre>  </div> : null}
            	<div  className='destiny'>

    <div class="plane"><div class="plane1"></div><div class="plane6">Historically accurate btw</div><div class="plane2"></div><div class="plane5"></div><div class="plane4"></div><div class="plane3"></div><div class="planetale"></div><div class='prope'><div class='prope1'></div></div></div>
    <div class="justacloud"><div class="justacloud1"></div><div class="justacloud2"></div></div>
    <div class="justacloud23"><div class="justacloud1"></div><div class="justacloud2"></div></div>
    <div class="justacloud24"><div class="justacloud1"></div><div class="justacloud2"></div></div>
    <div class="tower">
        <div class="rof8">
            <div class="toproof8">
                <div class="ovad"></div>
                <div class="ovad1"></div>
                <div class="toproof88">
                    <div class="monkaS">
                        <div class="monkaS8"></div>
                    </div>
                    <div class="monkaS1">
                        <div class="monkaS8"></div>
                    </div>
                    <div class="monkaS2">
                        <div class="monkaS8"></div>
                    </div>
                    <div class="monkaS3">
                        <div class="monkaS8"></div>
                    </div>
                    <div class="monkaS4">
                        <div class="monkaS8"></div>
                    </div>
                    <div class="monkaS5">
                        <div class="monkaS8"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="wndwwra8">
            <div class="wndwwra88">
                <div class="wndw8"></div>
                <div class="wndw8"></div>
                <div class="wndw8"></div>
                <div class="wndw8"></div>
                <div class="wndw8"></div>
            </div>
        </div>
        <div class="wndwwra">
            <div class="wndw"></div>
            <div class="wndw"></div>
            <div class="wndw"></div>
            <div class="wndw"></div>
            <div class="wndw"></div>
            <div class="wndw"></div>
            <div class="wndw"></div>
        </div>
        <div class="roof8">
            <div class="monkaSS">
                <div class="monkaSS8"></div>
            </div>
            <div class="monkaSS1">
                <div class="monkaSS8"></div>
            </div>
            <div class="monkaSS2">
                <div class="monkaSS8"></div>
            </div>
            <div class="monkaSS3">
                <div class="monkaSS8"></div>
            </div>
            <div class="monkaSS4">
                <div class="monkaSS8"></div>
            </div>
            <div class="monkaSS5">
                <div class="monkaSS8"></div>
            </div>
            <div class="monkaSS6">
                <div class="monkaSS8"></div>
            </div>
        </div>
        <div class="squere88">
        </div>
        <div class="squere8">
        </div>
        <div class="clock8">
            <div class="lete1">I</div>
            <div class="lete2">II</div>
            <div class="lete3">III</div>
            <div class="lete4">IV</div>
            <div class="lete5">V</div>
            <div class="lete6">VI</div>
            <div class="lete7">VII</div>
            <div class="lete8">VIII</div>
            <div class="lete9">IX</div>
            <div class="lete10">X</div>
            <div class="lete11">XI</div>
            <div class="lete12">XII</div>
            <div ref='hour' id="hour">
                <div class="arrow8"></div>
            </div>
            <div ref="minute" id="minute"></div>
        </div>
        <div class="something1"></div>
        <div class="something12"></div>
        <div class="something13"></div>
        <div class="something14"></div>
        <div class="something15"></div>
        <div class="something16"></div>
        <div class="something17"></div>
        <div class="something18"></div>
        <div class="something19"></div>
        <div class="something110"></div>
    </div>
    <div class="building8">
        <div class='colon'>
            <div class='wn66'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn67'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn68'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn69'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='colon1'>
                <div class='conus'>
                    <div class="pimpi">
                        <div class="pimpi1"></div>
                    </div>
                </div>
            </div>
            <div class='colon2'></div>
            <div class='colon3'></div>
        </div>



        <div class='colon77'>
            <div class='wn66'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn67'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn68'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn69'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='colon1'>
                <div class='conus'>
                    <div class="pimpi">
                        <div class="pimpi1"></div>
                    </div>
                </div>
            </div>
            <div class='colon2'></div>
            <div class='colon3'></div>
        </div>

         <div class='colon78'>
            <div class='wn66'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn67'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn68'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn69'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='colon1'>
                <div class='conus'>
                    <div class="pimpi">
                        <div class="pimpi1"></div>
                    </div>
                </div>
            </div>
            <div class='colon2'></div>
            <div class='colon3'></div>
        </div>

         <div class='colon79'>
            <div class='wn66'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn67'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn68'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn69'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='colon1'>
                <div class='conus'>
                    <div class="pimpi">
                        <div class="pimpi1"></div>
                    </div>
                </div>
            </div>
            <div class='colon2'></div>
            <div class='colon3'></div>
        </div>

 <div class='colon710'>
            <div class='wn66'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn67'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn68'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn69'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='colon1'>
                <div class='conus'>
                    <div class="pimpi">
                        <div class="pimpi1"></div>
                    </div>
                </div>
            </div>
            <div class='colon2'></div>
            <div class='colon3'></div>
        </div>
 <div class='colon711'>
            <div class='wn66'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn67'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn68'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn69'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='colon1'>
                <div class='conus'>
                    <div class="pimpi">
                        <div class="pimpi1"></div>
                    </div>
                </div>
            </div>
            <div class='colon2'></div>
            <div class='colon3'></div>
        </div>


 <div class='colon712'>
            <div class='wn66'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn67'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn68'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn69'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='colon1'>
                <div class='conus'>
                    <div class="pimpi">
                        <div class="pimpi1"></div>
                    </div>
                </div>
            </div>
            <div class='colon2'></div>
            <div class='colon3'></div>
        </div>
        <div class="tower81">
            <div class='wn'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn1'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn2'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn3'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn4'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn5'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn6'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class='wn7'>
                <div class='toto'>
                    <div class='toto1'></div>
                </div>
            </div>
            <div class="roof81">
                <div class="tow81">
                    <div class="pimp">
                        <div class="pimp1"></div>
                    </div>
                </div>
                <div class="tow82">
                    <div class="pimp">
                        <div class="pimp1"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
         </div>
         </div>
        );
}
}