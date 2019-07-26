import React, {Component} from 'react';
import './puzzle.css';
import {Link} from 'react-router-dom';
import home from '../Home.svg';
import code from '../code.svg';

class Puzzle extends Component {
    state = {
        arr: [14,10,12,4,8,15,13,9,2,11,6,7,1,5,"oops",3],
        date: new Date(),
        showing: false
    }
    clicked = (e) => {
        let arr1 = [...this.state.arr];
        let ind = arr1.indexOf("oops");
        let ind1 = arr1.indexOf(e);
        if (ind1 - 4 === ind || ind1 + 4 === ind || ind1 + 1 === ind || ind1 - 1 === ind) {
            if (e !== "oops") {
                arr1.splice(ind1, 1, "oops");
                arr1.splice(ind, 1, e);
            }
        }

        this.setState({
            arr: [...arr1]
        })
    }
    getScore = () => {
        let val = ((new Date() - this.state.date) / 1000);
        return val;
    }
    reset = () => {
        let arr1 = this
            .state
            .arr
            .sort(() => {
                return 0.5 - Math.random()
            });
        this.setState({arr: arr1})
    }

    render() {
        return (
            <div>
                <Link to='/'><img alt='404' src={home} height='100rem' className='imge'/></Link>
                <img alt='404' src={code} height='100rem' className='imge' onClick={()=>this.setState({showing:!this.state.showing})} />
 {this.state.showing ?  <div className='codewra'>
                <pre><h1>React</h1>{`
import React, {Component} from 'react';
import './puzzle.css';
import {Link} from 'react-router-dom';

class Puzzle extends Component {
    state = {
        arr: [14,10,12,4,8,15,13,9,2,11,6,7,1,5,"oops",3],
        date: new Date()
    }
    clicked = (e) => {
        let arr1 = [...this.state.arr];
        let ind = arr1.indexOf("oops");
        let ind1 = arr1.indexOf(e);
        if (ind1 - 4 === ind || ind1 + 4 === ind || ind1 + 1 === ind || ind1 - 1 === ind) {
            if (e !== "oops") {
                arr1.splice(ind1, 1, "oops");
                arr1.splice(ind, 1, e);
            }
        }

        this.setState({
            arr: [...arr1]
        })
    }
    getScore = () => {
        let val = ((new Date() - this.state.date) / 1000);
        return val;
    }
    reset = () => {
        let arr1 = this
            .state
            .arr
            .sort(() => {
                return 0.5 - Math.random()
            });
        this.setState({arr: arr1})
    }

    render() {
        return (
            <div>
                <div className='gamewrap'>
                    <div className='game'>
                        <ul className='game1'>
                            {this
                                .state
                                .arr
                                .map(numb => {
                                    return <li
                                        style={{
                                        display: 'inline-block',
                                        fontSize: '40px',
                                        width: '88px',
                                        height: '65px',
                                        paddingTop: '15px',
                                        textAlign: 'center',
                                        margin: '2px',
                                        background: '#009999',
                                        cursor: 'default',
                                        border: '3px solid #6699ff'
                                    }}
                                        className={numb}
                                        key={numb}
                                        onClick={() => {
                                        this.clicked(numb)
                                    }}>{numb}</li>
                                })}
                        </ul>
                        <div className='bat' onClick={this.reset}>RESET</div>
                        {this
                            .state
                            .arr
                            .toString() === [
                            1,
                            2,
                            3,
                            4,
                            5,
                            6,
                            7,
                            8,
                            9,
                            10,
                            11,
                            12,
                            13,
                            14,
                            15,
                            "oops"
                        ].toString()
                            ? (
                                <div className='somebody'>{'Your time is:  ' + Math.floor(Math.floor(((new Date() - this.state.date) / 1000) / 60)) + " min " + Math.round((new Date() - this.state.date) / 1000 % 60) + ' sec'}</div>
                            )
                            : null}
                    </div>
                </div>
            </div>
        );
    }

}

export default Puzzle;


            `}</pre><pre><h1>CSS</h1>{`
.game{
    display: inline-block;
    width: 400px;
    height: 400px;
    padding: 0;
    margin:0;
    box-shadow: 0 0 100px rgba(0,0,0,0.5);
}
.gamewrap{
    text-align: center;
}
.oops{
    background-color: transparent !important;
    color: transparent !important;
}
.game1{
    padding: 0;
    margin:0;
    border: 3px solid #009999;

}
.somebody{
    font-size: 27px;
}
.bat{
    margin-top: 5px;
    width: 380px;
    height: 30px;
    background-color: #b7692d;
    padding: 10px;
}
.bat:hover{
    opacity: .8;
}
.bat:active{
    opacity: .7;
    background-color: #d3bb78;
} `}</pre>  </div> : null}
                <div className='gamewrap'>
                    <div className='game'>
                        <ul className='game1'>
                            {this
                                .state
                                .arr
                                .map(numb => {
                                    return <li
                                        style={{
                                        display: 'inline-block',
                                        fontSize: '40px',
                                        width: '88px',
                                        height: '65px',
                                        paddingTop: '15px',
                                        textAlign: 'center',
                                        margin: '2px',
                                        background: '#009999',
                                        cursor: 'default',
                                        border: '3px solid #6699ff'
                                    }}
                                        className={numb}
                                        key={numb}
                                        onClick={() => {
                                        this.clicked(numb)
                                    }}>{numb}</li>
                                })}
                        </ul>
                        <div className='bat' onClick={this.reset}>RESET</div>
                        {this
                            .state
                            .arr
                            .toString() === [
                            1,
                            2,
                            3,
                            4,
                            5,
                            6,
                            7,
                            8,
                            9,
                            10,
                            11,
                            12,
                            13,
                            14,
                            15,
                            "oops"
                        ].toString()
                            ? (
                                <div className='somebody'>{'Your time is:  ' + Math.floor(Math.floor(((new Date() - this.state.date) / 1000) / 60)) + " min " + Math.round((new Date() - this.state.date) / 1000 % 60) + ' sec'}</div>
                            )
                            : null}
                    </div>
                </div>
            </div>
        );
    }

}

export default Puzzle;
