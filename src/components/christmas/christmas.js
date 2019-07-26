import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './christmas.css';
import home from '../Home.svg';
import code from '../code.svg';


export default function Christmas() {
let [showing, setShowing] = useState(false);

    return (
        <div>
            <Link to='/'><img alt='404' src={home} height='100rem' className='imge'/></Link>
            <img alt='404' src={code} height='100rem' className='imge' onClick={()=>setShowing(!showing)} />
 {showing ?  <div className='codewra'>
                <pre><h1>React</h1>{` import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './christmas.css';

export default function Christmas() {
let [showing, setShowing] = useState(false);

    return (
        <div>
            <div className="sky9">
                <div className="moon9">
                    <div className="crater9"></div>
                    <div className="crater19"></div>
                    <div className="crater29"></div>
                    <div className="crater39"></div>
                    <div className="crater49"></div>
                </div>
                <div className="star9"></div>
                <div className="star19"></div>
                <div className="star29"></div>
                <div className="star39"></div>
                <div className="star49"></div>
                <div className="star59"></div>
                <div className="star69"></div>
                <div className="star79"></div>
                <div className="star89"></div>
                <div className="star99"></div>
                <div className="star109"></div>
                <div className="star119"></div>
                <div className="star129"></div>
                <div className="star139"></div>
                <div className="star149"></div>
                <div className="star159"></div>
                <div className="star169"></div>
                <div className="star179"></div>
                <div className="star189"></div>
                <div className="star199"></div>
                <div className="star209"></div>
                <div className="star219"></div>
                <div className="star229"></div>
                <div className="star239"></div>
                <div className="santa9">
                    <div className="body9">
                        <div className="heads9">
                            <div className="eyes9"></div>
                            <div className="eyes19"></div>
                            <div className="nosi9"></div>
                            <div className="beard9"></div>
                            <div className="hat9">
                                <div className="bib9"></div>
                                <div className="bib19"></div>
                            </div>
                            <div className='hand9'>
                                <div className="fist9">
                                    <div className="fist29"></div>
                                </div>
                            </div>
                            <div className="hand29">
                                <div className="fist9">
                                    <div className="fist29"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sled9">
                        <div className='present9'>
                            <div className='line9'></div>
                        </div>
                        <div className='present19'>
                            <div className='line19'></div>
                        </div>
                        <div className="sled19"></div>
                        <div className="sled29"></div>
                    </div>
                    <div className="w9">
                        <div className="bottom9"></div>
                        <div className="bottom19"></div>
                        <div className="bottom29"></div>
                    </div>
                    <div className="w19">
                        <div className="bottom129"></div>
                        <div className="bottom119"></div>
                        <div className="bottom219"></div>
                    </div>
                    <div className="deer9">
                        <div className="neck9"></div>
                        <div className="head9">
                            <div className="horns9">
                                <div className="horn9"></div>
                            </div>
                            <div className="eye9"></div>
                            <div className='nose9'></div>
                            <div className="nose19"></div>
                            <div className="ear9"></div>
                        </div>
                        <div className="tail9"></div>
                        <div className="leg19"></div>
                        <div className="leg29"></div>
                        <div className="leg39"></div>
                        <div className="leg49"></div>
                    </div>
                    <div className="deer19">
                        <div className="neck9"></div>
                        <div className="head9">
                            <div className="horns9">
                                <div className="horn9"></div>
                            </div>
                            <div className="eye9"></div>
                            <div className='nose9'></div>
                            <div className="nose19"></div>
                            <div className="ear9"></div>
                        </div>
                        <div className="tail9"></div>
                        <div className="leg19"></div>
                        <div className="leg29"></div>
                        <div className="leg39"></div>
                        <div className="leg49"></div>
                    </div>
                    <div className="deer29">
                        <div className="neck9"></div>
                        <div className="head9">
                            <div className="horns9">
                                <div className="horn9"></div>
                            </div>
                            <div className="eye9"></div>
                            <div className='nose9'></div>
                            <div className="nose19"></div>
                            <div className="ear9"></div>
                        </div>
                        <div className="tail9"></div>
                        <div className="leg19"></div>
                        <div className="leg29"></div>
                        <div className="leg39"></div>
                        <div className="leg49"></div>
                    </div>
                    <div className="deer39">
                        <div className="neck9"></div>
                        <div className="head9">
                            <div className="horns9">
                                <div className="horn9"></div>
                            </div>
                            <div className="eye9"></div>
                            <div className='nose9'></div>
                            <div className="nose19"></div>
                            <div className="ear9"></div>
                        </div>
                        <div className="tail9"></div>
                        <div className="leg19"></div>
                        <div className="leg29"></div>
                        <div className="leg39"></div>
                        <div className="leg49"></div>
                    </div>
                    <div className="deer49">
                        <div className="belt9"></div>
                        <div className="neck9"></div>
                        <div className="head9">
                            <div className="horns9">
                                <div className="horn9"></div>
                            </div>
                            <div className="eye9"></div>
                            <div className='nose9'></div>
                            <div className="nose19"></div>
                            <div className="ear9"></div>
                        </div>
                        <div className="tail9"></div>
                        <div className="leg19"></div>
                        <div className="leg29"></div>
                        <div className="leg39"></div>
                        <div className="leg49"></div>
                    </div>
                    <div className="deer59">
                        <div className="neck9"></div>
                        <div className="head9">
                            <div className="horns9">
                                <div className="horn9"></div>
                            </div>
                            <div className="eye9"></div>
                            <div className='nose39'></div>
                            <div className="nose19"></div>
                            <div className="ear9"></div>
                        </div>
                        <div className="tail9"></div>
                        <div className="leg19"></div>
                        <div className="leg29"></div>
                        <div className="leg39"></div>
                        <div className="leg49"></div>
                    </div>
                </div>
                <div className='sn9'>
                    <div className="fonta9">Happy Holidays!<div className="mid9"></div>
                    </div>
                    <div className="wra9">
                        <div className="house9">
                            <div className="roof9">
                                <div className='chimney9'></div>
                            </div>
                            <div className="window9">
                                <div className="row9"></div>
                            </div>
                            <div className="window9">
                                <div className="row9"></div>
                            </div>
                            <div className="window9">
                                <div className="row9"></div>
                            </div>
                            <div className="window9">
                                <div className="row9"></div>
                            </div>
                            <div className="window9">
                                <div className="row9"></div>
                            </div>
                            <div className="window9">
                                <div className="row9"></div>
                            </div>
                            <div className="window9">
                                <div className="row9"></div>
                            </div>
                            <div className="window9">
                                <div className="row9"></div>
                            </div>
                            <div className="door9">
                                <div className="stair9"></div>
                            </div>
                        </div>
                        <div className="house19">
                            <div className="roof19"></div>
                            <div className="window19"></div>
                            <div className="window19"></div>
                            <div className="window19"></div>
                            <div className="window19"></div>
                            <div className="window19"></div>
                            <div className="window19"></div>
                            <div className="window19"></div>
                            <div className="window19"></div>
                            <div className="window19"></div>
                            <div className="window19"></div>
                            <div className="window19"></div>
                            <div className="window19"></div>
                            <div className="window1139"></div>
                            <div className="door19"></div>
                            <div className="window1139"></div>
                        </div>
                        <div className="house29">
                            <dic className='roof29'>
                                <div className="circle9"></div>
                                <div className="window29"></div>
                                <div className="window229"></div>
                                <div className="window29"></div>
                                <div className="window29"></div>
                                <div className="window229"></div>
                                <div className="window29"></div>
                                <div className="window29"></div>
                                <div className="window229"></div>
                                <div className="window29"></div>
                                <div className="gate19"></div>
                                <div className="gate9"></div>
                            </dic>
                        </div>
                        <div className="house39">
                            <div className="roof39">
                                <div className='roof349'></div>
                            </div>
                            <div className="roof339"></div>
                            <div className="window39"></div>
                            <div className="window39"></div>
                            <div className="window39"></div>
                            <div className="window39"></div>
                            <div className="window39"></div>
                            <div className="window39"></div>
                            <div className="window39"></div>
                            <div className="window39"></div>
                            <div className="window39"></div>
                        </div>
                        <div className="house49">
                            <div className="roof49">
                                <div className='roof449'></div>
                            </div>
                            <div className="window49">
                                <div className='line49'></div>
                                <div className='line449'></div>
                            </div>
                            <div className="window49">
                                <div className='line49'></div>
                                <div className='line449'></div>
                            </div>
                            <div className="window49">
                                <div className='line49'></div>
                                <div className='line449'></div>
                            </div>
                            <div className="window49">
                                <div className='line49'></div>
                                <div className='line449'></div>
                            </div>
                            <div className="window49">
                                <div className='line49'></div>
                                <div className='line449'></div>
                            </div>
                            <div className="window49">
                                <div className='line49'></div>
                                <div className='line449'></div>
                            </div>
                            <div className="window49">
                                <div className='line49'></div>
                                <div className='line449'></div>
                            </div>
                            <div className="window49">
                                <div className='line49'></div>
                                <div className='line449'></div>
                            </div>
                            <div className="window49">
                                <div className='line49'></div>
                                <div className='line449'></div>
                            </div>
                        </div>
                        <div className="house59">
                            <div className="roof59">
                                <div className="chimney59"></div>
                            </div>
                            <div className="window59"></div>
                            <div className="window59"></div>
                            <div className="window59"></div>
                            <div className="window59"></div>
                            <div className="window59"></div>
                            <div className="window59"></div>
                            <div className="window59"></div>
                            <div className="window59"></div>
                            <div className="window59"></div>
                            <div className="window59"></div>
                            <div className="window59"></div>
                            <div className="window59"></div>
                            <div className="window59"></div>
                            <div className="window59"></div>
                            <div className="door59"></div>
                            <div className="window59"></div>
                            <div className="window59"></div>
                        </div>
                        <div className="house69">
                            <div className="roof69"></div>
                            <div className="window69">
                                <div className="row69"></div>
                            </div>
                            <div className="window69">
                                <div className="row69"></div>
                            </div>
                            <div className="window69">
                                <div className="row69"></div>
                            </div>
                            <div className="window69">
                                <div className="row69"></div>
                            </div>
                            <div className="window69">
                                <div className="row69"></div>
                            </div>
                            <div className="window69">
                                <div className="row69"></div>
                            </div>
                            <div className="window69">
                                <div className="row69"></div>
                            </div>
                            <div className="window69">
                                <div className="row69"></div>
                            </div>
                            <div className="window69">
                                <div className="row69"></div>
                            </div>
                            <div className="window69">
                                <div className="row69"></div>
                            </div>
                            <div className="window69">
                                <div className="row69"></div>
                            </div>
                            <div className="window69">
                                <div className="row69"></div>
                            </div>
                            <div className="door69"></div>
                            <div className="window69">
                                <div className="row69"></div>
                            </div>
                            <div className="window69">
                                <div className="row69"></div>
                            </div>
                        </div>
                        <div className="house79">
                            <div className="roof79"></div>
                            <div className="window79">
                                <div className="row79"></div>
                                <div className="row79"></div>
                                <div className="row79"></div>
                                <div className="row79"></div>
                                <div className="row779"></div>
                                <div className="row779"></div>
                            </div>
                            <div className="window79">
                                <div className="row79"></div>
                                <div className="row79"></div>
                                <div className="row79"></div>
                                <div className="row79"></div>
                                <div className="row779"></div>
                                <div className="row779"></div>
                            </div>
                            <div className="window79">
                                <div className="row79"></div>
                                <div className="row79"></div>
                                <div className="row79"></div>
                                <div className="row79"></div>
                                <div className="row779"></div>
                                <div className="row779"></div>
                            </div>
                            <div className="window79">
                                <div className="row79"></div>
                                <div className="row79"></div>
                                <div className="row79"></div>
                                <div className="row79"></div>
                                <div className="row779"></div>
                                <div className="row779"></div>
                            </div>
                            <div className="window79">
                                <div className="row79"></div>
                                <div className="row79"></div>
                                <div className="row79"></div>
                                <div className="row79"></div>
                                <div className="row779"></div>
                                <div className="row779"></div>
                            </div>
                            <div className="window79">
                                <div className="row79"></div>
                                <div className="row79"></div>
                                <div className="row79"></div>
                                <div className="row79"></div>
                                <div className="row779"></div>
                                <div className="row779"></div>
                            </div>
                            <div className="door79"></div>
                        </div>
                        <div className="house89">
                            <div className="roof89">
                                <div className="chimney89"></div>
                            </div>
                            <div className="window89"></div>
                            <div className="window89"></div>
                            <div className="window89"></div>
                            <div className="window89"></div>
                            <div className="window89"></div>
                            <div className="window89"></div>
                            <div className="window89"></div>
                            <div className="window89"></div>
                            <div className="window89"></div>
                            <div className="window89"></div>
                            <div className="window89"></div>
                            <div className="window89"></div>
                            <div className="window89"></div>
                            <div className="window89"></div>
                            <div className="window89"></div>
                            <div className="window889"></div>
                            <div className="door89"></div>
                        </div>
                        <div className="house99">
                            <div className="roof99"></div>
                            <div className="window99">
                                <div className="row99"></div>
                            </div>
                            <div className="window99">
                                <div className="row99"></div>
                            </div>
                            <div className="window99">
                                <div className="row99"></div>
                            </div>
                            <div className="window99">
                                <div className="row99"></div>
                            </div>
                            <div className="window99">
                                <div className="row99"></div>
                            </div>
                            <div className="window99">
                                <div className="row99"></div>
                            </div>
                            <div className="window99">
                                <div className="row99"></div>
                            </div>
                            <div className="window99">
                                <div className="row99"></div>
                            </div>
                            <div className="window99">
                                <div className="row99"></div>
                            </div>
                            <div className="window99">
                                <div className="row99"></div>
                            </div>
                            <div className="window99">
                                <div className="row99"></div>
                            </div>
                            <div className="door99"></div>
                        </div>
                        <div className="house109">
                            <div className="roof109"></div>
                            <div className="window109">
                                <div className="line109"></div>
                                <div className="line10109"></div>
                            </div>
                            <div className="window109">
                                <div className="line109"></div>
                                <div className="line10109"></div>
                            </div>
                            <div className="window109">
                                <div className="line109"></div>
                                <div className="line10109"></div>
                            </div>
                            <div className="window109">
                                <div className="line109"></div>
                                <div className="line10109"></div>
                            </div>
                            <div className="window109">
                                <div className="line109"></div>
                                <div className="line10109"></div>
                            </div>
                            <div className="window109">
                                <div className="line109"></div>
                                <div className="line10109"></div>
                            </div>
                            <div className="window109">
                                <div className="line109"></div>
                                <div className="line10109"></div>
                            </div>
                            <div className="door109"></div>
                        </div>
                        <div className="house119">
                            <div className="roof119"></div>
                            <div className="window119"></div>
                            <div className="window119"></div>
                            <div className="window119"></div>
                            <div className="window119"></div>
                            <div className="window119"></div>
                            <div className="window119"></div>
                            <div className="window119"></div>
                            <div className="window119"></div>
                            <div className="window119"></div>
                            <div className="window119"></div>
                            <div className="window119"></div>
                            <div className="door119"></div>
                        </div>
                        <div className="house129">
                            <div className="roof129"></div>
                            <div className="window12129"></div>
                            <div className="window129"></div>
                            <div className="window12129"></div>
                            <div className="window12129"></div>
                            <div className="window129"></div>
                            <div className="window12129"></div>
                            <div className="window12129"></div>
                            <div className="window129"></div>
                            <div className="window12129"></div>
                            <div className="window1212129"></div>
                            <div className="door129"></div>
                        </div>
                    </div>
                    <div className='ground9'>
                        <div className="sno9"></div>
                        <div className="sno19"></div>
                        <div className="sno29"></div>
                        <div className="snowman9">
                            <div className="str9">
                                <div className="stripe9"></div>
                                <div className="stripe29"></div>
                                <div className="stripe19"></div>
                            </div>
                            <div className="man9">
                                <div className="bel9">
                                    <div className="bel19"></div>
                                    <div className="bel29"></div>
                                </div>
                            </div>
                            <div className="man19">
                                <div className="button9"></div>
                                <div className="button19"></div>
                                <div className="button29"></div>
                                <div className="h9"></div>
                                <div className="han9">
                                    <div className="shuriken9"></div>
                                    <div className="shuriken19"></div>
                                    <div className="shuriken29"></div>
                                    <div className="shuriken39"></div>
                                    <div className="ha9">
                                        <div className="fi9"></div>
                                    </div>
                                </div>
                                <div className="han19">
                                    <div className="ha9">
                                        <div className="fi9"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="man29">
                                <div className="ey9"></div>
                                <div className="ey19"></div>
                            </div>
                        </div>
                        <div className="cube9">
                            <div className="fac9 one9">
                                <div className="lime9"></div>
                                <div className="lime19"></div>
                            </div>
                            <div className="fac9 two9">
                                <div className="lime9"></div>
                                <div className="lime29">
                                    <div className="lime39"></div>
                                </div>
                                <div className="lime19"></div>
                            </div>
                            <div className="fac9 three9">
                                <div className="lime9"></div>
                                <div className="lime19"></div>
                            </div>
                            <div className="fac9 four9">
                                <div className="lime9"></div>
                                <div className="lime19"></div>
                            </div>
                            <div className="fac9 five9">
                                <div className="lime9"></div>
                                <div className="lime19"></div>
                            </div>
                            <div className="fac9 six9">
                                <div className="lime9"></div>
                                <div className="lime19"></div>
                            </div>
                        </div>
                        <div className='gro9'>
                            <div className="car9">
                                <div className="up9"></div>
                            </div>
                            <div className="tree9">
                                <div className="first9"></div>
                                <div className="second9"></div>
                                <div className="third9"></div>
                                <div className="fourth9"></div>
                            </div>
                            <div className="tree9">
                                <div className="first9"></div>
                                <div className="second9"></div>
                                <div className="third9"></div>
                                <div className="fourth9"></div>
                            </div>
                            <div className="tree9">
                                <div className="first9"></div>
                                <div className="second9"></div>
                                <div className="third9"></div>
                                <div className="fourth9"></div>
                            </div>
                            <div className="tree9">
                                <div className="first9"></div>
                                <div className="second9"></div>
                                <div className="third9"></div>
                                <div className="fourth9"></div>
                            </div>
                            <div className="tree9">
                                <div className="first9"></div>
                                <div className="second9"></div>
                                <div className="third9"></div>
                                <div className="fourth9"></div>
                            </div>
                            <div className="tree9">
                                <div className="first9"></div>
                                <div className="second9"></div>
                                <div className="third9"></div>
                                <div className="fourth9"></div>
                            </div>
                            <div className="tree9">
                                <div className="first9"></div>
                                <div className="second9"></div>
                                <div className="third9"></div>
                                <div className="fourth9"></div>
                            </div>
                            <div className="tree9">
                                <div className="first9"></div>
                                <div className="second9"></div>
                                <div className="third9"></div>
                                <div className="fourth9"></div>
                            </div>
                            <div className="tree9">
                                <div className="first9"></div>
                                <div className="second9"></div>
                                <div className="third9"></div>
                                <div className="fourth9"></div>
                            </div>
                            <div className="tree9">
                                <div className="first9"></div>
                                <div className="second9"></div>
                                <div className="third9"></div>
                                <div className="fourth9"></div>
                            </div>
                            <div className="tree9">
                                <div className="first9"></div>
                                <div className="second9"></div>
                                <div className="third9"></div>
                                <div className="fourth9"></div>
                            </div>
                            <div className="tree9">
                                <div className="first9"></div>
                                <div className="second9"></div>
                                <div className="third9"></div>
                                <div className="fourth9"></div>
                            </div>
                            <div className="tree9">
                                <div className="first9"></div>
                                <div className="second9"></div>
                                <div className="third9"></div>
                                <div className="fourth9"></div>
                            </div>
                            <div className="tree9">
                                <div className="first9"></div>
                                <div className="second9"></div>
                                <div className="third9"></div>
                                <div className="fourth9"></div>
                            </div>
                            <div className="tree9">
                                <div className="first9"></div>
                                <div className="second9"></div>
                                <div className="third9"></div>
                                <div className="fourth9"></div>
                            </div>
                            <div className="tree9">
                                <div className="first9"></div>
                                <div className="second9"></div>
                                <div className="third9"></div>
                                <div className="fourth9"></div>
                            </div>
                            <div className="tree9">
                                <div className="first9"></div>
                                <div className="second9"></div>
                                <div className="third9"></div>
                                <div className="fourth9"></div>
                            </div>
                            <div className="tree9">
                                <div className="first9"></div>
                                <div className="second9"></div>
                                <div className="third9"></div>
                                <div className="fourth9"></div>
                            </div>
                            <div className="tree9">
                                <div className="first9"></div>
                                <div className="second9"></div>
                                <div className="third9"></div>
                                <div className="fourth9"></div>
                            </div>
                            <div className="tree9">
                                <div className="first9"></div>
                                <div className="second9"></div>
                                <div className="third9"></div>
                                <div className="fourth9"></div>
                            </div>
                            <div className="tree9">
                                <div className="first9"></div>
                                <div className="second9"></div>
                                <div className="third9"></div>
                                <div className="fourth9"></div>
                            </div>
                            <div className="tree9">
                                <div className="first9"></div>
                                <div className="second9"></div>
                                <div className="third9"></div>
                                <div className="fourth9"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
                    `}</pre><pre><h1>CSS</h1>{` .sky9 {
    background-color: #12122d;
    top: 1500px;
    left: 0px;
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
}

.star9 {
    background-color: #FFF;
    box-shadow: 0px 0px 15px #FFF;
    border: 0px solid transparent;
    width: 2px;
    height: 2px;
    left: 300px;
    top: 100px;
    border-radius: 50%;
    position: absolute;
    animation: 12s sparkle9 -3.4s infinite;
}

.star19 {
    background-color: #FFF;
    box-shadow: 0px 0px 15px #FFF;
    border: 0px solid transparent;
    width: 2px;
    height: 2px;
    left: 400px;
    top: 250px;
    border-radius: 50%;
    position: absolute;
    animation: 4s sparkle9 -1.4s infinite;
}

.star29 {
    background-color: #FFF;
    box-shadow: 0px 0px 15px #FFF;
    border: 0px solid transparent;
    width: 2px;
    height: 2px;
    left: 200px;
    top: 130px;
    border-radius: 50%;
    position: absolute;
    animation: 6s sparkle9 -3.4s infinite;
}

.star39 {
    background-color: #FFF;
    box-shadow: 0px 0px 15px #FFF;
    border: 0px solid transparent;
    width: 2px;
    height: 2px;
    left: 700px;
    top: 300px;
    border-radius: 50%;
    position: absolute;
    animation: 8s sparkle9 -2.4s infinite;
}

.star49 {
    background-color: #FFF;
    box-shadow: 0px 0px 15px #FFF;
    border: 0px solid transparent;
    width: 2px;
    height: 2px;
    left: 800px;
    top: 200px;
    border-radius: 50%;
    position: absolute;
    animation: 7s sparkle9 -2.4s infinite;
}

.star59 {
    background-color: #FFF;
    box-shadow: 0px 0px 15px #FFF;
    border: 0px solid transparent;
    width: 2px;
    height: 2px;
    left: 600px;
    top: 400px;
    border-radius: 50%;
    position: absolute;
    animation: 12s sparkle9 -3.4s infinite;
}

.star69 {
    background-color: #FFF;
    box-shadow: 0px 0px 15px #FFF;
    border: 0px solid transparent;
    width: 2px;
    height: 2px;
    left: 800px;
    top: 150px;
    border-radius: 50%;
    position: absolute;
    animation: 12s sparkle9 -3.4s infinite;
}

.star79 {
    background-color: #FFF;
    box-shadow: 0px 0px 15px #FFF;
    border: 0px solid transparent;
    width: 2px;
    height: 2px;
    left: 900px;
    top: 70px;
    border-radius: 50%;
    position: absolute;
    animation: 6s sparkle9 -3.4s infinite;
}

.star89 {
    background-color: #FFF;
    box-shadow: 0px 0px 15px #FFF;
    border: 0px solid transparent;
    width: 2px;
    height: 2px;
    left: 500px;
    top: 400px;
    border-radius: 50%;
    position: absolute;
    animation: 12s sparkle9 -3.4s infinite;
}

.star99 {
    background-color: #FFF;
    box-shadow: 0px 0px 15px #FFF;
    border: 0px solid transparent;
    width: 2px;
    height: 2px;
    left: 1000px;
    top: 200px;
    border-radius: 50%;
    position: absolute;
    animation: 6s sparkle9 -3.4s infinite;
}

.star109 {
    background-color: #FFF;
    box-shadow: 0px 0px 15px #FFF;
    border: 0px solid transparent;
    width: 2px;
    height: 2px;
    left: 800px;
    top: 250px;
    border-radius: 50%;
    position: absolute;
    animation: 12s sparkle9 -1.4s infinite;
}

.star119 {
    background-color: #FFF;
    box-shadow: 0px 0px 15px #FFF;
    border: 0px solid transparent;
    width: 2px;
    height: 2px;
    left: 200px;
    top: 300px;
    border-radius: 50%;
    position: absolute;
    animation: 12s sparkle9 -3.4s infinite;
}

.star129 {
    background-color: #FFF;
    box-shadow: 0px 0px 15px #FFF;
    border: 0px solid transparent;
    width: 2px;
    height: 2px;
    left: 1100px;
    top: 350px;
    border-radius: 50%;
    position: absolute;
    animation: 10s sparkle9 -3.4s infinite;
}

.star139 {
    background-color: #FFF;
    box-shadow: 0px 0px 15px #FFF;
    border: 0px solid transparent;
    width: 2px;
    height: 2px;
    left: 900px;
    top: 330px;
    border-radius: 50%;
    position: absolute;
    animation: 10s sparkle9 -3.4s infinite;
}

.star149 {
    background-color: #FFF;
    box-shadow: 0px 0px 15px #FFF;
    border: 0px solid transparent;
    width: 2px;
    height: 2px;
    left: 700px;
    top: 350px;
    border-radius: 50%;
    position: absolute;
    animation: 8s sparkle9 -3.4s infinite;
}

.star129 {
    background-color: #FFF;
    box-shadow: 0px 0px 15px #FFF;
    border: 0px solid transparent;
    width: 2px;
    height: 2px;
    left: 600px;
    top: 100px;
    border-radius: 50%;
    position: absolute;
    animation: 10s sparkle9 -3.4s infinite;
}

.star139 {
    background-color: #FFF;
    box-shadow: 0px 0px 15px #FFF;
    border: 0px solid transparent;
    width: 2px;
    height: 2px;
    left: 850px;
    top: 130px;
    border-radius: 50%;
    position: absolute;
    animation: 10s sparkle9 -3.4s infinite;
}

.star149 {
    background-color: #FFF;
    box-shadow: 0px 0px 15px #FFF;
    border: 0px solid transparent;
    width: 2px;
    height: 2px;
    left: 300px;
    top: 130px;
    border-radius: 50%;
    position: absolute;
    animation: 10s sparkle9 -3.4s infinite;
}

.star159 {
    background-color: #FFF;
    box-shadow: 0px 0px 15px #FFF;
    border: 0px solid transparent;
    width: 2px;
    height: 2px;
    left: 850px;
    top: 320px;
    border-radius: 50%;
    position: absolute;
    animation: 10s sparkle9 -3.4s infinite;
}

.star169 {
    background-color: #FFF;
    box-shadow: 0px 0px 15px #FFF;
    border: 0px solid transparent;
    width: 2px;
    height: 2px;
    left: 870px;
    top: 140px;
    border-radius: 50%;
    position: absolute;
    animation: 10s sparkle9 -3.4s infinite;
}

.star179 {
    background-color: #FFF;
    box-shadow: 0px 0px 15px #FFF;
    border: 0px solid transparent;
    width: 2px;
    height: 2px;
    left: 1000px;
    top: 180px;
    border-radius: 50%;
    position: absolute;
    animation: 10s sparkle9 -3.4s infinite;
}

.star189 {
    background-color: #FFF;
    box-shadow: 0px 0px 15px #FFF;
    border: 0px solid transparent;
    width: 2px;
    height: 2px;
    left: 340px;
    top: 120px;
    border-radius: 50%;
    position: absolute;
    animation: 13s sparkle9 -3.4s infinite;
}

.star199 {
    background-color: #FFF;
    box-shadow: 0px 0px 15px #FFF;
    border: 0px solid transparent;
    width: 2px;
    height: 2px;
    left: 830px;
    top: 220px;
    border-radius: 50%;
    position: absolute;
    animation: 9s sparkle9 -3.4s infinite;
}

.star209 {
    background-color: #FFF;
    box-shadow: 0px 0px 15px #FFF;
    border: 0px solid transparent;
    width: 2px;
    height: 2px;
    left: 660px;
    top: 280px;
    border-radius: 50%;
    position: absolute;
    animation: 13s sparkle9 -3.4s infinite;
}

.star219 {
    background-color: #FFF;
    box-shadow: 0px 0px 15px #FFF;
    border: 0px solid transparent;
    width: 2px;
    height: 2px;
    left: 1200px;
    top: 280px;
    border-radius: 50%;
    position: absolute;
    animation: 13s sparkle9 -3.4s infinite;
}

.star229 {
    background-color: #FFF;
    box-shadow: 0px 0px 15px #FFF;
    border: 0px solid transparent;
    width: 2px;
    height: 2px;
    left: 1260px;
    top: 180px;
    border-radius: 50%;
    position: absolute;
    animation: 13s sparkle9 -3.4s infinite;
}

.star239 {
    background-color: #FFF;
    box-shadow: 0px 0px 15px #FFF;
    border: 0px solid transparent;
    width: 2px;
    height: 2px;
    left: 1350px;
    top: 360px;
    border-radius: 50%;
    position: absolute;
    animation: 13s sparkle9 -3.4s infinite;
}

@keyframes sparkle9 {
    0% {
        opacity: 1;
    }

    50% {
        opacity: .3;
    }

    100% {
        opacity: 1
    }
}

.moon9 {
    background-color: #FCFCFC;
    border-radius: 50%;
    width: 97px;
    height: 100px;
    position: absolute;
    right: 200px;
    box-shadow: 0px 0px 26px #f4f2d9;
    border-right: 7px solid #E6E6E6;
    border-bottom: 7px solid #E6E6E6;
}

.crater9 {
    background-color: #E2E3E4;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    position: absolute;
    top: 30px;
    left: 40px;
    transform: rotate(-20deg);
    border-right: 5px solid #CFCFCF;
    border-bottom: 5px solid #CFCFCF;
}

.crater19 {
    background-color: #E2E3E4;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    position: absolute;
    top: 45px;
    left: 60px;
    transform: rotate(-20deg);
    border-right: 4px solid #CFCFCF;
    border-bottom: 4px solid #CFCFCF;
}

.crater29 {
    background-color: #E2E3E4;
    border-radius: 50%;
    width: 8px;
    height: 6px;
    position: absolute;
    top: 17px;
    left: 15px;
    transform: rotate(-20deg);
    border-right: 5px solid #CFCFCF;
    border-bottom: 5px solid #CFCFCF;
}

.crater39 {
    background-color: #E2E3E4;
    border-radius: 50%;
    width: 5px;
    height: 5px;
    position: absolute;
    top: 70px;
    left: 25px;
    transform: rotate(-20deg);
    border-right: 3px solid #CFCFCF;
    border-bottom: 3px solid #CFCFCF;
}

.crater49 {
    background-color: #E2E3E4;
    border-radius: 50%;
    width: 5px;
    height: 5px;
    position: absolute;
    top: 10px;
    left: 60px;
    transform: rotate(-20deg);
    border-right: 3px solid #CFCFCF;
    border-bottom: 3px solid #CFCFCF;
}

.sn9:before {
    content: "*";
    z-index: 9;
    font-size: 20px;
    position: fixed;
    top: 50%;
    left: -50%;
    height: 20px;
    width: 20px;
    background: white;
    border-radius: 50%;
    text-shadow: -12vmax 78vmax 2px white, -102vmax 38vmax 2px white, -22vmax 8vmax 2px white, 0px 0px white, -122vmax 58vmax 2px white, 59vmax -38vmax 0px white, -125vmax -25vmax 2px white, -2vmax 0vmax 2px white, -80vmax 53vmax 3px white, 19vmax -137vmax 0px white, -24vmax 99vmax 0px white, -112vmax 121vmax 0px white, 112vmax 22vmax 3px white, -26vmax -115vmax 1px white, -146vmax 94vmax 3px white, 113vmax -13vmax 3px white, 78vmax -83vmax 0px white, 144vmax 76vmax 3px white, 109vmax -12vmax 1px white, -16vmax 60vmax 2px white, -47vmax -40vmax 3px white, -43vmax -113vmax 3px white, -33vmax -107vmax 2px white, -115vmax -32vmax 1px white, -97vmax 141vmax 0px white, 135vmax 1vmax 2px white, -59vmax 3vmax 1px white, 125vmax 134vmax 2px white, -14vmax -140vmax 1px white, 49vmax -148vmax 2px white, -62vmax -77vmax 1px white, -60vmax 123vmax 2px white, -131vmax 78vmax 0px white, -43vmax 95vmax 2px white, -99vmax 80vmax 2px white, 70vmax 31vmax 3px white, 44vmax -58vmax 0px white, -35vmax -130vmax 0px white, -77vmax 69vmax 3px white, 0vmax 130vmax 1px white, -98vmax 25vmax 2px white, 84vmax -59vmax 2px white, 138vmax -7vmax 1px white, 92vmax -82vmax 1px white, 66vmax -134vmax 3px white, 123vmax -131vmax 3px white, -55vmax -100vmax 0px white, -141vmax 141vmax 2px white, -26vmax 150vmax 2px white, -124vmax -72vmax 2px white, -6vmax -71vmax 1px white, -18vmax 74vmax 1px white, 77vmax -37vmax 0px white, -45vmax -7vmax 3px white, -16vmax 21vmax 3px white, -38vmax 100vmax 1px white, -20vmax 13vmax 3px white, -9vmax -39vmax 2px white, 5vmax 32vmax 0px white, 82vmax 88vmax 1px white, 105vmax 106vmax 2px white, -123vmax -73vmax 0px white, 111vmax 103vmax 1px white, 28vmax 44vmax 3px white, -13vmax -87vmax 0px white, -141vmax -39vmax 2px white, 143vmax -121vmax 3px white, -133vmax 22vmax 0px white, -140vmax -56vmax 2px white, 92vmax -143vmax 0px white, -100vmax 46vmax 2px white, 131vmax -39vmax 2px white, 120vmax 58vmax 1px white, 139vmax -68vmax 1px white, 128vmax 37vmax 0px white, -137vmax -103vmax 1px white, 83vmax -56vmax 0px white, 137vmax 116vmax 2px white, -43vmax 125vmax 0px white, -40vmax -15vmax 2px white, 42vmax 101vmax 2px white, 149vmax -137vmax 3px white, 104vmax -148vmax 0px white, -65vmax 19vmax 2px white, 48vmax 78vmax 3px white, -63vmax 28vmax 1px white, 94vmax -129vmax 1px white, -27vmax 108vmax 0px white, -11vmax 67vmax 1px white, 114vmax 18vmax 2px white, 59vmax 96vmax 1px white, -46vmax -6vmax 1px white, 4vmax 28vmax 0px white, -116vmax -63vmax 1px white, 87vmax -62vmax 2px white, -27vmax 111vmax 1px white, 36vmax -51vmax 3px white, 9vmax -51vmax 3px white, 53vmax -111vmax 0px white, 22vmax -146vmax 0px white, -115vmax -131vmax 2px white, -146vmax 31vmax 0px white, 129vmax 2vmax 0px white, 106vmax 76vmax 2px white, -121vmax 106vmax 2px white, 55vmax -40vmax 1px white, -3vmax 70vmax 1px white, 55vmax -117vmax 1px white, -109vmax 1vmax 2px white, 5vmax 37vmax 0px white, -103vmax -86vmax 1px white, 78vmax 52vmax 3px white, -45vmax -142vmax 0px white, 113vmax -102vmax 3px white, -43vmax 147vmax 3px white, -108vmax 1vmax 1px white, 86vmax -139vmax 2px white, -137vmax -39vmax 0px white, -132vmax 122vmax 3px white, 98vmax -9vmax 3px white, -81vmax -77vmax 1px white, 93vmax 74vmax 3px white, 116vmax -118vmax 3px white, 61vmax -12vmax 0px white, -102vmax 149vmax 3px white, 69vmax 46vmax 0px white, -98vmax -80vmax 2px white, 27vmax 101vmax 2px white, -104vmax 31vmax 0px white, 23vmax 2vmax 1px white, -4vmax 14vmax 0px white, -59vmax 138vmax 1px white, 6vmax -62vmax 2px white, -46vmax 5vmax 2px white, 131vmax 17vmax 3px white, -76vmax -5vmax 3px white, -120vmax 47vmax 2px white, 118vmax -17vmax 1px white, -148vmax 137vmax 1px white, -139vmax -79vmax 2px white, 19vmax -99vmax 2px white, 85vmax 103vmax 3px white, -36vmax 108vmax 1px white, -132vmax -37vmax 0px white, 126vmax 121vmax 3px white, -49vmax -134vmax 2px white, 73vmax 89vmax 2px white, 79vmax -67vmax 2px white, 100vmax -79vmax 3px white, -23vmax 89vmax 3px white, -124vmax 87vmax 0px white, -47vmax -100vmax 1px white, 76vmax 80vmax 3px white, 59vmax -125vmax 3px white, 93vmax -146vmax 2px white, 15vmax -77vmax 2px white, 149vmax 98vmax 1px white, 48vmax 105vmax 3px white, 99vmax 72vmax 1px white, -117vmax -39vmax 1px white, 44vmax 109vmax 1px white, -102vmax -16vmax 2px white, 94vmax 133vmax 3px white, -136vmax 25vmax 0px white, 142vmax 71vmax 3px white, 142vmax -127vmax 1px white, 4vmax -19vmax 3px white, 87vmax 101vmax 1px white, -12vmax 82vmax 0px white, 30vmax -91vmax 0px white, -48vmax 16vmax 3px white, 35vmax -65vmax 0px white, 60vmax -83vmax 2px white, -121vmax 136vmax 1px white, -47vmax 34vmax 3px white, -149vmax -95vmax 0px white, 63vmax 83vmax 2px white, 41vmax -60vmax 3px white, -108vmax 142vmax 2px white, 2vmax -140vmax 3px white, 122vmax -104vmax 2px white, -83vmax 40vmax 3px white, 91vmax -41vmax 2px white, 125vmax 90vmax 3px white, -45vmax 68vmax 1px white, -77vmax 0vmax 3px white, 10vmax -34vmax 3px white, 39vmax 82vmax 2px white, 128vmax 77vmax 0px white, -77vmax 7vmax 2px white, -34vmax -136vmax 0px white, -12vmax -10vmax 0px white, 52vmax -149vmax 3px white, 23vmax 143vmax 0px white, 57vmax 96vmax 1px white, 110vmax 143vmax 3px white, 67vmax 51vmax 2px white, -113vmax -2vmax 1px white, -130vmax 95vmax 3px white, 65vmax -139vmax 2px white, -18vmax 21vmax 3px white, -128vmax 142vmax 0px white, -119vmax 96vmax 3px white, -9vmax 129vmax 0px white, 58vmax 28vmax 1px white, -32vmax -65vmax 1px white, -4vmax 13vmax 2px white, -93vmax 88vmax 2px white, 123vmax -20vmax 2px white, -38vmax -106vmax 2px white, 124vmax 7vmax 2px white, 19vmax 5vmax 3px white, 71vmax 112vmax 3px white, 103vmax -126vmax 1px white, 79vmax -136vmax 0px white, 0vmax -86vmax 1px white, 129vmax -76vmax 0px white, -144vmax -40vmax 0px white, 92vmax 80vmax 0px white, 35vmax 41vmax 0px white, 20vmax 114vmax 1px white, -76vmax -82vmax 0px white, 110vmax 121vmax 3px white, -22vmax -2vmax 0px white, -1vmax 21vmax 1px white, 58vmax 130vmax 3px white, -129vmax 129vmax 1px white, 21vmax -30vmax 1px white, 82vmax 6vmax 2px white, 65vmax 21vmax 1px white, -139vmax 144vmax 0px white, -97vmax 19vmax 0px white, 118vmax -79vmax 1px white, -127vmax 115vmax 1px white, -148vmax -141vmax 1px white, -88vmax -38vmax 2px white, 138vmax -11vmax 3px white, 33vmax -15vmax 0px white, 51vmax 61vmax 0px white, 66vmax 112vmax 2px white, 30vmax 65vmax 0px white, -114vmax 31vmax 2px white, 80vmax -60vmax 3px white, 34vmax 13vmax 1px white, 6vmax 128vmax 2px white, -19vmax 47vmax 3px white, -87vmax -91vmax 2px white, -90vmax -90vmax 1px white, -109vmax -20vmax 3px white, 115vmax -66vmax 1px white, 14vmax -29vmax 3px white, 106vmax 72vmax 0px white, 54vmax 98vmax 3px white, -147vmax -112vmax 3px white, 99vmax 57vmax 3px white, -27vmax 36vmax 3px white, 104vmax -85vmax 2px white, 24vmax 4vmax 2px white, 30vmax -23vmax 0px white, -23vmax 84vmax 0px white, -88vmax 15vmax 2px white, -18vmax 12vmax 2px white, 108vmax -117vmax 3px white, -26vmax 26vmax 1px white, 144vmax -78vmax 2px white, -64vmax -102vmax 1px white, 110vmax -143vmax 3px white, -120vmax 29vmax 2px white, 118vmax 147vmax 1px white, -69vmax -96vmax 1px white, -146vmax 138vmax 3px white, 32vmax -17vmax 3px white, -48vmax -82vmax 2px white, 123vmax 54vmax 3px white, 21vmax 114vmax 2px white, 28vmax 119vmax 1px white, 104vmax -7vmax 2px white, 97vmax 80vmax 2px white, -55vmax 83vmax 1px white, 80vmax -133vmax 0px white, 6vmax -80vmax 1px white, 5vmax -61vmax 0px white, 26vmax 82vmax 3px white, 118vmax 82vmax 0px white, 40vmax 15vmax 3px white, -122vmax -66vmax 2px white, 126vmax -92vmax 3px white, -5vmax 66vmax 2px white, -93vmax -91vmax 0px white, 36vmax 100vmax 3px white, -107vmax -28vmax 1px white, -9vmax 94vmax 3px white, 146vmax 77vmax 0px white, -128vmax -123vmax 1px white, 59vmax 66vmax 1px white, 34vmax -48vmax 2px white, -60vmax 2vmax 3px white, 37vmax 46vmax 3px white, -75vmax -129vmax 1px white, 89vmax 128vmax 1px white, 114vmax 70vmax 1px white, -80vmax 51vmax 2px white, -6vmax 145vmax 3px white, -78vmax 64vmax 3px white;
    animation: snow9 100s linear 0s infinite normal;
}

@keyframes snow9 {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.ground9 {
    height: 300px;
    background: white;
    bottom: 0%;
    top: 590px;
    z-index: 3;
    position: absolute;
    width: 100%;
}

.gro9 {
    background: grey;
    width: 100%;
    height: 30px;
}


.car9:after,
.car9:before {
    content: '';
    position: absolute;
    background: #2f2546;
    width: 10px;
    height: 10px;
    bottom: -8px;
    left: 20%;
    border-radius: 50%;
    animation: car_c_shake9 0.6s 4;
}

.car9:after {
    left: 70%;
}

.car9 .up9 {
    position: absolute;
    background: #2f2546;
    width: 50%;
    height: 15px;
    bottom: 100%;
    left: 30%;
    border-radius: 10px 20px 0px 0px;
}

@keyframes car_shake9 {
    0% {
        bottom: 186px;
    }

    50% {
        bottom: 189px;
    }

    100% {
        bottom: 186px;
    }
}

@keyframes car_c_shake9 {
    0% {
        bottom: -5px;
    }

    50% {
        bottom: -8px;
    }

    100% {
        bottom: -5px;
    }
}

@keyframes car_pos9 {
    0% {
        right: 2000px;
    }

    50% {
        transform: scaleX(1);
        right: -80px;
    }

    51% {
        transform: scaleX(-1);
    }

    100% {
        right: 2000px;
        transform: scaleX(-1);
    }
}

.car9 {
    position: absolute;
    width: 60px;
    top: 0px;
    height: 15px;
    background: #2f2546;
    animation: car_shake 0.6s infinite, car_pos9 30s infinite;
    animation-timing-function: linear;
    border-radius: 2px 10px 5px 5px;
    animation-fill-mode: forwards;
    box-sizing: border-box;
}

.wra9 {
    position: absolute;
    top: 400px;
    height: 200px;
    min-width: 1440px;
    max-width: 100%;
    z-index: 2;
}

.window9 {
    background-color: #C4CDC9;
    width: 15px;
    border: 2px solid white;
    height: 30px;
    margin: 15% 5% 0% 5%;
    display: inline-block;
    position: relative;
    top: -40px
}

.door9 {
    height: 40px;
    width: 18px;
    background-color: #543816;
    border: 5px solid #12232D;
    float: right;
    position: relative;
    margin-right: 7px;
    top: -20px
}

.roof9 {
    left: -20px;
    position: relative;
    display: inline-block;
    float: left;
    border-bottom: 40px solid #454948;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    height: 0px;
    width: 30px;
    top: -40px;
}

.chimney9 {
    background-color: #1c282d;
    width: 10px;
    height: 20px;
    top: -10px;
    position: absolute;
}

.row9 {
    width: 100%;
    top: 50%;
    position: relative;
    background-color: white;
    height: 1px;
}

.fonta9 {
    font-size: 100px;
    font-family: "Comic Sans MS", cursive, sans-serif;
    margin: 50px;
    z-index: 13;
    transform: rotate(-7deg);
    color: #992c2c;
    text-shadow: 0 -5px 2px white
}

.mid9 {
    margin-left: 500px;
}

.house19 {
    background-color: #1f547c;
    top: 40px;
    height: 150px;
    width: 120px;
    position: relative;
    margin: 0;
    float: left;
    display: inline-block;
}

.house9 {
    background-color: #883A30;
    display: inline-block;
    position: relative;
    height: 180px;
    width: 100px;
    margin: 0;
    float: left;
    top: 20px;
}

.roof19 {
    position: relative;
    display: inline-block;
    float: left;
    border-bottom: 30px solid #280613;
    border-left: 20px solid transparent;
    border-right: 10px solid transparent;
    height: 50px;
    width: 90px;
    top: -80px;
}

.window19 {
    width: 10px;
    height: 30px;
    margin: 3px;
    position: relative;
    top: -70px;
    float: left;
    background-color: #C4CDC9;
    border: 2px solid #280613;
    display: inline-block;
}

.window1139 {
    top: -70px;
    background-color: #C4CDC9;
    border: 2px solid #280613;
    display: inline-block;
    position: relative;
    margin: 2px;
    width: 35px;
    height: 30px;
}

.door19 {
    top: -50px;
    position: relative;
    height: 40px;
    width: 15px;
    left: 0px;
    background-color: #280613;
    border: 5px solid #12232D;
    display: inline-block;
}

.house29 {
    width: 80px;
    background-color: #9b7c45;
    display: inline-block;
    position: relative;
    height: 210px;
    margin: 0;
    top: -20px;
    float: left;
}

.roof29 {
    background: #563e27;
    display: inline-block;
    height: 35px;
    position: relative;
    width: 80px;
}

.roof29:before {
    border-bottom: 35px solid #563e27;
    border-left: 40px solid transparent;
    border-right: 40px solid transparent;
    content: "";
    height: 0;
    left: 0;
    position: absolute;
    top: -35px;
    width: 0;
}

.circle9 {
    width: 20px;
    height: 40px;
    margin: auto;
    top: -17px;
    border: 2px solid #1c282d;
    position: relative;
    border-radius: 50%;
    background-color: #C2CBC5;
}

.window29 {
    width: 15px;
    height: 25px;
    display: inline-block;
    float: left;
    background-color: #C3CCC7;
    border: 1px solid #676684;
    margin: 8px 2.5px 8px 2px;
}

.window229 {
    width: 30px;
    height: 35px;
    display: inline-block;
    float: left;
    background-color: #C3CCC7;
    border: 1px solid #676684;
    margin: 2px;
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
}

.gate19 {
    width: 30px;
    height: 50px;
    border: .5px solid black;
    background-color: #3d2e14;
    display: inline-block;
    position: relative;
    float: left;
    left: 9px;
}

.gate9 {
    width: 30px;
    height: 50px;
    border: 1px solid black;
    background-color: #3d2e14;
    display: inline-block;
    position: relative;
    left: 9px;
    float: left;
}

.house39 {
    background-color: #1b2b20;
    display: inline-block;
    width: 90px;
    height: 190px;
    float: left;
}

.roof39 {
    width: 40px;
    height: 45px;
    background-color: #7f783f;
    position: relative;
    left: 25px;
    top: -63px;
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
}

.roof349 {
    background-color: #a1c4c3;
    left: 10px;
    position: absolute;
    top: 10px;
    width: 20px;
    height: 25px;
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
}

.roof339 {
    position: relative;
    display: inline-block;
    float: left;
    border-bottom: 30px solid #7f783f;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    height: 0px;
    width: 50px;
    top: -73px;
}

.window39 {
    display: inline-block;
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
    border-top: 8px solid #7f783f;
    top: -60px;
    position: relative;
    width: 18px;
    height: 35px;
    margin: 4.5px;
    background-color: #a1c4c3;
}

.house49 {
    background-color: #b2860c;
    width: 140px;
    top: 30px;
    position: relative;
    height: 160px;
    float: left;
    margin: 0;
    padding: 10px;
    display: inline-block;
}

.window49 {
    width: 25px;
    height: 30px;
    display: inline-block;
    float: left;
    position: relative;
    border-top: 7px solid #2c4413;
    border-bottom: 7px solid #2c4413;
    margin: 0px 10px;
    background-color: #ceefeb;
}

.line49 {
    background-color: #2c4413;
    width: 100%;
    margin: auto;
    height: 2px;
    position: absolute;
    top: 10px;
}

.line449 {
    background-color: #2c4413;
    width: 28px;
    height: 2px;
    position: relative;
    top: 14px;
    transform: rotate(90deg);
}

.roof49 {
    position: absolute;
    display: inline-block;
    float: left;
    left: -2.7px;
    border-bottom: 30px solid #112103;
    border-left: 36px solid transparent;
    border-right: 36px solid transparent;
    height: 50px;
    width: 90px;
    top: -80px;
}


.house59 {
    background-color: #103a37;
    width: 100px;
    position: relative;
    height: 190px;
    float: left;
    margin: 0;
    padding: 10px;
    display: inline-block;
}

.window59 {
    background-color: #A3C3C1;
    border: 1px solid brown;
    width: 10px;
    height: 40px;
    margin: 10px 2px 1px 2px;
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
    display: inline-block;
    float: left;
}

.door59 {
    top: 30px;
    position: relative;
    width: 20px;
    height: 38px;
    border: 6px solid #662e18;
    background-color: #352811;
    display: inline-block;
    float: left;
}

.roof59 {
    position: absolute;
    display: inline-block;
    float: left;
    left: -6px;
    border-bottom: 50px solid #662e18;
    border-left: 60px solid transparent;
    border-right: 50px solid transparent;
    height: 30px;
    width: 20px;
    top: -80px;
}

.chimney59 {
    background-color: #1c282d;
    width: 10px;
    height: 20px;
    left: -10px;
    top: 24px;
    position: absolute;
}


.house69 {
    background-color: #ba5c44;
    width: 77px;
    top: -72px;
    position: relative;
    height: 230px;
    float: left;
    margin: 0;
    padding: 12px;
    border-top: 12px solid #4c2e36;
    display: inline-block;
}

.window69 {
    background-color: #C4CDC9;
    width: 15px;
    border: 2px solid black;
    height: 30px;
    float: left;
    margin: 15% 4% 0% 4%;
    display: inline-block;
    position: relative;
    top: -10px
}

.row69 {
    width: 100%;
    top: 50%;
    position: relative;
    background-color: black;
    height: 2px;
}

.door69 {
    top: 10px;
    position: relative;
    width: 20px;
    height: 38px;
    border: 3px solid #273d0f;
    background-color: #0f313d;
    display: inline-block;
    float: left;
}

.house79 {
    background-color: #6E6154;
    width: 90px;
    top: -25px;
    position: relative;
    height: 190px;
    float: left;
    margin: 0;
    padding: 15px;
    display: inline-block;
}

.window79 {
    width: 30px;
    height: 40px;
    margin: 5px;
    position: relative;
    float: left;
    background-color: #C4CDC9;
    border: 2px solid #5b1111;
    display: inline-block;
}

.row79 {
    background-color: #5b1111;
    margin: 6px 0px 6px 0px;
    position: relative;
    width: 100%;
    height: 2px;
}

.row779 {
    background-color: #5b1111;
    position: relative;
    float: left;
    width: 2px;
    height: 100%;
    top: -38px;
    margin-left: 8px;
}

.door79 {
    left: 30px;
    position: relative;
    width: 20px;
    height: 38px;
    border: 3px solid #273d0f;
    background-color: #603b1e;
    display: inline-block;
    float: left;
}

.roof79 {
    left: -0px;
    position: absolute;
    display: inline-block;
    float: left;
    border-bottom: 40px solid #421510;
    border-left: 46px solid transparent;
    border-right: 46px solid transparent;
    height: 0px;
    width: 30px;
    top: -40px;
}


.house89 {
    background-color: #8c6943;
    width: 80px;
    top: 35px;
    position: relative;
    height: 150px;
    float: left;
    margin: 0;
    padding: 5px;
    display: inline-block;
}

.roof89 {
    left: -0px;
    position: absolute;
    display: inline-block;
    float: left;
    border-bottom: 40px solid #10173a;
    border-left: 46px solid transparent;
    border-right: 46px solid transparent;
    height: 0px;
    width: 0px;
    top: -40px;
}

.chimney89 {
    background-color: #1c282d;
    width: 12px;
    height: 20px;
    top: 0px;
    left: 5px;
    position: absolute;
}

.window89 {
    background-color: #A3C3C1;
    border: 1px solid brown;
    width: 10px;
    height: 30px;
    margin: 3px 1.5px 1px 1.5px;
    display: inline-block;
    float: left;
}

.window889 {
    background-color: #A3C3C1;
    border: 1px solid brown;
    width: 40px;
    height: 30px;
    margin: 3px 1.5px 1px 1.5px;
    display: inline-block;
    float: left;
}

.door89 {
    top: 3px;
    position: relative;
    width: 20px;
    height: 38px;
    border: 2px solid #662e18;
    background-color: #352811;
    display: inline-block;
    left: 5px;
}


.house99 {
    background-color: #593939;
    width: 100px;
    top: -20px;
    position: relative;
    height: 200px;
    float: left;
    margin: 0;
    padding: 10px;
    display: inline-block;
}

.roof99 {
    left: 0px;
    position: absolute;
    display: inline-block;
    float: left;
    border-bottom: 40px solid #2d1515;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    height: 0px;
    width: 60px;
    top: -40px;
}

.door99 {
    top: -7px;
    position: relative;
    width: 20px;
    height: 38px;
    border: 2px solid #662e18;
    background-color: #2d1515;
    display: inline-block;
    left: 5px;
}

.window99 {
    background-color: #C4CDC9;
    width: 15px;
    border: 2px solid #122b10;
    height: 30px;
    margin: 15% 5% 0% 5%;
    display: inline-block;
    position: relative;
    border-top-right-radius: 30%;
    border-top-left-radius: 30%;
    top: -20px
}

.row99 {
    width: 100%;
    top: 50%;
    position: relative;
    background-color: #122b10;
    height: 1px;
}

.house109 {
    background-color: #122b10;
    width: 80px;
    top: 5px;
    position: relative;
    height: 165px;
    float: left;
    margin: 0;
    padding: 10px;
    display: inline-block;
}

.roof109 {
    left: 0px;
    position: absolute;
    display: inline-block;
    float: left;
    border-bottom: 40px solid #897e7e;
    border-left: 10px solid transparent;
    border-right: 30px solid transparent;
    height: 0px;
    width: 60px;
    top: -40px;
}

.door109 {
    top: 7px;
    position: relative;
    width: 20px;
    height: 45px;
    border: 2px solid #662e18;
    background-color: #102033;
    display: inline-block;
    left: 10px;
}

.window109 {
    left: 5px;
    width: 25px;
    height: 30px;
    display: inline-block;
    float: left;
    position: relative;
    margin: 5px;
    background-color: #ceefeb;
}

.line109 {
    background-color: #2c4413;
    width: 100%;
    margin: auto;
    height: 2px;
    position: absolute;
    top: 15px;
}

.line10109 {
    background-color: #2c4413;
    width: 2px;
    height: 100%;
    position: relative;
    left: 12px;
}


.house119 {
    background-color: brown;
    width: 119px;
    top: 45px;
    position: relative;
    height: 125px;
    float: right;
    margin: 0;
    padding: 10px;
    display: inline-block;
}

.roof119 {
    position: absolute;
    display: inline-block;
    float: left;
    border-bottom: 50px solid #2d5b4a;
    border-left: 40px solid transparent;
    border-right: 40px solid transparent;
    height: 0px;
    width: 60px;
    left: 0px;
    top: -50px;
}

.door119 {
    top: 7px;
    position: relative;
    width: 20px;
    height: 45px;
    border: 2px solid #662e18;
    background-color: #3d441e;
    display: inline-block;
    left: 15px;
}

.window119 {
    top: 0px;
    width: 15px;
    height: 30px;
    display: inline-block;
    float: left;
    position: relative;
    margin: 5px;
    left: 12px;
    background-color: #ceefeb;
}


.house129 {
    background-color: #8c8621;
    width: 80px;
    top: 5px;
    position: relative;
    height: 165px;
    float: right;
    margin: 0;
    padding: 10px;
    display: inline-block;
}

.roof129 {
    left: 0px;
    position: absolute;
    display: inline-block;
    float: left;
    border-bottom: 20px solid #330d0d;
    border-left: 20px solid transparent;
    border-right: 25px solid transparent;
    height: 0px;
    width: 60px;
    top: -20px;
}

.door129 {
    top: 2px;
    position: relative;
    width: 20px;
    height: 45px;
    border: 2px solid #662e18;
    background-color: #102033;
    display: inline-block;
    left: 10px;
}

.window129 {
    left: 3px;
    width: 30px;
    height: 40px;
    margin: 1px;
    position: relative;
    float: left;
    background-color: #C4CDC9;
    border: 2px solid #5b1111;
    display: inline-block;
}

.window12129 {
    left: 3px;
    width: 15px;
    height: 40px;
    margin: 1px;
    position: relative;
    float: left;
    background-color: #C4CDC9;
    border: 2px solid #5b1111;
    display: inline-block;
}

.window1212129 {
    left: 3px;
    width: 40px;
    height: 20px;
    margin: 1px;
    position: relative;
    float: left;
    background-color: #C4CDC9;
    border: 2px solid #5b1111;
    display: inline-block;
}

.tree9 {
    position: relative;
    margin: 0 30px;
    display: inline-block;
}

.first9 {
    left: 0px;
    position: absolute;
    display: inline-block;
    float: left;
    border-bottom: 20px solid #1d3f13;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    height: 0px;
    width: 0px;
}

.second9 {
    left: 0px;
    position: absolute;
    display: inline-block;
    float: left;
    border-bottom: 30px solid #1d3f13;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    height: 0px;
    width: 0px;
}

.third9 {
    left: 0px;
    position: absolute;
    display: inline-block;
    float: left;
    border-bottom: 40px solid #1d3f13;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    height: 0px;
    width: 0px;
}

.fourth9 {
    background-color: #472511;
    width: 10px;
    height: 10px;
    position: absolute;
    top: 38px;
    left: 5px;
    display: inline-block;

}


.santa9 {
    margin: 100px;
    display: inline-block;
    position: absolute;
    left: 2100px;
    float: right;
    animation: justRide9 45s linear 0s infinite;
    z-index: 1;
}

@keyframes justRide9 {
    0% {
        left: 3000px;
        top: 800px;
        transform: rotate(30deg) scaleX(1);
    }

    59% {
        left: -700px;
        top: -700px;
        transform: rotate(30deg) scaleX(1);
        opacity: 1;
    }

    60% {
        opacity: 1;
        transform: rotate(-30deg) scaleX(-1);
        left: -1000px;
        top: -1000px;
        opacity: 0;
    }

    61% {
        opacity: 1;
        transform: rotate(-30deg) scaleX(-1);
        left: -1000px;
        top: 500px;
    }

    100% {
        opacity: 1;
        transform: rotate(-30deg) scaleX(-1);
        left: 1000px;
        top: -500px;
    }
}

.body9 {
    background-color: #82283a;
    width: 60px;
    height: 70px;
    border-radius: 40%;
    top: 20px;
    position: relative;
    left: 20px;
    border: 2px solid #440808;
}

.sled9 {
    border: 2px solid #542d17;
    position: relative;
    background-color: #916217;
    width: 150px;
    height: 50px;
    border-bottom-left-radius: 40%;
    border-bottom-right-radius: 20%;
}

.sled19 {
    border-left: 2px solid #542d17;
    border-right: 2px solid #542d17;
    border-top: 2px solid #542d17;
    position: relative;
    background-color: #916217;
    top: -30px;
    width: 50px;
    left: 2px;
    height: 30px;
    float: right;
    border-top-left-radius: 100%;
    border-top-right-radius: 20%;
    z-index: 1;
}

.sled29 {
    border-left: 2px solid #542d17;
    border-right: 2px solid #542d17;
    border-top: 2px solid #542d17;
    position: relative;
    background-color: #916217;
    top: -20px;
    width: 10px;
    left: -2px;
    height: 20px;
    float: left;
    border-top-left-radius: 20%;
    border-top-right-radius: 100%;
}

.present9 {
    width: 30px;
    height: 20px;
    left: 90px;
    top: -30px;
    transform: rotate(-30deg);
    background-color: #572393;
    position: absolute;
    border: 1px solid #401563;
}

.present19 {
    width: 30px;
    height: 20px;
    left: 115px;
    top: -40px;
    border: 1px solid #111c51;
    background-color: #1d329b;
    position: absolute;
}

.line9 {
    background: #bbff00;
    width: 15px;
    height: 15px;
    top: -10px;
    left: 7px;
    position: relative;
    text-align: center;
}

.line9:before,
.line9:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 15px;
    width: 15px;
    background: #bbff00;
}

.line9:before {
    -webkit-transform: rotate(30deg);
    -moz-transform: rotate(30deg);
    -ms-transform: rotate(30deg);
    -o-transform: rotate(30deg);
}

.line9:after {
    -webkit-transform: rotate(60deg);
    -moz-transform: rotate(60deg);
    -ms-transform: rotate(60deg);
    -o-transform: rotate(60deg);
}

.line19 {
    background: #15c49b;
    width: 15px;
    height: 15px;
    top: -10px;
    left: 7px;
    position: relative;
    text-align: center;
}

.line19:before,
.line19:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 15px;
    width: 15px;
    background: #15c49b;
}

.line19:before {
    -webkit-transform: rotate(30deg);
    -moz-transform: rotate(30deg);
    -ms-transform: rotate(30deg);
    -o-transform: rotate(30deg);
}

.line19:after {
    -webkit-transform: rotate(60deg);
    -moz-transform: rotate(60deg);
    -ms-transform: rotate(60deg);
    -o-transform: rotate(60deg);
}

.w9 {
    position: absolute;
    top: 118px;
    left: 30px;
}

.w19 {
    position: absolute;
    top: 118px;
    left: 45px;
}

.bottom9 {
    background-color: #542d17;
    height: 40px;
    left: 100px;
    z-index: 0;
    width: 5px;
    position: absolute;
    transform: rotate(-50deg);
    border-top-right-radius: 50%;
}

.bottom19 {
    background-color: #542d17;
    height: 33px;
    width: 5px;
    z-index: 0;
    position: absolute;
    transform: rotate(50deg);
    border-top-left-radius: 50%;
}

.bottom29 {
    height: 150px;
    width: 220px;
    top: -120px;
    left: -60px;
    border-bottom-left-radius: 40%;

    border-bottom-right-radius: 20%;
    border-bottom: 10px solid #542d17;
    z-index: 0;
    position: absolute;
}

.bottom129 {
    background-color: #331d07;
    height: 40px;
    left: 100px;
    z-index: 0;
    width: 5px;
    position: absolute;
    transform: rotate(-50deg);
    border-top-right-radius: 50%;
}

.bottom119 {
    background-color: #331d07;
    height: 33px;
    width: 5px;
    z-index: 0;
    position: absolute;
    transform: rotate(50deg);
    border-top-left-radius: 50%;
}

.bottom219 {
    height: 150px;
    width: 220px;
    top: -120px;
    left: -60px;
    border-bottom-left-radius: 40%;

    border-bottom-right-radius: 20%;
    border-bottom: 10px solid #331d07;
    z-index: 0;
    position: absolute;
}


.deer9 {
    background-color: #6d3818;
    height: 35px;
    width: 100px;
    left: -140px;
    top: 70px;
    border-top-left-radius: 10%;
    border-top-right-radius: 20%;
    border-bottom-left-radius: 30%;
    border-bottom-right-radius: 40%;
    display: inline-block;
    position: absolute;
}

.deer19 {
    background-color: #6d3818;
    height: 35px;
    width: 100px;
    left: -350px;
    top: 70px;
    border-top-left-radius: 10%;
    border-top-right-radius: 20%;
    border-bottom-left-radius: 30%;
    border-bottom-right-radius: 40%;
    display: inline-block;
    position: absolute;
}

.deer29 {
    background-color: #6d3818;
    height: 35px;
    width: 100px;
    left: -250px;
    top: 70px;
    border-top-left-radius: 10%;
    border-top-right-radius: 20%;
    border-bottom-left-radius: 30%;
    border-bottom-right-radius: 40%;
    display: inline-block;
    position: absolute;
}

.deer39 {
    background-color: #6d3818;
    height: 35px;
    width: 100px;
    left: -350px;
    top: 70px;
    border-top-left-radius: 10%;
    border-top-right-radius: 20%;
    border-bottom-left-radius: 30%;
    border-bottom-right-radius: 40%;
    display: inline-block;
    position: absolute;
}

.deer49 {
    background-color: #6d3818;
    height: 35px;
    width: 100px;
    left: -480px;
    top: 70px;
    border-top-left-radius: 10%;
    border-top-right-radius: 20%;
    border-bottom-left-radius: 30%;
    border-bottom-right-radius: 40%;
    display: inline-block;
    position: absolute;
}

.deer59 {
    background-color: #6d3818;
    height: 35px;
    width: 100px;
    left: -580px;
    top: 70px;
    border-top-left-radius: 10%;
    border-top-right-radius: 20%;
    border-bottom-left-radius: 30%;
    border-bottom-right-radius: 40%;
    display: inline-block;
    position: absolute;
}

.neck9 {
    border-top-left-radius: 100%;
    border-top-right-radius: 40%;
    border-bottom-left-radius: 20%;
    border-bottom-right-radius: 20%;
    background-color: #6d3818;
    top: -20px;
    left: 0px;
    height: 30px;
    width: 20px;
    display: inline-block;
    position: absolute;
}

.head9 {
    width: 20px;
    height: 10px;
    left: -17px;
    transform: rotate(5deg);
    top: -35px;
    position: absolute;
    background-color: #6d3818;
    border-top-left-radius: 110px;
    border-top-right-radius: 110px;
    border: 10px solid #6d3818;
    border-bottom: 0;
}

.eye9 {
    background-color: black;
    height: 4px;
    width: 4px;
    border-radius: 50%;
}

.ear9 {
    width: 10px;
    height: 5px;
    left: 10px;
    transform: rotate(150deg);
    top: -18px;
    position: absolute;
    background-color: #6d3818;
    border-top-left-radius: 110px;
    /* 100px of height + 10px of border */
    border-top-right-radius: 110px;
    /* 100px of height + 10px of border */
    border: 10px solid #6d3818;
    border-bottom: 0;
}

.nose9 {
    background-color: black;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    left: -23px;
    top: 3px;
    position: relative;
}

.nose39 {
    background-color: red;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    left: -23px;
    top: 3px;
    position: relative;
}

.nose19 {
    background-color: #6d3818;
    width: 30px;
    height: 10px;
    border-radius: 50%;
    left: -14px;
    top: -8px;
    position: relative;
}

.tail9 {
    border-right: 5px solid transparent;
    border-bottom: 20px solid #968484;
    border-left: 10px solid transparent;
    width: 0;
    height: 0;
    transform: rotate(50deg);
    border-radius: 30%;
    left: 90px;
    top: -10px;
    position: relative;
}


.leg19 {
    position: absolute;
    text-align: center;
    top: 50px;
    left: -10px;
    padding: 1px;
    margin-bottom: 6px;
    height: 5px;
    width: 50px;
    animation: run9 .5s linear infinite;
}

.leg19:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 51%;
    background: #6d3818;
    transform: skew(0deg, 6deg);
}

.leg19:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 50%;
    background: #6d3818;
    transform: skew(0deg, -6deg);
}

.leg29 {
    position: absolute;
    text-align: center;
    top: 45px;
    left: -20px;
    padding: 1px;
    margin-bottom: 6px;
    height: 5px;
    width: 50px;
    animation: run9 .5s linear infinite;
}

.leg29:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 51%;
    background: #6d3818;
    transform: skew(0deg, 6deg);
}

.leg29:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 50%;
    background: #6d3818;
    transform: skew(0deg, -6deg);
}

@keyframes run9 {
    0% {
        transform: rotate(90deg);
        top: 35px;
    }

    70% {
        transform: rotate(120deg);

        top: 45px;
    }

    100% {
        transform: rotate(90deg);

        top: 45px;
    }
}

@keyframes runs9 {
    0% {
        transform: rotate(45deg);
        top: 35px;
    }

    70% {
        transform: rotate(55deg);

        top: 45px;
    }

    100% {
        transform: rotate(65deg);

        top: 45px;
    }
}

.leg39 {
    position: absolute;
    text-align: center;
    top: 45px;
    left: 35px;
    padding: 1px;
    margin-bottom: 6px;
    height: 5px;
    width: 50px;
    animation: runs9 .6s linear infinite;
}

.leg39:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 51%;
    background: #6d3818;
    transform: skew(0deg, 6deg);
}

.leg39:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 50%;
    background: #6d3818;
    transform: skew(0deg, -6deg);
}

.leg49 {
    position: absolute;
    text-align: center;
    top: 45px;
    left: 50px;
    padding: 1px;
    margin-bottom: 6px;
    height: 5px;
    width: 50px;
    animation: runs9 .6s linear infinite;
}

.leg49:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 51%;
    background: #6d3818;
    transform: skew(0deg, 6deg);
}

.leg49:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 50%;
    background: #6d3818;
    transform: skew(0deg, -6deg);
}

.horns9 {
    top: -20px;
    position: absolute;
    left: -5px;
    transform: rotate(-20deg);
}

.horn9 {
    position: absolute;
    width: 70px;
    height: 40px;
    border-left: 5px solid #49331f;
    border-bottom: 5px solid #49331f;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 20px;
    transform: scaleX(-1);
    top: -30px;
}

.horn9:before {
    display: block;
    content: '';
    right: 0;
    top: 5px;
    position: absolute;
    width: 62px;
    height: 40px;
    border-left: 5px solid #49331f;
    border-bottom: 5px solid #49331f;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 20px;
}

.horn9:after {
    display: block;
    content: '';
    right: 0;
    top: 10px;
    position: absolute;
    width: 44px;
    height: 30px;
    border-left: 5px solid #49331f);
    border-bottom: 5px solid #49331f);
    border-top-left-radius: 25px;
    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 20px;
}

.belt9 {
    background-color: #916217;
    border: 1px solid black;
    width: 600px;
    left: -110px;
    top: 5px;
    position: absolute;
    height: 10px;
    z-index: 10;
    border-radius: 30%;
}

.hand9 {
    width: 60px;
    height: 20px;
    background-color: #82283a;
    border: 2px solid #440808;
    border-radius: 30%;
    top: 60px;
    transform: rotate(-30deg);
    left: -40px;
    position: absolute;
}

.fist9 {
    background-color: white;
    border: 1px solid black;
    border-radius: 30%;
    width: 20px;
    height: 15px;
    position: absolute;
    left: -20px;
}

.fist29 {
    background-color: white;
    border: 1px solid black;
    border-radius: 30%;
    width: 10px;
    height: 5px;
    float: right;
    top: -5px;
    left: 5px;
    position: absolute;
}

.hand29 {
    width: 85px;
    height: 20px;
    background-color: #82283a;
    border: 2px solid #440808;
    border-right-width: 0px;
    border-radius: 30%;
    top: 32px;
    left: -55px;
    z-index: -1;
    position: absolute;
    animation: wave9 .5s infinite;
    animation-timing-function: linear;
}

@keyframes wave9 {
    0% {
        transform: rotate(50deg);
    }

    50% {
        transform: rotate(20deg);
    }

    100% {
        transform: rotate(50deg);
    }
}

.beard9 {
    width: 18px;
    height: 30px;
    left: -3px;
    transform: rotate(180deg);
    top: 20px;
    z-index: 10;
    position: absolute;
    background-color: #d3ccb8;
    border-top-left-radius: 110px;
    /* 100px of height + 10px of border */
    border-top-right-radius: 110px;
    /* 100px of height + 10px of border */
    border: 10px solid #d3ccb8;
    border-bottom: 0;
}

.heads9 {
    background-color: #f2cd96;
    width: 33px;
    height: 40px;
    top: -45px;
    left: 15px;
    border-radius: 20%;
    position: absolute;
}

.hat9 {
    width: 25px;
    height: 30px;
    left: -5px;
    transform: rotate(0deg);
    top: -25px;
    z-index: -1;
    position: absolute;
    background-color: #82283a;
    border-top-left-radius: 110px;
    border-top-right-radius: 110px;
    border: 10px solid #82283a;
    border-bottom: 0;
}

.bib9 {
    width: 40px;
    height: 25px;
    background-color: white;
    border-radius: 30%;
    top: 12px;
    left: -10px;
    position: absolute;
}

.bib19 {
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    border: 1px solid black;
    top: 12px;
    left: 33px;
    position: absolute;
}

.eyes9 {
    width: 7px;
    height: 3px;
    left: 4px;
    top: 5px;
    z-index: 1;
    position: absolute;
    background-color: transparent;
    border-top-left-radius: 110px;
    border-top-right-radius: 110px;
    border: 1.5px solid black;
    border-bottom: 0;
}

.eyes19 {
    width: 7px;
    height: 3px;
    left: 16px;
    top: 5px;
    z-index: 1;
    position: absolute;
    background-color: transparent;
    border-top-left-radius: 110px;
    border-top-right-radius: 110px;
    border: 1.5px solid black;
    border-bottom: 0;
}

.nosi9 {
    width: 6px;
    height: 6px;
    left: 12px;
    background-color: red;
    top: 12px;
    border-radius: 30%;
    z-index: 1;
    position: absolute;
}


.cube9 {
    position: absolute;
    width: 100px;
    height: 100px;
    transform: rotate(15deg);
    top: 100px;
    z-index: 69;
    left: 150px;
    margin: -50px 0 0 -50px;
    transform-style: preserve-3d;
    transition: all 1s;
    animation: rotate9 4s;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
}

.fac9 {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border: 1px solid black;
    opacity: 1;
}

.one9 {
    background: #DE0023;
    transform: rotateX(90deg) translateZ(50px);
}

.two9 {
    background: #DE0023;
    transform: translateZ(50px);
}

.three9 {
    background: #DE0023;
    transform: rotateY(90deg) translateZ(50px);
}

.four9 {
    background: #DE0023;
    transform: rotateY(180deg) translateZ(50px);
}

.five9 {
    background: #DE0023;
    transform: rotateY(-90deg) translateZ(50px);
}

.six9 {
    background: #DE0023;
    transform: rotateX(-90deg) rotateY(180deg) translateZ(-50px);
}

.top9 {
    transform: rotateX(90deg) translateZ(100px);
}

.bottom59 {
    transform: rotateX(-90deg) translateZ(100px);
}

.lime9 {
    height: 100%;
    width: 20px;
    background-color: #C78F45;
    left: 40px;
    position: absolute;
}

.lime19 {
    height: 20px;
    width: 100%;
    background-color: #C78F45;
    top: 40px;
    position: absolute;
}

.lime29 {
    background-color: #DE0023;
    border: 2px solid #31368e;
    width: 110px;
    height: 15px;
    top: -3px;
    position: absolute;
    left: -8px;
}

.lime39 {
    background-color: #eda12f;
    width: 30px;
    height: 35px;
    top: -20px;
    position: absolute;
    left: 38px;
    position: relative;
    text-align: center;
    z-index: -1;
    transform: rotate(20deg);
}

.lime39:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 30px;
    height: 35px;
    background: #eda12f;
    transform: rotate(135deg);
}

@keyframes rotate9 {
    0% {
        transform: rotateX(0deg) rotateY(150deg) rotateZ(0deg);
        top: -1600px;
    }

    100% {
        transform: rotateX(370deg) rotateY(340deg) rotateZ(50deg);
        top: 100px;

    }
}

.sno9 {
    border-top: 10px solid #4f7272;
    width: 600px;
    height: 300px;
    opacity: .5;
    left: -200px;
    top: 100px;
    border-radius: 50%;
    position: absolute;
}

.sno19 {
    border-top: 10px solid #4f7272;
    width: 400px;
    height: 400px;
    opacity: .5;
    left: 400px;
    top: 100px;
    border-radius: 50%;
    position: absolute;
}

.sno29 {
    border-top: 10px solid #4f7272;
    width: 700px;
    height: 200px;
    opacity: .5;
    left: 800px;
    top: 100px;
    border-radius: 50%;
    position: absolute;
}

.snowman9 {
    position: absolute;
    right: 190px;
    z-index: 1;
    top: -50px;
    width: 300px;
    height: 700px;
}

.man9 {
    border-left: 10px solid #4f7272;
    border-right: 10px solid #4f7272;
    width: 200px;
    height: 200px;
    background-color: white;
    top: -10px;
    position: absolute;
    border-radius: 50%;
    transform: rotate(5deg);
}

.man19 {
    border-left: 10px solid #4f7272;
    border-right: 10px solid #4f7272;
    width: 150px;
    height: 150px;
    right: 100px;
    position: absolute;
    background-color: white;
    top: -120px;
    border-radius: 50%;
    transform: rotate(5deg);
}

.man29 {
    border-left: 5px solid #171918;
    border-right: 5px solid #171918;
    border-top: 30px solid #171918;
    border-bottom: 45px solid #171918;
    width: 110px;
    height: 60px;
    right: 115px;
    z-index: 70;
    position: absolute;
    background-color: white;
    top: -215px;
    border-radius: 50%;
    transform: rotate(5deg);
}

.ey9 {
    background-color: black;
    width: 10px;
    display: inline-block;
    height: 15px;
    border-radius: 50%;
    position: absolute;
    left: 30px;
    top: 20px;
}

.ey19 {
    background-color: black;
    width: 10px;
    top: 20px;
    left: 70px;
    display: inline-block;
    height: 15px;
    border-radius: 50%;
    position: absolute;
}

.stripe9 {
    border-radius: 50%;
    width: 100px;
    height: 80px;
    transform: rotate(-30deg);
    border-top: 15px solid #D80020;
    left: 160px;
    position: absolute;
    top: -250px;
    z-index: -1;
}

.stripe19 {
    border-radius: 50%;
    width: 100px;
    height: 80px;
    transform: rotate(-30deg);
    border-bottom: 15px solid #D80020;
    left: 140px;
    position: absolute;
    top: -280px;
    z-index: -1;
}

.stripe29 {
    border-radius: 50%;
    width: 50px;
    height: 40px;
    background-color: #12122d;
    left: 220px;
    position: absolute;
    top: -260px;
    z-index: 1;
}

@keyframes wing9 {
    0% {
        transform: rotateY(0deg);
        transform: rotateX(-0deg);
    }

    50% {
        transform: rotateY(-20deg);
        transform: rotateX(-14deg);
    }

    100% {
        transform: rotateY(0deg);
        transform: rotateX(-0deg);
    }
}

.str9 {
    animation: wing9 2s infinite;
    animation-timing-function: linear;
    display: inline-block;
    position: absolute;
}

.han9 {
    background-color: #49221d;
    border: 2px solid #3a0c12;
    width: 75px;
    height: 10px;
    position: absolute;
    top: 0px;
    left: -110px;
    transform: rotate(40deg);
    border-radius: 10%;
}

.h9 {
    background-color: #49221d;
    border: 2px solid #3a0c12;
    width: 75px;
    height: 10px;
    position: absolute;
    top: 30px;
    left: -50px;
    transform: rotate(10deg);
    border-radius: 20%;
}

.ha9 {
    background-color: black;
    width: 40px;
    border-radius: 30%;
    height: 30px;
    top: -10px;
    left: -20px;
    position: absolute;
    border-right: 10px solid white;
}

.fi9 {
    background-color: black;
    width: 30px;
    border-radius: 20%;
    height: 10px;
    top: -5px;
    left: 10px;
    transform: rotate(25deg);
    position: absolute;
    z-index: 79;
}

.han19 {
    background-color: #49221d;
    border: 2px solid #3a0c12;
    width: 150px;
    height: 10px;
    position: absolute;
    top: 30px;
    left: 140px;
    border-radius: 30%;
    transform: rotate(-380deg)scaleX(-1);

}

.shuriken9 {
    z-index: 69;
    left: -22px;
    top: -30px;
    position: absolute;
    width: 0;
    height: 10;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 25px solid #d9d6f9;
}

.shuriken19 {
    z-index: 69;
    left: -8px;
    top: -15px;
    position: absolute;
    transform: rotate(90deg);
    width: 0;
    height: 10;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 25px solid #d9d6f9;
}

.shuriken29 {
    z-index: 69;
    left: -22px;
    top: -0px;
    position: absolute;
    transform: rotate(180deg);
    width: 0;
    height: 10;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 25px solid #d9d6f9;
}

.shuriken39 {
    z-index: 69;
    left: -38px;
    top: -15px;
    position: absolute;
    transform: rotate(270deg);
    width: 0;
    height: 10;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 25px solid #d9d6f9;
}

.button9 {
    background-color: black;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    left: 65px;
    position: absolute;
    top: 50px;
}

.button19 {
    background-color: black;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    left: 65px;
    position: absolute;
    top: 75px;
}

.button29 {
    background-color: black;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    left: 65px;
    position: absolute;
    top: 100px;
}

.bel9 {
    width: 100px;
    height: 80px;
    top: -60px;
    left: 25px;
    position: absolute;
    border-radius: 50%;
    border: 20px solid black;
}

.bel19 {
    width: 30px;
    height: 80px;
    top: 80px;
    left: 15px;
    position: absolute;
    border-radius: 50%;
    border: 20px solid black;
}

.bel29 {
    width: 90px;
    height: 70px;
    top: 150px;
    left: 15px;
    position: absolute;
    border-radius: 50%;
    z-index: 99;
    background-color: white;
}`}</pre>  </div> : null}
            <div className="sky9">
                <div className="moon9">
                    <div className="crater9"></div>
                    <div className="crater19"></div>
                    <div className="crater29"></div>
                    <div className="crater39"></div>
                    <div className="crater49"></div>
                </div>
                <div className="star9"></div>
                <div className="star19"></div>
                <div className="star29"></div>
                <div className="star39"></div>
                <div className="star49"></div>
                <div className="star59"></div>
                <div className="star69"></div>
                <div className="star79"></div>
                <div className="star89"></div>
                <div className="star99"></div>
                <div className="star109"></div>
                <div className="star119"></div>
                <div className="star129"></div>
                <div className="star139"></div>
                <div className="star149"></div>
                <div className="star159"></div>
                <div className="star169"></div>
                <div className="star179"></div>
                <div className="star189"></div>
                <div className="star199"></div>
                <div className="star209"></div>
                <div className="star219"></div>
                <div className="star229"></div>
                <div className="star239"></div>
                <div className="santa9">
                    <div className="body9">
                        <div className="heads9">
                            <div className="eyes9"></div>
                            <div className="eyes19"></div>
                            <div className="nosi9"></div>
                            <div className="beard9"></div>
                            <div className="hat9">
                                <div className="bib9"></div>
                                <div className="bib19"></div>
                            </div>
                            <div className='hand9'>
                                <div className="fist9">
                                    <div className="fist29"></div>
                                </div>
                            </div>
                            <div className="hand29">
                                <div className="fist9">
                                    <div className="fist29"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sled9">
                        <div className='present9'>
                            <div className='line9'></div>
                        </div>
                        <div className='present19'>
                            <div className='line19'></div>
                        </div>
                        <div className="sled19"></div>
                        <div className="sled29"></div>
                    </div>
                    <div className="w9">
                        <div className="bottom9"></div>
                        <div className="bottom19"></div>
                        <div className="bottom29"></div>
                    </div>
                    <div className="w19">
                        <div className="bottom129"></div>
                        <div className="bottom119"></div>
                        <div className="bottom219"></div>
                    </div>
                    <div className="deer9">
                        <div className="neck9"></div>
                        <div className="head9">
                            <div className="horns9">
                                <div className="horn9"></div>
                            </div>
                            <div className="eye9"></div>
                            <div className='nose9'></div>
                            <div className="nose19"></div>
                            <div className="ear9"></div>
                        </div>
                        <div className="tail9"></div>
                        <div className="leg19"></div>
                        <div className="leg29"></div>
                        <div className="leg39"></div>
                        <div className="leg49"></div>
                    </div>
                    <div className="deer19">
                        <div className="neck9"></div>
                        <div className="head9">
                            <div className="horns9">
                                <div className="horn9"></div>
                            </div>
                            <div className="eye9"></div>
                            <div className='nose9'></div>
                            <div className="nose19"></div>
                            <div className="ear9"></div>
                        </div>
                        <div className="tail9"></div>
                        <div className="leg19"></div>
                        <div className="leg29"></div>
                        <div className="leg39"></div>
                        <div className="leg49"></div>
                    </div>
                    <div className="deer29">
                        <div className="neck9"></div>
                        <div className="head9">
                            <div className="horns9">
                                <div className="horn9"></div>
                            </div>
                            <div className="eye9"></div>
                            <div className='nose9'></div>
                            <div className="nose19"></div>
                            <div className="ear9"></div>
                        </div>
                        <div className="tail9"></div>
                        <div className="leg19"></div>
                        <div className="leg29"></div>
                        <div className="leg39"></div>
                        <div className="leg49"></div>
                    </div>
                    <div className="deer39">
                        <div className="neck9"></div>
                        <div className="head9">
                            <div className="horns9">
                                <div className="horn9"></div>
                            </div>
                            <div className="eye9"></div>
                            <div className='nose9'></div>
                            <div className="nose19"></div>
                            <div className="ear9"></div>
                        </div>
                        <div className="tail9"></div>
                        <div className="leg19"></div>
                        <div className="leg29"></div>
                        <div className="leg39"></div>
                        <div className="leg49"></div>
                    </div>
                    <div className="deer49">
                        <div className="belt9"></div>
                        <div className="neck9"></div>
                        <div className="head9">
                            <div className="horns9">
                                <div className="horn9"></div>
                            </div>
                            <div className="eye9"></div>
                            <div className='nose9'></div>
                            <div className="nose19"></div>
                            <div className="ear9"></div>
                        </div>
                        <div className="tail9"></div>
                        <div className="leg19"></div>
                        <div className="leg29"></div>
                        <div className="leg39"></div>
                        <div className="leg49"></div>
                    </div>
                    <div className="deer59">
                        <div className="neck9"></div>
                        <div className="head9">
                            <div className="horns9">
                                <div className="horn9"></div>
                            </div>
                            <div className="eye9"></div>
                            <div className='nose39'></div>
                            <div className="nose19"></div>
                            <div className="ear9"></div>
                        </div>
                        <div className="tail9"></div>
                        <div className="leg19"></div>
                        <div className="leg29"></div>
                        <div className="leg39"></div>
                        <div className="leg49"></div>
                    </div>
                </div>
                <div className='sn9'>
                    <div className="fonta9">Happy Holidays!<div className="mid9"></div>
                    </div>
                    <div className="wra9">
                        <div className="house9">
                            <div className="roof9">
                                <div className='chimney9'></div>
                            </div>
                            <div className="window9">
                                <div className="row9"></div>
                            </div>
                            <div className="window9">
                                <div className="row9"></div>
                            </div>
                            <div className="window9">
                                <div className="row9"></div>
                            </div>
                            <div className="window9">
                                <div className="row9"></div>
                            </div>
                            <div className="window9">
                                <div className="row9"></div>
                            </div>
                            <div className="window9">
                                <div className="row9"></div>
                            </div>
                            <div className="window9">
                                <div className="row9"></div>
                            </div>
                            <div className="window9">
                                <div className="row9"></div>
                            </div>
                            <div className="door9">
                                <div className="stair9"></div>
                            </div>
                        </div>
                        <div className="house19">
                            <div className="roof19"></div>
                            <div className="window19"></div>
                            <div className="window19"></div>
                            <div className="window19"></div>
                            <div className="window19"></div>
                            <div className="window19"></div>
                            <div className="window19"></div>
                            <div className="window19"></div>
                            <div className="window19"></div>
                            <div className="window19"></div>
                            <div className="window19"></div>
                            <div className="window19"></div>
                            <div className="window19"></div>
                            <div className="window1139"></div>
                            <div className="door19"></div>
                            <div className="window1139"></div>
                        </div>
                        <div className="house29">
                            <dic className='roof29'>
                                <div className="circle9"></div>
                                <div className="window29"></div>
                                <div className="window229"></div>
                                <div className="window29"></div>
                                <div className="window29"></div>
                                <div className="window229"></div>
                                <div className="window29"></div>
                                <div className="window29"></div>
                                <div className="window229"></div>
                                <div className="window29"></div>
                                <div className="gate19"></div>
                                <div className="gate9"></div>
                            </dic>
                        </div>
                        <div className="house39">
                            <div className="roof39">
                                <div className='roof349'></div>
                            </div>
                            <div className="roof339"></div>
                            <div className="window39"></div>
                            <div className="window39"></div>
                            <div className="window39"></div>
                            <div className="window39"></div>
                            <div className="window39"></div>
                            <div className="window39"></div>
                            <div className="window39"></div>
                            <div className="window39"></div>
                            <div className="window39"></div>
                        </div>
                        <div className="house49">
                            <div className="roof49">
                                <div className='roof449'></div>
                            </div>
                            <div className="window49">
                                <div className='line49'></div>
                                <div className='line449'></div>
                            </div>
                            <div className="window49">
                                <div className='line49'></div>
                                <div className='line449'></div>
                            </div>
                            <div className="window49">
                                <div className='line49'></div>
                                <div className='line449'></div>
                            </div>
                            <div className="window49">
                                <div className='line49'></div>
                                <div className='line449'></div>
                            </div>
                            <div className="window49">
                                <div className='line49'></div>
                                <div className='line449'></div>
                            </div>
                            <div className="window49">
                                <div className='line49'></div>
                                <div className='line449'></div>
                            </div>
                            <div className="window49">
                                <div className='line49'></div>
                                <div className='line449'></div>
                            </div>
                            <div className="window49">
                                <div className='line49'></div>
                                <div className='line449'></div>
                            </div>
                            <div className="window49">
                                <div className='line49'></div>
                                <div className='line449'></div>
                            </div>
                        </div>
                        <div className="house59">
                            <div className="roof59">
                                <div className="chimney59"></div>
                            </div>
                            <div className="window59"></div>
                            <div className="window59"></div>
                            <div className="window59"></div>
                            <div className="window59"></div>
                            <div className="window59"></div>
                            <div className="window59"></div>
                            <div className="window59"></div>
                            <div className="window59"></div>
                            <div className="window59"></div>
                            <div className="window59"></div>
                            <div className="window59"></div>
                            <div className="window59"></div>
                            <div className="window59"></div>
                            <div className="window59"></div>
                            <div className="door59"></div>
                            <div className="window59"></div>
                            <div className="window59"></div>
                        </div>
                        <div className="house69">
                            <div className="roof69"></div>
                            <div className="window69">
                                <div className="row69"></div>
                            </div>
                            <div className="window69">
                                <div className="row69"></div>
                            </div>
                            <div className="window69">
                                <div className="row69"></div>
                            </div>
                            <div className="window69">
                                <div className="row69"></div>
                            </div>
                            <div className="window69">
                                <div className="row69"></div>
                            </div>
                            <div className="window69">
                                <div className="row69"></div>
                            </div>
                            <div className="window69">
                                <div className="row69"></div>
                            </div>
                            <div className="window69">
                                <div className="row69"></div>
                            </div>
                            <div className="window69">
                                <div className="row69"></div>
                            </div>
                            <div className="window69">
                                <div className="row69"></div>
                            </div>
                            <div className="window69">
                                <div className="row69"></div>
                            </div>
                            <div className="window69">
                                <div className="row69"></div>
                            </div>
                            <div className="door69"></div>
                            <div className="window69">
                                <div className="row69"></div>
                            </div>
                            <div className="window69">
                                <div className="row69"></div>
                            </div>
                        </div>
                        <div className="house79">
                            <div className="roof79"></div>
                            <div className="window79">
                                <div className="row79"></div>
                                <div className="row79"></div>
                                <div className="row79"></div>
                                <div className="row79"></div>
                                <div className="row779"></div>
                                <div className="row779"></div>
                            </div>
                            <div className="window79">
                                <div className="row79"></div>
                                <div className="row79"></div>
                                <div className="row79"></div>
                                <div className="row79"></div>
                                <div className="row779"></div>
                                <div className="row779"></div>
                            </div>
                            <div className="window79">
                                <div className="row79"></div>
                                <div className="row79"></div>
                                <div className="row79"></div>
                                <div className="row79"></div>
                                <div className="row779"></div>
                                <div className="row779"></div>
                            </div>
                            <div className="window79">
                                <div className="row79"></div>
                                <div className="row79"></div>
                                <div className="row79"></div>
                                <div className="row79"></div>
                                <div className="row779"></div>
                                <div className="row779"></div>
                            </div>
                            <div className="window79">
                                <div className="row79"></div>
                                <div className="row79"></div>
                                <div className="row79"></div>
                                <div className="row79"></div>
                                <div className="row779"></div>
                                <div className="row779"></div>
                            </div>
                            <div className="window79">
                                <div className="row79"></div>
                                <div className="row79"></div>
                                <div className="row79"></div>
                                <div className="row79"></div>
                                <div className="row779"></div>
                                <div className="row779"></div>
                            </div>
                            <div className="door79"></div>
                        </div>
                        <div className="house89">
                            <div className="roof89">
                                <div className="chimney89"></div>
                            </div>
                            <div className="window89"></div>
                            <div className="window89"></div>
                            <div className="window89"></div>
                            <div className="window89"></div>
                            <div className="window89"></div>
                            <div className="window89"></div>
                            <div className="window89"></div>
                            <div className="window89"></div>
                            <div className="window89"></div>
                            <div className="window89"></div>
                            <div className="window89"></div>
                            <div className="window89"></div>
                            <div className="window89"></div>
                            <div className="window89"></div>
                            <div className="window89"></div>
                            <div className="window889"></div>
                            <div className="door89"></div>
                        </div>
                        <div className="house99">
                            <div className="roof99"></div>
                            <div className="window99">
                                <div className="row99"></div>
                            </div>
                            <div className="window99">
                                <div className="row99"></div>
                            </div>
                            <div className="window99">
                                <div className="row99"></div>
                            </div>
                            <div className="window99">
                                <div className="row99"></div>
                            </div>
                            <div className="window99">
                                <div className="row99"></div>
                            </div>
                            <div className="window99">
                                <div className="row99"></div>
                            </div>
                            <div className="window99">
                                <div className="row99"></div>
                            </div>
                            <div className="window99">
                                <div className="row99"></div>
                            </div>
                            <div className="window99">
                                <div className="row99"></div>
                            </div>
                            <div className="window99">
                                <div className="row99"></div>
                            </div>
                            <div className="window99">
                                <div className="row99"></div>
                            </div>
                            <div className="door99"></div>
                        </div>
                        <div className="house109">
                            <div className="roof109"></div>
                            <div className="window109">
                                <div className="line109"></div>
                                <div className="line10109"></div>
                            </div>
                            <div className="window109">
                                <div className="line109"></div>
                                <div className="line10109"></div>
                            </div>
                            <div className="window109">
                                <div className="line109"></div>
                                <div className="line10109"></div>
                            </div>
                            <div className="window109">
                                <div className="line109"></div>
                                <div className="line10109"></div>
                            </div>
                            <div className="window109">
                                <div className="line109"></div>
                                <div className="line10109"></div>
                            </div>
                            <div className="window109">
                                <div className="line109"></div>
                                <div className="line10109"></div>
                            </div>
                            <div className="window109">
                                <div className="line109"></div>
                                <div className="line10109"></div>
                            </div>
                            <div className="door109"></div>
                        </div>
                        <div className="house119">
                            <div className="roof119"></div>
                            <div className="window119"></div>
                            <div className="window119"></div>
                            <div className="window119"></div>
                            <div className="window119"></div>
                            <div className="window119"></div>
                            <div className="window119"></div>
                            <div className="window119"></div>
                            <div className="window119"></div>
                            <div className="window119"></div>
                            <div className="window119"></div>
                            <div className="window119"></div>
                            <div className="door119"></div>
                        </div>
                        <div className="house129">
                            <div className="roof129"></div>
                            <div className="window12129"></div>
                            <div className="window129"></div>
                            <div className="window12129"></div>
                            <div className="window12129"></div>
                            <div className="window129"></div>
                            <div className="window12129"></div>
                            <div className="window12129"></div>
                            <div className="window129"></div>
                            <div className="window12129"></div>
                            <div className="window1212129"></div>
                            <div className="door129"></div>
                        </div>
                    </div>
                    <div className='ground9'>
                        <div className="sno9"></div>
                        <div className="sno19"></div>
                        <div className="sno29"></div>
                        <div className="snowman9">
                            <div className="str9">
                                <div className="stripe9"></div>
                                <div className="stripe29"></div>
                                <div className="stripe19"></div>
                            </div>
                            <div className="man9">
                                <div className="bel9">
                                    <div className="bel19"></div>
                                    <div className="bel29"></div>
                                </div>
                            </div>
                            <div className="man19">
                                <div className="button9"></div>
                                <div className="button19"></div>
                                <div className="button29"></div>
                                <div className="h9"></div>
                                <div className="han9">
                                    <div className="shuriken9"></div>
                                    <div className="shuriken19"></div>
                                    <div className="shuriken29"></div>
                                    <div className="shuriken39"></div>
                                    <div className="ha9">
                                        <div className="fi9"></div>
                                    </div>
                                </div>
                                <div className="han19">
                                    <div className="ha9">
                                        <div className="fi9"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="man29">
                                <div className="ey9"></div>
                                <div className="ey19"></div>
                            </div>
                        </div>
                        <div className="cube9">
                            <div className="fac9 one9">
                                <div className="lime9"></div>
                                <div className="lime19"></div>
                            </div>
                            <div className="fac9 two9">
                                <div className="lime9"></div>
                                <div className="lime29">
                                    <div className="lime39"></div>
                                </div>
                                <div className="lime19"></div>
                            </div>
                            <div className="fac9 three9">
                                <div className="lime9"></div>
                                <div className="lime19"></div>
                            </div>
                            <div className="fac9 four9">
                                <div className="lime9"></div>
                                <div className="lime19"></div>
                            </div>
                            <div className="fac9 five9">
                                <div className="lime9"></div>
                                <div className="lime19"></div>
                            </div>
                            <div className="fac9 six9">
                                <div className="lime9"></div>
                                <div className="lime19"></div>
                            </div>
                        </div>
                        <div className='gro9'>
                            <div className="car9">
                                <div className="up9"></div>
                            </div>
                            <div className="tree9">
                                <div className="first9"></div>
                                <div className="second9"></div>
                                <div className="third9"></div>
                                <div className="fourth9"></div>
                            </div>
                            <div className="tree9">
                                <div className="first9"></div>
                                <div className="second9"></div>
                                <div className="third9"></div>
                                <div className="fourth9"></div>
                            </div>
                            <div className="tree9">
                                <div className="first9"></div>
                                <div className="second9"></div>
                                <div className="third9"></div>
                                <div className="fourth9"></div>
                            </div>
                            <div className="tree9">
                                <div className="first9"></div>
                                <div className="second9"></div>
                                <div className="third9"></div>
                                <div className="fourth9"></div>
                            </div>
                            <div className="tree9">
                                <div className="first9"></div>
                                <div className="second9"></div>
                                <div className="third9"></div>
                                <div className="fourth9"></div>
                            </div>
                            <div className="tree9">
                                <div className="first9"></div>
                                <div className="second9"></div>
                                <div className="third9"></div>
                                <div className="fourth9"></div>
                            </div>
                            <div className="tree9">
                                <div className="first9"></div>
                                <div className="second9"></div>
                                <div className="third9"></div>
                                <div className="fourth9"></div>
                            </div>
                            <div className="tree9">
                                <div className="first9"></div>
                                <div className="second9"></div>
                                <div className="third9"></div>
                                <div className="fourth9"></div>
                            </div>
                            <div className="tree9">
                                <div className="first9"></div>
                                <div className="second9"></div>
                                <div className="third9"></div>
                                <div className="fourth9"></div>
                            </div>
                            <div className="tree9">
                                <div className="first9"></div>
                                <div className="second9"></div>
                                <div className="third9"></div>
                                <div className="fourth9"></div>
                            </div>
                            <div className="tree9">
                                <div className="first9"></div>
                                <div className="second9"></div>
                                <div className="third9"></div>
                                <div className="fourth9"></div>
                            </div>
                            <div className="tree9">
                                <div className="first9"></div>
                                <div className="second9"></div>
                                <div className="third9"></div>
                                <div className="fourth9"></div>
                            </div>
                            <div className="tree9">
                                <div className="first9"></div>
                                <div className="second9"></div>
                                <div className="third9"></div>
                                <div className="fourth9"></div>
                            </div>
                            <div className="tree9">
                                <div className="first9"></div>
                                <div className="second9"></div>
                                <div className="third9"></div>
                                <div className="fourth9"></div>
                            </div>
                            <div className="tree9">
                                <div className="first9"></div>
                                <div className="second9"></div>
                                <div className="third9"></div>
                                <div className="fourth9"></div>
                            </div>
                            <div className="tree9">
                                <div className="first9"></div>
                                <div className="second9"></div>
                                <div className="third9"></div>
                                <div className="fourth9"></div>
                            </div>
                            <div className="tree9">
                                <div className="first9"></div>
                                <div className="second9"></div>
                                <div className="third9"></div>
                                <div className="fourth9"></div>
                            </div>
                            <div className="tree9">
                                <div className="first9"></div>
                                <div className="second9"></div>
                                <div className="third9"></div>
                                <div className="fourth9"></div>
                            </div>
                            <div className="tree9">
                                <div className="first9"></div>
                                <div className="second9"></div>
                                <div className="third9"></div>
                                <div className="fourth9"></div>
                            </div>
                            <div className="tree9">
                                <div className="first9"></div>
                                <div className="second9"></div>
                                <div className="third9"></div>
                                <div className="fourth9"></div>
                            </div>
                            <div className="tree9">
                                <div className="first9"></div>
                                <div className="second9"></div>
                                <div className="third9"></div>
                                <div className="fourth9"></div>
                            </div>
                            <div className="tree9">
                                <div className="first9"></div>
                                <div className="second9"></div>
                                <div className="third9"></div>
                                <div className="fourth9"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}