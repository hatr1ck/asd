import React, {useState, useEffect} from "react";
import "./login.css";
import axios from 'axios';
import {Link} from 'react-router-dom';
import home from '../Home.svg';
import googled from './g+.svg';
import code from '../code.svg';

export default function Login() {

    let [username1,
        setUsername1] = useState('');
    let [password1,
        setPassword1] = useState('');
    let [err,
        setErr] = useState([]);
    let [username,
        setUsername] = useState('');
    let [email,
        setEmail] = useState('');
    let [password,
        setPassword] = useState('');
    let [data,
        setData] = useState('');
    let [password2,
        setPassword2] = useState('');
    let [signUp,
        setSignUp] = useState('butn');
    let [signIn,
        setSignIn] = useState('signIn');
    let [list,
        setList] = useState([]);
    let [Wit,
        setWit] = useState(false);
    let [showing,
        setShowing] = useState(false);
    useEffect(() => {
        axios
            .get('http://localhost:3300/auth/allusers')
            .then((response) => {
                if (response.data.current) {
                    setData('Logged-in as: ' + response.data.current)
                    setList(response.data.list)
                } else {
                    setList(response.data.list);
                }
            })
    })

    let handleChange = event => {
        setUsername(event.target.value);
    }
    let handleChange1 = event => {
        setEmail(event.target.value);
    }
    let handleChange2 = event => {
        setPassword(event.target.value);
    }
    let handleChange3 = event => {
        setPassword2(event.target.value);
    }
    let handleLog = event => {
        setUsername1(event.target.value)
    }
    let handlePass = event => {
        setPassword1(event.target.value)
    }

    let post = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:3300/auth/addnew', {
            username: username,
            password: password,
            email: email,
            password2: password2
        })
            .then((res) => {
                setErr(res.data)
            })
    };
    let logout = (e) => {
        e.preventDefault();
        axios
            .get('http://localhost:3300/auth/logout')
            .then(() => {
                setData('')
            });
    }
    let log = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:3300/auth/login', {
            username: username1,
            password: password1
        })
            .then((data) => {
                setData("Logged-in as " + data.data);
                setUsername1('');
                setPassword1('');
            })
            .catch(err => {
                setData("Wrong username/password");
            });
    }
    let signUps = () => {
        setWit(true);
        setSignIn('butn');
        setSignUp('signUp');
    }
    let signIns = () => {
        setWit(false);
        setSignIn('signIn');
        setSignUp('butn');
    }
    return (
        <div>
            <Link to='/'><img alt='404' src={home} height='100rem' className='imge'/></Link>
            <img alt='404' src={code} height='100rem' className='imge' onClick={()=>setShowing(!showing)} />
 {showing ?  <div className='codewra'>
                <pre><h1>React</h1>{`
import React, {useState, useEffect} from "react";
import "./login.css";
import axios from 'axios';
import {Link} from 'react-router-dom';
import home from '../Home.svg';
import googled from './g+.svg';
import code from './code.svg';

export default function Login() {

    let [username1,
        setUsername1] = useState('');
    let [password1,
        setPassword1] = useState('');
    let [err,
        setErr] = useState([]);
    let [username,
        setUsername] = useState('');
    let [email,
        setEmail] = useState('');
    let [password,
        setPassword] = useState('');
    let [data,
        setData] = useState('');
    let [password2,
        setPassword2] = useState('');
    let [signUp,
        setSignUp] = useState('butn');
    let [signIn,
        setSignIn] = useState('signIn');
    let [list,
        setList] = useState([]);
    let [Wit,
        setWit] = useState(false);
    let [showing,
        setShowing] = useState(false);
    useEffect(() => {
        axios
            .get('http://localhost:3300/auth/allusers')
            .then((response) => {
                if (response.data.current) {
                    setData('Logged-in as: ' + response.data.current)
                    setList(response.data.list)
                } else {
                    setList(response.data.list);
                }
            })
    })

    let handleChange = event => {
        setUsername(event.target.value);
    }
    let handleChange1 = event => {
        setEmail(event.target.value);
    }
    let handleChange2 = event => {
        setPassword(event.target.value);
    }
    let handleChange3 = event => {
        setPassword2(event.target.value);
    }
    let handleLog = event => {
        setUsername1(event.target.value)
    }
    let handlePass = event => {
        setPassword1(event.target.value)
    }

    let post = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:3300/auth/addnew', {
            username: username,
            password: password,
            email: email,
            password2: password2
        })
            .then((res) => {
                setErr(res.data)
            })
    };
    let google = () => {
        axios.get('http://localhost:3300/auth/google');
    }
    let logout = (e) => {
        e.preventDefault();
        axios
            .get('http://localhost:3300/auth/logout')
            .then(() => {
                setData('')
            });
    }
    let log = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:3300/auth/login', {
            username: username1,
            password: password1
        })
            .then((data) => {
                setData("Logged-in as " + data.data);
                setUsername1('');
                setPassword1('');
            })
            .catch(err => {
                setData("Wrong username/password");
            });
    }
    let signUps = () => {
        setWit(true);
        setSignIn('butn');
        setSignUp('signUp');
    }
    let signIns = () => {
        setWit(false);
        setSignIn('signIn');
        setSignUp('butn');
    }
    let showCode = ()=>{
        setShowing(!showing)
    }
    return (
        <div>
            <Link to='/'><img alt='404' src={home} height='100rem' className='imge'/></Link>
            <img alt='404' src={code} height='100rem' className='imge' onClick={showCode} />
            {showing ? <div className='showCode'></div> : null}
            <div className='ins'>
                <div className='goGrey'>
                    <div className={signUp} onClick={signUps}>Sign Up</div>
                    <div className={signIn} onClick={signIns}>Log In</div>
                    {Wit
                        ? <form onSubmit={post}>
                                <h2 >Sign Up for Free</h2>
                                <input
                                    type="text"
                                    placeholder="Username"
                                    id="username"
                                    onChange={handleChange}/>
                                <input
                                    type="text"
                                    placeholder="Email Address"
                                    id="email"
                                    onChange={handleChange1}/>

                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    required=""
                                    id="password"
                                    onChange={handleChange2}/>
                                <input
                                    type="password"
                                    name="password2"
                                    placeholder="Confirm password"
                                    required=""
                                    id="password2"
                                    onChange={handleChange3}/>
                                <div className='signIn' type="submit" onClick={post}>Sign up</div>
                                <a className='googl' href='http://localhost:3300/auth/google'>
                                    <img height='40px' className='pica' alt='404' src={googled}/>
                                    <h5>Sign In with google</h5>
                                </a>
                                {err.length > 0 && Array.isArray(err)
                                    ? (err.map(er => {
                                        return <div className='erar' key={er.msg}>{er.msg}</div>
                                    }))
                                    : err === "Success"
                                        ? <div id='goGreen'>Success</div>
                                        : err.length > 0
                                            ? <div>{err}</div>
                                            : null}
                            </form>

                        : data.slice(0, 12) !== 'Logged-in as'
                            ? <form onSubmit={log}>
                                    <h2>Welcome Back!</h2>
                                    <input type="text" name="username" placeholder="Username" onChange={handleLog}/>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        required=""
                                        onChange={handlePass}/>
                                    <div className='signIn' type="submit" onClick={log}>Log In</div>

                                    <a className='googl' href='http://localhost:3300/auth/google'>
                                        <img height='40px' className='pica' alt='404' src={googled}/>
                                        <h5>Sign In with google</h5>
                                    </a>

                                    {data === 'Wrong username/password'
                                        ? <div className='erar'>{data}</div>
                                        : null}
                                </form>
                            : <div>
                                <h2>{data}</h2>
                                <div className='signIn' onClick={logout}>Log Out</div>
                            </div>}
                </div>
            </div>
            <div className='reg'>
                <div className='Registered'>
                    <h2>Registered users:</h2>{list.map((name, ind) => {
                        return <div id='why' className='list2' key={ind}>{name}</div>
                    })}</div>
            </div>
        </div>
    );
}
          `}</pre> <pre><h1>CSS</h1>{`
.alert {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.btn {
    display: inline-block;
    position: relative;
}

.signUp {
    width: 250px;
    padding: 15px;
    display: inline-block;
    background-color: #3AB486;
    cursor: pointer;
}

.butn {
    cursor: pointer;
    padding: 14px;
    opacity: .7;
    display: inline-block;
    width: 250px;
    background-color: #1F1F22;
}

.signIn {
    width: 250px;
    padding: 15px;
    display: inline-block;
    background-color: #3AB486;
    cursor: pointer;
}

.butn:hover {
    background-color: #3AB486;
    opacity: .6;
}

.signIn:hover {
    opacity: 0.8;
}

.signUp:hover {
    opacity: 0.8;
}

.goGrey {
    border-radius: 1%;
    padding: 30px;
    background-color: #2C353F;
    min-height: 500px;
    max-width: 600px;
    display: inline-block;
    box-shadow: 0 0 100px rgba(0, 0, 0, 0.5);
}

.ins {
    text-align: center;
}

.reg {
    text-align: center;
}

.Registered {
    margin: 1%;
    width: 500px;
    display: inline-block;
}

.googl {
    display: inline-block;
    background-color: #D34748;
    font-size: 20px;
    padding: 15px;
    height: 18px;
    top: 2px;
    position: relative;
    width: 250px;
}

.pica {
    left: 5px;
    top: 5px;
    position: absolute;
}

.googl:hover {
    opacity: 0.8;
}

.googl,
.googl:hover,
.googl:focus,
.googl:active {
    text-decoration: none;
    color: white;
}

.erar {
    color: #CA3F4E;
    font-size: 20px;
}

.list2 {
    width: 500px;
    padding: 5px;
    border-radius: 5%;
    color: white;
    text-decoration-color: white;
    border: .5px solid black;
    background-color: #1a4c29;
    font-size: 25px;
}
.prettyprint {
  z-index: 999;
  position: absolute;
  background-color: black;
  width: 500px;
}
pre {
  background-color: black;
  position: relative;
  width: 500px;
  z-index: 99;
  overflow-y: scroll;
  overflow-x: auto;
  display: inline-block;
  font-size: 10px;
  height: 500px;
  float: left;

}
            `}</pre>  </div> : null}
          <div className='ins'>
                <div className='goGrey'>
                    <div className={signUp} onClick={signUps}>Sign Up</div>
                    <div className={signIn} onClick={signIns}>Log In</div>
                    {Wit
                        ? <form onSubmit={post}>
                                <h2 >Sign Up for Free</h2>
                                <input
                                    type="text"
                                    placeholder="Username"
                                    id="username"
                                    onChange={handleChange}/>
                                <input
                                    type="text"
                                    placeholder="Email Address"
                                    id="email"
                                    onChange={handleChange1}/>

                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    required=""
                                    id="password"
                                    onChange={handleChange2}/>
                                <input
                                    type="password"
                                    name="password2"
                                    placeholder="Confirm password"
                                    required=""
                                    id="password2"
                                    onChange={handleChange3}/>
                                <div className='signIn' type="submit" onClick={post}>Sign up</div>
                                <a className='googl' href='http://localhost:3300/auth/google'>
                                    <img height='40px' className='pica' alt='404' src={googled}/>
                                    <h5>Sign In with google</h5>
                                </a>
                                {err.length > 0 && Array.isArray(err)
                                    ? (err.map(er => {
                                        return <div className='erar' key={er.msg}>{er.msg}</div>
                                    }))
                                    : err === "Success"
                                        ? <div id='goGreen'>Success</div>
                                        : err.length > 0
                                            ? <div>{err}</div>
                                            : null}
                            </form>

                        : data.slice(0, 12) !== 'Logged-in as'
                            ? <form onSubmit={log}>
                                    <h2>Welcome Back!</h2>
                                    <input type="text" name="username" placeholder="Username" onChange={handleLog}/>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        required=""
                                        onChange={handlePass}/>
                                    <div className='signIn' type="submit" onClick={log}>Log In</div>

                                    <a className='googl' href='http://localhost:3300/auth/google'>
                                        <img height='40px' className='pica' alt='404' src={googled}/>
                                        <h5>Sign In with google</h5>
                                    </a>

                                    {data === 'Wrong username/password'
                                        ? <div className='erar'>{data}</div>
                                        : null}
                                </form>
                            : <div>
                                <h2>{data}</h2>
                                <div className='signIn' onClick={logout}>Log Out</div>
                            </div>}
                </div>
            </div>
            <div className='reg'>
                <div className='Registered'>
                    <h2>Registered users:</h2>{list.map((name, ind) => {
                        return <div id='why' className='list2' key={ind}>{name}</div>
                    })}</div>
            </div>
        </div>
    );
}