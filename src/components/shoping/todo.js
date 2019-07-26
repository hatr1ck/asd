import React, {Component} from 'react';
import axios from 'axios';
import './todo.css';
import trash from './trash.svg';
import {Link} from 'react-router-dom';
import home from '../Home.svg';
import code from '../code.svg';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state.load();
    }
    state = {
        showing:false,
        list: [],
        item: "",
        delID: "",
        load: () => {axios
                .get('http://localhost:3300/list/add')
                .then((response) => {
                    this.setState({list: response.data});
                })
        }
    }
    posting = (e) => {
        e.preventDefault();
        if (this.state.item !== "") {
            axios
                .post('http://localhost:3300/list/adduser', {nickname: this.state.item})
                .then((response) => {
                    console.log(response);
                    this
                        .state
                        .load();
                    this.setState({item: ""})
                })
        }
    }

    delete = (val) => {
        axios.delete('http://localhost:3300/list/delete/' + val)
            .then((response) => {
                this
                    .state
                    .load();
            })
            .catch((err) => console.log(err));

    }
    inputed = (str) => {
        this.setState({item: str.target.value});
    }
    render() {
        return (
            <div>
                <Link to='/'><img alt='404' src={home} height='100rem' className='imge'/></Link>
                <img alt='404' src={code} height='100rem' className='imge' onClick={()=>this.setState({showing:!this.state.showing})} />
 {this.state.showing ?  <div className='codewra'>
                <pre><h1>React</h1>{`

import React, {Component} from 'react';
import axios from 'axios';
import './todo.css';
import trash from './trash.svg';
import {Link} from 'react-router-dom';
import home from '../Home.svg';
import code from '../code.svg';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state.load();
    }
    state = {
        showing:true,
        list: [],
        item: "",
        delID: "",
        load: () => {axios
                .get('http://localhost:3300/list/add')
                .then((response) => {
                    this.setState({list: response.data});
                })
        }
    }
    posting = (e) => {
        e.preventDefault();
        if (this.state.item !== "") {
            axios
                .post('http://localhost:3300/list/adduser', {nickname: this.state.item})
                .then((response) => {
                    console.log(response);
                    this
                        .state
                        .load();
                    this.setState({item: ""})
                })
        }
    }

    delete = (val) => {
        axios.delete('http://localhost:3300/list/delete/' + val)
            .then((response) => {
                this
                    .state
                    .load();
            })
            .catch((err) => console.log(err));

    }
    inputed = (str) => {
        this.setState({item: str.target.value});
    }
    render() {
        return (
            <div>
                <Link to='/'><img alt='404' src={home} height='100rem' className='imge'/></Link>
                                <form onSubmit={this.posting} className="Ap1">
                    <div>
                        <input
                            placeholder="Item Name"
                            className="input1"
                            value={this.state.item}
                            onChange={this
                            .inputed
                            .bind(this)}/>
                        <div
                            className="btn1"
                            onClick={this
                            .posting
                            .bind(this)}>+</div>
                    </div>
                    <ul className='ul'>{this
                            .state
                            .list
                            .map(val => {
                                return (
                                    <li key={val._id} className="li1">{val.nickname}
                                        <img
                                            alt='404'
                                            className='lings'
                                            height='50rem'
                                            src={trash}
                                            onClick={this
                                            .delete
                                            .bind(this, val._id)}/>
                                    </li>
                                )
                            })}</ul>
                </form>
            </div>
        );
    }
}

export default Todo;

            `}</pre><pre><h1>CSS</h1>{`.Ap1 {
    width: 500px;
    height: 600px;
    margin: 0 auto;
    overflow-y: auto;
    overflow-x: hidden;
    font-size: 20px;
    padding: 1%;
    box-shadow: 0 0 100px rgba(0, 0, 0, 0.5);
}

.li1 {
    animation: frames 1s forwards ease-in-out;
    font-size: 30px;
    padding: 15px;
    width: 100%;
}

.input1 {
    width: 400px;
    display: inline-block;
}

.ul {
    list-style: decimal;
}
@keyframes frames {
    0% {
        opacity: 0.3;
    }

    100% {
        opacity: 1;
    }
}
@media screen and (max-width: 500px) {
    .Ap {
        width: 320px;
        height: 600px;
    }
    .input1 {
        width: 100%;
        font-size: 20px;
    }
}

.btn1 {
    border-radius: 3px;
    width: 75px;
    text-align: center;
    padding: 8px;
    display: inline-block;
    float: right;
    background-color: #428c25;
}
.getWeather:hover {
    opacity: 0.8;
}

.lings {
    cursor: pointer;
    float: right;
    right: 30px;
    margin-right: 30px;
}
 `}</pre>  </div> : null}
                <form onSubmit={this.posting} className="Ap1">
                    <div>
                        <input
                            placeholder="Item Name"
                            className="input1"
                            value={this.state.item}
                            onChange={this
                            .inputed
                            .bind(this)}/>
                        <div
                            className="btn1"
                            onClick={this
                            .posting
                            .bind(this)}>+</div>
                    </div>
                    <ul className='ul'>{this
                            .state
                            .list
                            .map(val => {
                                return (
                                    <li key={val._id} className="li1">{val.nickname}
                                        <img
                                            alt='404'
                                            className='lings'
                                            height='50rem'
                                            src={trash}
                                            onClick={this
                                            .delete
                                            .bind(this, val._id)}/>
                                    </li>
                                )
                            })}</ul>
                </form>
            </div>
        );
    }
}

export default Todo;
