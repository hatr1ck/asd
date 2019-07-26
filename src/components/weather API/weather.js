import home from '../Home.svg';
import cl from './cl.svg';
import mist from './mist.svg';
import React, {useState} from 'react';
import './weather.css';
import axios from 'axios';
import Term from './term';
import {Link} from 'react-router-dom';
import code from '../code.svg';

export default function Weather(props) {
    let [display,
        setDisplay] = useState({town: ' ', country: ' ', weather: ' '})
    let [city,
        setCity] = useState(" ");
    let [temp,
        setTemp] = useState(0);
    let [color,
        setColor] = useState({boxShadow: '0 0 100px black'});
    let [showing,
        setShowing] = useState(false);
    let weatherRequest = (e) => {
        setCity(e.target.value);
    }
    let send = (event) => {
        event.preventDefault();
        axios
            .get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=abce00147b0566534c2aa99ed56b6cd5")
            .then((response) => {
                if (response.data.weather[0].main === 'Rain') {
                    setColor({boxShadow: '0 0 200px blue'});

                } else if (response.data.weather[0].main === 'Snow') {
                    setColor({boxShadow: '0 0 200px white'});

                } else if (response.data.weather[0].main === 'Mist') {
                    setColor({boxShadow: '0 0 200px #566a77'});

                } else if (response.data.weather[0].main === 'Clouds') {
                    setColor({boxShadow: '0 0 200px #624d77'});

                } else if (response.data.weather[0].main === 'Clear') {
                    setColor({boxShadow: '0 0 200px yellow'});
                }
                setDisplay({town: response.data.name, country: response.data.sys.country, weather: response.data.weather[0].main})
                let newtemp = 0;
                let inter = setInterval(() => {
                    if (Math.round(response.data.main.temp - 273, 15) > 0) {
                        newtemp++;
                    } else {
                        newtemp--;
                    }
                    if (newtemp >= Math.round(response.data.main.temp - 273, 15) * 20 && newtemp > 0) {
                        clearInterval(inter);
                    } else if (newtemp <= Math.round(response.data.main.temp - 273, 15) * 20 && newtemp < 0) {
                        clearInterval(inter);
                    }
                    setTemp(newtemp)
                }, 10);

            })
            .catch((err) => {
                setDisplay({town: 'No', country: ' results'})
            });
    }
    return (
        <div>
            <Link to='/'><img alt='404' src={home} height='100rem' className='imge'/></Link>
<img alt='404' src={code} height='100rem' className='imge' onClick={()=>setShowing(!showing)} />
 {showing ?  <div className='codewra'>
                <pre><h1>React</h1>{`
import home from '../Home.svg';
import cl from './cl.svg';
import mist from './mist.svg';
import React, {useState} from 'react';
import './weather.css';
import axios from 'axios';
import Term from './term';

export default function Weather(props) {
    let [display,
        setDisplay] = useState({town: ' ', country: ' ', weather: ' '})
    let [city,
        setCity] = useState(" ");
    let [temp,
        setTemp] = useState(0);
    let [color,
        setColor] = useState({boxShadow: '0 0 100px black'});
    let [showing,
        setShowing] = useState(false);
    let weatherRequest = (e) => {
        setCity(e.target.value);
    }
    let send = (event) => {
        event.preventDefault();
        axios
            .get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=abce00147b0566534c2aa99ed56b6cd5")
            .then((response) => {
                console.log(response)
                console.log(response.data.weather[0].main)
                if (response.data.weather[0].main === 'Rain') {
                    setColor({boxShadow: '0 0 200px blue'});

                } else if (response.data.weather[0].main === 'Snow') {
                    setColor({boxShadow: '0 0 200px white'});

                } else if (response.data.weather[0].main === 'Mist') {
                    setColor({boxShadow: '0 0 200px #566a77'});

                } else if (response.data.weather[0].main === 'Clouds') {
                    setColor({boxShadow: '0 0 200px #624d77'});

                } else if (response.data.weather[0].main === 'Clear') {
                    setColor({boxShadow: '0 0 200px yellow'});
                }

                console.log(response.data.sys.country)
                setDisplay({town: response.data.name, country: response.data.sys.country, weather: response.data.weather[0].main})
                let newtemp = 0;
                let inter = setInterval(() => {
                    if (Math.round(response.data.main.temp - 273, 15) > 0) {
                        newtemp++;
                    } else {
                        newtemp--;
                    }
                    if (newtemp >= Math.round(response.data.main.temp - 273, 15) * 20 && newtemp > 0) {
                        clearInterval(inter);
                    } else if (newtemp <= Math.round(response.data.main.temp - 273, 15) * 20 && newtemp < 0) {
                        clearInterval(inter);
                    }
                    setTemp(newtemp)
                }, 10);

            })
            .catch((err) => {
                setDisplay({town: 'No', country: ' results'})
            });
    }
    return (
        <div>
                    <div className='wroo'>
                <div className='cloudsi'>
                    {display.weather === 'Clouds'
                        ? <div>
                                <img alt='404' src={cl} height='100rem' className='cl'/>
                                <img alt='404' src={cl} height='100rem' className='cl1'/>
                                <img alt='404' src={cl} height='100rem' className='cl2'/>
                                <img alt='404' src={cl} height='100rem' className='cl3'/>
                                <img alt='404' src={cl} height='100rem' className='cl4'/>
                                <img alt='404' src={cl} height='100rem' className='cl5'/></div>
                        : display.weather === 'Mist'
                            ? <div>
                                    <img alt='404' src={mist} height='450rem' className='cl6'/>
                                </div>
                            : display.weather === 'Snow'
                                ? <div className='sn'></div>
                                : display.weather === 'Rain'
                                    ? <div>
                                            <div className="rainy-weather">

                                                <img alt='404' src={cl} height='450rem' className='cl7'/>
                                                <div className="droplet droplet1"></div>
                                                <div className="droplet droplet2"></div>
                                                <div className="droplet droplet3"></div>
                                                <div className="droplet droplet4"></div>
                                                <div className="droplet droplet5"></div>
                                                <div className="droplet droplet6"></div>
                                            </div>
                                        </div>
                                    : null}
                </div>
                <form style={color} onSubmit={send} className='wet'>
                    <div className='block'><Term some={Math.round(temp / 20)} val={1200 + temp}/></div>
                    <h1>{Math.round(temp / 20)}</h1>
                    <h1 className='display'>{display.town + ' ' + display.country}
                    </h1>
                    <h1 className='display1'>{display.weather}</h1>
                    <input placeholder="Enter the city" onChange={weatherRequest}/>
                    <div className='getWeather' onClick={send}>Get Weather</div>
                </form>
            </div>
        </div>
    );
}

            `}</pre><pre><h1>CSS</h1>{` .wet {
    width: 400px;
    border-radius: 9px;
    background-color: #313a32;
    padding: 20px;
    display: inline-block;
    overflow: hidden;
    transition: box-shadow 5s ease-out;
}

.wroo {
    text-align: center;
}

.getWeather {
    border-radius: 3px;
    width: 385px;
    padding: 8px;
    display: inline-block;
    background-color: #132647;
}

.getWeather:hover {
    opacity: 0.8;
}


.display {
    text-align: left;
    height: 0;
    font-size: 20px;
    position: relative;
    top: -70px;
    color: white;
    margin: 0;
    padding: 0;
}

.display1 {
    margin: 0;
    padding: 0;
    text-align: left;
    height: 0;
    font-size: 30px;
    position: relative;
    top: -50px;
    left: 40px;
    color: white;
}

.cl {
    position: relative;
    animation: cl 10s infinite;
    opacity: .7;
    top: 50px;
}

.cl1 {
    position: relative;
    animation: cl 8s infinite;
    opacity: .7;
    transform: translateX(150px);
    left: 50px;
    top: 0px;
}

.cl2 {
    position: relative;
    animation: cl 12s infinite;
    opacity: .7;
    top: 30px;
}

.cl3 {
    position: relative;
    animation: cl 10s infinite;
    opacity: .7;
    top: 80px;
}

.cl4 {
    position: relative;
    animation: cl 8s infinite;
    opacity: .7;
    transform: translateX(150px);
    left: 50px;
    top: 90px;
}

.cl5 {
    position: relative;
    animation: cl 12s infinite;
    opacity: .7;
    top: 20px;
}

.cl6 {
    position: relative;
    animation: cl 12s infinite;
    opacity: .5;
    left: 60px;
    top: 110px;
}

.cl7 {
    position: relative;
    animation: cl 12s infinite, opa 5s;
    opacity: .5;
    left: 60px;
    top: -150px;
}

@keyframes cl {
    0% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(10px);
    }

    100% {
        transform: translateY(0px);
    }
}

.cloudsi {
    animation: opa 5s;
    height: 0;
}

@keyframes opa {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}


.rainy-weather {
    left: 300px;
    width: 350px;
    height: 400px;
    position: relative;
}

.cloud-main {
    opacity: .6;
    width: 350px;
    height: 130px;
    border-radius: 100em;
    position: absolute;
    z-index: 100;
    top: 50px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
    background: linear-gradient(#F2F2F2 70%, #E5E5E5);

}

.cloud-center {
    opacity: .6;
    width: 180px;
    height: 180px;
    margin: 0 auto;
    background: #F2F2F2;
    position: absolute;
    border-radius: 100em;
    top: -30px;
    right: 50px;
}

.cloud-left {
    opacity: .7;
    width: 130px;
    height: 130px;
    margin: 0 auto;
    background: #F2F2F2;
    position: absolute;
    border-radius: 100em;
    top: 0;
    right: 160px;
}

.droplet {
    width: 18px;
    height: 35px;
    background: radial-gradient(center, farthest-corner, #A4DDF5, #76CBF1);
    background: -webkit-radial-gradient(center, farthest-corner, #A4DDF5, #76CBF1);
    position: absolute;
    border-radius: 10px 10px 10px 10px / 30px 30px 10px 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.droplet1,
.droplet4 {
    right: 70px;
    top: 100px;
}

.droplet2,
.droplet5 {
    right: 140px;
    top: 130px;
}

.droplet3,
.droplet6 {
    right: 190px;
    top: 100px;
}

.droplet1,
.droplet2,
.droplet3 {
    animation: rain2 linear 1.5s infinite .75s, opa 5s;
}

.droplet4,
.droplet5,
.droplet6 {
    animation: rain linear 1.5s infinite, opa 5s;
}

@keyframes rain {
    0% {
        transform: rotate(30deg) translate(0, 0);
        opacity: 1;
    }

    90% {
        transform: rotate(30deg) translate(0, 130px);
        opacity: 1;
    }

    100% {
        transform: rotate(30deg) translate(0, 140px);
    }
}

@keyframes rain2 {
    0% {
        transform: rotate(30deg) translate(0, 0);
        opacity: 1;
    }

    90% {
        transform: rotate(30deg) translate(0, 130px);
        opacity: 1;
    }

    100% {
        transform: rotate(30deg) translate(0, 140px);
        opacity: 0;
    }
}


.sn:before {
    content: "002745";
    z-index: 9999;
    position: fixed;
    top: 50%;
    left: -50%;
    height: 10px;
    width: 10px;
    background: white;
    border-radius: 50%;
    text-shadow: 0px 0px white, -122vmax 58vmax 2px white, 59vmax -38vmax 0px white, -125vmax -25vmax 2px white, -2vmax 0vmax 2px white, -80vmax 53vmax 3px white, 19vmax -137vmax 0px white, -24vmax 99vmax 0px white, -112vmax 121vmax 0px white, 112vmax 22vmax 3px white, -26vmax -115vmax 1px white, -146vmax 94vmax 3px white, 113vmax -13vmax 3px white, 78vmax -83vmax 0px white, 144vmax 76vmax 3px white, 109vmax -12vmax 1px white, -16vmax 60vmax 2px white, -47vmax -40vmax 3px white, -43vmax -113vmax 3px white, -33vmax -107vmax 2px white, -115vmax -32vmax 1px white, -97vmax 141vmax 0px white, 135vmax 1vmax 2px white, -59vmax 3vmax 1px white, 125vmax 134vmax 2px white, -14vmax -140vmax 1px white, 49vmax -148vmax 2px white, -62vmax -77vmax 1px white, -60vmax 123vmax 2px white, -131vmax 78vmax 0px white, -43vmax 95vmax 2px white, -99vmax 80vmax 2px white, 70vmax 31vmax 3px white, 44vmax -58vmax 0px white, -35vmax -130vmax 0px white, -77vmax 69vmax 3px white, 0vmax 130vmax 1px white, -98vmax 25vmax 2px white, 84vmax -59vmax 2px white, 138vmax -7vmax 1px white, 92vmax -82vmax 1px white, 66vmax -134vmax 3px white, 123vmax -131vmax 3px white, -55vmax -100vmax 0px white, -141vmax 141vmax 2px white, -26vmax 150vmax 2px white, -124vmax -72vmax 2px white, -6vmax -71vmax 1px white, -18vmax 74vmax 1px white, 77vmax -37vmax 0px white, -45vmax -7vmax 3px white, -16vmax 21vmax 3px white, -38vmax 100vmax 1px white, -20vmax 13vmax 3px white, -9vmax -39vmax 2px white, 5vmax 32vmax 0px white, 82vmax 88vmax 1px white, 105vmax 106vmax 2px white, -123vmax -73vmax 0px white, 111vmax 103vmax 1px white, 28vmax 44vmax 3px white, -13vmax -87vmax 0px white, -141vmax -39vmax 2px white, 143vmax -121vmax 3px white, -133vmax 22vmax 0px white, -140vmax -56vmax 2px white, 92vmax -143vmax 0px white, -100vmax 46vmax 2px white, 131vmax -39vmax 2px white, 120vmax 58vmax 1px white, 139vmax -68vmax 1px white, 128vmax 37vmax 0px white, -137vmax -103vmax 1px white, 83vmax -56vmax 0px white, 137vmax 116vmax 2px white, -43vmax 125vmax 0px white, -40vmax -15vmax 2px white, 42vmax 101vmax 2px white, 149vmax -137vmax 3px white, 104vmax -148vmax 0px white, -65vmax 19vmax 2px white, 48vmax 78vmax 3px white, -63vmax 28vmax 1px white, 94vmax -129vmax 1px white, -27vmax 108vmax 0px white, -11vmax 67vmax 1px white, 114vmax 18vmax 2px white, 59vmax 96vmax 1px white, -46vmax -6vmax 1px white, 4vmax 28vmax 0px white, -116vmax -63vmax 1px white, 87vmax -62vmax 2px white, -27vmax 111vmax 1px white, 36vmax -51vmax 3px white, 9vmax -51vmax 3px white, 53vmax -111vmax 0px white, 22vmax -146vmax 0px white, -115vmax -131vmax 2px white, -146vmax 31vmax 0px white, 129vmax 2vmax 0px white, 106vmax 76vmax 2px white, -121vmax 106vmax 2px white, 55vmax -40vmax 1px white, -3vmax 70vmax 1px white, 55vmax -117vmax 1px white, -109vmax 1vmax 2px white, 5vmax 37vmax 0px white, -103vmax -86vmax 1px white, 78vmax 52vmax 3px white, -45vmax -142vmax 0px white, 113vmax -102vmax 3px white, -43vmax 147vmax 3px white, -108vmax 1vmax 1px white, 86vmax -139vmax 2px white, -137vmax -39vmax 0px white, -132vmax 122vmax 3px white, 98vmax -9vmax 3px white, -81vmax -77vmax 1px white, 93vmax 74vmax 3px white, 116vmax -118vmax 3px white, 61vmax -12vmax 0px white, -102vmax 149vmax 3px white, 69vmax 46vmax 0px white, -98vmax -80vmax 2px white, 27vmax 101vmax 2px white, -104vmax 31vmax 0px white, 23vmax 2vmax 1px white, -4vmax 14vmax 0px white, -59vmax 138vmax 1px white, 6vmax -62vmax 2px white, -46vmax 5vmax 2px white, 131vmax 17vmax 3px white, -76vmax -5vmax 3px white, -120vmax 47vmax 2px white, 118vmax -17vmax 1px white, -148vmax 137vmax 1px white, -139vmax -79vmax 2px white, 19vmax -99vmax 2px white, 85vmax 103vmax 3px white, -36vmax 108vmax 1px white, -132vmax -37vmax 0px white, 126vmax 121vmax 3px white, -49vmax -134vmax 2px white, 73vmax 89vmax 2px white, 79vmax -67vmax 2px white, 100vmax -79vmax 3px white, -23vmax 89vmax 3px white, -124vmax 87vmax 0px white, -47vmax -100vmax 1px white, 76vmax 80vmax 3px white, 59vmax -125vmax 3px white, 93vmax -146vmax 2px white, 15vmax -77vmax 2px white, 149vmax 98vmax 1px white, 48vmax 105vmax 3px white, 99vmax 72vmax 1px white, -117vmax -39vmax 1px white, 44vmax 109vmax 1px white, -102vmax -16vmax 2px white, 94vmax 133vmax 3px white, -136vmax 25vmax 0px white, 142vmax 71vmax 3px white, 142vmax -127vmax 1px white, 4vmax -19vmax 3px white, 87vmax 101vmax 1px white, -12vmax 82vmax 0px white, 30vmax -91vmax 0px white, -48vmax 16vmax 3px white, 35vmax -65vmax 0px white, 60vmax -83vmax 2px white, -121vmax 136vmax 1px white, -47vmax 34vmax 3px white, -149vmax -95vmax 0px white, 63vmax 83vmax 2px white, 41vmax -60vmax 3px white, -108vmax 142vmax 2px white, 2vmax -140vmax 3px white, 122vmax -104vmax 2px white, -83vmax 40vmax 3px white, 91vmax -41vmax 2px white, 125vmax 90vmax 3px white, -45vmax 68vmax 1px white, -77vmax 0vmax 3px white, 10vmax -34vmax 3px white, 39vmax 82vmax 2px white, 128vmax 77vmax 0px white, -77vmax 7vmax 2px white, -34vmax -136vmax 0px white, -12vmax -10vmax 0px white, 52vmax -149vmax 3px white, 23vmax 143vmax 0px white, 57vmax 96vmax 1px white, 110vmax 143vmax 3px white, 67vmax 51vmax 2px white, -113vmax -2vmax 1px white, -130vmax 95vmax 3px white, 65vmax -139vmax 2px white, -18vmax 21vmax 3px white, -128vmax 142vmax 0px white, -119vmax 96vmax 3px white, -9vmax 129vmax 0px white, 58vmax 28vmax 1px white, -32vmax -65vmax 1px white, -4vmax 13vmax 2px white, -93vmax 88vmax 2px white, 123vmax -20vmax 2px white, -38vmax -106vmax 2px white, 124vmax 7vmax 2px white, 19vmax 5vmax 3px white, 71vmax 112vmax 3px white, 103vmax -126vmax 1px white, 79vmax -136vmax 0px white, 0vmax -86vmax 1px white, 129vmax -76vmax 0px white, -144vmax -40vmax 0px white, 92vmax 80vmax 0px white, 35vmax 41vmax 0px white, 20vmax 114vmax 1px white, -76vmax -82vmax 0px white, 110vmax 121vmax 3px white, -22vmax -2vmax 0px white, -1vmax 21vmax 1px white, 58vmax 130vmax 3px white, -129vmax 129vmax 1px white, 21vmax -30vmax 1px white, 82vmax 6vmax 2px white, 65vmax 21vmax 1px white, -139vmax 144vmax 0px white, -97vmax 19vmax 0px white, 118vmax -79vmax 1px white, -127vmax 115vmax 1px white, -148vmax -141vmax 1px white, -88vmax -38vmax 2px white, 138vmax -11vmax 3px white, 33vmax -15vmax 0px white, 51vmax 61vmax 0px white, 66vmax 112vmax 2px white, 30vmax 65vmax 0px white, -114vmax 31vmax 2px white, 80vmax -60vmax 3px white, 34vmax 13vmax 1px white, 6vmax 128vmax 2px white, -19vmax 47vmax 3px white, -87vmax -91vmax 2px white, -90vmax -90vmax 1px white, -109vmax -20vmax 3px white, 115vmax -66vmax 1px white, 14vmax -29vmax 3px white, 106vmax 72vmax 0px white, 54vmax 98vmax 3px white, -147vmax -112vmax 3px white, 99vmax 57vmax 3px white, -27vmax 36vmax 3px white, 104vmax -85vmax 2px white, 24vmax 4vmax 2px white, 30vmax -23vmax 0px white, -23vmax 84vmax 0px white, -88vmax 15vmax 2px white, -18vmax 12vmax 2px white, 108vmax -117vmax 3px white, -26vmax 26vmax 1px white, 144vmax -78vmax 2px white, -64vmax -102vmax 1px white, 110vmax -143vmax 3px white, -120vmax 29vmax 2px white, 118vmax 147vmax 1px white, -69vmax -96vmax 1px white, -146vmax 138vmax 3px white, 32vmax -17vmax 3px white, -48vmax -82vmax 2px white, 123vmax 54vmax 3px white, 21vmax 114vmax 2px white, 28vmax 119vmax 1px white, 104vmax -7vmax 2px white, 97vmax 80vmax 2px white, -55vmax 83vmax 1px white, 80vmax -133vmax 0px white, 6vmax -80vmax 1px white, 5vmax -61vmax 0px white, 26vmax 82vmax 3px white, 118vmax 82vmax 0px white, 40vmax 15vmax 3px white, -122vmax -66vmax 2px white, 126vmax -92vmax 3px white, -5vmax 66vmax 2px white, -93vmax -91vmax 0px white, 36vmax 100vmax 3px white, -107vmax -28vmax 1px white, -9vmax 94vmax 3px white, 146vmax 77vmax 0px white, -128vmax -123vmax 1px white, 59vmax 66vmax 1px white, 34vmax -48vmax 2px white, -60vmax 2vmax 3px white, 37vmax 46vmax 3px white, -75vmax -129vmax 1px white, 89vmax 128vmax 1px white, 114vmax 70vmax 1px white, -80vmax 51vmax 2px white, -6vmax 145vmax 3px white, -78vmax 64vmax 3px white;
    animation: snow 100s linear 0s infinite normal;
}

@keyframes snow {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

input#txtName {
    display: block;
    width: 100%;
    padding: 15px;
    border-radius: 4px;
    border: 1px solid #ddd;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.09);
    color: #ed272b;
    font-weight: bold;
    font-size: 24px;
    text-align: center;
}

@media (max-width: 480px) {
    input#txtName {
        font-size: 20px;
    }
}`}</pre>  </div> : null}
            <div className='wroo'>
                <div className='cloudsi'>
                    {display.weather === 'Clouds'
                        ? <div>
                                <img alt='404' src={cl} height='100rem' className='cl'/>
                                <img alt='404' src={cl} height='100rem' className='cl1'/>
                                <img alt='404' src={cl} height='100rem' className='cl2'/>
                                <img alt='404' src={cl} height='100rem' className='cl3'/>
                                <img alt='404' src={cl} height='100rem' className='cl4'/>
                                <img alt='404' src={cl} height='100rem' className='cl5'/></div>
                        : display.weather === 'Mist'
                            ? <div>
                                    <img alt='404' src={mist} height='450rem' className='cl6'/>
                                </div>
                            : display.weather === 'Snow'
                                ? <div className='sn'></div>
                                : display.weather === 'Rain'
                                    ? <div>
                                            <div className="rainy-weather">

                                                <img alt='404' src={cl} height='450rem' className='cl7'/>
                                                <div className="droplet droplet1"></div>
                                                <div className="droplet droplet2"></div>
                                                <div className="droplet droplet3"></div>
                                                <div className="droplet droplet4"></div>
                                                <div className="droplet droplet5"></div>
                                                <div className="droplet droplet6"></div>
                                            </div>
                                        </div>
                                    : null}
                </div>
                <form style={color} onSubmit={send} className='wet'>
                    <div className='block'><Term some={Math.round(temp / 20)} val={1200 + temp}/></div>
                    <h1>{Math.round(temp / 20)}</h1>
                    <h1 className='display'>{display.town + ' ' + display.country}
                    </h1>
                    <h1 className='display1'>{display.weather}</h1>
                    <input placeholder="Enter the city" onChange={weatherRequest}/>
                    <div className='getWeather' onClick={send}>Get Weather</div>
                </form>
            </div>
        </div>
    );
}