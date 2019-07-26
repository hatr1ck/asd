import React, {Component} from 'react';
import './game.css';
import {Link} from 'react-router-dom';
import home from '../Home.svg';
import code from '../code.svg';


class Works extends Component {
    state = {
        amount: 30,
        color: 'transparent',
        wind: null,
        showing: false
    }

    componentDidMount() {
        this.ctx = this
            .refs
            .canvas
            .getContext('2d');
        this.init()
        this.refs.canvas.width = window.innerWidth / 100 * 84;
        this.refs.canvas.height = window.innerHeight;
        window.addEventListener('resize', this.handleResize)
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }
    handleResize = () => {
        this.setState({
            wind: window.innerWidth / 100 * 84
        })
        this.refs.canvas.width = this.state.wind;
    }

    init = (e) => {
        let ctx = this
            .refs
            .canvas
            .getContext('2d');
        // let .0 = {     x: 0,     y: 0 }
        // this.refs.canvas.addEventListener('mousemove', (e) => {     mouse.x =
        // e.clientX - this.refs.canvas.getBoundingClientRect().left;     mouse.y =
        // e.clientY - this.refs.canvas.getBoundingClientRect().top; })

        function rotate(velocity, angle) {
            const rotatedVelocities = {
                x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
                y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
            };

            return rotatedVelocities;
        }

        function resolveCollision(particle, otherParticle) {
            const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
            const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;
            const xDist = otherParticle.x - particle.x;
            const yDist = otherParticle.y - particle.y;
            particle.color = 'rgba(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() + ')';
            otherParticle.color = 'rgba(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() + ')';
            // Prevent accidental overlap of particles
            if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {

                // Grab angle between the two colliding particles
                const angle = -Math.atan2(otherParticle.y - particle.y, otherParticle.x - particle.x);

                // Store mass in var for better readability in collision equation
                const m1 = particle.mass;
                const m2 = otherParticle.mass;

                // Velocity before equation
                const u1 = rotate(particle.velocity, angle);
                const u2 = rotate(otherParticle.velocity, angle);

                // Velocity after 1d collision equation
                const v1 = {
                    x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2),
                    y: u1.y
                };
                const v2 = {
                    x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2),
                    y: u2.y
                };

                // Final velocity after rotating axis back to original location
                const vFinal1 = rotate(v1, -angle);
                const vFinal2 = rotate(v2, -angle);

                // Swap particle velocities for realistic bounce effect
                particle.velocity.x = vFinal1.x;
                particle.velocity.y = vFinal1.y;

                otherParticle.velocity.x = vFinal2.x;
                otherParticle.velocity.y = vFinal2.y;
            }
        }

        function Circle(x, y, radius) {
            this.x = x;
            this.y = y;
            this.velocity = {
                x: (Math.random() - 0.5) * 3,
                y: (Math.random() - 0.5) * 3
            }
            this.radius = radius;
            this.friction = 0.4;
            this.mass = 1;
            this.color = 'rgba(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() + ')';

            this.draw = () => {
                ctx.beginPath()
                ctx.fillStyle = this.color;
                ctx.arc(this.x, this.y, this.radius, Math.PI * 2, false)
                ctx.fill();
            }

            this.update = (arr) => {
                this.x += this.velocity.x;
                this.y += this.velocity.y;

                //  bounce from the sides
                if (this.x + this.radius + this.velocity.x > window.innerWidth / 100 * 84 || this.x - this.radius < 0) {
                    this.velocity.x = -this.velocity.x;
                }

                // bounce from the top/bottom
                if (this.y + this.radius + this.velocity.y > window.innerHeight || this.y - this.radius < 0) {
                    this.velocity.y = -this.velocity.y;
                } else {
                    //this.velocity.y += 1;            //gravity
                }
                //collision
                for (let i = 0; i < arr.length; i++) {
                    if (this === arr[i]) {
                        continue;
                    }
                    if (distance(this.x, this.y, arr[i].x, arr[i].y) - this.radius * 2 < 0) {

                        resolveCollision(this, arr[i])

                    }
                }

                // hover effect if (this.radius < 50 && mouse.x - this.x < 50 && mouse.x - this.x
                // > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {     this.color =
                // 'rgba(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' +
                // Math.random() * 255 + ',' + Math.random() + ')'; } else if(this.radius >100){
                //   this.radius-=1; } slows down the ball if it fall on the ground
                if (Math.floor(this.y) === Math.floor(window.innerHeight - this.radius)) {
                    if (Math.round(this.velocity.x) === 0) {
                        this.velocity.x = 0;
                    }
                    if (this.velocity.x > 0) {
                        this.velocity.x -= 0.1;
                    } else if (this.velocity.x < 0) {
                        this.velocity.x += 0.1;
                    }
                }
                this.draw()
            }
        }
        let arr = [];

        function distance(x1, y1, x2, y2) {
            let xDist = x2 - x1;
            let yDist = y2 - y1;
            return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
        }

        for (let i = 0; i < this.state.amount; i++) {
            let radius = 30;
            let x = Math.random() * ((window.innerWidth / 100 * 84 - radius) - (radius * 2)) + (radius * 2); //Math.random() * (10 - 9) + 9
            let y = Math.random() * ((window.innerHeight - radius) - (radius * 2)) + (radius * 2);
            if (i !== 0) {
                for (let j = 0; j < arr.length; j++) {
                    if (distance(x, y, arr[j].x, arr[j].y) - radius * 2 < 0) {
                        x = Math.random() * ((window.innerWidth / 100 * 84 - radius) - (radius * 2)) + (radius * 2); //Math.random() * (10 - 9) + 9
                        y = Math.random() * ((window.innerHeight - radius) - (radius * 2)) + (radius * 2);
                        j = -1;
                    }
                }
            }
            arr.push(new Circle(x, y, radius));
        }
        let animation = () => {
            requestAnimationFrame(animation);
            this
                .ctx
                .clearRect(0, 0, window.innerWidth, window.innerHeight)
            for (let i = 0; i < arr.length; i++) {
                arr[i].update(arr)
            }
        }
        animation()
    }

    onAmountChange = (e, index, value) => {
        this.setState({
            amount: value
        }, () => this.init());
    }
    onColorChange = (e, index, value) => {
        this.setState({color: value});
    }
    render() {
        return (
            <div>
                <Link to='/'><img alt='404' src={home} height='100rem' className='imge'/></Link>
                <img alt='404' src={code} height='100rem' className='imge' onClick={()=>this.setState({showing: !this.state.showing})} />
 {this.state.showing ?  <div className='codewra'>
                <pre><h1>React</h1>{`
import React, {Component} from 'react';
import './game.css';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Link} from 'react-router-dom';

class Works extends Component {
    state = {
        amount: 30,
        color: 'transparent',
        wind: null,
        showing: true
    }

    componentDidMount() {
        this.ctx = this
            .refs
            .canvas
            .getContext('2d');
        this.init()
        this.refs.canvas.width = window.innerWidth / 100 * 84;
        this.refs.canvas.height = window.innerHeight;
        window.addEventListener('resize', this.handleResize)
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }
    handleResize = () => {
        this.setState({
            wind: window.innerWidth / 100 * 84
        })
        this.refs.canvas.width = this.state.wind;
    }

    init = (e) => {
        let ctx = this
            .refs
            .canvas
            .getContext('2d');
        // let .0 = {     x: 0,     y: 0 }
        // this.refs.canvas.addEventListener('mousemove', (e) => {     mouse.x =
        // e.clientX - this.refs.canvas.getBoundingClientRect().left;     mouse.y =
        // e.clientY - this.refs.canvas.getBoundingClientRect().top; })

        function rotate(velocity, angle) {
            const rotatedVelocities = {
                x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
                y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
            };

            return rotatedVelocities;
        }

        function resolveCollision(particle, otherParticle) {
            const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
            const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;
            const xDist = otherParticle.x - particle.x;
            const yDist = otherParticle.y - particle.y;
            particle.color = 'rgba(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() + ')';
            otherParticle.color = 'rgba(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() + ')';
            // Prevent accidental overlap of particles
            if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {

                // Grab angle between the two colliding particles
                const angle = -Math.atan2(otherParticle.y - particle.y, otherParticle.x - particle.x);

                // Store mass in var for better readability in collision equation
                const m1 = particle.mass;
                const m2 = otherParticle.mass;

                // Velocity before equation
                const u1 = rotate(particle.velocity, angle);
                const u2 = rotate(otherParticle.velocity, angle);

                // Velocity after 1d collision equation
                const v1 = {
                    x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2),
                    y: u1.y
                };
                const v2 = {
                    x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2),
                    y: u2.y
                };

                // Final velocity after rotating axis back to original location
                const vFinal1 = rotate(v1, -angle);
                const vFinal2 = rotate(v2, -angle);

                // Swap particle velocities for realistic bounce effect
                particle.velocity.x = vFinal1.x;
                particle.velocity.y = vFinal1.y;

                otherParticle.velocity.x = vFinal2.x;
                otherParticle.velocity.y = vFinal2.y;
            }
        }

        function Circle(x, y, radius) {
            this.x = x;
            this.y = y;
            this.velocity = {
                x: (Math.random() - 0.5) * 3,
                y: (Math.random() - 0.5) * 3
            }
            this.radius = radius;
            this.friction = 0.4;
            this.mass = 1;
            this.color = 'rgba(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() + ')';

            this.draw = () => {
                ctx.beginPath()
                ctx.fillStyle = this.color;
                ctx.arc(this.x, this.y, this.radius, Math.PI * 2, false)
                ctx.fill();
            }

            this.update = (arr) => {
                this.x += this.velocity.x;
                this.y += this.velocity.y;

                //  bounce from the sides
                if (this.x + this.radius + this.velocity.x > window.innerWidth / 100 * 84 || this.x - this.radius < 0) {
                    this.velocity.x = -this.velocity.x;
                }

                // bounce from the top/bottom
                if (this.y + this.radius + this.velocity.y > window.innerHeight || this.y - this.radius < 0) {
                    this.velocity.y = -this.velocity.y;
                } else {
                    //this.velocity.y += 1;            //gravity
                }
                //collision
                for (let i = 0; i < arr.length; i++) {
                    if (this === arr[i]) {
                        continue;
                    }
                    if (distance(this.x, this.y, arr[i].x, arr[i].y) - this.radius * 2 < 0) {

                        resolveCollision(this, arr[i])

                    }
                }

                // hover effect if (this.radius < 50 && mouse.x - this.x < 50 && mouse.x - this.x
                // > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {     this.color =
                // 'rgba(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' +
                // Math.random() * 255 + ',' + Math.random() + ')'; } else if(this.radius >100){
                //   this.radius-=1; } slows down the ball if it fall on the ground
                if (Math.floor(this.y) === Math.floor(window.innerHeight - this.radius)) {
                    if (Math.round(this.velocity.x) === 0) {
                        this.velocity.x = 0;
                    }
                    if (this.velocity.x > 0) {
                        this.velocity.x -= 0.1;
                    } else if (this.velocity.x < 0) {
                        this.velocity.x += 0.1;
                    }
                }
                this.draw()
            }
        }
        let arr = [];

        function distance(x1, y1, x2, y2) {
            let xDist = x2 - x1;
            let yDist = y2 - y1;
            return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
        }

        for (let i = 0; i < this.state.amount; i++) {
            let radius = 30;
            let x = Math.random() * ((window.innerWidth / 100 * 84 - radius) - (radius * 2)) + (radius * 2); //Math.random() * (10 - 9) + 9
            let y = Math.random() * ((window.innerHeight - radius) - (radius * 2)) + (radius * 2);
            if (i !== 0) {
                for (let j = 0; j < arr.length; j++) {
                    if (distance(x, y, arr[j].x, arr[j].y) - radius * 2 < 0) {
                        x = Math.random() * ((window.innerWidth / 100 * 84 - radius) - (radius * 2)) + (radius * 2); //Math.random() * (10 - 9) + 9
                        y = Math.random() * ((window.innerHeight - radius) - (radius * 2)) + (radius * 2);
                        j = -1;
                    }
                }
            }
            arr.push(new Circle(x, y, radius));
        }
        let animation = () => {
            requestAnimationFrame(animation);
            this
                .ctx
                .clearRect(0, 0, window.innerWidth, window.innerHeight)
            for (let i = 0; i < arr.length; i++) {
                arr[i].update(arr)
            }
        }
        animation()
    }

    onAmountChange = (e, index, value) => {
        this.setState({
            amount: value
        }, () => this.init());
    }
    onColorChange = (e, index, value) => {
        this.setState({color: value});
    }
    render() {
        return (
            <div>
                <div
                    style={{
                    width: window.innerWidth / 100 * 84 + 3
                }}
                    className='menu'>
                    <h4>My canvas experiment that have no ending purpose. Basically it's a bunch of
                        circles that change collor when they collide.</h4>
                    <MuiThemeProvider>
                        <SelectField
                            floatingLabelText="Amount"
                            value={this.state.amount}
                            onChange={this.onAmountChange}
                            inputProps={{
                            fontSize: '150px'
                        }}>
                            <MenuItem value={10} primaryText="10"/>
                            <MenuItem value={20} primaryText="20"/>
                            <MenuItem value={30} primaryText="30"/>
                            <MenuItem value={50} primaryText="50"/>
                            <MenuItem
                                value={Math.round((window.innerHeight / 60) * (window.innerWidth / 100 * 84 / 60) / 2)}
                                primaryText='Max'/>
                        </SelectField>
                        <SelectField
                            floatingLabelText="Background"
                            value={this.state.color}
                            onChange={this.onColorChange}>
                            <MenuItem value={"black"} primaryText="black"/>
                            <MenuItem value={"white"} primaryText="white"/>
                            <MenuItem value={"pink"} primaryText="pink"/>
                            <MenuItem value={"green"} primaryText="green"/>
                            <MenuItem value={"transparent"} primaryText="transparent"/>
                        </SelectField>
                    </MuiThemeProvider>
                </div>
                <canvas
                    style={{
                    backgroundColor: this.state.color
                }}
                    ref="canvas"/>
            </div>

        );
    }
}

export default Works;
                    `}</pre><pre><h1>CSS</h1>{`
canvas{
    border: 2px solid #2E3642;
    margin: 0;
    box-shadow: 0 0 100px rgba(0,0,0,0.5);
}
.menu{
    font-family: Comic Sans MS;
    margin: 0;
    background: #2E3642;
    display: block;
    color:white;
    padding: 20px;
    box-shadow: 0 0 100px rgba(0,0,0,0.5);
}
h2{
    margin: 0;
    margin-bottom: 0;
}`}</pre>  </div> : null}
                <div
                    style={{
                    width: window.innerWidth / 100 * 84 + 3
                }}
                    className='menu'>
                    <h4>My canvas experiment that have no ending purpose. Basically it's a bunch of
                        circles that change collor when they collide.</h4>
<div className="dropdown">
  <div>Background</div>
   <div className="dropdown-content">
    <div onClick={()=>{this.setState({color: 'white'})}}>white</div>
    <div onClick={()=>{this.setState({color: 'black'})}}>black</div>
    <div onClick={()=>{this.setState({color: 'pink'})}}>pink</div>
   </div>
</div>
<div className="dropdown">
  <div>Amount</div>
   <div className="dropdown-content">
    <div onClick={()=>{this.setState({amount: 10})}}>10</div>
    <div onClick={()=>{this.setState({amount: 20})}}>20</div>
    <div onClick={()=>{this.setState({amount: 30})}}>30</div>
   </div>
</div>
                <canvas
                    style={{
                    backgroundColor: this.state.color
                }}
                    ref="canvas"/>
            </div>       </div>

        );
    }
}

export default Works;