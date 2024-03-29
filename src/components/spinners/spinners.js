import React, {Component} from 'react';
import './spinners.css';
import {Link} from 'react-router-dom';
import home from '../Home.svg';
import code from '../code.svg';

class Spinners extends Component {
    state = {
        showing:false,
        val: "",
        shoosenOne: ""
    }
    clicked = (e) => {
        this.setState({val: e.target.className});

    }
    render() {

        return (
            <div>
                <Link to='/'><img alt='404' src={home} height='100rem' className='imge'/></Link>
<img alt='404' src={code} height='100rem' className='imge' onClick={()=>this.setState({showing:!this.state.showing})} />
 {this.state.showing ?  <div className='codewra'>
                <pre><h1>React</h1>{`
import React, {Component} from 'react';
import './spinners.css';
import {Link} from 'react-router-dom';

class Spinners extends Component {
    state = {
        val: "",
        shoosenOne: ""
    }
    clicked = (e) => {
        this.setState({val: e.target.className});

    }
    render() {

        return (
            <div>
            <div>
                    <div className="spinner spinner-1"></div>
                    <div className="cssload-spin-box6"></div>
                    <div className="spinner spinner-2"></div>
                    <div className="spinner spinner-3"></div>
                    <div className="spinner-6"></div>
                    <div className="cssload-thecube">
                        <div className="cssload-cube cssload-c1"></div>
                        <div className="cssload-cube cssload-c2"></div>
                        <div className="cssload-cube cssload-c4"></div>
                        <div className="cssload-cube cssload-c3"></div>
                    </div>
                    <div className="windows8">
                        <div className="wBall" id="wBall_1">
                            <div className="wInnerBall"></div>
                        </div>
                        <div className="wBall" id="wBall_2">
                            <div className="wInnerBall"></div>
                        </div>
                        <div className="wBall" id="wBall_3">
                            <div className="wInnerBall"></div>
                        </div>
                        <div className="wBall" id="wBall_4">
                            <div className="wInnerBall"></div>
                        </div>
                        <div className="wBall" id="wBall_5">
                            <div className="wInnerBall"></div>
                        </div>
                    </div>
                    <div className="cssload-container">
                        <ul className="cssload-flex-container">
                            <li>
                                <span className="cssload-loading cssload-one"></span>
                                <span className="cssload-loading cssload-two"></span>
                                <span className="cssload-loading-center"></span>
                            </li>
                        </ul>
                    </div>
                    <div className="cssload-clock"></div>
                    <div className="cssload-container1">
                        <div className="cssload-arc">
                            <div className="cssload-arc-cube"></div>
                        </div>
                    </div>
                    <div className="cssload-container2">
                        <div className="cssload-tube-tunnel"></div>
                    </div>
                    <div className="cssload-bell">
                        <div className="cssload-circle">
                            <div className="cssload-inner"></div>
                        </div>
                        <div className="cssload-circle">
                            <div className="cssload-inner"></div>
                        </div>
                        <div className="cssload-circle">
                            <div className="cssload-inner"></div>
                        </div>
                        <div className="cssload-circle">
                            <div className="cssload-inner"></div>
                        </div>
                        <div className="cssload-circle">
                            <div className="cssload-inner"></div>
                        </div>
                    </div>
                    <div className="cssload-loader8"></div>
                    <div class="cssload-container9">
                        <div class="cssload-loading9">
                            <i></i>
                            <i></i>
                        </div>
                    </div>
                    <div class="cssload-spinner10"></div>
                    <div class="wrapper11">
                        <div class="cssload-loader11"></div>
                    </div>
                    <div class="cssload-container12">
                        <ul class="cssload-flex-container12">
                            <li>
                                <span class="cssload-loading12"></span>
                            </li>
                        </ul>
                    </div>
                    <span class="cssload-loader13">
                        <span class="cssload-loader-inner13"></span>
                    </span>
                </div>
            </div>
        );
    }
}

export default Spinners;

            `}</pre><pre><h1>CSS</h1>{`.spinner {
  width: 100px;
  height: 100px;
  background: orangered;
  border-radius: 50%;
  position: relative;
  margin: 50px;
  display: inline-block;
}
.wrap{
  height: 170px;
  margin: auto;
  width: 170px;
  border: 10px solid black;
}
.spinner:after, .spinner:before {
  content: "";
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.spinner-1:after {
  position: absolute;
  top: 0px;
  left: 0px;
  border: 4px solid transparent;
  border-top-color: orangered;
  border-bottom-color: orangered;
  -webkit-animation: spinny 1s linear infinite;
          animation: spinny 1s linear infinite;
}

@-webkit-keyframes spinny {
  0% {
    -webkit-transform: rotate(0deg) scale(1);
            transform: rotate(0deg) scale(1);
  }
  50% {
    -webkit-transform: rotate(45deg) scale(1.2);
            transform: rotate(45deg) scale(1.2);
  }
  100% {
    -webkit-transform: rotate(360deg) scale(1);
            transform: rotate(360deg) scale(1);
  }
}

@keyframes spinny {
  0% {
    -webkit-transform: rotate(0deg) scale(1);
            transform: rotate(0deg) scale(1);
  }
  50% {
    -webkit-transform: rotate(45deg) scale(1.2);
            transform: rotate(45deg) scale(1.2);
  }
  100% {
    -webkit-transform: rotate(360deg) scale(1);
            transform: rotate(360deg) scale(1);
  }
}
.spinner-2 {
  -webkit-animation: spin 2s linear infinite;
          animation: spin 2s linear infinite;
}
.spinner-2:before, .spinner-2:after {
  height: 20px;
  width: 20px;
  background: orangered;
  position: absolute;
  top: -10px;
  left: 50%;
  margin-left: -10px;
  -webkit-animation: bouncy 1s ease-in infinite;
          animation: bouncy 1s ease-in infinite;
}
.spinner-2:after {
  top: auto;
  bottom: -10px;
  -webkit-animation: bouncy 0.5s ease-in infinite;
          animation: bouncy 0.5s ease-in infinite;
}

@-webkit-keyframes bouncy {
  0%, 100% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
  }
  50% {
    -webkit-transform: translateY(30px);
            transform: translateY(30px);
  }
}

@keyframes bouncy {
  0%, 100% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
  }
  50% {
    -webkit-transform: translateY(30px);
            transform: translateY(30px);
  }
}
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.spinner-3 {
  background: none;
  border: 4px solid orangered;
}
.spinner-3:after {
  width: 4px;
  height: 66px;
  background: orangered;
  border-radius: 0px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -2px;
  -webkit-transform-origin: top center;
          transform-origin: top center;
  -webkit-animation: spin 2s linear infinite;
          animation: spin 2s linear infinite;
}


.spinner-6{
  display: inline-block;
}
.bt{
  display: none !important;

}
.spinner-6:after {
  margin: 50px;
  content: "";
  display: inline-block;
  border-radius: 50%;
  position: relative;
  box-sizing: border-box;
  border: 50px solid #fff;
  border-color: orangered transparent orangered transparent;
  animation: lds-hourglass 1.2s infinite;
}
.arws{
  margin: 100px 50%;
}
@keyframes lds-hourglass {
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
}
.spinner-7{
  top: -50px;
  background-color: transparent;
}
.spinner-7 div {
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #fff;
  animation: spinner-7 1.2s linear infinite;
}
.spinner-7 div:nth-child(1) {
  top: 6px;
  left: 6px;
  animation-delay: 0s;
}
.spinner-7 div:nth-child(2) {
  top: 6px;
  left: 26px;
  animation-delay: -0.4s;
}
.spinner-7 div:nth-child(3) {
  top: 6px;
  left: 45px;
  animation-delay: -0.8s;
}
.spinner-7 div:nth-child(4) {
  top: 26px;
  left: 6px;
  animation-delay: -0.4s;
}
.spinner-7 div:nth-child(5) {
  top: 26px;
  left: 26px;
  animation-delay: -0.8s;
}
.spinner-7 div:nth-child(6) {
  top: 26px;
  left: 45px;
  animation-delay: -1.2s;
}
.spinner-7 div:nth-child(7) {
  top: 45px;
  left: 6px;
  animation-delay: -0.8s;
}
.spinner-7 div:nth-child(8) {
  top: 45px;
  left: 26px;
  animation-delay: -1.2s;
}
.spinner-7 div:nth-child(9) {
  top: 45px;
  left: 45px;
  animation-delay: -1.6s;
}
@keyframes spinner-7 {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}


.cssload-thecube {
  display: inline-block;
  width: 73px;
  height: 73px;
  margin: 80px 70px 70px 45px;
  margin-top: 49px;
  position: relative;
  transform: rotateZ(45deg);
    -o-transform: rotateZ(45deg);
    -ms-transform: rotateZ(45deg);
    -webkit-transform: rotateZ(45deg);
    -moz-transform: rotateZ(45deg);
}
.cssload-thecube .cssload-cube {
  position: relative;
  transform: rotateZ(45deg);
    -o-transform: rotateZ(45deg);
    -ms-transform: rotateZ(45deg);
    -webkit-transform: rotateZ(45deg);
    -moz-transform: rotateZ(45deg);
}
.cssload-thecube .cssload-cube {
  float: left;
  width: 50%;
  height: 50%;
  position: relative;
  transform: scale(1.1);
    -o-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
}
.cssload-thecube .cssload-cube:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: orangered;
  animation: cssload-fold-thecube 2.76s infinite linear both;
    -o-animation: cssload-fold-thecube 2.76s infinite linear both;
    -ms-animation: cssload-fold-thecube 2.76s infinite linear both;
    -webkit-animation: cssload-fold-thecube 2.76s infinite linear both;
    -moz-animation: cssload-fold-thecube 2.76s infinite linear both;
  transform-origin: 100% 100%;
    -o-transform-origin: 100% 100%;
    -ms-transform-origin: 100% 100%;
    -webkit-transform-origin: 100% 100%;
    -moz-transform-origin: 100% 100%;
}
.cssload-thecube .cssload-c2 {
  transform: scale(1.1) rotateZ(90deg);
    -o-transform: scale(1.1) rotateZ(90deg);
    -ms-transform: scale(1.1) rotateZ(90deg);
    -webkit-transform: scale(1.1) rotateZ(90deg);
    -moz-transform: scale(1.1) rotateZ(90deg);
}
.cssload-thecube .cssload-c3 {
  transform: scale(1.1) rotateZ(180deg);
    -o-transform: scale(1.1) rotateZ(180deg);
    -ms-transform: scale(1.1) rotateZ(180deg);
    -webkit-transform: scale(1.1) rotateZ(180deg);
    -moz-transform: scale(1.1) rotateZ(180deg);
}
.cssload-thecube .cssload-c4 {
  transform: scale(1.1) rotateZ(270deg);
    -o-transform: scale(1.1) rotateZ(270deg);
    -ms-transform: scale(1.1) rotateZ(270deg);
    -webkit-transform: scale(1.1) rotateZ(270deg);
    -moz-transform: scale(1.1) rotateZ(270deg);
}
.cssload-thecube .cssload-c2:before {
  animation-delay: 0.35s;
    -o-animation-delay: 0.35s;
    -ms-animation-delay: 0.35s;
    -webkit-animation-delay: 0.35s;
    -moz-animation-delay: 0.35s;
}
.cssload-thecube .cssload-c3:before {
  animation-delay: 0.69s;
    -o-animation-delay: 0.69s;
    -ms-animation-delay: 0.69s;
    -webkit-animation-delay: 0.69s;
    -moz-animation-delay: 0.69s;
}
.cssload-thecube .cssload-c4:before {
  animation-delay: 1.04s;
    -o-animation-delay: 1.04s;
    -ms-animation-delay: 1.04s;
    -webkit-animation-delay: 1.04s;
    -moz-animation-delay: 1.04s;
}



@keyframes cssload-fold-thecube {
  0%, 10% {
    transform: perspective(136px) rotateX(-180deg);
    opacity: 0;
  }
  25%,
        75% {
    transform: perspective(136px) rotateX(0deg);
    opacity: 1;
  }
  90%,
        100% {
    transform: perspective(136px) rotateY(180deg);
    opacity: 0;
  }
}

@-o-keyframes cssload-fold-thecube {
  0%, 10% {
    -o-transform: perspective(136px) rotateX(-180deg);
    opacity: 0;
  }
  25%,
        75% {
    -o-transform: perspective(136px) rotateX(0deg);
    opacity: 1;
  }
  90%,
        100% {
    -o-transform: perspective(136px) rotateY(180deg);
    opacity: 0;
  }
}

@-ms-keyframes cssload-fold-thecube {
  0%, 10% {
    -ms-transform: perspective(136px) rotateX(-180deg);
    opacity: 0;
  }
  25%,
        75% {
    -ms-transform: perspective(136px) rotateX(0deg);
    opacity: 1;
  }
  90%,
        100% {
    -ms-transform: perspective(136px) rotateY(180deg);
    opacity: 0;
  }
}

@-webkit-keyframes cssload-fold-thecube {
  0%, 10% {
    -webkit-transform: perspective(136px) rotateX(-180deg);
    opacity: 0;
  }
  25%,
        75% {
    -webkit-transform: perspective(136px) rotateX(0deg);
    opacity: 1;
  }
  90%,
        100% {
    -webkit-transform: perspective(136px) rotateY(180deg);
    opacity: 0;
  }
}

@-moz-keyframes cssload-fold-thecube {
  0%, 10% {
    -moz-transform: perspective(136px) rotateX(-180deg);
    opacity: 0;
  }
  25%,
        75% {
    -moz-transform: perspective(136px) rotateX(0deg);
    opacity: 1;
  }
  90%,
        100% {
    -moz-transform: perspective(136px) rotateY(180deg);
    opacity: 0;
  }
}
.windows8 {
  display: inline-block;
  width: 78px;
  height:78px;
  margin: 60px 70px 70px 70px;
}

.windows8 .wBall {
  position: absolute;
  width: 74px;
  height: 74px;
  opacity: 0;
  transform: rotate(225deg);
    -o-transform: rotate(225deg);
    -ms-transform: rotate(225deg);
    -webkit-transform: rotate(225deg);
    -moz-transform: rotate(225deg);
  animation: orbit 6.96s infinite;
    -o-animation: orbit 6.96s infinite;
    -ms-animation: orbit 6.96s infinite;
    -webkit-animation: orbit 6.96s infinite;
    -moz-animation: orbit 6.96s infinite;
}

.windows8 .wBall .wInnerBall{
  position: absolute;
  width: 10px;
  height: 10px;
  background: orangered;
  left:0px;
  top:0px;
  border-radius: 10px;
}

.windows8 #wBall_1 {
  animation-delay: 1.52s;
    -o-animation-delay: 1.52s;
    -ms-animation-delay: 1.52s;
    -webkit-animation-delay: 1.52s;
    -moz-animation-delay: 1.52s;
}

.windows8 #wBall_2 {
  animation-delay: 0.3s;
    -o-animation-delay: 0.3s;
    -ms-animation-delay: 0.3s;
    -webkit-animation-delay: 0.3s;
    -moz-animation-delay: 0.3s;
}

.windows8 #wBall_3 {
  animation-delay: 0.61s;
    -o-animation-delay: 0.61s;
    -ms-animation-delay: 0.61s;
    -webkit-animation-delay: 0.61s;
    -moz-animation-delay: 0.61s;
}

.windows8 #wBall_4 {
  animation-delay: 0.91s;
    -o-animation-delay: 0.91s;
    -ms-animation-delay: 0.91s;
    -webkit-animation-delay: 0.91s;
    -moz-animation-delay: 0.91s;
}

.windows8 #wBall_5 {
  animation-delay: 1.22s;
    -o-animation-delay: 1.22s;
    -ms-animation-delay: 1.22s;
    -webkit-animation-delay: 1.22s;
    -moz-animation-delay: 1.22s;
}



@keyframes orbit {
  0% {
    opacity: 1;
    z-index:99;
    transform: rotate(180deg);
    animation-timing-function: ease-out;
  }

  7% {
    opacity: 1;
    transform: rotate(300deg);
    animation-timing-function: linear;
    origin:0%;
  }

  30% {
    opacity: 1;
    transform:rotate(410deg);
    animation-timing-function: ease-in-out;
    origin:7%;
  }

  39% {
    opacity: 1;
    transform: rotate(645deg);
    animation-timing-function: linear;
    origin:30%;
  }

  70% {
    opacity: 1;
    transform: rotate(770deg);
    animation-timing-function: ease-out;
    origin:39%;
  }

  75% {
    opacity: 1;
    transform: rotate(900deg);
    animation-timing-function: ease-out;
    origin:70%;
  }

  76% {
  opacity: 0;
    transform:rotate(900deg);
  }

  100% {
  opacity: 0;
    transform: rotate(900deg);
  }
}

@-o-keyframes orbit {
  0% {
    opacity: 1;
    z-index:99;
    -o-transform: rotate(180deg);
    -o-animation-timing-function: ease-out;
  }

  7% {
    opacity: 1;
    -o-transform: rotate(300deg);
    -o-animation-timing-function: linear;
    -o-origin:0%;
  }

  30% {
    opacity: 1;
    -o-transform:rotate(410deg);
    -o-animation-timing-function: ease-in-out;
    -o-origin:7%;
  }

  39% {
    opacity: 1;
    -o-transform: rotate(645deg);
    -o-animation-timing-function: linear;
    -o-origin:30%;
  }

  70% {
    opacity: 1;
    -o-transform: rotate(770deg);
    -o-animation-timing-function: ease-out;
    -o-origin:39%;
  }

  75% {
    opacity: 1;
    -o-transform: rotate(900deg);
    -o-animation-timing-function: ease-out;
    -o-origin:70%;
  }

  76% {
  opacity: 0;
    -o-transform:rotate(900deg);
  }

  100% {
  opacity: 0;
    -o-transform: rotate(900deg);
  }
}

@-ms-keyframes orbit {
  0% {
    opacity: 1;
    z-index:99;
    -ms-transform: rotate(180deg);
    -ms-animation-timing-function: ease-out;
  }

  7% {
    opacity: 1;
    -ms-transform: rotate(300deg);
    -ms-animation-timing-function: linear;
    -ms-origin:0%;
  }

  30% {
    opacity: 1;
    -ms-transform:rotate(410deg);
    -ms-animation-timing-function: ease-in-out;
    -ms-origin:7%;
  }

  39% {
    opacity: 1;
    -ms-transform: rotate(645deg);
    -ms-animation-timing-function: linear;
    -ms-origin:30%;
  }

  70% {
    opacity: 1;
    -ms-transform: rotate(770deg);
    -ms-animation-timing-function: ease-out;
    -ms-origin:39%;
  }

  75% {
    opacity: 1;
    -ms-transform: rotate(900deg);
    -ms-animation-timing-function: ease-out;
    -ms-origin:70%;
  }

  76% {
  opacity: 0;
    -ms-transform:rotate(900deg);
  }

  100% {
  opacity: 0;
    -ms-transform: rotate(900deg);
  }
}

@-webkit-keyframes orbit {
  0% {
    opacity: 1;
    z-index:99;
    -webkit-transform: rotate(180deg);
    -webkit-animation-timing-function: ease-out;
  }

  7% {
    opacity: 1;
    -webkit-transform: rotate(300deg);
    -webkit-animation-timing-function: linear;
    -webkit-origin:0%;
  }

  30% {
    opacity: 1;
    -webkit-transform:rotate(410deg);
    -webkit-animation-timing-function: ease-in-out;
    -webkit-origin:7%;
  }

  39% {
    opacity: 1;
    -webkit-transform: rotate(645deg);
    -webkit-animation-timing-function: linear;
    -webkit-origin:30%;
  }

  70% {
    opacity: 1;
    -webkit-transform: rotate(770deg);
    -webkit-animation-timing-function: ease-out;
    -webkit-origin:39%;
  }

  75% {
    opacity: 1;
    -webkit-transform: rotate(900deg);
    -webkit-animation-timing-function: ease-out;
    -webkit-origin:70%;
  }

  76% {
  opacity: 0;
    -webkit-transform:rotate(900deg);
  }

  100% {
  opacity: 0;
    -webkit-transform: rotate(900deg);
  }
}

@-moz-keyframes orbit {
  0% {
    opacity: 1;
    z-index:99;
    -moz-transform: rotate(180deg);
    -moz-animation-timing-function: ease-out;
  }

  7% {
    opacity: 1;
    -moz-transform: rotate(300deg);
    -moz-animation-timing-function: linear;
    -moz-origin:0%;
  }

  30% {
    opacity: 1;
    -moz-transform:rotate(410deg);
    -moz-animation-timing-function: ease-in-out;
    -moz-origin:7%;
  }

  39% {
    opacity: 1;
    -moz-transform: rotate(645deg);
    -moz-animation-timing-function: linear;
    -moz-origin:30%;
  }

  70% {
    opacity: 1;
    -moz-transform: rotate(770deg);
    -moz-animation-timing-function: ease-out;
    -moz-origin:39%;
  }

  75% {
    opacity: 1;
    -moz-transform: rotate(900deg);
    -moz-animation-timing-function: ease-out;
    -moz-origin:70%;
  }

  76% {
  opacity: 0;
    -moz-transform:rotate(900deg);
  }

  100% {
  opacity: 0;
    -moz-transform: rotate(900deg);
  }
}
.cssload-spin-box6 {
  margin:50px;
  top:-35px;
  position: relative;
  display: inline-block;
  width: 35px;
  height: 35px;
  border-radius: 100%;
  box-shadow: 35px 35px rgb(79,77,73), -35px 35px orangered, -35px -35px rgb(79,77,73), 35px -35px orangered;
    -o-box-shadow: 35px 35px rgb(79,77,73), -35px 35px orangered, -35px -35px rgb(79,77,73), 35px -35px orangered;
    -ms-box-shadow: 35px 35px rgb(79,77,73), -35px 35px orangered, -35px -35px rgb(79,77,73), 35px -35px orangered;
    -webkit-box-shadow: 35px 35px rgb(79,77,73), -35px 35px orangered, -35px -35px rgb(79,77,73), 35px -35px orangered;
    -moz-box-shadow: 35px 35px rgb(79,77,73), -35px 35px orangered, -35px -35px rgb(79,77,73), 35px -35px orangered;
  animation: cssload-spin6 ease infinite 4.6s;
    -o-animation: cssload-spin6 ease infinite 4.6s;
    -ms-animation: cssload-spin6 ease infinite 4.6s;
    -webkit-animation: cssload-spin6 ease infinite 4.6s;
    -moz-animation: cssload-spin6 ease infinite 4.6s;
}



@keyframes cssload-spin6 {
  0%,
  100% {
    box-shadow: 35px 35px rgb(79,77,73), -35px 35px orangered, -35px -35px rgb(79,77,73), 35px -35px orangered;
  }
  25% {
    box-shadow: -35px 35px orangered, -35px -35px rgb(79,77,73), 35px -35px orangered, 35px 35px rgb(79,77,73);
  }
  50% {
    box-shadow: -35px -35px rgb(79,77,73), 35px -35px orangered, 35px 35px rgb(79,77,73), -35px 35px orangered;
  }
  75% {
    box-shadow: 35px -35px #dfdfdf, 35px 35px #4f4d49, -35px 35px #dfdfdf, -35px -35px #4f4d49;
  }
}

@-o-keyframes cssload-spin6 {
  0%,
  100% {
    box-shadow: 35px 35px rgb(79,77,73), -35px 35px orangered, -35px -35px rgb(79,77,73), 35px -35px orangered;
  }
  25% {
    box-shadow: -35px 35px orangered, -35px -35px rgb(79,77,73), 35px -35px orangered, 35px 35px rgb(79,77,73);
  }
  50% {
    box-shadow: -35px -35px rgb(79,77,73), 35px -35px orangered, 35px 35px rgb(79,77,73), -35px 35px orangered;
  }
  75% {
    box-shadow: 35px -35px #dfdfdf, 35px 35px #4f4d49, -35px 35px #dfdfdf, -35px -35px #4f4d49;
  }
}

@-ms-keyframes cssload-spin6 {
  0%,
  100% {
    box-shadow: 35px 35px rgb(79,77,73), -35px 35px orangered, -35px -35px rgb(79,77,73), 35px -35px orangered;
  }
  25% {
    box-shadow: -35px 35px orangered, -35px -35px rgb(79,77,73), 35px -35px orangered, 35px 35px rgb(79,77,73);
  }
  50% {
    box-shadow: -35px -35px rgb(79,77,73), 35px -35px orangered, 35px 35px rgb(79,77,73), -35px 35px orangered;
  }
  75% {
    box-shadow: 35px -35px #dfdfdf, 35px 35px #4f4d49, -35px 35px #dfdfdf, -35px -35px #4f4d49;
  }
}

@-webkit-keyframes cssload-spin6 {
  0%,
  100% {
    box-shadow: 35px 35px rgb(79,77,73), -35px 35px orangered, -35px -35px rgb(79,77,73), 35px -35px orangered;
  }
  25% {
    box-shadow: -35px 35px orangered, -35px -35px rgb(79,77,73), 35px -35px orangered, 35px 35px rgb(79,77,73);
  }
  50% {
    box-shadow: -35px -35px rgb(79,77,73), 35px -35px orangered, 35px 35px rgb(79,77,73), -35px 35px orangered;
  }
  75% {
    box-shadow: 35px -35px #dfdfdf, 35px 35px #4f4d49, -35px 35px #dfdfdf, -35px -35px #4f4d49;
  }
}

@-moz-keyframes cssload-spin6 {
  0%,
  100% {
    box-shadow: 35px 35px rgb(79,77,73), -35px 35px orangered, -35px -35px rgb(79,77,73), 35px -35px orangered;
  }
  25% {
    box-shadow: -35px 35px orangered, -35px -35px rgb(79,77,73), 35px -35px orangered, 35px 35px rgb(79,77,73);
  }
  50% {
    box-shadow: -35px -35px rgb(79,77,73), 35px -35px orangered, 35px 35px rgb(79,77,73), -35px 35px orangered;
  }
  75% {
    box-shadow: 35px -35px #dfdfdf, 35px 35px #4f4d49, -35px 35px #dfdfdf, -35px -35px #4f4d49;
  }
}


.cssload-container * {
  box-sizing: border-box;
    -o-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
}
.cssload-container {
  display: inline-block;
  max-width: 545px;
}

.cssload-container ul li{
  list-style: none;
}
.cssload-container ul{
  padding: 0;
}

.cssload-flex-container {
  display: inline-block;
    display: -o-flex;
    display: -ms-flex;
    display: -webkit-flex;
    display: -moz-flex;
  flex-direction: row;
    -o-flex-direction: row;
    -ms-flex-direction: row;
    -webkit-flex-direction: row;
    -moz-flex-direction: row;
  flex-wrap: wrap;
    -o-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    -moz-flex-wrap: wrap;
  justify-content: space-around;
}
.cssload-flex-container li {
  padding: 10px;
  height: 97px;
  width: 97px;
  margin: 29px 19px;
  position: relative;
  text-align: center;
}

.cssload-loading-center {
  display: inline-block;
  position: absolute;
  background: orangered;
  height: 29px;
  width: 29px;
  left: 35px;
  top: 36px;
  transform: rotate(45deg);
    -o-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
  border-radius: 3px;
    -o-border-radius: 3px;
    -ms-border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
  animation: pulse 1.15s ease infinite;
    -o-animation: pulse 1.15s ease infinite;
    -ms-animation: pulse 1.15s ease infinite;
    -webkit-animation: pulse 1.15s ease infinite;
    -moz-animation: pulse 1.15s ease infinite;
}

.cssload-loading {
  display: inline-block;
  position: relative;
  width: 73px;
  height: 73px;
  margin-top: 3px;
  transform: rotate(45deg);
    -o-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
}
.cssload-loading:after, .cssload-loading:before {
  position: absolute;
  content: '';
  height: 10px;
  width: 10px;
  display: block;
  top: 0;
  background: orangered;
  border-radius: 3px;
    -o-border-radius: 3px;
    -ms-border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
  animation-delay: -.5.75s;
    -o-animation-delay: -.5.75s;
    -ms-animation-delay: -.5.75s;
    -webkit-animation-delay: -.5.75s;
    -moz-animation-delay: -.5.75s;
}
.cssload-loading:after {
  right: 0;
  animation: square-tr 2.3s ease infinite;
    -o-animation: square-tr 2.3s ease infinite;
    -ms-animation: square-tr 2.3s ease infinite;
    -webkit-animation: square-tr 2.3s ease infinite;
    -moz-animation: square-tr 2.3s ease infinite;
  animation-delay: .143.75s;
    -o-animation-delay: .143.75s;
    -ms-animation-delay: .143.75s;
    -webkit-animation-delay: .143.75s;
    -moz-animation-delay: .143.75s;
}
.cssload-loading:before {
  animation: square-tl 2.3s ease infinite;
    -o-animation: square-tl 2.3s ease infinite;
    -ms-animation: square-tl 2.3s ease infinite;
    -webkit-animation: square-tl 2.3s ease infinite;
    -moz-animation: square-tl 2.3s ease infinite;
  animation-delay: .143.75s;
    -o-animation-delay: .143.75s;
    -ms-animation-delay: .143.75s;
    -webkit-animation-delay: .143.75s;
    -moz-animation-delay: .143.75s;
}

.cssload-loading.cssload-two {
  position: relative;
  top: -78px;
}
.cssload-loading.cssload-two:after, .cssload-loading.cssload-two:before {
  bottom: 0;
  top: initial;
}
.cssload-loading.cssload-two:after {
  animation: square-br 2.3s ease infinite;
    -o-animation: square-br 2.3s ease infinite;
    -ms-animation: square-br 2.3s ease infinite;
    -webkit-animation: square-br 2.3s ease infinite;
    -moz-animation: square-br 2.3s ease infinite;
  animation-direction: reverse;
    -o-animation-direction: reverse;
    -ms-animation-direction: reverse;
    -webkit-animation-direction: reverse;
    -moz-animation-direction: reverse;
}
.cssload-loading.cssload-two:before {
  animation: square-bl 2.3s ease infinite;
    -o-animation: square-bl 2.3s ease infinite;
    -ms-animation: square-bl 2.3s ease infinite;
    -webkit-animation: square-bl 2.3s ease infinite;
    -moz-animation: square-bl 2.3s ease infinite;
  animation-direction: reverse;
    -o-animation-direction: reverse;
    -ms-animation-direction: reverse;
    -webkit-animation-direction: reverse;
    -moz-animation-direction: reverse;
}








@keyframes square-tl {
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(0, 60.5px);
  }
  50% {
    transform: translate(60.5px, 60.5px);
  }
  75% {
    transform: translate(60.5px, 0);
  }
}

@-o-keyframes square-tl {
  0% {
    -o-transform: translate(0, 0);
  }
  25% {
    -o-transform: translate(0, 60.5px);
  }
  50% {
    -o-transform: translate(60.5px, 60.5px);
  }
  75% {
    -o-transform: translate(60.5px, 0);
  }
}

@-ms-keyframes square-tl {
  0% {
    -ms-transform: translate(0, 0);
  }
  25% {
    -ms-transform: translate(0, 60.5px);
  }
  50% {
    -ms-transform: translate(60.5px, 60.5px);
  }
  75% {
    -ms-transform: translate(60.5px, 0);
  }
}

@-webkit-keyframes square-tl {
  0% {
    -webkit-transform: translate(0, 0);
  }
  25% {
    -webkit-transform: translate(0, 60.5px);
  }
  50% {
    -webkit-transform: translate(60.5px, 60.5px);
  }
  75% {
    -webkit-transform: translate(60.5px, 0);
  }
}

@-moz-keyframes square-tl {
  0% {
    -moz-transform: translate(0, 0);
  }
  25% {
    -moz-transform: translate(0, 60.5px);
  }
  50% {
    -moz-transform: translate(60.5px, 60.5px);
  }
  75% {
    -moz-transform: translate(60.5px, 0);
  }
}

@keyframes square-bl {
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(0, -60.5px);
  }
  50% {
    transform: translate(60.5px, -60.5px);
  }
  75% {
    transform: translate(60.5px, 0);
  }
}

@-o-keyframes square-bl {
  0% {
    -o-transform: translate(0, 0);
  }
  25% {
    -o-transform: translate(0, -60.5px);
  }
  50% {
    -o-transform: translate(60.5px, -60.5px);
  }
  75% {
    -o-transform: translate(60.5px, 0);
  }
}

@-ms-keyframes square-bl {
  0% {
    -ms-transform: translate(0, 0);
  }
  25% {
    -ms-transform: translate(0, -60.5px);
  }
  50% {
    -ms-transform: translate(60.5px, -60.5px);
  }
  75% {
    -ms-transform: translate(60.5px, 0);
  }
}

@-webkit-keyframes square-bl {
  0% {
    -webkit-transform: translate(0, 0);
  }
  25% {
    -webkit-transform: translate(0, -60.5px);
  }
  50% {
    -webkit-transform: translate(60.5px, -60.5px);
  }
  75% {
    -webkit-transform: translate(60.5px, 0);
  }
}

@-moz-keyframes square-bl {
  0% {
    -moz-transform: translate(0, 0);
  }
  25% {
    -moz-transform: translate(0, -60.5px);
  }
  50% {
    -moz-transform: translate(60.5px, -60.5px);
  }
  75% {
    -moz-transform: translate(60.5px, 0);
  }
}

@keyframes square-tr {
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(-60.5px, 0);
  }
  50% {
    transform: translate(-60.5px, 60.5px);
  }
  75% {
    transform: translate(0, 60.5px);
  }
}

@-o-keyframes square-tr {
  0% {
    -o-transform: translate(0, 0);
  }
  25% {
    -o-transform: translate(-60.5px, 0);
  }
  50% {
    -o-transform: translate(-60.5px, 60.5px);
  }
  75% {
    -o-transform: translate(0, 60.5px);
  }
}

@-ms-keyframes square-tr {
  0% {
    -ms-transform: translate(0, 0);
  }
  25% {
    -ms-transform: translate(-60.5px, 0);
  }
  50% {
    -ms-transform: translate(-60.5px, 60.5px);
  }
  75% {
    -ms-transform: translate(0, 60.5px);
  }
}

@-webkit-keyframes square-tr {
  0% {
    -webkit-transform: translate(0, 0);
  }
  25% {
    -webkit-transform: translate(-60.5px, 0);
  }
  50% {
    -webkit-transform: translate(-60.5px, 60.5px);
  }
  75% {
    -webkit-transform: translate(0, 60.5px);
  }
}

@-moz-keyframes square-tr {
  0% {
    -moz-transform: translate(0, 0);
  }
  25% {
    -moz-transform: translate(-60.5px, 0);
  }
  50% {
    -moz-transform: translate(-60.5px, 60.5px);
  }
  75% {
    -moz-transform: translate(0, 60.5px);
  }
}

@keyframes square-br {
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(-60.5px, 0);
  }
  50% {
    transform: translate(-60.5px, -60.5px);
  }
  75% {
    transform: translate(0, -60.5px);
  }
}

@-o-keyframes square-br {
  0% {
    -o-transform: translate(0, 0);
  }
  25% {
    -o-transform: translate(-60.5px, 0);
  }
  50% {
    -o-transform: translate(-60.5px, -60.5px);
  }
  75% {
    -o-transform: translate(0, -60.5px);
  }
}

@-ms-keyframes square-br {
  0% {
    -ms-transform: translate(0, 0);
  }
  25% {
    -ms-transform: translate(-60.5px, 0);
  }
  50% {
    -ms-transform: translate(-60.5px, -60.5px);
  }
  75% {
    -ms-transform: translate(0, -60.5px);
  }
}

@-webkit-keyframes square-br {
  0% {
    -webkit-transform: translate(0, 0);
  }
  25% {
    -webkit-transform: translate(-60.5px, 0);
  }
  50% {
    -webkit-transform: translate(-60.5px, -60.5px);
  }
  75% {
    -webkit-transform: translate(0, -60.5px);
  }
}

@-moz-keyframes square-br {
  0% {
    -moz-transform: translate(0, 0);
  }
  25% {
    -moz-transform: translate(-60.5px, 0);
  }
  50% {
    -moz-transform: translate(-60.5px, -60.5px);
  }
  75% {
    -moz-transform: translate(0, -60.5px);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@-o-keyframes rotate {
  from {
    -o-transform: rotate(0deg);
  }
  to {
    -o-transform: rotate(360deg);
  }
}

@-ms-keyframes rotate {
  from {
    -ms-transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
  }
}

@-webkit-keyframes rotate {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}

@-moz-keyframes rotate {
  from {
    -moz-transform: rotate(0deg);
  }
  to {
    -moz-transform: rotate(360deg);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(inherit) rotate(45deg);
  }
  75% {
    transform: scale(0.25) rotate(45deg);
  }
}

@-o-keyframes pulse {
  0%, 100% {
    -o-transform: scale(inherit) rotate(45deg);
  }
  75% {
    -o-transform: scale(0.25) rotate(45deg);
  }
}

@-ms-keyframes pulse {
  0%, 100% {
    -ms-transform: scale(inherit) rotate(45deg);
  }
  75% {
    -ms-transform: scale(0.25) rotate(45deg);
  }
}

@-webkit-keyframes pulse {
  0%, 100% {
    -webkit-transform: scale(inherit) rotate(45deg);
  }
  75% {
    -webkit-transform: scale(0.25) rotate(45deg);
  }
}

@-moz-keyframes pulse {
  0%, 100% {
    -moz-transform: scale(inherit) rotate(45deg);
  }
  75% {
    -moz-transform: scale(0.25) rotate(45deg);
  }
}
.cssload-clock{
  display: inline-block;
  border-radius: 58px;
  border: 3px solid orangered;
  height: 78px;
  width: 78px;
  position: relative;
  margin: 50px 80px 50px 80px;
  top: -38px;
}
.cssload-clock:after{
  content: "";
  position: absolute;
  background-color: orangered;
  top:2px;
  left: 48%;
  height: 37px;
  width: 4px;
  border-radius: 5px;
  transform-origin: 50% 97%;
    -o-transform-origin: 50% 97%;
    -ms-transform-origin: 50% 97%;
    -webkit-transform-origin: 50% 97%;
    -moz-transform-origin: 50% 97%;
  animation: grdAiguille 2.3s linear infinite;
    -o-animation: grdAiguille 2.3s linear infinite;
    -ms-animation: grdAiguille 2.3s linear infinite;
    -webkit-animation: grdAiguille 2.3s linear infinite;
    -moz-animation: grdAiguille 2.3s linear infinite;
}



.cssload-clock:before{
  content: "";
  position: absolute;
  background-color: orangered;
  top:6px;
  left: 48%;
  height: 34px;
  width: 4px;
  border-radius: 5px;
  transform-origin: 50% 94%;
    -o-transform-origin: 50% 94%;
    -ms-transform-origin: 50% 94%;
    -webkit-transform-origin: 50% 94%;
    -moz-transform-origin: 50% 94%;
  animation: ptAiguille 13.8s linear infinite;
    -o-animation: ptAiguille 13.8s linear infinite;
    -ms-animation: ptAiguille 13.8s linear infinite;
    -webkit-animation: ptAiguille 13.8s linear infinite;
    -moz-animation: ptAiguille 13.8s linear infinite;
}



@keyframes grdAiguille{
    0%{transform:rotate(0deg);}
    100%{transform:rotate(360deg);}
}

@-o-keyframes grdAiguille{
    0%{-o-transform:rotate(0deg);}
    100%{-o-transform:rotate(360deg);}
}

@-ms-keyframes grdAiguille{
    0%{-ms-transform:rotate(0deg);}
    100%{-ms-transform:rotate(360deg);}
}

@-webkit-keyframes grdAiguille{
    0%{-webkit-transform:rotate(0deg);}
    100%{-webkit-transform:rotate(360deg);}
}

@-moz-keyframes grdAiguille{
    0%{-moz-transform:rotate(0deg);}
    100%{-moz-transform:rotate(360deg);}
}

@keyframes ptAiguille{
    0%{transform:rotate(0deg);}
    100%{transform:rotate(360deg);}
}

@-o-keyframes ptAiguille{
    0%{-o-transform:rotate(0deg);}
    100%{-o-transform:rotate(360deg);}
}

@-ms-keyframes ptAiguille{
    0%{-ms-transform:rotate(0deg);}
    100%{-ms-transform:rotate(360deg);}
}

@-webkit-keyframes ptAiguille{
    0%{-webkit-transform:rotate(0deg);}
    100%{-webkit-transform:rotate(360deg);}
}

@-moz-keyframes ptAiguille{
    0%{-moz-transform:rotate(0deg);}
    100%{-moz-transform:rotate(360deg);}
}



.cssload-container1 {
  position: relative;
  width: 195px;
  height: 195px;
  display:inline-block;
  margin:80px 10px 50px 10px;
  top: 33px;
  perspective: 975px;
    -o-perspective: 975px;
    -ms-perspective: 975px;
    -webkit-perspective: 975px;
    -moz-perspective: 975px;
  perspective: 975px;
    -o-perspective: 975px;
    -ms-perspective: 975px;
    -webkit-perspective: 975px;
    -moz-perspective: 975px;
  overflow: hidden;
}

.cube {
  position: absolute;
  bottom: 50%;
  left: 50%;
  width: 29px;
  height: 29px;
  margin-left: -15px;
  margin-top: 0;
}

.cube-2d {
  background-color: orangered;
}
.cssload-arc {
  position: absolute;
  bottom: 50%;
  left: 50%;
  margin-left: -68px;
  width: 136px;
  height: 68px;
  overflow: hidden;
}

.cssload-arc-cube {
  position: absolute;
  bottom: -68px;
  left: 50%;
  margin-left: -68px;
  width: 136px;
  height: 136px;
  border-style: solid;
  border-top-color: transparent;
  border-right-color: orangered;
  border-left-color: transparent;
  border-bottom-color: transparent;
  border-radius: 50%;
    -o-border-radius: 50%;
    -ms-border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
  box-sizing: border-box;
    -o-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  animation: cssload-arc 2.3s ease-in-out infinite;
    -o-animation: cssload-arc 2.3s ease-in-out infinite;
    -ms-animation: cssload-arc 2.3s ease-in-out infinite;
    -webkit-animation: cssload-arc 2.3s ease-in-out infinite;
    -moz-animation: cssload-arc 2.3s ease-in-out infinite;
  transform: rotate(-200deg);
    -o-transform: rotate(-200deg);
    -ms-transform: rotate(-200deg);
    -webkit-transform: rotate(-200deg);
    -moz-transform: rotate(-200deg);
}

@keyframes cssload-arc {
  0% {
    border-width: 29px;
  }
  25% {
    border-width: 15px;
  }
  50% {
    transform: rotate(27deg);
    border-width: 29px;
  }
  75% {
    border-width: 15px;
  }
  100% {
    border-width: 29px;
  }
}

@-o-keyframes cssload-arc {
  0% {
    border-width: 29px;
  }
  25% {
    border-width: 15px;
  }
  50% {
    -o-transform: rotate(27deg);
    border-width: 29px;
  }
  75% {
    border-width: 15px;
  }
  100% {
    border-width: 29px;
  }
}

@-ms-keyframes cssload-arc {
  0% {
    border-width: 29px;
  }
  25% {
    border-width: 15px;
  }
  50% {
    -ms-transform: rotate(27deg);
    border-width: 29px;
  }
  75% {
    border-width: 15px;
  }
  100% {
    border-width: 29px;
  }
}

@-webkit-keyframes cssload-arc {
  0% {
    border-width: 29px;
  }
  25% {
    border-width: 15px;
  }
  50% {
    -webkit-transform: rotate(27deg);
    border-width: 29px;
  }
  75% {
    border-width: 15px;
  }
  100% {
    border-width: 29px;
  }
}

@-moz-keyframes cssload-arc {
  0% {
    border-width: 29px;
  }
  25% {
    border-width: 15px;
  }
  50% {
    -moz-transform: rotate(27deg);
    border-width: 29px;
  }
  75% {
    border-width: 15px;
  }
  100% {
    border-width: 29px;
  }
}

.cssload-container2 {
  display: inline-block;
  height: 49px;
  margin: 70px;
  position: relative;
  top: -40px;
}

.cssload-tube-tunnel {
  width: 49px;
  height: 49px;
  margin: 0 auto;
  border: 4px solid;
  border-radius: 50%;
  border-color: orangered;
  animation: cssload-scale 1035ms infinite linear;
    -o-animation: cssload-scale 1035ms infinite linear;
    -ms-animation: cssload-scale 1035ms infinite linear;
    -webkit-animation: cssload-scale 1035ms infinite linear;
    -moz-animation: cssload-scale 1035ms infinite linear;
}



@keyframes cssload-scale {
  0% { transform: scale(0); transform: scale(0); }
  90% { transform: scale(0.7); transform: scale(0.7); }
  100% { transform: scale(1); transform: scale(1); }
}

@-o-keyframes cssload-scale {
  0% { -o-transform: scale(0); transform: scale(0); }
  90% { -o-transform: scale(0.7); transform: scale(0.7); }
  100% { -o-transform: scale(1); transform: scale(1); }
}

@-ms-keyframes cssload-scale {
  0% { -ms-transform: scale(0); transform: scale(0); }
  90% { -ms-transform: scale(0.7); transform: scale(0.7); }
  100% { -ms-transform: scale(1); transform: scale(1); }
}

@-webkit-keyframes cssload-scale {
  0% { -webkit-transform: scale(0); transform: scale(0); }
  90% { -webkit-transform: scale(0.7); transform: scale(0.7); }
  100% { -webkit-transform: scale(1); transform: scale(1); }
}

@-moz-keyframes cssload-scale {
  0% { -moz-transform: scale(0); transform: scale(0); }
  90% { -moz-transform: scale(0.7); transform: scale(0.7); }
  100% { -moz-transform: scale(1); transform: scale(1); }
}

.cssload-bell {
  width: 97px;
  height: 99px;
  border-radius: 100%;
  position: relative;
  display: inline-block;
  top: -80px;
  margin: 15px;
}

.cssload-circle {
  width: 100%;
  height: 100%;
  position: absolute;
}
.cssload-circle .cssload-inner {
  width: 100%;
  height: 100%;
  border-radius: 100%;
  border: 5px solid orangered;
  border-right: none;
  border-top: none;
  background-clip: padding;
  box-shadow: inset 0px 0px 10px rgba(0,255,170,0.15);
}

.cssload-circle:nth-of-type(0) {
  transform: rotate(0deg);
    -o-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
}
.cssload-circle:nth-of-type(0) .cssload-inner {
  animation: cssload-spin 2.3s infinite linear;
    -o-animation: cssload-spin 2.3s infinite linear;
    -ms-animation: cssload-spin 2.3s infinite linear;
    -webkit-animation: cssload-spin 2.3s infinite linear;
    -moz-animation: cssload-spin 2.3s infinite linear;
}

.cssload-circle:nth-of-type(1) {
  transform: rotate(70deg);
    -o-transform: rotate(70deg);
    -ms-transform: rotate(70deg);
    -webkit-transform: rotate(70deg);
    -moz-transform: rotate(70deg);
}
.cssload-circle:nth-of-type(1) .cssload-inner {
  animation: cssload-spin 2.3s infinite linear;
    -o-animation: cssload-spin 2.3s infinite linear;
    -ms-animation: cssload-spin 2.3s infinite linear;
    -webkit-animation: cssload-spin 2.3s infinite linear;
    -moz-animation: cssload-spin 2.3s infinite linear;
}

.cssload-circle:nth-of-type(2) {
  transform: rotate(140deg);
    -o-transform: rotate(140deg);
    -ms-transform: rotate(140deg);
    -webkit-transform: rotate(140deg);
    -moz-transform: rotate(140deg);
}
.cssload-circle:nth-of-type(2) .cssload-inner {
  animation: cssload-spin 2.3s infinite linear;
    -o-animation: cssload-spin 2.3s infinite linear;
    -ms-animation: cssload-spin 2.3s infinite linear;
    -webkit-animation: cssload-spin 2.3s infinite linear;
    -moz-animation: cssload-spin 2.3s infinite linear;
}

.cssload-bell {
  animation: cssload-spin 5.75s infinite linear;
    -o-animation: cssload-spin 5.75s infinite linear;
    -ms-animation: cssload-spin 5.75s infinite linear;
    -webkit-animation: cssload-spin 5.75s infinite linear;
    -moz-animation: cssload-spin 5.75s infinite linear;
}



@keyframes cssload-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@-o-keyframes cssload-spin {
  from {
    -o-transform: rotate(0deg);
  }
  to {
    -o-transform: rotate(360deg);
  }
}

@-ms-keyframes cssload-spin {
  from {
    -ms-transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
  }
}

@-webkit-keyframes cssload-spin {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}

@-moz-keyframes cssload-spin {
  from {
    -moz-transform: rotate(0deg);
  }
  to {
    -moz-transform: rotate(360deg);
  }
}

.cssload-loader8 * {
  box-sizing: border-box;
    -o-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
}

.cssload-loader8 {
  width: 1em;
  height: 1em;
  font-size: 146px;
  position: relative;
  display:inline-block;
  margin: 80px;
}

.cssload-loader8:before, .cssload-loader8:after {
  content: "";
  top: 0;
  display: block;
  width: 1em;
  height: 1em;
  position: absolute;
  border-width: 0.5em;
  border-style: double;
  border-color: transparent;
  border-radius: 1em;
  box-sizing: border-box;
    -o-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  animation: spin8 1.15s infinite;
    -o-animation: spin 1.15s infinite;
    -ms-animation: spin 1.15s infinite;
    -webkit-animation: spin 1.15s infinite;
    -moz-animation: spin 1.15s infinite;
}
.cssload-loader8:after {
  left: 0;
  border-left-color: orangered;
}
.cssload-loader8:before {
  right: 0;
  border-right-color: orangered;
  animation-delay: -0.29s;
    -o-animation-delay: -0.29s;
    -ms-animation-delay: -0.29s;
    -webkit-animation-delay: -0.29s;
    -moz-animation-delay: -0.29s;
}



@keyframes spin8 {
  from {
    transform: rotate(360deg);
  }
}

@-o-keyframes spin8 {
  from {
    -o-transform: rotate(360deg);
  }
}

@-ms-keyframes spin8 {
  from {
    -ms-transform: rotate(360deg);
  }
}

@-webkit-keyframes spin8 {
  from {
    -webkit-transform: rotate(360deg);
  }
}

@-moz-keyframes spin8 {
  from {
    -moz-transform: rotate(360deg);
  }
}


.cssload-container9{
  display: inline-block;
  position: relative;
  margin:10px;
  width:97px;
  top: -130px;
}

.cssload-loading9 i{
  width: 49px;
  height: 49px;
  display: inline-block;
  background: orangered;
  border-radius: 50%;
}
.cssload-loading9 i:nth-child(1){
  animation:cssload-loading-ani1 1.15s ease-in-out infinite;
    -o-animation:cssload-loading-ani1 1.15s ease-in-out infinite;
    -ms-animation:cssload-loading-ani1 1.15s ease-in-out infinite;
    -webkit-animation:cssload-loading-ani1 1.15s ease-in-out infinite;
    -moz-animation:cssload-loading-ani1 1.15s ease-in-out infinite;

}
.cssload-loading9 i:nth-child(2){
  background: orangered;
  margin-left: -10px;
  animation:cssload-loading-ani1 1.15s ease-in-out 0.58s infinite;
    -o-animation:cssload-loading-ani1 1.15s ease-in-out 0.58s infinite;
    -ms-animation:cssload-loading-ani1 1.15s ease-in-out 0.58s infinite;
    -webkit-animation:cssload-loading-ani1 1.15s ease-in-out 0.58s infinite;
    -moz-animation:cssload-loading-ani1 1.15s ease-in-out 0.58s infinite;
}


@keyframes cssload-loading-ani1{
  70%{
    transform:scale(0.5);
  }
}

@-o-keyframes cssload-loading-ani1{
  70%{
    -o-transform:scale(0.5);
  }
}

@-ms-keyframes cssload-loading-ani1{
  70%{
    -ms-transform:scale(0.5);
  }
}

@-webkit-keyframes cssload-loading-ani1{
  70%{
    -webkit-transform:scale(0.5);
  }
}

@-moz-keyframes cssload-loading-ani1{
  70%{
    -moz-transform:scale(0.5);
  }
}


.cssload-spinner10 {
  position: relative;
  display: inline-block;
  width: 33px;
  height: 33px;
  margin:80px 80px 80px 80px;
  top: -65px;
}
.cssload-spinner10:after, .cssload-spinner10:before {
  position: absolute;
  content: "";
  border: 2px solid orangered;
  width: 31px;
  height: 31px;
}
.cssload-spinner10:after {
  animation: cssload-spinner1 2.88s linear infinite;
    -o-animation: cssload-spinner1 2.88s linear infinite;
    -ms-animation: cssload-spinner1 2.88s linear infinite;
    -webkit-animation: cssload-spinner1 2.88s linear infinite;
    -moz-animation: cssload-spinner1 2.88s linear infinite;
}
.cssload-spinner10:before {
  width: 43px;
  height: 43px;
  margin-left: -6.5px;
  margin-top: -6.5px;
  animation: cssload-spinner2 2.88s linear infinite;
    -o-animation: cssload-spinner2 2.88s linear infinite;
    -ms-animation: cssload-spinner2 2.88s linear infinite;
    -webkit-animation: cssload-spinner2 2.88s linear infinite;
    -moz-animation: cssload-spinner2 2.88s linear infinite;
}
@keyframes cssload-spinner1 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@-o-keyframes cssload-spinner1 {
  from {
    -o-transform: rotate(0deg);
  }
  to {
    -o-transform: rotate(360deg);
  }
}

@-ms-keyframes cssload-spinner1 {
  from {
    -ms-transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
  }
}

@-webkit-keyframes cssload-spinner1 {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}

@-moz-keyframes cssload-spinner1 {
  from {
    -moz-transform: rotate(0deg);
  }
  to {
    -moz-transform: rotate(360deg);
  }
}

@keyframes cssload-spinner2 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}

@-o-keyframes cssload-spinner2 {
  from {
    -o-transform: rotate(0deg);
  }
  to {
    -o-transform: rotate(-360deg);
  }
}

@-ms-keyframes cssload-spinner2 {
  from {
    -ms-transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(-360deg);
  }
}

@-webkit-keyframes cssload-spinner2 {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(-360deg);
  }
}

@-moz-keyframes cssload-spinner2 {
  from {
    -moz-transform: rotate(0deg);
  }
  to {
    -moz-transform: rotate(-360deg);
  }
}


.wrapper11 {
  padding-left: 1em;
  padding-right: 1em;
  display: inline-block;
  width: 195px;
}
.cssload-loader11 {
  width: 49px;
  height: 49px;
  border-radius: 50%;
  top: -160px;
  margin: 50px;
  display: inline-block;
  position: relative;
  vertical-align: middle;
}
.cssload-loader11,
.cssload-loader11:before,
.cssload-loader11:after {
  animation: 1.15s infinite ease-in-out;
    -o-animation: 1.15s infinite ease-in-out;
    -ms-animation: 1.15s infinite ease-in-out;
    -webkit-animation: 1.15s infinite ease-in-out;
    -moz-animation: 1.15s infinite ease-in-out;
}
.cssload-loader11:before,
.cssload-loader11:after {
  width: 100%; 
  height: 100%;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
}

.cssload-loader11:before,
.cssload-loader11:after {
    content: "";
}

.cssload-loader11 {
    animation: cssload-animation1 1.15s infinite linear;
    -o-animation: cssload-animation1 1.15s infinite linear;
    -ms-animation: cssload-animation1 1.15s infinite linear;
    -webkit-animation: cssload-animation1 1.15s infinite linear;
    -moz-animation: cssload-animation1 1.15s infinite linear;
}

.cssload-loader11:before,
.cssload-loader11:after {
    content: "";
    width: 80%;
    height: 80%;
    background-color: orangered;
    top: 5%;
}
.cssload-loader11:before {
    left: -5%;
    animation: cssload-animation2 1.15s infinite alternate ease-in-out;
    -o-animation: cssload-animation2 1.15s infinite alternate ease-in-out;
    -ms-animation: cssload-animation2 1.15s infinite alternate ease-in-out;
    -webkit-animation: cssload-animation2 1.15s infinite alternate ease-in-out;
    -moz-animation: cssload-animation2 1.15s infinite alternate ease-in-out;
    transform-origin: 10% 50%;
    -o-transform-origin: 10% 50%;
    -ms-transform-origin: 10% 50%;
    -webkit-transform-origin: 10% 50%;
    -moz-transform-origin: 10% 50%;
}
.cssload-loader11:after {
    left: auto;
    right: -5%;
    animation: cssload-animation2 1.15s 1.15s infinite alternate ease-in-out;
    -o-animation: cssload-animation2 1.15s 1.15s infinite alternate ease-in-out;
    -ms-animation: cssload-animation2 1.15s 1.15s infinite alternate ease-in-out;
    -webkit-animation: cssload-animation2 1.15s 1.15s infinite alternate ease-in-out;
    -moz-animation: cssload-animation2 1.15s 1.15s infinite alternate ease-in-out;
    transform: scale(0);
    -o-transform: scale(0);
    -ms-transform: scale(0);
    -webkit-transform: scale(0);
    -moz-transform: scale(0);
    transform-origin: 90% 50%;
}





@keyframes cssload-animation1 {
  0%   { transform: rotate(20deg); }
  100% { transform: rotate(380deg); }
}

@-o-keyframes cssload-animation1 {
  0%   { -o-transform: rotate(20deg); }
  100% { -o-transform: rotate(380deg); }
}

@-ms-keyframes cssload-animation1 {
  0%   { -ms-transform: rotate(20deg); }
  100% { -ms-transform: rotate(380deg); }
}

@-webkit-keyframes cssload-animation1 {
  0%   { -webkit-transform: rotate(20deg); }
  100% { -webkit-transform: rotate(380deg); }
}

@-moz-keyframes cssload-animation1 {
  0%   { -moz-transform: rotate(20deg); }
  100% { -moz-transform: rotate(380deg); }
}

@keyframes cssload-animation2 {
  0%   { transform: scale(0); }
  100% { transform: scale(1); }
}

@-o-keyframes cssload-animation2 {
  0%   { -o-transform: scale(0); }
  100% { -o-transform: scale(1); }
}

@-ms-keyframes cssload-animation2 {
  0%   { -ms-transform: scale(0); }
  100% { -ms-transform: scale(1); }
}

@-webkit-keyframes cssload-animation2 {
  0%   { -webkit-transform: scale(0); }
  100% { -webkit-transform: scale(1); }
}

@-moz-keyframes cssload-animation2 {
  0%   { -moz-transform: scale(0); }
  100% { -moz-transform: scale(1); }
}

.cssload-container12 * {
  box-sizing: border-box;
    -o-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
}

.cssload-container12 ul li{
  list-style: none;
}

.cssload-container12 {
  display: inline-block;
  position: relative;
  top: -200px;
}

.cssload-flex-container12 {
  display: flex;
    display: -o-flex;
    display: -ms-flex;
    display: -webkit-flex;
    display: -moz-flex;
  flex-direction: row;
    -o-flex-direction: row;
    -ms-flex-direction: row;
    -webkit-flex-direction: row;
    -moz-flex-direction: row;
  flex-wrap: wrap;
    -o-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    -moz-flex-wrap: wrap;
  justify-content: space-around;
}
.cssload-flex-container12 li {
  padding: 10px;
  height: 97px;
  width: 97px;
  margin: 29px 19px;
  position: relative;
  text-align: center;
}

.cssload-loading12 {
  display: inline-block;
  width: 73px;
  height: 5px;
  background: orangered;
  border-radius: 97px;
  transform-origin: center center;
    -o-transform-origin: center center;
    -ms-transform-origin: center center;
    -webkit-transform-origin: center center;
    -moz-transform-origin: center center;
  animation: cssload-loading12 4.6s ease infinite;
    -o-animation: cssload-loading12 4.6s ease infinite;
    -ms-animation: cssload-loading12 4.6s ease infinite;
    -webkit-animation: cssload-loading12 4.6s ease infinite;
    -moz-animation: cssload-loading12 4.6s ease infinite;
  margin-top: 34px;
}




@keyframes cssload-loading12 {
  0% {
    transform: rotate(-20deg);
    height: 5px;
    width: 73px;
  }
  5% {
    height: 5px;
    width: 73px;
  }
  30% {
    transform: rotate(380deg);
    height: 5px;
    width: 73px;
  }
  40% {
    transform: rotate(360deg);
    height: 5px;
    width: 73px;
  }
  55% {
    transform: rotate(0deg);
    height: 5px;
    width: 5px;
  }
  65% {
    transform: rotate(0deg);
    height: 5px;
    width: 83px;
  }
  68% {
    transform: rotate(0deg);
    height: 5px;
  }
  75% {
    transform: rotate(0deg);
    height: 5px;
    width: 1px;
  }
  78% {
    height: 5px;
    width: 5px;
  }
  90% {
    height: 5px;
    width: 73px;
    transform: rotate(0deg);
  }
  99%, 100% {
    height: 5px;
    width: 73px;
    transform: rotate(-20deg);
  }
}

@-o-keyframes cssload-loading12 {
  0% {
    -o-transform: rotate(-20deg);
    height: 5px;
    width: 73px;
  }
  5% {
    height: 5px;
    width: 73px;
  }
  30% {
    -o-transform: rotate(380deg);
    height: 5px;
    width: 73px;
  }
  40% {
    -o-transform: rotate(360deg);
    height: 5px;
    width: 73px;
  }
  55% {
    -o-transform: rotate(0deg);
    height: 5px;
    width: 5px;
  }
  65% {
    -o-transform: rotate(0deg);
    height: 5px;
    width: 83px;
  }
  68% {
    -o-transform: rotate(0deg);
    height: 5px;
  }
  75% {
    -o-transform: rotate(0deg);
    height: 5px;
    width: 1px;
  }
  78% {
    height: 5px;
    width: 5px;
  }
  90% {
    height: 5px;
    width: 73px;
    -o-transform: rotate(0deg);
  }
  99%, 100% {
    height: 5px;
    width: 73px;
    -o-transform: rotate(-20deg);
  }
}

@-ms-keyframes cssload-loading12 {
  0% {
    -ms-transform: rotate(-20deg);
    height: 5px;
    width: 73px;
  }
  5% {
    height: 5px;
    width: 73px;
  }
  30% {
    -ms-transform: rotate(380deg);
    height: 5px;
    width: 73px;
  }
  40% {
    -ms-transform: rotate(360deg);
    height: 5px;
    width: 73px;
  }
  55% {
    -ms-transform: rotate(0deg);
    height: 5px;
    width: 5px;
  }
  65% {
    -ms-transform: rotate(0deg);
    height: 5px;
    width: 83px;
  }
  68% {
    -ms-transform: rotate(0deg);
    height: 5px;
  }
  75% {
    -ms-transform: rotate(0deg);
    height: 5px;
    width: 1px;
  }
  78% {
    height: 5px;
    width: 5px;
  }
  90% {
    height: 5px;
    width: 73px;
    -ms-transform: rotate(0deg);
  }
  99%, 100% {
    height: 5px;
    width: 73px;
    -ms-transform: rotate(-20deg);
  }
}

@-webkit-keyframes cssload-loading12 {
  0% {
    -webkit-transform: rotate(-20deg);
    height: 5px;
    width: 73px;
  }
  5% {
    height: 5px;
    width: 73px;
  }
  30% {
    -webkit-transform: rotate(380deg);
    height: 5px;
    width: 73px;
  }
  40% {
    -webkit-transform: rotate(360deg);
    height: 5px;
    width: 73px;
  }
  55% {
    -webkit-transform: rotate(0deg);
    height: 5px;
    width: 5px;
  }
  65% {
    -webkit-transform: rotate(0deg);
    height: 5px;
    width: 83px;
  }
  68% {
    -webkit-transform: rotate(0deg);
    height: 5px;
  }
  75% {
    -webkit-transform: rotate(0deg);
    height: 5px;
    width: 1px;
  }
  78% {
    height: 5px;
    width: 5px;
  }
  90% {
    height: 5px;
    width: 73px;
    -webkit-transform: rotate(0deg);
  }
  99%, 100% {
    height: 5px;
    width: 73px;
    -webkit-transform: rotate(-20deg);
  }
}

@-moz-keyframes cssload-loading12 {
  0% {
    -moz-transform: rotate(-20deg);
    height: 5px;
    width: 73px;
  }
  5% {
    height: 5px;
    width: 73px;
  }
  30% {
    -moz-transform: rotate(380deg);
    height: 5px;
    width: 73px;
  }
  40% {
    -moz-transform: rotate(360deg);
    height: 5px;
    width: 73px;
  }
  55% {
    -moz-transform: rotate(0deg);
    height: 5px;
    width: 5px;
  }
  65% {
    -moz-transform: rotate(0deg);
    height: 5px;
    width: 83px;
  }
  68% {
    -moz-transform: rotate(0deg);
    height: 5px;
  }
  75% {
    -moz-transform: rotate(0deg);
    height: 5px;
    width: 1px;
  }
  78% {
    height: 5px;
    width: 5px;
  }
  90% {
    height: 5px;
    width: 73px;
    -moz-transform: rotate(0deg);
  }
  99%, 100% {
    height: 5px;
    width: 73px;
    -moz-transform: rotate(-20deg);
  }
}

.cssload-loader13 {
  display: inline-block;
  top: -220px;
  margin: 80px;
  width: 80px;
  height: 80px;
  position: relative;
  border: 4px solid orangered;
  animation: cssload-loader 2.3s infinite ease;
    -o-animation: cssload-loader 2.3s infinite ease;
    -ms-animation: cssload-loader 2.3s infinite ease;
    -webkit-animation: cssload-loader 2.3s infinite ease;
    -moz-animation: cssload-loader 2.3s infinite ease;
}

.cssload-loader-inner13 {
  vertical-align: top;
  display: inline-block;
  width: 100%;
  background-color: orangered;
  animation: cssload-loader-inner 2.3s infinite ease-in;
    -o-animation: cssload-loader-inner 2.3s infinite ease-in;
    -ms-animation: cssload-loader-inner 2.3s infinite ease-in;
    -webkit-animation: cssload-loader-inner 2.3s infinite ease-in;
    -moz-animation: cssload-loader-inner 2.3s infinite ease-in;
}





@keyframes cssload-loader13 {
  0% {
    transform: rotate(0deg);
  }
  
  25% {
    transform: rotate(180deg);
  }
  
  50% {
    transform: rotate(180deg);
  }
  
  75% {
    transform: rotate(360deg);
  }
  
  100% {
    transform: rotate(360deg);
  }
}

@-o-keyframes cssload-loader {
  0% {
    transform: rotate(0deg);
  }
  
  25% {
    transform: rotate(180deg);
  }
  
  50% {
    transform: rotate(180deg);
  }
  
  75% {
    transform: rotate(360deg);
  }
  
  100% {
    transform: rotate(360deg);
  }
}

@-ms-keyframes cssload-loader {
  0% {
    transform: rotate(0deg);
  }
  
  25% {
    transform: rotate(180deg);
  }
  
  50% {
    transform: rotate(180deg);
  }
  
  75% {
    transform: rotate(360deg);
  }
  
  100% {
    transform: rotate(360deg);
  }
}

@-webkit-keyframes cssload-loader {
  0% {
    transform: rotate(0deg);
  }
  
  25% {
    transform: rotate(180deg);
  }
  
  50% {
    transform: rotate(180deg);
  }
  
  75% {
    transform: rotate(360deg);
  }
  
  100% {
    transform: rotate(360deg);
  }
}

@-moz-keyframes cssload-loader {
  0% {
    transform: rotate(0deg);
  }
  
  25% {
    transform: rotate(180deg);
  }
  
  50% {
    transform: rotate(180deg);
  }
  
  75% {
    transform: rotate(360deg);
  }
  
  100% {
    transform: rotate(360deg);
  }
}

@keyframes cssload-loader-inner {
  0% {
    height: 0%;
  }
  
  25% {
    height: 0%;
  }
  
  50% {
    height: 100%;
  }
  
  75% {
    height: 100%;
  }
  
  100% {
    height: 0%;
  }
}

@-o-keyframes cssload-loader-inner {
  0% {
    height: 0%;
  }
  
  25% {
    height: 0%;
  }
  
  50% {
    height: 100%;
  }
  
  75% {
    height: 100%;
  }
  
  100% {
    height: 0%;
  }
}

@-ms-keyframes cssload-loader-inner {
  0% {
    height: 0%;
  }
  
  25% {
    height: 0%;
  }
  
  50% {
    height: 100%;
  }
  
  75% {
    height: 100%;
  }
  
  100% {
    height: 0%;
  }
}

@-webkit-keyframes cssload-loader-inner {
  0% {
    height: 0%;
  }
  
  25% {
    height: 0%;
  }
  
  50% {
    height: 100%;
  }
  
  75% {
    height: 100%;
  }
  
  100% {
    height: 0%;
  }
}

@-moz-keyframes cssload-loader-inner {
  0% {
    height: 0%;
  }
  
  25% {
    height: 0%;
  }
  
  50% {
    height: 100%;
  }
  
  75% {
    height: 100%;
  }
  
  100% {
    height: 0%;
  }
} `}</pre>  </div> : null}
                <div>
                    <div className="spinner spinner-1"></div>
                    <div className="cssload-spin-box6"></div>
                    <div className="spinner spinner-2"></div>
                    <div className="spinner spinner-3"></div>
                    <div className="spinner-6"></div>
                    <div className="cssload-thecube">
                        <div className="cssload-cube cssload-c1"></div>
                        <div className="cssload-cube cssload-c2"></div>
                        <div className="cssload-cube cssload-c4"></div>
                        <div className="cssload-cube cssload-c3"></div>
                    </div>
                    <div className="windows8">
                        <div className="wBall" id="wBall_1">
                            <div className="wInnerBall"></div>
                        </div>
                        <div className="wBall" id="wBall_2">
                            <div className="wInnerBall"></div>
                        </div>
                        <div className="wBall" id="wBall_3">
                            <div className="wInnerBall"></div>
                        </div>
                        <div className="wBall" id="wBall_4">
                            <div className="wInnerBall"></div>
                        </div>
                        <div className="wBall" id="wBall_5">
                            <div className="wInnerBall"></div>
                        </div>
                    </div>
                    <div className="cssload-container">
                        <ul className="cssload-flex-container">
                            <li>
                                <span className="cssload-loading cssload-one"></span>
                                <span className="cssload-loading cssload-two"></span>
                                <span className="cssload-loading-center"></span>
                            </li>
                        </ul>
                    </div>
                    <div className="cssload-clock"></div>
                    <div className="cssload-container1">
                        <div className="cssload-arc">
                            <div className="cssload-arc-cube"></div>
                        </div>
                    </div>
                    <div className="cssload-container2">
                        <div className="cssload-tube-tunnel"></div>
                    </div>
                    <div className="cssload-bell">
                        <div className="cssload-circle">
                            <div className="cssload-inner"></div>
                        </div>
                        <div className="cssload-circle">
                            <div className="cssload-inner"></div>
                        </div>
                        <div className="cssload-circle">
                            <div className="cssload-inner"></div>
                        </div>
                        <div className="cssload-circle">
                            <div className="cssload-inner"></div>
                        </div>
                        <div className="cssload-circle">
                            <div className="cssload-inner"></div>
                        </div>
                    </div>
                    <div className="cssload-loader8"></div>
                    <div class="cssload-container9">
                        <div class="cssload-loading9">
                            <i></i>
                            <i></i>
                        </div>
                    </div>
                    <div class="cssload-spinner10"></div>
                    <div class="wrapper11">
                        <div class="cssload-loader11"></div>
                    </div>
                    <div class="cssload-container12">
                        <ul class="cssload-flex-container12">
                            <li>
                                <span class="cssload-loading12"></span>
                            </li>
                        </ul>
                    </div>
                    <span class="cssload-loader13">
                        <span class="cssload-loader-inner13"></span>
                    </span>
                </div>
            </div>
        );
    }
}

export default Spinners;