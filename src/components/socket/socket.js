import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import home from'../Home.svg';
import Chat from './chat.js';
import Chats from './chat1.js';
import code from '../code.svg';

export default function Sockets() {
 let [showing, setShowing] = useState(false);

    return (
      <div>
      <Link to='/'><img alt='404' src={home} height='100rem' className='imge'/></Link>
      <img alt='404' src={code} height='100rem' className='imge' onClick={()=>setShowing(!showing)} />
 {showing ?  <div className='codewra'>
                <pre><h1>React</h1>{`
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import home from'../Home.svg';
import Chat from './chat.js';
import Chats from './chat1.js';
import code from '../code.svg';

export default function Sockets() {
 let [showing, setShowing] = useState(false);

    return (
      <div>

      <div style={{textAlign: 'center'}}>
      <Chat />
      <Chats />
      </div>
      </div>
    );
}
   import React, {Component} from 'react';
import './socket.css';
import io from 'socket.io-client';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.socket = io('http://localhost:3300');
        this.state = {
            partner: '',
            messages: [],
            message: '',
            name: ''
        }
    }
    componentWillUnmount() {
        this
            .socket
            .close();
    }
    componentDidMount() {
        this
            .socket
            .open();
        this
            .socket
            .on('connection', (data) => {});
        this
            .socket
            .on('chat', (data) => {
                this.setState({
                    messages: [
                        ...this.state.messages,
                        data
                    ],
                    partner: ''
                })
            });
        this
            .socket
            .on('typing', (data) => {
                if (data.message === "") {
                    this.setState({partner: ""})
                } else {
                    this.setState({partner: data.name})
                }
            });
    }

    send = (e) => {
        e.preventDefault();
        this
            .socket
            .emit('chat', {
                name: this.state.name,
                message: this.state.message
            });
        this.setState({message: ''})
    }

    typingMsg = (e) => {
        this.setState({message: e.target.value})
        this
            .socket
            .emit('typing', {
                name: this.state.name,
                message: e.target.value
            });
    }

    typingName = (e) => {
        this.setState({name: e.target.value})
    }
    render() {
        return (
            <form className='chat' onSubmit={this.send}>
                <div className='chat-window'>
                    <div className='output'>
                        <ul>
                            {this
                                .state
                                .messages
                                .map(msg => {
                                    return <li className='msges' key={Math.random() * 12}>
                                        <strong>{msg.name + ': '}</strong>{msg.message}</li>
                                })}
                        </ul>
                    </div>
                    <div className='feedback'>
                        {this.state.partner
                            ? <div>{this.state.partner + ' is typing...'}</div>
                            : null}
                    </div>
                </div>
                <input
                    type="text"
                    className='name'
                    value={this.state.name}
                    onChange={this.typingName}
                    placeholder="Name"/>
                <input
                    type="text"
                    className='message'
                    value={this.state.message}
                    onChange={this.typingMsg}
                    placeholder="Message"/>
                <button className='send' onClick={this.send}>Send</button>
            </form>
        );
    }
}

export default Chat;

            `}</pre><pre><h1>CSS</h1>{` .chat{
    max-width: 500px;
    min-width: 300px;
    margin: 10px;
    border: 1px solid #ddd;
    box-shadow: 1px 3px 5px rgba(0,0,0,0.05);
    border-radius: 2px;
    display: inline-block;
}
.w{
    text-align: center;
}
.chat-window{
    height: 400px;
    overflow: auto;
    background: #f9f9f9;
}

.output{
    padding: 14px 0px;
    margin: 0 20px;
    border-bottom: 1px solid #e9e9e9;
    color: #555;
}

.feedback{
    color: black;
    padding: 14px 0px;
    margin: 0 20px;
}
.msges{
    color: #575ed8;
    list-style-type: none;
    text-align: left;
}

label{
    box-sizing: border-box;
    display: block;
    padding: 10px 20px;
}

input{
    padding: 10px 20px;
    box-sizing: border-box;
    background: #eee;
    border: 0;
    display: block;
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #eee;
    font-family: Nunito;
    font-size: 16px;
}
.send{
    background: #666699;
    color: #fff;
    font-size: 18px;
    border: 0;
    padding: 12px 0;
    width: 100%;
    border-radius: 0 0 2px 2px;
}`}</pre>  </div> : null}
      <div style={{textAlign: 'center'}}>
      <Chat />
      <Chats />
      </div>
      </div>
    );
}

